const {
  clearAccessToken,
  getAccessToken,
  spotifyRequest,
} = require("../lib/spotify");

// Current playback is user-specific, fast-changing state. Never let the browser,
// Vercel CDN, or an intermediary reuse it. Recent history can be cached briefly.
const LIVE_CACHE = "no-store";
const RECENT_EDGE_CACHE = "public, s-maxage=30, stale-while-revalidate=30";

function send(response, status, payload, cachePolicy = LIVE_CACHE, retryAfter) {
  response.status(status);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");

  if (cachePolicy === "no-store") {
    response.setHeader("Cache-Control", "private, no-store, no-cache, max-age=0, must-revalidate");
    response.setHeader("CDN-Cache-Control", "no-store");
    response.setHeader("Vercel-CDN-Cache-Control", "no-store");
    response.setHeader("Pragma", "no-cache");
    response.setHeader("Expires", "0");
  } else {
    response.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
    response.setHeader("Vercel-CDN-Cache-Control", cachePolicy);
  }

  if (retryAfter) response.setHeader("Retry-After", String(retryAfter));
  response.end(JSON.stringify(payload));
}

function imageFrom(images) {
  return Array.isArray(images) && images.length
    ? images.find((image) => image?.width && image.width <= 320)?.url
      || images[1]?.url
      || images[0]?.url
    : null;
}

function trackPayload(track, playedAt = null) {
  if (!track?.name || track.type !== "track") return null;
  return {
    id: track.id || track.uri || null,
    uri: track.uri || null,
    name: track.name,
    artists: track.artists?.map((artist) => artist.name).filter(Boolean) || [],
    album: track.album?.name || null,
    albumUrl: track.album?.external_urls?.spotify || null,
    imageUrl: imageFrom(track.album?.images),
    url: track.external_urls?.spotify || null,
    playedAt,
    durationMs: Number(track.duration_ms) || null,
  };
}

function rankedRecentTracks(items) {
  const grouped = new Map();
  const playedDates = [];
  for (const item of Array.isArray(items) ? items : []) {
    const track = trackPayload(item?.track, item?.played_at || null);
    if (!track) continue;
    const playedAt = track.playedAt ? new Date(track.playedAt) : null;
    if (playedAt && !Number.isNaN(playedAt.getTime())) playedDates.push(playedAt);
    const key = track.id || track.url || track.name + "|" + track.artists.join(",");
    const current = grouped.get(key);
    if (!current) {
      grouped.set(key, {...track, plays: 1, firstPlayedAt: track.playedAt, lastPlayedAt: track.playedAt});
      continue;
    }
    current.plays += 1;
    if (track.playedAt && (!current.firstPlayedAt || new Date(track.playedAt) < new Date(current.firstPlayedAt))) current.firstPlayedAt = track.playedAt;
    if (track.playedAt && (!current.lastPlayedAt || new Date(track.playedAt) > new Date(current.lastPlayedAt))) {
      current.lastPlayedAt = track.playedAt;
      current.playedAt = track.playedAt;
    }
  }
  const tracks = Array.from(grouped.values())
    .sort((a, b) => b.plays !== a.plays ? b.plays - a.plays : new Date(b.lastPlayedAt || 0) - new Date(a.lastPlayedAt || 0))
    .slice(0, 5);
  playedDates.sort((a, b) => a - b);
  return {tracks, listeningWindow: {from: playedDates[0]?.toISOString() || null, to: playedDates.at(-1)?.toISOString() || null, sampleSize: Array.isArray(items) ? items.length : 0}};
}

function basePayload(status, track = null, details = {}) {
  return {
    status,
    provider: "Spotify",
    isPlaying: status === "playing",
    source: details.source || null,
    track,
    tracks: Array.isArray(details.tracks) ? details.tracks : [],
    listeningWindow: details.listeningWindow || null,
    progressMs: Number.isFinite(Number(details.progressMs)) ? Number(details.progressMs) : null,
    deviceId: details.deviceId || null,
    updatedAt: new Date().toISOString(),
  };
}

async function requestWithFreshToken(path, options = {}) {
  let accessToken = await getAccessToken();
  try {
    return await spotifyRequest(path, accessToken, options);
  } catch (error) {
    if (error.status !== 401) throw error;
    clearAccessToken();
    accessToken = await getAccessToken({forceRefresh: true});
    return spotifyRequest(path, accessToken, options);
  }
}

async function recentlyPlayed() {
  const response = await requestWithFreshToken("/v1/me/player/recently-played?limit=50");
  const items = response.data?.items || [];
  const ranked = rankedRecentTracks(items);
  const latest = trackPayload(items[0]?.track, items[0]?.played_at || null);
  return latest
    ? basePayload("recent", latest, {source: "recently_played", tracks: ranked.tracks, listeningWindow: ranked.listeningWindow})
    : basePayload("offline", null, {source: "recently_played", tracks: ranked.tracks, listeningWindow: ranked.listeningWindow});
}

async function currentPlayback() {
  // /me/player is the authoritative playback-state endpoint and preserves the
  // current item while paused. This lets a two-second play remain visible after pause.
  const current = await requestWithFreshToken("/v1/me/player", {allowNoContent: true});
  const track = trackPayload(current?.data?.item);
  if (!track) return null;
  return basePayload(current?.data?.is_playing ? "playing" : "paused", track, {
    source: "playback_state",
    progressMs: current.data?.progress_ms,
    deviceId: current.data?.device?.id || null,
  });
}

function requestedView(request) {
  let rawView = Array.isArray(request.query?.view) ? request.query.view[0] : request.query?.view;
  if (!rawView && request.url) {
    try { rawView = new URL(request.url, "https://pkm.hayalows.com").searchParams.get("view"); }
    catch { rawView = null; }
  }
  if (rawView === "current" || rawView === "recent") return rawView;
  return "combined";
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({error: "method_not_allowed"});
    return;
  }

  try {
    const view = requestedView(request);

    if (view === "current") {
      const playback = await currentPlayback();
      if (playback) {
        send(response, 200, playback, LIVE_CACHE);
        return;
      }
      // Spotify may return 204 when there is no active device/session. Only then
      // fall back to history. Never let history outrank an available playback item.
      const recent = await recentlyPlayed();
      send(response, 200, recent, LIVE_CACHE);
      return;
    }

    if (view === "recent") {
      const recent = await recentlyPlayed();
      send(response, 200, recent, RECENT_EDGE_CACHE);
      return;
    }

    let playback = null;
    try { playback = await currentPlayback(); }
    catch (error) { if (error.status !== 401 && error.status !== 403) throw error; }

    const recent = await recentlyPlayed();
    if (playback?.track) {
      send(response, 200, {...playback, tracks: recent.tracks, listeningWindow: recent.listeningWindow}, LIVE_CACHE);
      return;
    }
    send(response, 200, recent, LIVE_CACHE);
  } catch (error) {
    if (error.code === "spotify_refresh_token_missing" || error.code === "spotify_config_missing") {
      send(response, 200, {...basePayload("not_connected"), provider: null, updatedAt: null}, LIVE_CACHE);
      return;
    }
    if (error.status === 429) {
      const retryAfter = error.retryAfter || 30;
      send(response, 429, {...basePayload("rate_limited"), retryAfter}, LIVE_CACHE, retryAfter);
      return;
    }
    if (error.code === "spotify_refresh_token_invalid" || error.status === 400 || error.status === 401) {
      send(response, 200, basePayload("needs_reconnect"), LIVE_CACHE);
      return;
    }
    send(response, 503, basePayload("unavailable"), LIVE_CACHE);
  }
};
