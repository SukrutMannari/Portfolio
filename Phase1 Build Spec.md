# Sukrut Mannari — Portfolio Website Build Spec (Phase 1)

> **For:** Sukrut to execute with an AI coding agent (Google Antigravity or Claude Code).
> **Goal:** A fast, scannable, Maker/blueprint-themed portfolio for Bergen County Academies (AEDT/ATCS) admissions, built to grow into a university (aeronautical engineering) portfolio later.
> **Confirmed:** canonical name = **Sukrut Mannari** (matches existing GitHub identity); domain candidate = **sukrutmannari.com**.

---

## 0. How to use this spec
Feed this file to your coding agent and build in the order of Section 8 (Learning Path). Build one tab at a time, deploy early, iterate. Do **not** try to build everything at once.

---

## 1. Tech stack
- **Framework:** Astro (latest). Static-first for speed; React/JS "islands" only where interactivity is needed.
- **Styling:** Tailwind CSS + a small set of CSS variables (design tokens in Section 3).
- **Content:** Astro Content Collections (Markdown + frontmatter) for `projects` and `journal`.
- **Interactivity:** PyScript/Pyodide (Python in browser), vanilla HTML5/Canvas or a light lib for games, Google `<model-viewer>` for 3D models.
- **Host:** Netlify or Cloudflare Pages (free tier, auto-deploy on git push).
- **Repo:** GitHub (keep it; it's what Sukrut already knows).

## 2. Design principle — TWO LAYERS PER TAB
Admissions reviewers scan fast. Every page must give the headline + 2–3 proof points instantly (the **scan layer**), then allow expansion for depth (the **drill-down**). Use cards, collapsible sections, and short labels. Readability is a hard requirement: high contrast, generous spacing, short paragraphs.

## 3. Design system — Maker / Blueprint aesthetic
**Fonts (Google Fonts)**
- Display/headers: `Space Grotesk` (technical, clean) — fallback `Chakra Petch` for a more "engineering" feel.
- Body: `Inter` (high legibility).
- Numbers / stats / code / labels: `JetBrains Mono` (gives the "technical readout" look).

**Color tokens (CSS variables)**
```css
:root{
  --bp-navy:#0A1B2B;        /* blueprint background */
  --bp-navy-2:#0E2540;      /* panels */
  --bp-grid:rgba(120,170,255,0.10); /* blueprint grid lines */
  --ink:#E6EEF7;            /* primary text on dark */
  --ink-dim:#9FB3C8;        /* secondary text */
  --accent:#22D3EE;         /* electric cyan — primary accent */
  --accent-2:#FF6B35;       /* engineering orange — secondary accent / CTAs */
  --line:rgba(120,170,255,0.25); /* technical-drawing borders */
}
```
**Motifs**
- Faint blueprint grid background on dark sections; lines via CSS `background-image` (repeating-linear-gradient).
- Cards framed like technical drawings: thin `--line` borders with small corner tick marks.
- Section headers prefixed with a monospace "drawing label" (e.g. `// ENGINEERING LAB`).
- Hero: animated wireframe element (rotating low-poly aircraft or a printed part) — use `<model-viewer>` or a simple CSS/SVG wireframe for Phase 1.
- Optional light "paper blueprint" mode toggle later.

## 4. Site map / navigation (flat tabs, one per facet)
| Tab | Route | Scan layer | Drill-down |
|---|---|---|---|
| Home | `/` | Tagline + hero stat strip + CTAs | links into Engineering / Code |
| About | `/about` | Bio + 4 core values | Story (India→US at 7; ankle-surgery resilience); goal: BCA → top-10 aeronautical eng. |
| Engineering Lab | `/engineering` | Project card grid | Per-project case studies (Section 6) |
| Code & Games | `/code` | Playable tiles | Live Python (PyScript) + mini-games + GitHub links |
| Academics & Awards | `/academics` | Stats table + timeline | RSM Algebra/Geometry, AMC 8, JHMMC, AoPS, NJHS, Honor Roll |
| Leadership & Service | `/leadership` | Role icon grid | Taekwondo mentoring, Library 27.75 hrs, Camp Bernie, TREPS, Wall of Kindness |
| Music | `/music` | Baritone sax / Stage Band | Alto→Tenor→Baritone progression; concert recaps |
| Journal | `/journal` | Reverse-chron tagged cards | New experience write-ups (the publishing engine) |
| Résumé | `/resume.pdf` | Download button | — |

Header nav = the tabs above. Keep it sticky and simple. Mobile = hamburger.

## 5. Folder structure
```
/
├─ astro.config.mjs
├─ tailwind.config.cjs
├─ public/
│  ├─ images/            # photos
│  ├─ models/            # .glb / .stl (3D prints)
│  └─ resume.pdf
└─ src/
   ├─ layouts/BaseLayout.astro
   ├─ components/        # Nav, Hero, StatStrip, ProjectCard, JournalCard, Tooltip, etc.
   ├─ content/
   │  ├─ config.ts       # collection schemas (Section 7)
   │  ├─ projects/       # one .md per project
   │  └─ journal/        # one .md per post
   ├─ pages/             # one .astro per tab + dynamic [slug] pages
   └─ styles/global.css  # tokens + blueprint motifs
```

## 6. Engineering Lab — port existing projects + new
Carry over from the current site (already real work):
1. **Bluetooth-Controlled Lego EV3 Car** — robotics control, Bluetooth protocol, gear ratios.
2. **Upcycled RC Glider** — aerodynamics, weight distribution, salvaged electronics, soldering.
3. **Arduino Steering Wheel (Unojoy)** — microcontroller I/O, analog→digital, C++ in Arduino IDE.
4. **Lego Master Builds** — structural/mechanical, spatial reasoning.

Add when ready: **Fusion 360 + Bambu Lab 3D prints** (embed `.glb`/`.stl` via `<model-viewer>`), **Proxmox/Home Assistant smart-home automation**, **FIRST Lego League sub-club** (with Mr. Hahn).

Each project page = problem → build process → skills demonstrated → photo gallery → (optional) 3D model → (optional) GitHub link.

## 7. Content schemas (`src/content/config.ts`)
**projects**
```
title (string) · summary (string) · date (date) · tags (string[])
skills (string[]) · thumbnail (image) · gallery (image[], optional)
model (string, optional, path to .glb/.stl) · github (string, optional)
status (enum: "complete" | "in-progress")
```
**journal**
```
title (string) · date (date) · category (enum: music|engineering|academics|service|competition|other)
cover (image) · excerpt (string) · gallery (image[], optional) · featured (boolean)
```
Journal entries are tagged by `category` so they auto-surface inside the matching tab (e.g. a `music` post appears on `/music`).

## 8. Build / learning path (ship at each step)
1. **Scaffold + layout:** `npm create astro`, add Tailwind, build `BaseLayout` + `Nav` + the blueprint `global.css`. Ship Home + About.
2. **Design system:** apply fonts, color tokens, blueprint grid, card style.
3. **Content collections:** define schemas; port the 4 maker projects; write the first Journal post.
4. **Deploy:** push to GitHub → connect Netlify/Cloudflare → attach custom domain. (You've done GitHub Pages — this is the same idea.)
5. **Islands:** add ONE PyScript demo on `/code` and ONE playable mini-game.
6. **3D:** embed one Fusion 360 / Bambu print with `<model-viewer>`.

## 9. Publishing a new experience (the easy workflow)
To add, e.g., a concert recap:
1. Tell your AI agent: *"Create a journal post titled '[X]', category music, dated [date], using these photos,"* and attach the images.
2. Agent creates `src/content/journal/2026-xx-xx-slug.md` with frontmatter + body, and copies images to `public/images/`.
3. `git push` → Netlify rebuilds → it appears on `/journal` **and** auto-surfaces on `/music`.

Phase 2 upgrade: add **Decap CMS** at `/admin` for a no-code visual editor (write + upload images from any browser, including phone) — useful when you don't want to run an agent.

## 10. Privacy checklist (public site for a minor)
- Decide: full name vs. first name + last initial.
- No home address, daily schedule, or location-identifying details.
- Use a dedicated contact email alias (not a personal inbox).
- Keep the site `noindex` until ready, then allow search indexing.
- Be deliberate about which photos go public.

## 11. Roadmap beyond Phase 1
- **Phase 2:** Code & Games tab fully built; gallery; Decap `/admin`; more 3D models.
- **Phase 3:** Regular Journal cadence (concerts, competitions, builds).
- **Phase 4 (post-BCA):** Re-point hero + résumé toward aeronautical engineering; add deeper research/projects and longer-form writing for university applications.