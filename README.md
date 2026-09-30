# Parth Bhutka — Portfolio

A blueprint / drafting-table themed portfolio with a light ("Paper") and dark ("Blueprint") mode toggle.

## Folder structure

```
portfolio/
├── index.html      # page markup and content
├── css/
│   └── style.css   # all styling, theme tokens, responsive rules
└── js/
    └── script.js   # theme toggle, mobile nav, skills data, scroll reveal
```

## Running it

No build step needed. Just open `index.html` in a browser, or serve the folder locally, e.g.:

```
npx serve .
```

or with Python:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Editing content

- **Skills**: edit the `specs` array at the top of `js/script.js`.
- **Projects**: edit the two `<article class="plan-card">` blocks in `index.html` (Sheet 03).
- **Education**: edit the `.survey-item` blocks in `index.html` (Sheet 04).
- **Colors**: edit the CSS variables in `:root` (light theme) and `html.dark` (dark theme) at the top of `css/style.css`.
- **LinkedIn link**: update the `href="#"` on the anchor with `id="linkedinLink"` in `index.html` with your actual profile URL.

## Fonts

Loaded from Google Fonts via `<link>` tags in `index.html`: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels/data).
