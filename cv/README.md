# Papa Kojo Mensah personal site

This folder is a standalone static site for `cv.hayalows.com`.

## Local preview

```bash
python3 -m http.server 4173 --directory cv
```

Open `http://localhost:4173`.

## Cloudflare Pages setup

Create a second Cloudflare Pages project from this same GitHub repository.

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `cv`
- Root directory: leave empty

Add `cv.hayalows.com` as the custom domain for this second project. Cloudflare will show the exact DNS verification record if one is needed.

The existing Hayalows Pages project stays pointed at the repository root. Do not change its domain, payment pages, email records or build settings.

## Content to personalise later

- Replace `info@hayalows.com` if a personal inbox becomes preferable.
- Add live links when FPL Engine and the Springboard Time Tracker are ready to be public.
- Add a downloadable CV only after the PDF is final.