import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Cost Per Lease publication", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Cost Per Lease — The New Economics of Occupancy<\/title>/i);
  assert.match(html, /Measure what/);
  assert.match(html, /Profitable occupancy is/);
  assert.match(html, /Occupancy Intelligence/);
  assert.match(html, /The open book/);
  assert.match(html, /tally\.so\/embed\/Zjbee0/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders the author and disclosure architecture", async () => {
  const [authorResponse, disclosureResponse] = await Promise.all([
    render("/author/"),
    render("/disclosure/"),
  ]);

  assert.equal(authorResponse.status, 200);
  assert.equal(disclosureResponse.status, 200);

  const [author, disclosure] = await Promise.all([
    authorResponse.text(),
    disclosureResponse.text(),
  ]);

  assert.match(author, /co-founder and CTO of/);
  assert.match(author, /Leaser AI/);
  assert.match(author, /linkedin\.com\/in\/amitrathore/);
  assert.match(disclosure, /Editorial independence/);
  assert.match(disclosure, /commercial company/);
});
