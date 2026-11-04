const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const cvRoot = path.resolve(__dirname, "..");
const config = JSON.parse(fs.readFileSync(path.join(cvRoot, "vercel.json"), "utf8"));
const expectedRoutes = ["/analytics", "/analytics/", "/analytics/:path*"];
const rules = new Map((config.headers || []).map(rule => [rule.source, rule.headers]));
const headers = Object.fromEntries((rules.get("/analytics/") || []).map(entry => [entry.key.toLowerCase(), entry.value]));

test("security policy covers the real dashboard URL and its static assets", () => {
  assert.deepEqual([...rules.keys()].sort(), [...expectedRoutes].sort());
  for (const route of expectedRoutes) {
    const byName = Object.fromEntries((rules.get(route) || []).map(entry => [entry.key.toLowerCase(), entry.value]));
    assert.deepEqual(byName, headers, "inconsistent headers for " + route);
  }
  assert.equal(headers["x-frame-options"], "DENY");
  assert.equal(headers["cache-control"], "no-store");
  assert.equal(headers["referrer-policy"], "no-referrer");
  assert.equal(headers["x-content-type-options"], "nosniff");
});

test("analytics dashboard CSP restricts code and outbound connections", () => {
  const policy = headers["content-security-policy"];
  assert.ok(policy);
  assert.match(policy, /default-src 'none'/);
  assert.match(policy, /script-src 'self'/);
  assert.match(policy, /style-src 'self'/);
  assert.match(policy, /connect-src https:\/\/fplengine-web\.vercel\.app/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /form-action 'self'/);
  assert.match(policy, /base-uri 'none'/);
  assert.doesNotMatch(policy, /unsafe-inline|unsafe-eval|\*/);
});

test("current dashboard uses only local script and stylesheet assets", () => {
  const html = fs.readFileSync(path.join(cvRoot, "analytics", "index.html"), "utf8");
  assert.doesNotMatch(html, /<script(?![^>]*\bsrc=)[^>]*>/i);
  assert.doesNotMatch(html, /<style\b/i);
  assert.match(html, /src="dashboard\.js/);
  assert.match(html, /href="styles\.css/);
});
