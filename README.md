# ~/blog — i3/arch rice blog

A minimal, zero-dependency blog with **Catppuccin Mocha** palette and i3/Arch Linux aesthetics.
Compatible with **GitHub Pages** — no Jekyll, no build step, just static files.

## Features

- 🎨 Catppuccin Mocha theme (i3/polybar style)
- ✍️ Built-in Markdown editor with live preview
- 🏷️ Tag system with filtering
- 🔍 Full-text search
- 📦 Export/import posts as `.md` or JSON backup
- 📱 Responsive (mobile-friendly)
- ⚡ Zero dependencies, zero build step

## Deploy to GitHub Pages

```bash
# 1. Create a new repo on GitHub (e.g. username.github.io)
# 2. Clone it
git clone https://github.com/username/username.github.io
cd username.github.io

# 3. Copy all blog files here
cp -r /path/to/blog/* .

# 4. Push
git add .
git commit -m "initial rice 🌸"
git push origin main

# 5. In repo Settings → Pages → Source: main branch / root
```

Your blog will be live at `https://username.github.io`

## File Structure

```
blog/
├── index.html      ← single page app entry
├── css/
│   └── style.css   ← catppuccin mocha theme
├── js/
│   └── app.js      ← blog engine (markdown, routing, storage)
└── README.md
```

## Writing Posts

1. Click **~/new-post** (or press via statusbar workspace 2)
2. Fill in title, tags, and write Markdown
3. Live preview on the right
4. **:w (save)** stores to localStorage
5. **export .md** downloads a Markdown file for version control

## Keyboard Shortcuts (in editor)

| Key | Action |
|-----|--------|
| `Ctrl+S` | Save post |
| `Tab` | Indent 2 spaces |

## Customization

All colors are CSS variables in `css/style.css` under `:root`.
Change `--accent` to your preferred catppuccin color.

```css
:root {
  --accent: var(--blue);   /* change from mauve to blue */
}
```

## Palette

| Color | Hex |
|-------|-----|
| Base | `#1e1e2e` |
| Mauve | `#cba6f7` |
| Blue | `#89b4fa` |
| Green | `#a6e3a1` |
| Peach | `#fab387` |
| Text | `#cdd6f4` |

---
*btw i use arch*
