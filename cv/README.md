# Papa Kojo Mensah CV site

This folder is the standalone static site deployed to the existing Vercel project `papa-kojo-cv`.

## Local preview

From the repository root:

```powershell
python -m http.server 4173 --directory cv
```

Open `http://localhost:4173`.

## Public CV

`resume/` is a one-page, print-friendly public CV built from private Google Drive source material. It deliberately omits the private document URL and phone number. The main site links to this route as “View one-page CV”.

## Spotify connection

The expandable personal listening panel reads public track metadata from a server-side Vercel function. It asks Spotify for the currently playing track first, then falls back to the most recently played track when playback is paused, private, unavailable or returns no content. It stays quiet when Spotify is not connected and never exposes OAuth tokens to browser JavaScript.

The production project needs these Vercel environment variables:

~~~text
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REDIRECT_URI
SPOTIFY_REFRESH_TOKEN
~~~

The redirect URI must match the Spotify Developer app exactly:

~~~text
https://papa-kojo-cv.vercel.app/api/spotify/callback
~~~

To authorise the account, open /api/spotify/login on the production site. Spotify returns a one-time refresh token page. Add that value to Vercel as SPOTIFY_REFRESH_TOKEN, then redeploy. Keep the value private.

The connection requests only `user-read-currently-playing` and `user-read-recently-played`. No top-artist, profile or playlist permissions are requested. The public page polls gently only while visible: every 15 seconds during playback, every 60 seconds for a recent track, and less often for offline or error states. Spotify `204`, expired access tokens, `401`, `403`, `429` with `Retry-After`, and temporary offline states are handled explicitly.

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
