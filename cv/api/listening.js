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

function basePayload(status, track = null, details = {}) {
  return {
    status,
    provider: "Spotify",
    isPlaying: status === "playing",
    source: details.source || null,
    track,
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
    "/v1/me/player/recently-played?limit=1",
  );
  const item = response.data?.items?.[0];
  const track = trackPayload(item?.track, item?.played_at || null);

  return track
    ? basePayload("recent", track, { source: "recently_played" })
    : basePayload("offline", null, { source: "recently_played" });
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
      // Existing authorisations may not yet include the new current-track scope.
      // A 403 should keep the already-working recent-track experience intact.
      if (error.status !== 403) throw error;
      current = null;
    }

    const currentTrack = trackPayload(current?.data?.item);

    if (current?.data?.is_playing && currentTrack) {
      send(
        response,
        200,
        basePayload("playing", currentTrack, {
          source: "currently_playing",
          progressMs: current.data.progress_ms,
        }),
        "public, s-maxage=12, stale-while-revalidate=24",
      );
      return;
    }

    const recent = await recentlyPlayed();
    send(
      response,
      200,
      recent,
      recent.status === "recent"
        ? "public, s-maxage=45, stale-while-revalidate=120"
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
