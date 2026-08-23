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

The personal listening panel reads the most recent track from a server-side Vercel function. It stays quiet when Spotify is not connected and never exposes OAuth tokens to browser JavaScript.

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

The connection requests user-read-recently-played, user-top-read and playlist-read-private. The page shows the last played song by default. A selected playlist can be added later with the optional SPOTIFY_FEATURED_PLAYLIST_ID variable.

The public /api/listening route returns metadata only:

~~~json
{
  "status": "connected",
  "provider": "Spotify",
  "isPlaying": false,
  "track": {
    "name": "Track title",
    "artists": ["Artist"],
    "album": "Album title",
    "imageUrl": "https://i.scdn.co/image/...",
    "url": "https://open.spotify.com/track/...",
    "playedAt": "2026-08-23T12:00:00Z"
  },
  "favoriteArtist": null,
  "featuredPlaylist": null,
  "updatedAt": "2026-08-23T12:00:00Z"
}
~~~

## Deployment

The existing Vercel project uses `cv` as its Git root directory. Deploy from this folder and keep the main Hayalows website configuration untouched.
