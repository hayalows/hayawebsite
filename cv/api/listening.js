const {
  clearAccessToken,
  getAccessToken,
  getRateLimit,
  spotifyRequest,
} = require("../lib/spotify");

const { readSnapshot, getSharedCooldown, restoreSharedSnapshots } = require("../lib/listening-cache");
const { waitUntil } = require("@vercel/functions");

const PLAYING_SECONDS = 10;
// Pausing or starting playback should become visible without a minute-long wait.
const IDLE_SECONDS = 20;
const HISTORY_SECONDS = 900;
const currentSnapshot = { value: null, expiresAt: 0, pending: null };
const recentSnapshot = { value: null, expiresAt: 0, pending: null };
let lastKnownTrack = null;

function send(response, status, payload, seconds, retryAfter) {
  response.status(status);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  response.setHeader("Vercel-CDN-Cache-Control", "public, s-maxage=" + Math.max(1, seconds));
  if (retryAfter) response.setHeader("Retry-After", String(retryAfter));
  response.end(JSON.stringify(payload));
}

function remaining(snapshot) {
  return Math.max(1, Math.ceil((snapshot.expiresAt - Date.now()) / 1000));
}

function imageFrom(images) {
  return Array.isArray(images) && images.length
    ? images.find((image) => image?.width && image.width <= 320)?.url || images[1]?.url || images[0]?.url
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
    progressMs: Number.isFinite(details.progressMs) ? details.progressMs : null,
    updatedAt: new Date().toISOString(),
  };
}

async function requestWithFreshToken(path, options = {}) {
  let accessToken = await getAccessToken();
  try {
    return await spotifyRequest(path, accessToken, options);
  } catch (error) {
    if (error.status !== 401) throw error;
    clearAccessToken(accessToken);
    accessToken = await getAccessToken();
    return spotifyRequest(path, accessToken, options);
  }
}

async function recentlyPlayed() {
  return readSnapshot(recentSnapshot, "recent", async () => {
    const response = await requestWithFreshToken("/v1/me/player/recently-played?limit=50");
    const items = response.data?.items || [];
    const ranked = rankedRecentTracks(items);
    const latest = trackPayload(items[0]?.track, items[0]?.played_at || null);
    return basePayload(latest ? "recent" : "offline", latest, {
      source: "recently_played", tracks: ranked.tracks, listeningWindow: ranked.listeningWindow,
    });
  }, () => HISTORY_SECONDS);
}

async function currentPlayback() {
  // Keep using the endpoint authorized by the site's existing Spotify scopes.
  // It returns the current item, is_playing and progress_ms, including paused state.
  return readSnapshot(currentSnapshot, "current", async () => {
    const current = await requestWithFreshToken("/v1/me/player/currently-playing", {allowNoContent: true});
    const track = trackPayload(current?.data?.item);
    if (!track) return basePayload("offline", null, {source: "currently_playing"});
    const state = basePayload(current.data.is_playing ? "playing" : "paused", track, {
      source: "currently_playing", progressMs: current.data.progress_ms,
    });
    lastKnownTrack = state;
    return state;
  }, state => state.status === "playing" ? PLAYING_SECONDS : IDLE_SECONDS);
}

function newestKnownTrack(recent) {
  lastKnownTrack = currentSnapshot.lastKnown || lastKnownTrack;
  if (!lastKnownTrack?.track) return recent;
  return Date.parse(recent?.track?.playedAt) > Date.parse(lastKnownTrack.updatedAt) ? recent : lastKnownTrack;
}

function savedSnapshot(view) {
  const recent = recentSnapshot.value;
  const preferred = newestKnownTrack(recent);
  return {
    ...basePayload("offline"),
    ...(view === "recent" ? recent : preferred),
    tracks: recent?.tracks || [],
    listeningWindow: recent?.listeningWindow || null,
  };
}

