const assert = require("node:assert/strict");

process.env.SPOTIFY_CLIENT_ID = "test-client";
process.env.SPOTIFY_CLIENT_SECRET = "test-secret";
process.env.SPOTIFY_REDIRECT_URI = "https://example.com/callback";
process.env.SPOTIFY_REFRESH_TOKEN = "test-refresh";

const spotify = require("../lib/spotify");
const handler = require("../api/listening");

const track = (id, name) => ({
  id,
  type: "track",
  name,
  artists: [{ name: "Test Artist" }],
  album: {
    name: "Test Album",
    images: [{ url: "https://example.com/art.jpg", width: 300, height: 300 }],
    external_urls: { spotify: "https://open.spotify.com/album/test" },
  },
  duration_ms: 240000,
  external_urls: { spotify: "https://open.spotify.com/track/" + id },
});

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...headers },
  });
}

function createResponse() {
  return {
    headers: {},
    statusCode: 0,
    body: null,
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
    end(payload) {
      this.body = payload ? JSON.parse(payload) : null;
    },
  };
}

async function runScenario(currentResponse, view = "combined") {
  spotify.clearAccessToken();
  const requestedUrls = [];
  global.fetch = async (url) => {
    const href = String(url);
    requestedUrls.push(href);

    if (href.includes("accounts.spotify.com/api/token")) {
      return jsonResponse({ access_token: "test-access", expires_in: 3600 });
    }
    if (href.endsWith("/v1/me/player/currently-playing")) {
      return currentResponse;
    }
    if (href.includes("/v1/me/player/recently-played")) {
      return jsonResponse({
        items: [
          { track: track("recent-1", "Recent One"), played_at: "2026-08-25T10:00:00Z" },
          { track: track("recent-1", "Recent One"), played_at: "2026-08-25T09:00:00Z" },
          { track: track("recent-2", "Recent Two"), played_at: "2026-08-25T08:00:00Z" },
        ],
      });
    }

    throw new Error("Unexpected URL: " + href);
  };

  const response = createResponse();
  await handler({ method: "GET", query: { view } }, response);
  response.requestedUrls = requestedUrls;
  return response;
}

(async () => {
  const playing = await runScenario(jsonResponse({
    is_playing: true,
    progress_ms: 60000,
    item: track("current", "Live Song"),
  }));

  assert.equal(playing.statusCode, 200);
  assert.equal(playing.body.status, "playing");
  assert.equal(playing.body.source, "currently_playing");
  assert.equal(playing.body.track.name, "Live Song");
  assert.equal(playing.body.progressMs, 60000);
  assert.equal(playing.body.tracks.length, 2);
  assert.equal(playing.body.tracks[0].plays, 2);
  assert.equal(playing.headers["cache-control"], "public, max-age=0, must-revalidate");
  assert.match(playing.headers["vercel-cdn-cache-control"], /s-maxage=5/);

  const fallback = await runScenario(new Response(null, { status: 204 }));

  assert.equal(fallback.statusCode, 200);
  assert.equal(fallback.body.status, "recent");
  assert.equal(fallback.body.source, "recently_played");
  assert.equal(fallback.body.track.name, "Recent One");
  assert.equal(fallback.body.tracks.length, 2);

  const currentOnly = await runScenario(jsonResponse({
    is_playing: true,
    progress_ms: 90000,
    item: track("current", "Live Song"),
  }), "current");

  assert.equal(currentOnly.body.status, "playing");
  assert.equal(currentOnly.body.progressMs, 90000);
  assert.equal(currentOnly.body.tracks.length, 0);
  assert.equal(
    currentOnly.requestedUrls.some((url) => url.includes("recently-played")),
    false,
  );

  const currentOffline = await runScenario(new Response(null, { status: 204 }), "current");

  assert.equal(currentOffline.statusCode, 200);
  assert.equal(currentOffline.body.status, "offline");
  assert.equal(currentOffline.body.source, "currently_playing");

  const rateLimited = await runScenario(jsonResponse(
    { error: { status: 429, message: "Too many requests" } },
    429,
    { "retry-after": "42" },
  ), "current");

  assert.equal(rateLimited.statusCode, 429);
  assert.equal(rateLimited.body.status, "rate_limited");
  assert.equal(rateLimited.headers["retry-after"], "42");
  assert.equal(rateLimited.headers["cache-control"], "no-store");

  const recentOnly = await runScenario(new Response(null, { status: 204 }), "recent");

  assert.equal(recentOnly.body.status, "recent");
  assert.equal(recentOnly.body.tracks.length, 2);
  assert.equal(
    recentOnly.requestedUrls.some((url) => url.endsWith("currently-playing")),
    false,
  );
  assert.match(recentOnly.headers["vercel-cdn-cache-control"], /s-maxage=45/);

  process.stdout.write("Spotify live, current-only and recent fallback scenarios passed.\n");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
