import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { randomUUID } from "node:crypto";

const credentials = await readFile(`${homedir()}/.creds`, "utf8");
const token = credentials.match(/^TALLY_SO_API_KEY=(.+)$/m)?.[1]?.trim();

if (!token) {
  throw new Error("TALLY_SO_API_KEY was not found in ~/.creds");
}

const block = (type, payload, groupType = type, groupUuid = randomUUID()) => ({
  uuid: randomUUID(),
  type,
  groupUuid,
  groupType,
  payload,
});

const roleGroup = randomUUID();
const roles = [
  "Asset owner / investor",
  "Operator / property manager",
  "Marketing or leasing leader",
  "Technology or data partner",
  "Researcher, media, or other",
];

const blocks = [
  block(
    "FORM_TITLE",
    {
      title: "Join the Profitable Occupancy Briefing",
      html: "Join the Profitable Occupancy Briefing",
      button: { label: "Join the briefing" },
    },
    "TEXT",
  ),
  block(
    "TEXT",
    {
      html: "Get early access to <b>Cost Per Lease</b>, the CPL Standard, benchmark research, and practical tools for creating more profitable occupancy.",
    },
    "TEXT",
  ),
  block("TITLE", { html: "Full name" }, "QUESTION"),
  block("INPUT_TEXT", { isRequired: true, placeholder: "Your name" }),
  block("TITLE", { html: "Work email" }, "QUESTION"),
  block("INPUT_EMAIL", {
    isRequired: true,
    placeholder: "you@company.com",
  }),
  block("TITLE", { html: "Which best describes you?" }, "QUESTION"),
  ...roles.map((text, index) => ({
    uuid: randomUUID(),
    type: "DROPDOWN_OPTION",
    groupUuid: roleGroup,
    groupType: "DROPDOWN",
    payload: {
      index,
      isFirst: index === 0,
      isLast: index === roles.length - 1,
      text,
    },
  })),
  block("TITLE", { html: "Organization" }, "QUESTION"),
  block("INPUT_TEXT", {
    isRequired: false,
    placeholder: "Company or organization",
  }),
  block(
    "TITLE",
    { html: "What would make Cost Per Lease most useful to you?" },
    "QUESTION",
  ),
  block("TEXTAREA", {
    isRequired: false,
    placeholder: "Benchmarks, calculator, book, operating playbooks…",
  }),
];

const response = await fetch("https://api.tally.so/forms", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "tally-version": "2025-02-01",
  },
  body: JSON.stringify({
    status: "PUBLISHED",
    blocks,
    settings: {
      language: "en",
      hasProgressBar: true,
      hasPartialSubmissions: false,
    },
  }),
});

const result = await response.json();
if (!response.ok) {
  throw new Error(`Tally API ${response.status}: ${JSON.stringify(result)}`);
}

console.log(JSON.stringify({ id: result.id, name: result.name, status: result.status }));
