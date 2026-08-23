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

The personal listening panel reads `listening.json` and defaults to `not_connected`, so the public site never invents a current song.

Spotify's Web API can provide a current or recently played track after the account owner grants access. A future implementation should:

- use a server-side Vercel function and Spotify OAuth scopes `user-read-currently-playing` and `user-read-recently-played`;
- keep the client secret and refresh token only in Vercel environment variables;
- return the same shape as `listening.json` from a private-by-default `/api/listening` route;
- never expose OAuth tokens in this folder or browser JavaScript.

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
