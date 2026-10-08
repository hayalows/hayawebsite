# Iconka Index — implementation notes

Redesign of the design subsection of the existing PKM static portfolio. Main homepage remains unchanged.

- `/design/`: curated selected projects.
- `/design/index`: full typographic index, Grid and Wall views, global search.
- `/design/sketchbook`: smaller experiments and daily pieces.
- `/design/<project-slug>/`: grouped project details with original imagery.
- `/design/legacy.html`: preserved October 2026 original gallery and canvas.

The new index reads `catalog.json`, preserving all 67 original image entries and source links. Group mappings are in `archive.js`. Missing client, process, year or tools are explicitly not fabricated. Replace those placeholders only after verifying project metadata.

Themes: Paper (#F5F3EE) and Ink (#111111); Ink is the initial appearance, user selection persists in localStorage. Source files are unchanged.

Project routes use Vercel rewrites configured in `../vercel.json`. This is a static site: do not introduce Next.js routes here. `legacy.html` retains the previous viewer and canvas for continuity. The main homepage, analytics, Spotify and CV files are untouched.

Quality checks before production: verify no console/runtime errors; /design/, /design/index, /design/sketchbook, /design/kente-pa/; dark/light persistence; 390px & 768px; keyboard, reduced-motion, original image links, and legacy hash redirects.
