# Hayalows Ventures Website

This is the temporary official website for Hayalows Ventures. It is a small,
dependency-free static site intended for Cloudflare Pages.

## File structure

- `index.html` - all page content and links
- `styles.css` - layout, colours, typography and responsive styles
- `script.js` - the mobile navigation menu
- `favicon.svg` and `favicon.ico` - browser tab icons
- `site.webmanifest` - installable-site name, colours and icons
- `assets/` - brand artwork, social-sharing image and generated icon files
- `_headers` - basic browser security headers for Cloudflare Pages
- `robots.txt` and `sitemap.xml` - search engine files

## Edit the text

Open `index.html` in a text editor. The page is divided into clearly named
sections such as `services-section`, `founder-section` and `contact-section`.
Edit only the words between the HTML tags unless you intend to change the
structure.

## Replace the founder photo

1. Add the photo as `assets/papa-kojo.jpg`.
2. In `index.html`, replace the `div` with the class `founder-photo` with:

```html
<img
  class="founder-photo"
  src="assets/papa-kojo.jpg"
  alt="Papa Kojo Mensah, Founder of Hayalows Ventures"
>
```

The existing CSS will preserve the portrait shape. Use a clear, well-lit
portrait and compress it before uploading.

## Preview locally

From this folder, run:

```powershell
npx.cmd serve .
```

Then open the local address printed in the terminal.

## Deploy with Cloudflare Pages

Push this folder to its own GitHub repository, then in Cloudflare:

1. Open **Workers & Pages**.
2. Choose **Create application**, then **Pages** and **Connect to Git**.
3. Select the GitHub repository.
4. Use these deployment settings:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: leave empty
   - Build output directory: `/`
   - Root directory: leave empty
5. Save and deploy.

Every future push to `main` will publish automatically.

## Search and sharing checks

- Open `/favicon.svg`, `/favicon.ico` and `/site.webmanifest` directly in a browser.
- Open `/assets/hayalows-og-image.png` and confirm it is 1200 x 630.
- Open `/robots.txt` and confirm it links to `/sitemap.xml`.
- Submit `https://hayalows.com/sitemap.xml` in Google Search Console.
- Inspect `https://hayalows.com/` in Search Console after each important content update.

## Connect hayalows.com and www.hayalows.com

In the new Pages project:

1. Open **Custom domains** and choose **Set up a domain**.
2. Add `hayalows.com` and complete the prompts.
3. Add `www.hayalows.com` as a second custom domain.
4. Confirm that both addresses load over HTTPS.

Because the domain is registered and using DNS at Cloudflare, Cloudflare can
create the required DNS records. Do not remove or replace the existing email
DNS records.

## Maintenance checklist

- Check the site on a phone and desktop after each update.
- Test both email buttons.
- Keep business and project descriptions accurate.
- Replace the founder placeholder when an approved photo is ready.
- Confirm `hayalows.com` and `www.hayalows.com` still use HTTPS.
- Never commit passwords, API tokens or private business records.
