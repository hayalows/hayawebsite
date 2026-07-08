# Codex next prompt: integrate Hayalows assets and SEO

Use this prompt in Codex after pulling the latest repo changes.

```text
You are working in the `hayalows/hayawebsite` repository.

I have added a first Hayalows Ventures asset pack to the repo:

- `favicon.svg`
- `site.webmanifest`
- `assets/hayalows-mark.svg`
- `assets/hayalows-logo.svg`
- `assets/hayalows-og-image.svg`
- `assets/README-assets.md`

Your task is to inspect the current website and integrate these assets properly without breaking the existing design.

Important context:
Hayalows Ventures is a Ghana-based business focused on clarity, structure, systems, brand positioning and practical support for SMEs, founders and young professionals.

The canonical website should be:
https://hayalows.com/

Emails:
info@hayalows.com
papa@hayalows.com

Main instructions:

1. Inspect the repository first.
2. Identify the website structure and framework, if any.
3. If the repo is a plain static site, update the existing `index.html` and related files.
4. If the repo is using another structure, adapt carefully and explain what you changed.
5. Do not replace the whole website unless the current website is empty or broken.
6. Do not add fake social links, phone numbers, testimonials, client logos or claims.
7. Keep the brand calm, simple, serious and minimal.

Asset integration:

1. Use `assets/hayalows-logo.svg` as the main logo or wordmark where appropriate.
2. Use `favicon.svg` as the favicon.
3. Use `assets/hayalows-og-image.svg` as the source social sharing image.
4. If the environment allows image conversion, export:
   - `/favicon.ico`
   - `/assets/favicon-48x48.png`
   - `/assets/favicon-96x96.png`
   - `/assets/apple-touch-icon.png` at 180 x 180
   - `/assets/hayalows-og-image.png` at 1200 x 630
5. If conversion tools are not available, keep the SVG references and clearly tell me which PNG/ICO files I should export manually.

SEO metadata to add or confirm:

```html
<title>Hayalows Ventures | Clarity, Structure and Systems for Growing Businesses</title>
<meta name="description" content="Hayalows Ventures is a Ghana-based business helping SMEs, founders and young professionals organise their money, operations, brand and growth with more structure.">
<link rel="canonical" href="https://hayalows.com/">
<meta name="robots" content="index, follow">

<meta property="og:title" content="Hayalows Ventures">
<meta property="og:description" content="Clarity, structure and systems for growing businesses in Ghana.">
<meta property="og:url" content="https://hayalows.com/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://hayalows.com/assets/hayalows-og-image.png">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Hayalows Ventures">
<meta name="twitter:description" content="Clarity, structure and systems for growing businesses in Ghana.">
<meta name="twitter:image" content="https://hayalows.com/assets/hayalows-og-image.png">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="manifest" href="/site.webmanifest">
```

If `hayalows-og-image.png` does not exist yet, either generate it from the SVG or temporarily point `og:image` and `twitter:image` to `https://hayalows.com/assets/hayalows-og-image.svg`, then clearly note that PNG is preferred.

Structured data:

Add JSON-LD Organization data on the homepage:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hayalows Ventures",
  "alternateName": "Hayalows",
  "url": "https://hayalows.com/",
  "logo": "https://hayalows.com/assets/hayalows-logo.svg",
  "email": "info@hayalows.com",
  "founder": {
    "@type": "Person",
    "name": "Papa Kojo Mensah"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Ghana"
  },
  "description": "Hayalows Ventures is a Ghana-based business helping SMEs, founders and young professionals organise their money, operations, brand and growth with more structure."
}
</script>
```

Add WebSite structured data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hayalows Ventures",
  "alternateName": "Hayalows",
  "url": "https://hayalows.com/"
}
</script>
```

Create or update these root files:

`robots.txt`

```txt
User-agent: *
Allow: /

Sitemap: https://hayalows.com/sitemap.xml
```

`sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hayalows.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

Cloudflare Pages / domain requirements:

1. Confirm the site can deploy on Cloudflare Pages.
2. If it is static, build command should be empty or None.
3. Output directory should be root, unless the project has a different structure.
4. Make `https://hayalows.com/` the canonical version.
5. If `www.hayalows.com` exists, recommend redirecting it to `https://hayalows.com/`.

After making changes, give me:

- Files changed
- What assets were used
- Whether PNG/ICO files were generated or still needed
- How to test favicon, Open Graph, sitemap and robots.txt
- Exact Cloudflare Pages deployment settings
- Exact Google Search Console next steps
```
