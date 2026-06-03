# Sukrut Mannari — Portfolio Website Build Spec (Phase 2)

> **Prerequisite:** Phase 1 is live (Astro + Tailwind site deployed on Netlify/Cloudflare with the blueprint light theme, content collections for `projects` and `journal`, and the core tabs).
> **Phase 2 goal:** Make the site *interactive* and *self-publishable* — Sukrut can add projects, journal posts, and photos with no code, and visitors can play his programs and games in the browser.
> **Audience reminder:** built for a 13-year-old to run mostly himself, with an AI agent (Antigravity/Claude) as helper.

---

## 1. Scope of Phase 2
1. **`/admin` no-code publishing** (Decap CMS) — visual editor for projects, journal posts, and photos.
2. **Code & Games tab** — live Python (PyScript/Pyodide) + playable mini-games.
3. **Photo gallery** — reusable gallery component + a homepage photo reel (already mocked).
4. **Homepage additions** (already designed in v3 mockup): photo reel, maker-statement quote, tools ribbon, auto "Latest from Journal" strip.
5. **3D model viewer** — `<model-viewer>` for Fusion 360 / Bambu prints on project pages.

---

## 2. The `/admin` publishing system (Decap CMS) — priority item

### Why Decap
- Free, open-source, git-based: it writes the same Markdown files Phase 1 already uses — no database, no new hosting.
- Gives Sukrut a **visual form + drag-drop image upload** at `yourdomain.com/admin`, usable from a laptop or phone.
- Every save becomes a normal git commit → Netlify/Cloudflare auto-rebuilds → live in ~1 minute.

### How it works (the flow for Sukrut)
1. Go to `yourdomain.com/admin`, log in (identity provider — see auth below).
2. Pick a collection: **Projects**, **Journal**, or **Photos**.
3. Click **New** → fill in a form (title, category dropdown, status, text fields, image uploads).
4. Click **Publish**. Done. No markdown, no git, no terminal.

### Setup tasks for the agent
- Add the Decap admin at `public/admin/` with `index.html` + `config.yml`.
- Configure `config.yml` collections to **exactly match** the Phase 1 content schemas (so files stay compatible):
  - **projects** → fields: title, category (select: aero/robotics/electronics/cad/automation/structures), status (select: complete/in-progress), summary, skills (list), thumbnail (image), gallery (image list), model (file, optional), github (string, optional), date, body (markdown).
  - **journal** → fields: title, date, category (select: music/engineering/academics/service/competition/other), cover (image), excerpt, gallery (image list), featured (boolean), body (markdown).
  - **photos** (for the reel/gallery) → fields: image, caption, tag, order.
- Set the media folder to `public/images/` so uploads land where the site expects them.
- Enable **editorial workflow** (optional) so posts can be saved as drafts before publishing.

### Authentication (parent action)
Decap needs an auth provider so only Sukrut can log in. Two common options:
- **Netlify Identity + Git Gateway** (simplest if hosting on Netlify) — flip on Identity, invite Sukrut's email, enable Git Gateway. No GitHub account exposure.
- **GitHub OAuth** (works anywhere, incl. Cloudflare) — requires a small OAuth app; the agent can scaffold an OAuth proxy or use a hosted one.
> Recommendation: if on Netlify, use **Netlify Identity** — fewest moving parts for a student. Parent owns the Identity admin and invites Sukrut.

### Two ways to publish (keep both)
- **Agent path:** "Add a new project/journal post…" → agent writes the file. Good at a computer with the agent open.
- **`/admin` path:** visual form from any browser/phone. Good for quick event recaps (e.g., a concert that evening).
Both produce identical Markdown — fully interchangeable.

---

## 3. Code & Games tab

### Layout
Reuse the **sidebar-group pattern** from the Engineering tab. Suggested categories: **Python Programs**, **Browser Games**, **Experiments**. Each item is a tile; clicking opens an inline player.

### Live Python (PyScript / Pyodide)
- Add PyScript via CDN on the Code page only (keep it off other pages for speed).
- Each Python program = a content entry with: title, description, the `.py` source, and a "Run ▶" button that executes in a PyScript block with an output area.
- Provide a small reusable `<PyRunner>` island: shows code (read-only, syntax-highlighted) + Run button + output console.
- Keep programs sandboxed and input-driven (e.g., a calculator, a number-guessing game, a unit converter). No file-system or network access needed.

### Mini-games
- Each game = a self-contained HTML/Canvas/JS island, loaded lazily when its tile is opened (so the page stays fast).
- Start with one simple game (e.g., the classics he's built). Add a consistent frame: title, controls legend, restart button, GitHub link.
- Store game source in `src/games/<slug>/` and the metadata in a `games` content collection (title, category, description, thumbnail, entry file, github).

### `games` schema
```
title · category (python|game|experiment) · description
thumbnail (image) · entry (string path) · github (string, optional) · date
```

---

## 4. Photo gallery + homepage reel

### Homepage reel (mocked in v3)
- Auto-advancing strip, 4–6 action photos, captions, manual prev/next + dot nav.
- Source images from the **photos** content collection (so it's editable in `/admin`), ordered by `order`.
- Keep it muted/secondary; lazy-load images; provide `alt` text on every image.

### Reusable gallery component
- A responsive grid + lightbox, used on project pages and a future standalone Gallery if wanted.
- Lazy-load, captions, keyboard-navigable lightbox (Esc/arrows).

---

## 5. 3D model viewer
- Add Google `<model-viewer>` (web component via CDN) as a small island.
- On a project page, if `model` is set, render the viewer (camera-controls, auto-rotate, reasonable default lighting); else show the photo gallery.
- Workflow: export from Fusion 360 → `.glb` (or STL→glb) → upload via `/admin` (or drop in `public/models/`) → set the project's `model` field.
- Keep model files reasonably small (<5–10 MB) for fast load.

---

## 6. Performance & quality guardrails
- Interactivity is opt-in per page: PyScript only on Code, `<model-viewer>` only where a model exists, games lazy-loaded on open. The rest of the site stays static and fast.
- Every image: explicit dimensions + `alt` text + lazy loading.
- Run a Lighthouse pass; target strong performance/accessibility scores (faculty may view on phones/slow networks).
- Keep the edit-mode toggle convention from Phase 1 on any new HTML pages (top-right), unless excluded.

---

## 7. Build order (ship at each step)
1. **Decap `/admin`** + auth + matching schemas → test by publishing one journal post end-to-end from the browser.
2. **Homepage additions** (reel, maker quote, tools ribbon, Latest-from-Journal) wired to the `photos` + `journal` collections.
3. **3D model viewer** island → enable on one project (a Fusion 360 print).
4. **Code & Games tab** scaffold + sidebar groups → add ONE PyScript program.
5. Add ONE playable mini-game with the standard frame.
6. **Gallery component + lightbox** → apply to project pages.
7. Lighthouse pass + accessibility cleanup.

---

## 8. Parent / setup action items
- Decide and configure the **auth provider** for `/admin` (Netlify Identity recommended); invite Sukrut.
- Confirm which **photos with faces** are cleared for public posting (privacy checklist, Phase 1 spec §10).
- Confirm any **GitHub repos** Sukrut wants linked from Code & Games are public and appropriate.
- Optional: a dedicated **contact email alias** if a contact section is added.

---

## 9. What Phase 2 deliberately leaves to later (Phase 3 / 4)
- Regular journal cadence (ongoing content, not a build task).
- University-admissions repositioning of hero/résumé toward aeronautical engineering.
- Deeper research write-ups, longer-form articles, recommendation/testimonial section.
- Analytics, advanced SEO, multi-language — only if wanted later.
