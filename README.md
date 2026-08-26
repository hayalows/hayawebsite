# Hayalows Ventures Website

The official website for Hayalows Ventures. It is a dependency-free static site deployed through Cloudflare Pages.

## Main files

- `index.html` - page content, metadata and structured data
- `styles.css` - visual system, responsive layout and motion
- `script.js` - navigation, reveal behaviour and contact-form actions
- `pages.css` - shared payment and policy page layouts
- `payment.js` - payment confirmation dialog and USSD copy actions
- `site.config.js` - shared business contact and public payment details
- `pay/` - guided payment page
- `payments-and-refunds/`, `privacy/` and `terms/` - policy pages
- `_redirects` - compatibility redirects for earlier routes
- `_headers` - browser security headers for Cloudflare Pages
- `robots.txt`, `sitemap.xml` and `llms.txt` - discovery files
- `webmcp/` and `vendor/webmcp-sdk-0.5.0-output-schema.js` - WebMCP browser tools, versioned result contracts and the pinned SDK compatibility asset
- `assets/` - brand, icon and social-sharing artwork

## Contact form behaviour

The form does not pretend to send data to a server. It validates in the browser and lets the visitor:

1. Open a complete message in WhatsApp.
2. Open the same message in their email app.
3. Copy the message as a fallback.

No form content is stored after the page closes. When a WebMCP action starts on a subpage, its draft is held in `sessionStorage` only until the homepage form is filled, then removed.

## Payment behaviour

The payment page links visitors to verified Paystack storefront or terminal pages after a confirmation step. It also shows the official USSD codes as a secondary option. The website does not collect card details, validate invoices, call a payment API or claim that payment succeeded.

Keep public payment URLs and USSD codes in `site.config.js`. Never add Paystack secret keys, webhook secrets or private customer records to this repository.

## Preview locally

```powershell
npx.cmd serve .
```

Run the package-free WebMCP checks with:

```powershell
node --import ./tests/register-webmcp-loader.mjs --test ./tests/webmcp-tools.test.mjs
```

## Cloudflare Pages deployment

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: leave empty

Every push to `main` publishes automatically. Do not change the domain DNS or remove the existing email records.

## Maintenance

The WebMCP registration uses a documented compatibility build based on pinned `@nekuda/webmcp-sdk@0.5.0` and passes `telemetry: false`. The compatibility change validates and forwards `outputSchema`, and mirrors JSON object results into `structuredContent` while preserving the SDK text fallback. Hayalows content, tool inputs and tool outputs are not sent to the SDK telemetry endpoint. Every tool also returns a stable `schemaVersion` and `schemaUrl`; the canonical JSON Schema contracts live in `webmcp/results.schema.json`.

- Keep verified business details in `site.config.js`.
- Keep matching visible details, metadata and JSON-LD accurate on every public page.
- Add future venture links to `futureVentures` only when a real public destination is ready.
- Review policy wording whenever payment, fulfilment or data-handling practices change.
- Test desktop, mobile, keyboard navigation, contact actions and sharing metadata after important changes.
- Never commit passwords, tokens or private business records.
