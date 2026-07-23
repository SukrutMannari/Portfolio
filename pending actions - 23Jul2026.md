# 📋 Portfolio Pending Actions & Per-Article BCA Upgrade Guide (23 Jul 2026)

This document contains **per-article pending actions** and specific bulleted writing prompts to prepare Sukrut's portfolio website for publication and maximum impact with the **Bergen County Academies (BCA) Admissions Panel**.

> [!NOTE]
> All 13 previously logged content and media tasks (including steering wheel V1 vs V2, Orion PC remote boot for India trip, laptop repair story, saxophone stage band logs, OpenRocket simulations, and automated image compression) have been completed and verified. The NJSLA mock test task has been removed as only the BCA mock test site was built.

---

## 🎯 Master Per-Article Action Checklist

Use this checklist to track enhancements article-by-article before taking the site live.

| Status | Article / Page Path | Core Enhancement & BCA Callout | Priority |
| :---: | :--- | :--- | :---: |
| [ ] | `src/content/projects/arduino-projects.md` | Add C++ signal smoothing code block & V1 vs V2 jitter/wiring debug box. | 🔴 High |
| [ ] | `src/content/projects/fixing-laptop.md` | Add hardware debug box on ribbon cable diagnosis & anti-static safety notes. | 🔴 High |
| [ ] | `src/content/projects/remote-access.md` | Add Wake-on-LAN magic packet / SSH key config block & India trip security note. | 🔴 High |
| [ ] | `src/content/projects/bca-mock-test.md` | Add prompt engineering details in Lovable & peer impact metrics. | 🔴 High |
| [ ] | `src/content/projects/linux-double-boot.md` | Specify Linux distribution, swap/root (`/`) partition sizes, & ROS terminal tools. | 🟡 Medium |
| [ ] | `src/content/projects/home-assistant-setup.md` | Add 5-line YAML automation snippet & 100% local privacy control callout. | 🟡 Medium |
| [ ] | `src/content/projects/sim-rocket-builds.md` | Add OpenRocket stability margin metrics (CP vs CG) & motor impulse comparison. | 🟡 Medium |
| [ ] | `src/content/projects/sim-airframe-builds.md` | Add wing aspect ratio, center-of-lift, & dihedral angle stability details. | 🟡 Medium |
| [ ] | `src/content/projects/website-antigravity.md` | Highlight Astro + Tailwind CSS + Decap CMS tech stack & AI pair-programming. | 🟢 Low |
| [ ] | `src/content/performances/district-jazz-night-2026.md` | Detail specific jazz pieces performed & Lead Baritone Saxophone section leadership. | 🟡 Medium |
| [ ] | `src/content/performances/spring-concert-2026.md` | Describe anchoring the stage band's bassline & woodwind/brass balance. | 🟡 Medium |
| [ ] | `src/content/performances/winter-concert-2026.md` | Highlight rhythmic precision & stage band ensemble performance. | 🟡 Medium |
| [ ] | `src/content/performances/teen-arts-festival-2026.md` | Note county-wide selection at Bergen Community College & link official program. | 🟢 Low |
| [ ] | `src/pages/index.astro` | Add 4-card metric banner (**15+** Sims, **35+** Library Hrs, **6+ Yrs** Taekwondo, **3 Yrs** Bari Sax). | 🔴 High |
| [ ] | `src/pages/about.astro` | Align Goals section with BCA STEM academy labs, VEX/FLL, & research. | 🟡 Medium |
| [ ] | `src/pages/resume.astro` | Add print-optimized stylesheet / *"Save as 1-Page PDF"* button. | 🟡 Medium |
| [ ] | `src/pages/academics.astro` | Highlight RSM Algebra Honors & Geometry, AMC 8, and MATHCOUNTS prep. | 🟢 Low |

---

## ✍️ Per-Article Bulleted Writing Guidance for Sukrut

Below is exact bullet-point guidance on what Sukrut can add to enhance each specific article:

---

### 💻 1. Computer Science, AI & Web Projects

#### 📄 `src/content/projects/bca-mock-test.md` — Mock BCA Admission Test Site
- [ ] **Peer Impact Story**: Explain building the app to help classmates practice under realistic BCA exam pressure without expensive prep courses.
- [ ] **Prompt Engineering**: Detail using Lovable.dev to iterate on UI state management, question navigation, and timer logic.
- [ ] **Core Features**: List 3 main features: timed test modules, automatic score calculators, and realistic question formats.
- [ ] **BCA Panel Relevance**: Highlights using tech skills to solve a real student community need.

#### 📄 `src/content/projects/website-antigravity.md` — Portfolio Development with Antigravity AI
- [ ] **Modern Tech Stack**: Explain using Astro (static site generator), Tailwind CSS, Decap CMS, and Google's Antigravity AI programmer.
- [ ] **Workflow Insights**: Share lessons learned about clean component architecture, Git branching, and automated builds.

---

### 🔧 2. Hardware, Systems & Networking

