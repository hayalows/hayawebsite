# Papa Kojo Mensah CV site

This folder is the standalone static site deployed to the existing Vercel project `papa-kojo-cv`.

The profile and one-page CV register four focused WebMCP tools: public-profile retrieval, structured project discovery, direct profile/résumé navigation and a reversible email draft. They use the documented output-schema compatibility asset in `vendor/`. Registration passes `telemetry: false`; no tool exposes private source material, sends a message or books time. Every registered tool has an `outputSchema`, returns matching `structuredContent`, and links to the stable contracts in `webmcp/results.schema.json`.

## Local preview

From the repository root:

```powershell
python -m http.server 4173 --directory cv
```

Open `http://localhost:4173`.

## Public CV

`resume/` is a one-page, print-friendly public CV built from private Google Drive source material. It deliberately omits the private document URL and phone number. The main site links to this route as “View one-page CV”.

## Spotify connection

The personal listening panel reads public track metadata from a server-side Vercel function. It shows the five tracks that repeat most within Spotify’s latest 50 recently played entries, while still checking whether something is playing now. Spotify does not provide lifetime play counts through this feed, so the page labels these as recent plays and shows the listening window. It stays quiet when Spotify is not connected and never exposes OAuth tokens to browser JavaScript.

The production project needs these Vercel environment variables:

~~~text
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REDIRECT_URI
SPOTIFY_REFRESH_TOKEN
~~~

The redirect URI must match the Spotify Developer app exactly:

~~~text
https://pkm.hayalows.com/api/spotify/callback
~~~

To authorise the account, open https://pkm.hayalows.com/api/spotify/login. Spotify returns a one-time refresh token page. Add that value to Vercel as SPOTIFY_REFRESH_TOKEN, then redeploy. Keep the value private.

The connection requests only `user-read-currently-playing` and `user-read-recently-played`. No top-artist, profile or playlist permissions are requested. The public page waits until the listening panel is near the viewport, then separates lightweight current-playback checks from the heavier recent-history request. While the panel is visible, current playback refreshes every 10 seconds during a song and every 15 seconds while quiet; recent history refreshes every two minutes. The live progress indicator advances locally between responses. Spotify `204`, expired access tokens, `401`, `403`, `429` with `Retry-After`, and temporary offline states are handled explicitly.

`/api/listening?view=current` returns only the current playback state and uses a five-second edge cache. `/api/listening?view=recent` returns the ranked recent history with a longer edge cache. The original combined response remains available for backwards compatibility and diagnostics.

The public /api/listening route returns metadata only:

~~~json
{
  "status": "playing",
  "provider": "Spotify",
  "isPlaying": true,
  "source": "currently_playing",
  "track": {
    "name": "Track title",
    "artists": ["Artist"],
    "album": "Album title",
    "albumUrl": "https://open.spotify.com/album/...",
    "imageUrl": "https://i.scdn.co/image/...",
    "url": "https://open.spotify.com/track/...",
    "playedAt": null,
    "durationMs": 210000
  },
  "progressMs": 42000,
  "updatedAt": "2026-08-23T12:00:00Z"
}
~~~

## Deployment

The existing Vercel project uses `cv` as its Git root directory. Deploy from this folder and keep the main Hayalows website configuration untouched.
