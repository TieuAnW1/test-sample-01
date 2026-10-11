# Reanty – Coding test (Fastcoding VN)

The "Reanty" landing page, built from the Figma file `testsample01` (frame `01_home-01`, 1920px)
with **plain HTML + CSS** only: no framework and no JavaScript.

## How to view

- Open `index.html` directly in a browser (double click), or
- Run any static server from the project root, for example `npx http-server .`, then open `http://localhost:8080`.

Every path in the source is **relative** (`assets/...`), so the whole folder can be uploaded as-is
to any static host (GitHub Pages, Netlify, a company server...).
The fonts (Nunito, Poppins) are loaded from Google Fonts.

## Folder structure

```
index.html
assets/
  css/
    base.css        # design tokens (colors, fonts, radius, shadow), reset, utilities (.container, .media)
    components.css  # reusable components: .btn, .section-head, .thumbs, .round-btn, .field, .social
    layout.css      # header (topbar + navbar) and footer
    sections.css    # styles for each page section, in page order
    responsive.css  # all breakpoints in one place
  images/           # logos, photo, placeholder.svg (grey block, as in Figma)
  icons/            # colour icons exported from the design
```

## Code conventions

- Class names follow **BEM** (`block__element--modifier`); states use `is-active`.
- Colors, fonts, radii and shadows are **CSS variables** in `base.css`, so one change applies site-wide.
- Simple line icons (mail, social, arrows, check...) use an **inline SVG sprite** (`<use href="#i-...">`) and take their color from `color`.
- Colour icons, both logos and the hero arrow are **SVG files exported directly from Figma** (`assets/icons`, `assets/images`).
- Images are grey blocks in the Figma file, so the page uses `assets/images/placeholder.svg`; swap the `src` when real photos are available.

## Responsive

| Breakpoint | Device          | Main changes                                                    |
| ---------- | --------------- | --------------------------------------------------------------- |
| ≥ 1600px   | PC (Full HD)    | Matches the 1920px Figma layout                                 |
| ≤ 1599px   | Laptop          | Tighter menu spacing, flexible hero                             |
| ≤ 1199px   | Tablet          | Hamburger menu (CSS checkbox), stacked sections, 2-column grids |
| ≤ 767px    | Smartphone (SP) | 1-column grids, smaller type and spacing, works down to 320px   |

## Submission

As requested in the test email, the submission must include:

- Test server URL: https://test-sample-01.onrender.com
- Data server (source code link / folder on the server): https://github.com/TieuAnW1/test-sample-01
