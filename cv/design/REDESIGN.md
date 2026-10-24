# Iconka Index — implementation notes

Redesign of the design subsection of the existing PKM static portfolio. Main homepage remains unchanged.

- `/design/`: selected-work landing page with a featured Kente Pa case, six additional project highlights and direct paths to the full archive.
- `/design/index`: complete 50-project index, Grid and List views, global search and category filters; Grid is the default.
- `/design/sketchbook`: smaller experiments and daily pieces.
- `/design/<project-slug>/`: grouped project details with original imagery.
- `/design/legacy.html`: preserved October 2026 original gallery and canvas.

The new index reads `catalog.json`, preserving all 67 original image entries and source links. Group mappings are in `archive.js`. Missing client, process, year or tools are explicitly not fabricated. Replace those placeholders only after verifying project metadata.

Themes: Paper (#F5F3EE) and Ink (#111111); Ink is the initial appearance, user selection persists in localStorage. Source files are unchanged.

Project routes use Vercel rewrites configured in `../vercel.json`. This is a static site: do not introduce Next.js routes here. `legacy.html` retains the previous viewer and canvas for continuity. The main portfolio keeps its own visual identity and Spotify data flow; the design portfolio is a separate surface.

Quality checks before production: verify no console/runtime errors; /design/, /design/index, /design/sketchbook, /design/kente-pa/; dark/light persistence; 390px & 768px; keyboard, reduced-motion, original image links, and legacy hash redirects.