function requestedView(request) {
  let rawView = Array.isArray(request.query?.view) ? request.query.view[0] : request.query?.view;
  if (!rawView && request.url) {
    try { rawView = new URL(request.url, "https://pkm.hayalows.com").searchParams.get("view"); }
    catch { rawView = null; }
  }
  return rawView === "current" || rawView === "recent" ? rawView : "combined";
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({error: "method_not_allowed"});
    return;
  }
  const view = requestedView(request);
  try {
    const sharedCooldown = await getSharedCooldown();
    const localCooldown = getRateLimit();
    const retryAt = Math.max(sharedCooldown?.retryAt || 0, localCooldown?.retryAt || 0);
    const cooldown = retryAt > Date.now() ? {retryAt, retryAfter:Math.ceil((retryAt - Date.now()) / 1000)} : null;
    if (cooldown) throw Object.assign(new Error("Spotify cooldown"), {status: 429, ...cooldown});
    if (view === "current") {
      const playback = await currentPlayback();
      // A 204 is a successful idle check, never a reason to fetch history again.
      return send(response, 200, {...playback, nextCheckAt: currentSnapshot.expiresAt}, remaining(currentSnapshot));
    }
    if (view === "recent") {
      const recent = await recentlyPlayed();
      return send(response, 200, {...recent, nextCheckAt: recentSnapshot.expiresAt}, remaining(recentSnapshot));
    }

    let playback = null;
    try { playback = await currentPlayback(); }
    catch (error) { if (error.status !== 403) throw error; }
    // History refreshes independently and cannot hold a fresh song hostage.
    // waitUntil keeps the shared history refresh alive after the response ends.
    const historyTask = recentlyPlayed().catch(() => recentSnapshot.value);
    waitUntil(historyTask);
    let historyTimer;
    const historyWait = Promise.race([historyTask, new Promise(resolve => {
      historyTimer = setTimeout(() => resolve(recentSnapshot.value), 250);
    })]);
    const recent = (await (playback?.track || currentSnapshot.lastKnown?.track ? historyWait : historyTask)) || basePayload("offline");
    clearTimeout(historyTimer);
    let state = playback?.track ? playback : recent;
    // History may predate a song we just observed. Keep that newer track when
    // playback stops, without pretending it is still playing.
    if (!playback?.track && newestKnownTrack(recent)?.track) {
      const known = newestKnownTrack(recent);
      state = {...known, status: "recent", source: known === lastKnownTrack ? "last_known" : known.source,
        isPlaying: false, progressMs: null};
    }
    const seconds = playback ? remaining(currentSnapshot) : IDLE_SECONDS;
    return send(response, 200, {...state, tracks: recent.tracks, listeningWindow: recent.listeningWindow,
      nextCheckAt: playback ? currentSnapshot.expiresAt : Date.now() + seconds * 1000}, seconds);
  } catch (error) {
    if (error.code === "spotify_refresh_token_missing" || error.code === "spotify_config_missing") {
      return send(response, 200, {...basePayload("not_connected"), provider: null, updatedAt: null}, HISTORY_SECONDS);
    }
    if (error.status === 429) {
      await restoreSharedSnapshots(currentSnapshot, recentSnapshot).catch(() => {});
      const retryAt = Math.max(getRateLimit()?.retryAt || 0, error.retryAt || Date.now() + Math.max(30, error.retryAfter || 60) * 1000);
      const limit = {retryAt, retryAfter:Math.ceil((retryAt - Date.now()) / 1000)};
      // Vercel caches HTTP 200 metadata snapshots. A 429 HTTP response cannot
      // be relied on for CDN caching, leaving each new visitor to hit Spotify.
      return send(response, 200, {...savedSnapshot(view), status: "rate_limited", isPlaying: false,
        progressMs: null, stale: true, retryAfter: limit.retryAfter,
        retryAt: limit.retryAt || Date.now() + limit.retryAfter * 1000}, limit.retryAfter, limit.retryAfter);
    }
    // Only an actual OAuth refresh-token invalid_grant means reconnect. A generic
    // Web API 400/401 is not enough evidence to tell the visitor to reconnect.
    if (error.code === "spotify_refresh_token_invalid") {
      return send(response, 200, basePayload("needs_reconnect"), HISTORY_SECONDS);
    }
    return send(response, 200, {...savedSnapshot(view), status: "unavailable", stale: true,
      isPlaying: false, progressMs: null, nextCheckAt: error.nextCheckAt || Date.now() + 30000},
      Math.max(1, Math.ceil(((error.nextCheckAt || Date.now() + 30000) - Date.now()) / 1000)));
  }
};
