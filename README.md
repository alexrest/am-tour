# Article preview POC

A dependency-free HTML/CSS/JavaScript demo. Open `index.html` directly in a browser, or run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then visit http://localhost:4173.

Choose a hero image and article text independently on the left. The right column updates instantly. Reset restores the energy image and article. All four images are local, so the demo also works offline.

## Customize

- `app.js`: edit the `images` and `articles` collections to add or replace predefined options. Article copy is original demo text, not the full published articles.
- `styles.css`: studio controls and simplified JW.ORG page styling.
- `assets/`: local hero images. Source article and image URLs are recorded in `assets/sources.json`.

The preview follows the compact layout of https://www.jw.org/en/library/series/more-topics/meeting-mankinds-energy-needs/ and the provided sketch. Site toolbar icons and the English language display are decorative, not live site controls. The “View reference” link opens the original page. There is no iframe, backend, build step, analytics, or publishing integration.

Image assets and the JW.ORG identity remain the property of their respective owners; included for this internal POC.

The supplied Cubit SVG logo and icons are copied into `assets/`. Noto Sans is bundled locally in `assets/fonts/` with its SIL Open Font License, so typography also works offline.

## Hosted demo

https://alexrest.github.io/am-tour/

GitHub Pages serves the root of the `main` branch. Commit and push changes to update the shared demo.
