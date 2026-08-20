import { readFile } from "node:fs/promises";
import { homedir } from "node:os";

const domain = "costperlease.com";
const credentials = await readFile(`${homedir()}/.creds`, "utf8");
const token = credentials.match(/^CLOUDFLARE_API_TOKEN=(.+)$/m)?.[1]?.trim();

if (!token) throw new Error("CLOUDFLARE_API_TOKEN was not found in ~/.creds");

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function cloudflare(path, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: { ...headers, ...options.headers },
  });
  const body = await response.json();
  if (!response.ok || !body.success) {
    throw new Error(`Cloudflare API ${response.status}: ${JSON.stringify(body.errors)}`);
  }
  return body.result;
}

const zones = await cloudflare(`/zones?name=${domain}`);
if (zones.length !== 1) throw new Error(`Expected one Cloudflare zone for ${domain}`);
const zoneId = zones[0].id;
const records = await cloudflare(`/zones/${zoneId}/dns_records?per_page=100`);
const relevant = records.filter(
  (record) => record.name === domain || record.name === `www.${domain}`,
);

if (!process.argv.includes("--apply")) {
  console.log(
    JSON.stringify(
      relevant.map(({ id, name, type, content, proxied, ttl }) => ({
        id,
        name,
        type,
        content,
        proxied,
        ttl,
      })),
      null,
      2,
    ),
  );
  process.exit(0);
}

const desired = [
  ...[
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
  ].map((content) => ({ type: "A", name: domain, content })),
  { type: "CNAME", name: `www.${domain}`, content: "amitrathore.github.io" },
];

const conflicts = relevant.filter(
  (record) =>
    !desired.some(
      (item) =>
        item.type === record.type &&
        item.name === record.name &&
        item.content.replace(/\.$/, "") === record.content.replace(/\.$/, ""),
    ),
);

if (conflicts.length) {
  throw new Error(
    `Refusing to overwrite existing root/www records: ${JSON.stringify(
      conflicts.map(({ name, type, content }) => ({ name, type, content })),
    )}`,
  );
}

for (const item of desired) {
  const exists = relevant.some(
    (record) =>
      record.type === item.type &&
      record.name === item.name &&
      record.content.replace(/\.$/, "") === item.content,
  );
  if (exists) continue;

  await cloudflare(`/zones/${zoneId}/dns_records`, {
    method: "POST",
    body: JSON.stringify({
      ...item,
      ttl: 300,
      proxied: false,
      comment: "GitHub Pages for Cost Per Lease",
    }),
  });
}

console.log(JSON.stringify({ configured: true, domain, records: desired.length }));