#### 📄 `src/content/projects/arduino-projects.md` — Microcontrollers & Steering Wheel V1/V2
- [ ] **C++ Code Snippet**: Embed a 10-line C++ code block showing the potentiometer signal-smoothing loop (moving-average filter).
- [ ] **Iterative Redesign (V1 vs V2)**: Detail upgrading from a 180° limited wheel (V1) to a >270° wheel (V2) with custom joycon button wiring, multi-gear shifter assembly, and cleaner harness.
- [ ] **Engineering Debug Box**: Include a debug note explaining how analog line signal jitter was eliminated.

#### 📄 `src/content/projects/fixing-laptop.md` — Laptop Keyboard Repair
- [ ] **Hardware Debug Box**: Detail isolating the unresponsive keys to a damaged connection ribbon cable rather than motherboard failure.
- [ ] **Safety & Precision**: Mention disconnecting the internal battery first for safety, anti-static precautions, and ribbon connector unseating.
- [ ] **Key Skill**: Emphasize hardware troubleshooting confidence and precision electronics handling.

#### 📄 `src/content/projects/remote-access.md` — Orion PC Remote Boot (India Trip)
- [ ] **Code / Command Snippet**: Add a short snippet showing the Wake-on-LAN magic packet configuration or SSH key command.
- [ ] **Real-World Story**: Detail waking up and logging into his Orion PC from India over hotel Wi-Fi without leaving the PC running 24/7.
- [ ] **Security Callout**: Highlight disabling password logins, dynamic DNS, and forwarding only encrypted SSH ports.

#### 📄 `src/content/projects/linux-double-boot.md` — Linux Dual Boot Setup
- [ ] **Partition Specs**: Specify shrinking Windows partition, allocating root (`/`) and swap space, and GRUB bootloader setup.
- [ ] **Engineering Purpose**: Explain needing native Linux for ROS (Robot Operating System), terminal tools, and shell scripting.

#### 📄 `src/content/projects/home-assistant-setup.md` — Home Assistant Integration
- [ ] **YAML Code Snippet**: Include a 5-line YAML snippet showing an automated lighting or safety alert rule.
- [ ] **Local Privacy**: Highlight choosing Home Assistant to keep home automation 100% local and independent from cloud outages.

---

### 🚀 3. Aerodynamics & Flight Simulations

#### 📄 `src/content/projects/sim-rocket-builds.md` — Model Rocket Flight Simulation
- [ ] **Simulation Metrics**: Include specific OpenRocket figures: Center of Pressure (CP) vs. Center of Gravity (CG) stability margin and predicted max apogee altitude.
- [ ] **Variables Comparison**: Compare testing Estes C6-5 vs. D12-5 motors and fin shape drag coefficients.

#### 📄 `src/content/projects/sim-airframe-builds.md` — Custom Airframe Aerodynamics
- [ ] **Flight Mechanics**: Detail aerodynamic factors: wing aspect ratio, center of lift, and wing dihedral angle for passive stability.

---

### 🎷 4. Music Performances

#### 📄 Performance Articles (`district-jazz-night-2026`, `spring-concert-2026`, `winter-concert-2026`)
- [ ] **Instrument Leadership**: Detail playing Lead Baritone Saxophone as the sonic/harmonic foundation for the stage band and jazz ensemble.
- [ ] **Musical Precision**: Connect musical rhythmic precision and section leadership to the discipline applied in STEM builds.

#### 📄 `src/content/performances/teen-arts-festival-2026.md`
- [ ] **Recognition**: Note selection for the county-wide festival at Bergen Community College and link the official brochure.

---

### 🏛️ 5. Core Site Pages & Admissions Presentation

#### 📄 `src/pages/index.astro` — Home Page
- [ ] **At-a-Glance Impact Banner**: Add a 4-card metric banner: **15+** Sims Built | **35+** Library Hours | **6+ Yrs** Taekwondo Black Belt | **3 Yrs** Lead Bari Sax.

#### 📄 `src/pages/about.astro` — About Page
- [ ] **Align STEM Goals**: Refine the Goals section to explicitly connect aspirations with BCA academy labs, VEX/FLL robotics, and collaborative engineering.

#### 📄 `src/pages/resume.astro` — Resume Page
- [ ] **Printable PDF Option**: Add a print-optimized stylesheet / *"Save as 1-Page PDF"* button.

#### 📄 `src/pages/academics.astro` — Academics Page
- [ ] **Math Competition Prep**: Highlight Russian School of Math (RSM) Algebra Honors & Geometry, AMC 8, and MATHCOUNTS prep.

---

## 🔒 Pre-Launch Security & Host Environment Checklist

- [x] **PII Audit**: ✅ Passed (0 phone numbers, 0 email addresses, 0 street addresses, 0 exposed secret keys).
- [x] **Cloudflare Environment Variables**: ✅ Passed (`GEMINI_API_KEY`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` set).
- [ ] **WAF API Rate Limiting**: Enable Cloudflare WAF rate limiting for `/api/chat` to protect against API key spam.
