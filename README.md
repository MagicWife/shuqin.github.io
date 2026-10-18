This is the source code to Shuqin Dong's public academic website: https://shuqindong.tech. You are welcome to clone this code for your own personal use, just please attribute the source to the original website or to this and related repos (e.g., https://github.com/jonbarron/website). If you do clone this website, feel free to add an attribution link to your own downstream website in index.html if you want.

## Development

This is a static GitHub Pages website. No build step or package installation is required.

Run `python -m http.server 8766` from this directory and open `http://localhost:8766`.

- `index.html`: profile, research, publications, appointments, awards and service.
- `stylesheet.css`: responsive layout and print styles.
- `script.js`: progressive enhancement for publication filters; all publications remain readable without JavaScript.
- `data/cv.pdf` and `data/cv-zh.pdf`: English and Chinese CV downloads.
- `CNAME`: existing custom domain; retain this file when deploying.

## Content maintenance

The October 2026 update reconciles the supplied English and Chinese CVs. Publisher and CityUHK records take precedence for final publication titles and bibliographic details. The under-review IEEE TIM manuscript has been removed from the public listing. The APMC 2026 LBN paper is labeled accepted. Hong Kong and Shenzhen company appointments are listed separately using the dates in their respective CVs.

Update publication metadata and links in `index.html`; use `data-kind="journal"`, or `"conference"` for filtering. Update the page's visible revision date and `sitemap.xml` when making substantive changes.

Before publishing, check mobile and desktop layouts, all three publication filters, both CV links, local images and section anchors. Run `node --check script.js` and `git diff --check`.
