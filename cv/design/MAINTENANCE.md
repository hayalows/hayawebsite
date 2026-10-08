# Iconka Designs portfolio

The public design portfolio at https://pkm.hayalows.com/design/ opens to **All Designs**. The old `/design/index` address remains usable. Sketchbook is a separate, image-led view of smaller work.

## Design principles
- The audience may be a recruiter, client or collaborator arriving from the main PKM portfolio. Let the work be visible quickly.
- One clear heading, a short introduction, search and a small set of filters. Default to List on both desktop and mobile. Grid is an optional second view.
- In All Designs, show all 50 project groups, with the ten Featured projects first. Featured, Identity, Campaign and Other are filters, not additional landing pages.
- Keep the right-side hover preview on desktop and tap-to-expand preview on mobile. Keep artwork arrows and case-study swiping, but don't auto-play images.
- Palette: warm white `#F2F0EA`, warm ash `#B3ACA1`, soft brass `#BBA783` over charcoal. Do not use the earlier bright gold as the UI accent. Use dark, contrasting versions of the accents for light appearance.
- Respect reduced motion and keyboard focus; titles and actual artwork carry the hierarchy.

## Editing content
- `catalog.json` contains 67 original image records. Keep those files and IDs; they are private source material for building the public artwork gallery.
- `archive.js` groups those records into 50 projects. Two duplicates are currently hidden from public display: the second Hisok Journeys image (identical file) and the alternative Annual Temple Trip image (reported as visually repetitive; needs review). **65** image pieces display; nothing was deleted from the catalogue.
- `stories.json` provides content for the ten featured case studies. Never invent tools, briefs, client responses or measured outcomes.
- Colour Week labels are deliberately general for images without a verified printed year. El Festín Elegante countdown images run from four days to event day.
- `refine.js` contains the hover preview, case-study interaction and swipe controls. `refine.css` carries responsive refinements.

## Publishing new designs
1. Add and optimise the artwork image(s) with accurate titles and alt text in `catalog.json`.
2. Group variations under one stable project slug in `archive.js`; keep the curated first ten intentional.
3. Add verified context in `stories.json` if a project merits a case study. Short projects can stay image-led.
4. Run `node cv/design/generate-pages.cjs` locally to refresh the project-specific OG meta pages and sitemap.
5. Check `/design/`, `/design/index`, `/design/sketchbook`, a featured case study and an unfeatured case study on desktop and phone; test both themes, filters, focus, images and direct links.
6. Push and verify Vercel is READY.

The work-in-progress notice stays visible because the catalogue and case studies will grow over time.
