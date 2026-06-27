# rockstar-site-archive

Automated **git-scrape** of Rockstar Games' website front-end, plus hosted media galleries.

Fed by the Rockstar Community Hub Discord bot ([Site Watch module](https://github.com/92-Smallo/discord-bot)). On every Rockstar deploy the bot:

- diffs the SystemJS Module Federation importmap (and the standalone GTA VI Next.js site),
- pushes each changed bundle here (raw `*.js` + a beautified, line-diffable `*.pretty.js`) so the **commit diff** is browsable,
- writes a **media gallery** of any new images/videos to [`docs/`](docs/), served via GitHub Pages.

## Layout

- `*/` — archived bundles per package/page (`<version>__<hash>.js` + `.pretty.js`).
- `docs/media/<slug>/` — per-deploy media galleries (GitHub Pages).
- `docs/index.html` — landing page.

> Diffs only show on the `.pretty.js` copies (see `.gitattributes`); the raw minified blobs are marked non-diffable noise.

This repo is machine-generated. Nothing here is hand-edited.
