# Task Checklist & Actions for Sukrut

This document outlines the validation status of the portfolio project against the Phase 1 and Phase 2 specifications and additional design decisions. It lists completed coding work, followed by a step-by-step action checklist for Sukrut Mannari to upload his assets and configure his domain.

---

## 📊 1. Codebase Completeness Checklist

The following table summarizes the implementation status of all codebase components. All development and design changes are **100% complete**.

| Component | Spec Requirement | Status | Next Step / Notes |
| :--- | :--- | :--- | :--- |
| **Astro Framework & CSS** | ASTRO v4 + custom HSL CSS tokens + blueprint grid background | **[x] Complete** | Verified by build and visual preview. |
| **Homepage Layout** | Tagline + dynamic stat strip + maker quote + PhotoReel + Interactive Corner | **[x] Complete** | Sections reordered. Code is fully optimized. |
| **About Page** | Bio + 4 core values + India-to-US story + broken ankle recovery narrative | **[x] Complete** | Fully implemented and mapped to `Taekwondo10.jpeg`. |
| **Engineering Lab** | Card grid grouped by discipline with sidebar filters + initial maker projects | **[x] Complete** | Ready for interactive 3D viewers once `.glb` models are uploaded. |
| **Code & Games** | Playable Canvas Snake + Proxy Browser + PyScript program runner | **[x] Complete** | Astro Shooter game was skipped per user direction. |
| **Academics Page** | Stats + Math progression timeline (RSM, AoPS, Master Prep) + Olympiad cards grid | **[x] Complete** | Timeline and competition grid are fully responsive. |
| **Leadership & Service** | Role cards + live stats (library hours, sessions, tkd) + filtered activities log | **[x] Complete** | Fully built and integrated with live collections. |
| **Music Page** | Progression timeline (Alto -> Tenor -> Baritone) + filtered performances log | **[x] Complete** | Fully built and integrated with live collections. |
| **Journal Index Page** | Reverse-chron tagged cards with category filters | **[x] Complete** | Fully built and integrated with live collections. |
| **Decap CMS (/admin)** | Manual init with dynamic `base_url` + collection configurations | **[x] Complete** | Interceptors patch configured for seamless local and cloud editing. |
| **Writing Coach API** | Manual "Get AI Feedback" button in CMS preview editor | **[x] Complete** | Leverages Gemini 2.5 Flash for structural questions & asset warnings. |
| **Public AI Twin Chatbot** | Trigger badge with pulse animation + circular headshot crop + grounding guardrails | **[x] Complete** | Restricts leakage of private data, email, or exact schedule. |
| **AI Recommendation Links** | Clickable query links + relative path suggestions after every bot response | **[x] Complete** | Incepts `query:` protocol links to submit questions seamlessly. |
| **At a Glance Links** | Clickable homepage Highlights cards routing to target section pages | **[x] Complete** | Accelerated Math/Comps route to `/academics`, Music routes to `/music`, Leadership/Service route to `/leadership`, Building Toward routes to `/engineering`. |
| **Branding Upgrades** | SukrutHeadshot.png favicon and circular crop navigation bar logo | **[x] Complete** | Favicon set to PNG type. Navigation logo cropped to circle with a blue outline. |

---

## 👦 2. Actions for Sukrut (Pending Content & Asset Checklist)

The table below summarizes the content and asset tasks required to finalize the portfolio for public viewing. **You can perform almost all of these directly through the visual editor at [https://sukrutmannari.com/admin/](https://sukrutmannari.com/admin/) once logged in.**

| Task / Asset | Category | Current Status | Action & CMS Instructions |
| :--- | :--- | :--- | :--- |
| **Résumé PDF** | File Uploads | **[ ] Outstanding** | Save your résumé as a single-page PDF named `resume.pdf`. Move/upload this file directly to the [public/](file:///c:/Website/portfolio/public/) directory (overwriting the existing text file placeholder). *Note: The visual CMS cannot directly overwrite this system file, so please copy it manually.* |
| **Aeronautics Reel Photo** | Homepage Reel | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Photos** collection, click the **aeronautics** entry, and upload a test-flight photo (e.g. `glider.jpg`) in the `Image` field. Save and publish. |
| **Robotics Reel Photo** | Homepage Reel | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Photos** collection, click the **robotics** entry, and upload a robot assembly photo in the `Image` field. Save and publish. |
| **Music Reel Photo** | Homepage Reel | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Photos** collection, click the **music** entry, and upload a stage band photo in the `Image` field. Save and publish. |
| **CAD / 3D Reel Photo** | Homepage Reel | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Photos** collection, click the **cad-3d** entry, and upload a photo of your 3D printed parts. Save and publish. |
| **Upcycled RC Glider** | Projects | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Projects** collection, click the **Upcycled RC Glider** entry, and upload assembly step photos in the `Gallery` field. Save and publish. |
| **Lego EV3 Car** | Projects | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Projects** collection, click the **Lego EV3 Car** entry, and upload chassis photos in the `Gallery` field. Save and publish. |
| **Arduino Steering Wheel** | Projects | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Projects** collection, click the **Arduino Steering Wheel** entry, upload your `wheel-bracket.glb` file under the `3D Model` field, and add build photos in the `Gallery` field. Save and publish. |
| **Library Service Hours** | Service Log | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Service Log** collection, click **New Service Log**, enter the date, hours, role, category (**library**), and notes about your volunteering session. Save and publish. |
| **Taekwondo teaching** | Taekwondo Log | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Taekwondo Log** collection, click **New Taekwondo Log**, enter the date, event type (**teaching**), and details of your mentoring/grading session. Save and publish. |
| **Stage Band performance** | Performances | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Performances** collection, click **New Performances**, enter the date, venue, instrument (**Baritone Saxophone**), performance type (**band**), and cover image. Save and publish. |
| **Math Competitions** | Academics / Journal | **[ ] Outstanding** | **Use CMS**: Log in to `/admin`, go to the **Journal Posts** collection, click **New Journal Post**, set category to **academics**, and write an article summarizing your experience and scores in AMC 8 or Noetic. Save and publish. |
| **Safe Contact Email Alias** | Settings | **[ ] Outstanding** | Set up a custom email redirect/forwarder (e.g. `contact@sukrutmannari.com`) on your domain registrar so recruiters and teachers can securely email you. |
| **Allow Search Indexing** | Settings | **[ ] Outstanding** | Remove any `noindex` HTML tags or header settings from your production environment when launching the site publicly, permitting Google to crawl and index your portfolio. |
| **Production API Key** | Settings | **[ ] Outstanding** | Configure the `GEMINI_API_KEY` in your production hosting panel (e.g. Cloudflare Pages environment variables) so the chatbot can respond on the live website. |
