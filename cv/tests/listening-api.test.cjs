const assert = require("node:assert/strict");

process.env.SPOTIFY_CLIENT_ID = "test-client";
process.env.SPOTIFY_CLIENT_SECRET = "test-secret";
process.env.SPOTIFY_REDIRECT_URI = "https://example.com/callback";
process.env.SPOTIFY_REFRESH_TOKEN = "test-refresh";

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
  // Each scenario represents an independent function instance. Warm-instance
  // deduplication/cooldowns are exercised through HTTP in spotify-flow.e2e.cjs.
  delete require.cache[require.resolve("../lib/spotify")];
  delete require.cache[require.resolve("../api/listening")];
  const spotify = require("../lib/spotify");
  const handler = require("../api/listening");
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
  assert.match(playing.headers["vercel-cdn-cache-control"], /s-maxage=10/);

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

  // A real warm-instance idle -> playing transition must become observable
  // within twenty seconds, while concurrent visitors still share upstream work.
  const realNow = Date.now;
  try {
    let now = realNow(); Date.now = () => now;
    const idle = await runScenario(new Response(null, {status: 204}));
    const warmHandler = require("../api/listening");
    const fixtureFetch = global.fetch;
    let freshPlaybackCalls = 0;
    global.fetch = async url => {
      if (String(url).endsWith("/v1/me/player/currently-playing")) {
        freshPlaybackCalls += 1;
        return jsonResponse({is_playing: true, progress_ms: 10000,
          item: track("newly-started", "Newly Started Song")});
      }
      return fixtureFetch(url);
    };
    assert.ok(idle.body.nextCheckAt <= now + 20000);
    now += 19999;
    const cached = createResponse();
    await warmHandler({method: "GET", query: {}}, cached);
    assert.equal(cached.body.status, "recent");
    assert.equal(freshPlaybackCalls, 0);
    now += 2;
    const visitors = await Promise.all(Array.from({length: 8}, async () => {
      const response = createResponse();
      await warmHandler({method: "GET", query: {}}, response);
      return response;
    }));
    assert.ok(visitors.every(r => r.body.status === "playing" && r.body.track.name === "Newly Started Song"));
    assert.equal(freshPlaybackCalls, 1);
    assert.equal(idle.requestedUrls.filter(url => url.includes("recently-played")).length, 1);
  } finally { Date.now = realNow; }

  const rateLimited = await runScenario(jsonResponse(
    { error: { status: 429, message: "Too many requests" } },
    429,
    { "retry-after": "42" },
  ), "current");

  // Public metadata states use HTTP 200 so Vercel can cache the cooldown.
  assert.equal(rateLimited.statusCode, 200);
  assert.equal(rateLimited.body.status, "rate_limited");
  assert.equal(rateLimited.headers["retry-after"], "42");
  assert.equal(rateLimited.headers["cache-control"], "public, max-age=0, must-revalidate");
  assert.match(rateLimited.headers["vercel-cdn-cache-control"], /s-maxage=42/);

  // A slow or failed history request must never hide an available live song.
  delete require.cache[require.resolve("../api/listening")];
  delete require.cache[require.resolve("../lib/spotify")];
  const fixtureFetch = global.fetch;
  let finishHistory;
  global.fetch = async url => {
    if (String(url).includes('recently-played')) return new Promise(resolve=>finishHistory=resolve);
    if (String(url).includes('currently-playing')) return jsonResponse({is_playing:true,progress_ms:10000,item:track('fast','Current Song')});
    return fixtureFetch(url);
  };
  const fast = createResponse();
  const start = performance.now();
  await require('../api/listening')({method:'GET',query:{}},fast);
  assert.equal(fast.body.track.name,'Current Song');
  assert.ok(performance.now()-start<1000,'History must not block live playback');
  finishHistory(jsonResponse({error:{status:500}},500));
  await new Promise(resolve=>setImmediate(resolve));

  const recentOnly = await runScenario(new Response(null, { status: 204 }), "recent");

  assert.equal(recentOnly.body.status, "recent");
  assert.equal(recentOnly.body.tracks.length, 2);
  assert.equal(
    recentOnly.requestedUrls.some((url) => url.endsWith("currently-playing")),
    false,
  );
  assert.match(recentOnly.headers["vercel-cdn-cache-control"], /s-maxage=900/);

  process.stdout.write("Spotify live, current-only and recent fallback scenarios passed.\n");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
