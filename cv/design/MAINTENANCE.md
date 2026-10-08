# Iconka archive maintenance

The public archive is marked Work in progress. Keep the original artwork files and IDs intact.

Content files:
- catalog.json: image descriptions, source references, sizes, and previews.
- archive.js: group related images and assign categories and stable project slugs.
- stories.json: ten fuller case studies, ready to extend with verified content.
- refine.js and refine.css: case-study carousel, clickable hover previews, and small-screen interactions.
- ../stack-deck.js and ../stack-deck.css: main PKM portfolio Selected Work stack.

To add more designs:
1. Add the new preview and full-size artwork to assets/design and catalog.json.
2. If an image belongs to an existing project, update that project's array of image indexes in archive.js; otherwise let it become a new project.
3. Keep the main index carefully selected. Put small experiments in Sketchbook.
4. Add or expand its story in stories.json. Only publish confirmed years, tools, client relationships or outcomes.
5. Run: node cv/design/generate-pages.cjs
6. Commit the generated slug/index.html pages and sitemap.xml, push, and test the live links.

The static share pages give each project its own Open Graph image and title, which JavaScript-only metadata cannot do for WhatsApp previews.
Preserve the PKM header, dark/light themes, focus behaviour, existing CV links and original artwork references.
Do not fabricate process sketches, results or client comments. Short projects can remain image-led until more material is available.
