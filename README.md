# Hayalows Ventures Website

The official one-page website for Hayalows Ventures. It is a dependency-free static site deployed through Cloudflare Pages.

## Main files

- `index.html` - page content, metadata and structured data
- `styles.css` - visual system, responsive layout and motion
- `script.js` - navigation, reveal behaviour and contact-form actions
- `site.config.js` - shared business contact details and hidden future venture links
- `_redirects` - compatibility redirects for earlier routes
- `_headers` - browser security headers for Cloudflare Pages
- `robots.txt`, `sitemap.xml` and `llms.txt` - discovery files
- `assets/` - brand, icon and social-sharing artwork

## Contact form behaviour

The form does not pretend to send data to a server. It validates in the browser and lets the visitor:

1. Open a complete message in WhatsApp.
2. Open the same message in their email app.
3. Copy the message as a fallback.

No form content is stored after the page closes.

## Preview locally

```powershell
npx.cmd serve .
```

## Cloudflare Pages deployment

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: leave empty

Every push to `main` publishes automatically. Do not change the domain DNS or remove the existing email records.

## Maintenance

- Keep verified business details in `site.config.js`.
- Keep the matching visible details and JSON-LD in `index.html` accurate.
- Add future venture links to `futureVentures` only when a real public destination is ready.
- Test desktop, mobile, keyboard navigation, contact actions and sharing metadata after important changes.
- Never commit passwords, tokens or private business records.
