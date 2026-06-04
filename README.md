# website-prototyping

Public static prototypes for [AstralMandala](https://astralmandala.com). **Do not commit strategy docs or confidential files to this repo.**

## Live (GitHub Pages)

Enable once: **Settings → Pages →** branch `main`, folder `/ (root)`.

`https://astralmandalaorg.github.io/website-prototyping/` → redirects to `index-v1.html`

## Demos

| Demo | Entry |
|------|--------|
| Products page v1 (full) | [index-v1.html](index-v1.html) |
| Products page v2 (simple) | [index-v2.html](index-v2.html) — free cards inline |
| Partnerships detail (v2) | [partnerships.html](partnerships.html) |
| Product detail pages | [products/product.html?p=mandala14](products/product.html?p=mandala14) (etc.) |

Product pages use `?p=` slugs: `sayit`, `weekly-briefing`, `thoughtful-updates`, `diagnostic`, `still-point`, `mandala14`, `mandala42`. Copy in [product-pages-data.js](product-pages-data.js). Mandala14 links to the live [Global Invite](https://astralmandala.com/global-invite/) campaign.

## Local preview

```bash
python -m http.server 8765
# http://localhost:8765/index-v1.html
```

## Files

| File | Purpose |
|------|---------|
| `index-v1.html` | Page shell and sections |
| `styles-v1.css` | Layout and brand styling |
| `products-data.js` | Copy, pricing, CTAs |
| `products-render.js` | Renders UI from data |

## Develop in the main astral repo

Working copy: `astral/website-prototyping/` (private). Push here when ready to share:

```bash
git add -A && git commit -m "Update prototype" && git push
```
