# Papa Kojo Mensah CV site

This folder is the standalone static site deployed to the existing Vercel project `papa-kojo-cv`.

## Local preview

From the repository root:

```powershell
python -m http.server 4173 --directory cv
```

Open `http://localhost:4173`.

## Public CV

`resume/` is a public, print-friendly CV generated from the private Google Doc source. It deliberately omits the private document URL and phone number. The main site links to this route as “View CV”.

## Listening connection

The site reads `listening.json` using a small provider-neutral shape. It defaults to `not_connected`, so the public site never invents a current song.

For a future live connection:

- Spotify supports current and recently played tracks through its Web API. Use a server-side Vercel function with OAuth scopes `user-read-currently-playing` and `user-read-recently-played`. Keep the client secret and refresh token in Vercel environment variables, never in this folder or browser JavaScript.
- YouTube’s official Data API can read public playlists, but it does not provide access to watch history (`watchHistoryNotAccessible`). Use a deliberately public, curated playlist rather than unofficial YouTube Music cookie/session scraping.
- Return the same shape as `listening.json` from a future `/api/listening` route, then change the `listening-endpoint` meta value in `index.html`.

Example connected payload:

```json
{
  "status": "connected",
  "provider": "Spotify",
  "isPlaying": true,
  "track": {
    "name": "Track title",
    "artists": ["Artist"],
    "url": "https://open.spotify.com/track/..."
  },
  "updatedAt": "2026-08-23T12:00:00Z"
}
```

## Deployment

The existing Vercel project uses `cv` as its Git root directory. Deploy from this folder and keep the main Hayalows website configuration untouched.
