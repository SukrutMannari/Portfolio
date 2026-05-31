# Sukrut Mannari — Portfolio (Astro starter scaffold)

A fast, scannable, Maker/blueprint-themed portfolio. Built with **Astro** + plain CSS (one design-system file). Content (projects, journal) lives in Markdown so adding work means writing a small file, not editing layout.

> Phase 1 scaffold. Matches the approved v4 mockup. See the Phase 1 & Phase 2 build specs for the full plan.

## Run it locally

You need **Node.js (LTS)** installed first.

```bash
npm install      # installs Astro (the only dependency)
npm run dev      # start dev server → open http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

If `npm run dev` works and the homepage shows the hero, photo reel, stats, the playable Snake game, and the featured projects — the scaffold is healthy. Build out from here.

## What's included
- **Home** (`/`) — hero, photo reel, stat strip, latest-from-journal, Interactive Corner (playable Snake + app tiles), core values, featured projects, at-a-glance.
- **Engineering** (`/engineering`) — toolkit ribbon, discipline sidebar with live counts + filter, project cards grouped by category (incl. AI & Autonomy).
- **Project detail** (`/projects/<slug>`) — generated from each project file; specs sidebar, body, skills, gallery, optional 3D model viewer.
- **Journal** (`/journal`, `/journal/<slug>`) — reverse-chron list + post pages.
- **About** — full bio, values, story, goals.
- **Code, Academics, Leadership, Music** — started pages with their own contextual toolbox ribbons (build these out next).

## Project structure
```
src/
  styles/global.css        ← all theme tokens + component classes (edit the look here)
  data/site.ts             ← nav, engineering categories, per-section toolboxes, site meta
  layouts/BaseLayout.astro ← page shell: fonts, <head>/SEO, nav, footer
  components/               ← Nav, Footer, Toolbox, ProjectCard, CategoryIcon, PhotoReel,
                              LatestJournal, InteractiveCorner
  content/
    config.ts               ← schemas for projects + journal
    projects/*.md            ← one file per project
    journal/*.md             ← one file per journal post
  pages/                     ← one file per route
public/
  images/                    ← put photos here, reference as /images/your-photo.jpg
  models/                    ← put .glb 3D models here
  resume.pdf                 ← add this (see RESUME-GOES-HERE.txt)
  favicon.svg
```

## Add a new ENGINEERING project
Create `src/content/projects/my-project.md`:
```md
---
title: "My Project"
category: robotics        # aero | robotics | electronics | cad | automation | ai | structures
status: complete          # complete | in-progress | planned
summary: "One-line hook for the card."
skills: ["Skill A", "Skill B"]
thumbnail: "/images/my-project.jpg"   # optional
gallery: ["/images/mp-1.jpg", "/images/mp-2.jpg"]  # optional
model: "/models/my-project.glb"       # optional — turns on the 3D viewer
github: "https://github.com/..."      # optional
featured: false            # true = show on homepage
order: 8
date: 2026-06-01
---

## The Challenge
...
## The Build
...
```
The card auto-files under its category, the sidebar count updates, and a detail page is generated. No layout editing.

## Add a new JOURNAL post
Create `src/content/journal/2026-06-01-my-post.md`:
```md
---
title: "My Post"
date: 2026-06-01
category: music          # music | engineering | academics | service | competition | other
cover: "/images/my-post.jpg"   # optional
excerpt: "One sentence shown on the card."
---

Body goes here.
```
It appears on `/journal` and (if it's one of the newest 3) on the homepage automatically.

## Add a new discipline category
Add one line to `CATEGORIES` in `src/data/site.ts`, add it to the `category` enum in `src/content/config.ts`, and (optionally) an icon in `src/components/CategoryIcon.astro`. Then use the new key in a project's frontmatter.

## Editing copy
All visible copy marked `data-edit` can be previewed/edited live: open any page with `?edit` in the URL (e.g. `/about?edit`), click the pencil top-right, and click text to rewrite. This is a private authoring aid — it's hidden from normal visitors and changes are not saved. For real edits, change the source files (or use the `/admin` CMS added in Phase 2).

## Deploy (Netlify or Cloudflare Pages)
1. Push this repo to GitHub.
2. In Netlify/Cloudflare Pages, "New site from Git" → pick the repo.
3. Build command `npm run build`, publish directory `dist`.
4. Add the custom domain (e.g. sukrutmannari.com) and point DNS.
5. Every `git push` auto-rebuilds and redeploys.

## Notes / TODO
- Add `public/resume.pdf` (nav + hero link to it).
- Replace photo-reel placeholders with real photos (set `src` in `PhotoReel.astro`, or wire to a `photos` collection in Phase 2).
- Per the spec, keep the site `noindex` until polished, then allow indexing.
- Design tokens (colors, fonts) live at the top of `global.css`.
