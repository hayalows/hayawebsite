# Papa Kojo Mensah CV site

This folder is the standalone static site deployed to the existing Vercel project `papa-kojo-cv`.

The professional profile, project index and one-page CV register six non-overlapping WebMCP tools: bounded profile retrieval, skills by category, experience by organization, education by credential, projects by exact key and a reversible email draft. The tool descriptions explicitly route agents away from adjacent tools, input schemas use tight enums, and every result has an inline `outputSchema` plus matching `structuredContent`. Registration passes `telemetry: false`; no tool exposes private source material, sends a message or books time. Stable contracts are also published in `webmcp/results.schema.json`.

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

The connection requests only `user-read-currently-playing` and `user-read-recently-played`. No top-artist, profile or playlist permissions are requested. One controller, `spotify-ui.js`, owns the listening panel; WebMCP only registers tools. The page requests the stable `/api/listening` URL when the panel is near the viewport. It checks every 30 seconds while playing and every five minutes while idle or paused. It stops checking while offscreen, hidden, or offline. The progress bar advances locally and respects reduced motion.

The API caches current playback for 30 seconds while playing or five minutes while idle, and recent history for 15 minutes. Concurrent requests share playback/history work and OAuth refreshes within a warm function instance. A Spotify `204` is an idle result; the current-only route never fetches history as a fallback. The combined response keeps the latest known track and ranked history, so the main card can say “Last played” without a fresh history call on every idle check.

Successful snapshots and quiet/error states return HTTP 200 with a payload `status` and Vercel CDN cache headers. A Spotify `429` returns `status: "rate_limited"`, an absolute `retryAt`, remaining `retryAfter`, and any available saved metadata. Both API views and OAuth calls respect the cooldown within the warm instance. The CDN can cache this metadata response throughout the cooldown; the browser persists the same deadline across reloads, refresh clicks, lifecycle events, and tabs. Saved music is never labelled live. Temporary failures keep the last known UI and use a slower retry.

`/api/listening?view=current` and `?view=recent` remain available for diagnostics and backwards compatibility. The page uses the queryless combined route so visitors share one CDN key, with no timestamps or cache-bypass headers. Warm-instance memory is not a durable store or a global lock across cold workers/regions. CDN caching reduces those requests, but Spotify's app-wide quota still applies, including other clients using the same app. This code cannot cancel an existing Spotify cooldown or guarantee a provider will never return 429.

### Verify the listening flow

From the repository root:

```sh
node --test cv/tests/listening-api.test.cjs
SPOTIFY_EVIDENCE_DIR=/tmp/spotify-flow-evidence node cv/tests/spotify-flow.e2e.cjs
node --import ./tests/register-webmcp-loader.mjs --test tests/webmcp-tools.test.mjs tests/profile-structured-data.test.mjs
```

The browser harness needs Playwright (validated with 1.62.1) available to Node and Chromium at `/usr/bin/chromium`. It starts an ephemeral local HTTP server, exercises the real page and listening handler, and mocks only Spotify/OAuth and unrelated outbound browser requests. It uses disposable fixture credentials and local browser storage. It closes the server/browser and leaves `report.json` plus desktop/mobile screenshots in the evidence directory. The report includes source revision, patch and harness hashes, versions, and scenario outcomes. The local adapter does not verify Vercel CDN behavior or production credentials. `--baseline` serves the original `773c38e` frontend to reproduce the original controller/registration failures; API source always comes from the current checkout.

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


## First-party analytics

The portfolio includes a custom analytics collector and private dashboard backed by Neon Postgres.

Required production environment variables:

- `PKM_ANALYTICS_DATABASE_URL`: pooled Neon Postgres connection string for the analytics database.
- `PKM_ANALYTICS_HASH_KEY`: long random secret used to HMAC visitor network/browser signals. Raw IP addresses and raw user-agent strings are not stored.
- `PKM_ANALYTICS_DASHBOARD_KEY`: private key required by `/analytics/` to read aggregated data.

Apply `analytics/schema.sql` once to the target Neon database before enabling collection.

Public collection endpoint: `POST /api/analytics`.
Private summary endpoint: `GET /api/analytics-summary?days=30`.
Private dashboard: `/analytics/`.

The tracker respects Global Privacy Control and Do Not Track, does not use advertising cookies, and records an engagement event when the visitor leaves the page.
