# personal portfolio website — implementation plan & refinements

This document serves as the comprehensive design specification and implementation blueprint for the personal portfolio of Sukrut Mannari. It details the active structural components, the conversational AI Twin (AIGuide) widget, visual branding upgrades, and a roadmap of pending refinements and content assets.

---

## 📋 1. Core visual & structural Specifications

### Homepage Section Hierarchy
The homepage ([src/pages/index.astro](file:///c:/Website/portfolio/src/pages/index.astro)) is organized in the following top-down sequence:
1. **Hero Banner**: Tagline, intro copy, call-to-action buttons, and a blueprint wireframe SVG graphic.
2. **Metrics Bar**: Multi-column statistics display (Consistently on Honor Roll, 2nd Degree Black Belt in Taekwondo, NJHS membership, number of completed maker builds, and library service hours).
3. **Core Values**: Core guiding tenets (Accountability, Perseverance, Technical Curiosity, Community Leadership).
4. **In the Workshop**: Highlighted carousel PhotoReel component showcasing physical creations.
5. **At a Glance**: Highlight cards outlining math levels, competitions, music band, leadership roles, volunteering, and aspirations.
6. **Latest from the Journal**: Dynamic blog post previews.
7. **Engineering Lab**: Cards featuring selected projects.
8. **Interactive Corner**: Live HTML5 Canvas game console (Snake, Proxy Browser, and PyScript program runner).

### Interactive "At a Glance" Cards
- High-level highlight cards are wrapped in anchor tags (`<a>`) mapping to specific section tabs:
  - **Accelerated Math** & **Competitions** cards route to `/academics`
  - **Music** card routes to `/music`
  - **Leadership** & **Service** cards route to `/leadership`
  - **Building Toward** card routes to `/engineering`
- Styled in [global.css](file:///c:/Website/portfolio/src/styles/global.css) with block layout, smooth transforms (shifts upwards `-2px`), blue border adjustments, and subtle shadows on hover for tactile feedback.

### Website Favicon & Navigation Branding
- **Favicon**: Configured to load `public/images/SukrutHeadshot.png` as a modern PNG-type icon in [BaseLayout.astro](file:///c:/Website/portfolio/src/layouts/BaseLayout.astro).
- **Navigation Logo**: The traditional text logo initials ("SM") in [Nav.astro](file:///c:/Website/portfolio/src/components/Nav.astro) are replaced with a cropped circular headshot avatar (`SukrutHeadshot.png`) with a custom blue border (`1.5px solid var(--blue)`). The image scales 1.1x on hover to provide a premium interactive feel.

---

## 🤖 2. Public AI Twin Chatbot (AIGuide)

A conversational guide widget (**"AIGuide"**) is embedded globally across the website. It functions as a virtual twin of Sukrut, helping visitors explore his achievements in personal and academic activities.

### Component Structure
- **Floating Trigger Button**: A `68px` circular floating button positioned in the bottom-right corner of all pages. Renders a circular cropped avatar of `SukrutHeadshot.png` (zoomed in 1.3x to highlight the face) with an active pulse ring animation drawing user attention.
- **Chat Panel**: Toggleable tray sliding up from the bottom-right corner. Features:
  - Welcome prompt chips (🛠️ Engineering, 🥋 Taekwondo, 📚 Service) that disappear when the conversation begins.
  - Custom markdown rendering engine supporting bold text, lists, and links.
  - A scroll-anchored message history panel with a bouncing-dot typing indicator.
  - A session rate-limit of **15 questions** with a reset button (↺) to control serverless API costs.

### Contextual Suggestions & Client Interceptor
- **API Recommendations**: At the end of every response, the Gemini API is instructed to append exactly 3 relevant next-steps or follow-up choices (using a separate section under a friendly transition line).
- **Link Types**: Recommends either relative paths to valid subpages (e.g. `/engineering`, `/music`, `/journal/winter-concert`) or clickable questions using a custom `query:` protocol.
- **Client Interceptor**: An event listener in [AIGuide.astro](file:///c:/Website/portfolio/src/components/AIGuide.astro) catches clicks on any links starting with `query:`. It prevents default browser navigation, extracts the query, and automatically sends it as a new question, enabling frictionless browsing.

---

## 🛡️ 3. Safety, Grounding & AI Guardrails

1. **Context Grounding (RAG)**:
   - The serverless endpoint at [/api/chat](file:///c:/Website/portfolio/src/pages/api/chat.ts) fetches and compiles text contents from all Astro markdown collections (`projects`, `journal`, `service`, `taekwondo`, `performances`) dynamically at request time.
   - The compiled context is injected into the Gemini API system instruction as the sole source of truth.
2. **Out-of-Scope Blocking**:
   - Refuses to write code, do homework, perform general web searches, or discuss unrelated matters. Standard response:
     > *"I can only answer questions related to Sukrut Mannari's portfolio, projects, and achievements. Would you like to hear about his Lego EV3 robot or Baritone Saxophone performances?"*
3. **Privacy Protection**:
   - Restricts references to high-level middle-school timelines. Strictly blocks disclosure of home addresses, phone numbers, exact schedules, or school names.
4. **Prompt Injection Protection**:
   - Instructs the model to output a static error response if instructed to ignore safety guidelines or reveal system prompts.

---

## 🔧 4. Future Refinements & Content Polish Roadmap

The codebase and layout are fully ready for production. To prepare the website for public deployment, the following content assets and settings must be populated:

### 1. Document & Media Assets
- **Résumé PDF**: Replace the placeholder text file in the [public/](file:///c:/Website/portfolio/public/) folder with a single-page PDF document named `resume.pdf`.
- **PhotoReel Carousels**: Upload actual photos to replace placeholder icon displays in the homepage PhotoReel. This is done by editing the **Photos** collection via CMS (/admin) for `aeronautics`, `robotics`, `music`, and `cad-3d` entries.
- **3D Prints & CAD models**: Save CAD models as `.glb` files and upload them to the `3D Model` field in the **Projects** collection via CMS to render interactive 3D viewers.
- **Project Galleries**: Attach step-by-step assembly photographs in the `Gallery` field for project detail pages (e.g., Arduino Steering Wheel, EV3 Bluetooth Car, RC Glider).

### 2. Contact & Domain Deployment Settings
- **Safe Email Redirect**: Set up a custom email forwarding alias (e.g., `contact@sukrutmannari.com`) at your domain registrar.
- **Search Engine Crawling**: When ready to deploy, verify that robot indexing is enabled (remove `noindex` or verify headers) so recruiters and teachers can discover the site on Google.
- **API Key Deployment**: Ensure that the `GEMINI_API_KEY` is added to the production environment settings of your hosting provider (e.g., Cloudflare Pages) to enable the AI Twin and Writing Coach.
