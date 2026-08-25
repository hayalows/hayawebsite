const {
  clearAccessToken,
  getAccessToken,
  spotifyRequest,
} = require("../lib/spotify");

function send(response, status, payload, cacheControl, retryAfter) {
  response.status(status);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", cacheControl);
  response.setHeader("X-Content-Type-Options", "nosniff");

  if (retryAfter) {
    response.setHeader("Retry-After", String(retryAfter));
  }

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
    if (playedAt && !Number.isNaN(playedAt.getTime())) {
      playedDates.push(playedAt);
    }

    const key = track.id || track.url || track.name + "|" + track.artists.join(",");
    const current = grouped.get(key);

    if (!current) {
      grouped.set(key, {
        ...track,
        plays: 1,
        firstPlayedAt: track.playedAt,
        lastPlayedAt: track.playedAt,
      });
      continue;
    }

    current.plays += 1;
    if (
      track.playedAt
      && (!current.firstPlayedAt || new Date(track.playedAt) < new Date(current.firstPlayedAt))
    ) {
      current.firstPlayedAt = track.playedAt;
    }
    if (
      track.playedAt
      && (!current.lastPlayedAt || new Date(track.playedAt) > new Date(current.lastPlayedAt))
    ) {
      current.lastPlayedAt = track.playedAt;
      current.playedAt = track.playedAt;
    }
  }

  const tracks = Array.from(grouped.values())
    .sort((a, b) => {
      if (b.plays !== a.plays) return b.plays - a.plays;
      return new Date(b.lastPlayedAt || 0) - new Date(a.lastPlayedAt || 0);
    })
    .slice(0, 5);

  playedDates.sort((a, b) => a - b);

  return {
    tracks,
    listeningWindow: {
      from: playedDates[0]?.toISOString() || null,
      to: playedDates.at(-1)?.toISOString() || null,
      sampleSize: Array.isArray(items) ? items.length : 0,
    },
  };
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
    progressMs: Number(details.progressMs) || null,
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
    accessToken = await getAccessToken({ forceRefresh: true });
    return spotifyRequest(path, accessToken, options);
  }
}

async function recentlyPlayed() {
  const response = await requestWithFreshToken(
    "/v1/me/player/recently-played?limit=50",
  );
  const items = response.data?.items || [];
  const ranked = rankedRecentTracks(items);
  const latest = trackPayload(items[0]?.track, items[0]?.played_at || null);

  return latest
    ? basePayload("recent", latest, {
      source: "recently_played",
      tracks: ranked.tracks,
      listeningWindow: ranked.listeningWindow,
    })
    : basePayload("offline", null, {
      source: "recently_played",
      tracks: ranked.tracks,
      listeningWindow: ranked.listeningWindow,
    });
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    let current;

    try {
      current = await requestWithFreshToken(
        "/v1/me/player/currently-playing",
        { allowNoContent: true },
      );
    } catch (error) {
      // Existing authorisations may not yet include the current-track scope.
      // Keep the recent-history experience working if Spotify rejects this endpoint.
      if (error.status !== 401 && error.status !== 403) throw error;
      current = null;
    }

    const recent = await recentlyPlayed();
    const currentTrack = trackPayload(current?.data?.item);

    if (current?.data?.is_playing && currentTrack) {
      send(
        response,
        200,
        basePayload("playing", currentTrack, {
          source: "currently_playing",
          progressMs: current.data.progress_ms,
          tracks: recent.tracks,
          listeningWindow: recent.listeningWindow,
        }),
        "public, s-maxage=20, stale-while-revalidate=60",
      );
      return;
    }

    send(
      response,
      200,
      recent,
      recent.status === "recent"
        ? "public, s-maxage=60, stale-while-revalidate=180"
        : "public, s-maxage=30, stale-while-revalidate=60",
    );
  } catch (error) {
    if (
      error.code === "spotify_refresh_token_missing"
      || error.code === "spotify_config_missing"
    ) {
      send(
        response,
        200,
        {
          ...basePayload("not_connected"),
          provider: null,
          updatedAt: null,
        },
        "public, max-age=30",
      );
      return;
    }

    if (error.status === 429) {
      const retryAfter = error.retryAfter || 30;
      send(
        response,
        429,
        {
          ...basePayload("rate_limited"),
          retryAfter,
        },
        "no-store",
        retryAfter,
      );
      return;
    }

    if (
      error.code === "spotify_refresh_token_invalid"
      || error.status === 400
      || error.status === 401
    ) {
      send(
        response,
        200,
        basePayload("needs_reconnect"),
        "public, max-age=30",
      );
      return;
    }

    send(
      response,
      503,
      basePayload("unavailable"),
      "no-store",
    );
  }
};
