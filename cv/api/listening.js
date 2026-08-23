const {
  createError,
  getAccessToken,
  spotifyRequest,
} = require("../lib/spotify");

function send(response, status, payload, cacheControl) {
  response.status(status);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", cacheControl);
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(JSON.stringify(payload));
}

function imageFrom(images) {
  return Array.isArray(images) && images.length ? images[1]?.url || images[0]?.url : null;
}

function artistPayload(artist) {
  if (!artist?.name) return null;

  return {
    name: artist.name,
    url: artist.external_urls?.spotify || null,
    imageUrl: imageFrom(artist.images),
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    const accessToken = await getAccessToken();
    const recent = await spotifyRequest(
      "/v1/me/player/recently-played?limit=1",
      accessToken,
    );
    const item = recent.items?.[0];
    const track = item?.track;

    const topArtistPromise = spotifyRequest(
      "/v1/me/top/artists?limit=1&time_range=medium_term",
      accessToken,
    ).catch(() => null);

    let featuredPlaylist = null;
    const playlistId = process.env.SPOTIFY_FEATURED_PLAYLIST_ID;

    if (playlistId) {
      const playlist = await spotifyRequest(
        "/v1/playlists/" + encodeURIComponent(playlistId)
        + "?fields=name,external_urls,images",
        accessToken,
      ).catch(() => null);

      if (playlist?.name) {
        featuredPlaylist = {
          name: playlist.name,
          url: playlist.external_urls?.spotify || null,
          imageUrl: imageFrom(playlist.images),
        };
      }
    }

    const topArtist = await topArtistPromise;
    const artist = track?.artists?.map((item) => item.name).filter(Boolean) || [];

    send(
      response,
      200,
      {
        status: track ? "connected" : "connected_empty",
        provider: "Spotify",
        isPlaying: false,
        track: track
          ? {
            name: track.name,
            artists: artist,
            album: track.album?.name || null,
            imageUrl: imageFrom(track.album?.images),
            url: track.external_urls?.spotify || null,
            playedAt: item.played_at || null,
          }
          : null,
        favoriteArtist: artistPayload(topArtist?.items?.[0]),
        featuredPlaylist,
        updatedAt: new Date().toISOString(),
      },
      "public, s-maxage=60, stale-while-revalidate=300",
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
          status: "not_connected",
          provider: null,
          isPlaying: false,
          track: null,
          favoriteArtist: null,
          featuredPlaylist: null,
          updatedAt: null,
        },
        "public, max-age=30",
      );
      return;
    }

    if (error.status === 400 || error.status === 401) {
      send(
        response,
        200,
        {
          status: "needs_reconnect",
          provider: "Spotify",
          isPlaying: false,
          track: null,
          favoriteArtist: null,
          featuredPlaylist: null,
          updatedAt: null,
        },
        "public, max-age=30",
      );
      return;
    }

    send(
      response,
      200,
      {
        status: "unavailable",
        provider: "Spotify",
        isPlaying: false,
        track: null,
        favoriteArtist: null,
        featuredPlaylist: null,
        updatedAt: null,
      },
      "public, max-age=30",
    );
  }
};
