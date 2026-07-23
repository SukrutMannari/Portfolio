# 📋 Portfolio Pending Actions & BCA Admissions Upgrade Guide (23 Jul 2026)

This document contains **only the remaining active pending actions** and strategic upgrade recommendations to prepare Sukrut's portfolio website for publication and maximum impact with the **Bergen County Academies (BCA) Admissions Panel**.

> [!NOTE]
> All 13 previously logged content and media tasks (including steering wheel V1 vs V2, Orion PC remote boot for India trip, laptop repair story, saxophone stage band logs, OpenRocket simulations, and automated image compression) have been completed and verified.

---

## 🎯 Active Pending Actions Checklist

Use this checklist to track all remaining open tasks before launching live.

### Section A: Content & Portfolio Additions

| Status | Task ID | Category | Item | Core Action Required | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [ ] | **CS-01** | CS / AI | **Mock NJSLA Test Site** | Create `src/content/projects/njsla-mock-test.md` using Lovable. Include problem statement (helping classmates prepare), features (timer, score calculator), and test simulator screenshot. | 🔴 High |

---

### Section B: BCA Admissions Panel Strategic Upgrades

These recommendations are designed to make Sukrut's portfolio stand out to BCA admissions officers (specifically for **ATCS** - Tech & Computer Science, and **AEDT** - Engineering & Design Tech):

| Status | Task ID | Category | Item | Recommended Action | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [ ] | **BCA-01** | Engineering | **Engineering Debug Callouts** | Add an explicit *"Failure & Debug Log"* callout box to top projects (`arduino-projects`, `fixing-laptop`, `remote-access`) highlighting what failed during testing and how it was fixed. | 🔴 High |
| [ ] | **BCA-02** | UI / UX | **At-a-Glance Impact Stats** | Add a 4-card metric banner on Home or About page: **15+** Engineering/Aero Sims, **35+** Library Volunteer Hours, **6+** Years Taekwondo (2nd Degree Black Belt), **3 Years** Lead Baritone Saxophone. | 🔴 High |
| [ ] | **BCA-03** | Code Quality | **Embed Clean Code Snippets** | Include short, syntax-highlighted 10-line code blocks in `arduino-projects.md` (potentiometer C++ signal smoothing) and `remote-access.md` (Wake-on-LAN magic packet / SSH config). | 🟡 Medium |
| [ ] | **BCA-04** | Admissions | **Align STEM Aspirations** | Refine the *"Goals"* section in `about.astro` to explicitly connect his aspirations with advanced high school research labs, maker spaces, and VEX/FLL robotics competitions. | 🟡 Medium |
| [ ] | **BCA-05** | Document | **Printable 1-Page PDF Resume** | Add a print-optimized stylesheet or *"Print / Save as PDF"* button on [/resume](file:///c:/Website/portfolio/src/pages/resume.astro). | 🟡 Medium |
| [ ] | **BCA-06** | Academics | **Math Competition Highlights** | Expand `academics.astro` to highlight problem-solving practice in Russian School of Math (RSM) Algebra Honors & Geometry, AMC 8, and MATHCOUNTS. | 🟢 Low |

---

## 🔒 Pre-Launch Security & Host Environment Checklist

| Status | Task ID | Category | Item | Verification Result / Action Required | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [x] | **SEC-01** | Privacy | **PII Audit** | ✅ **Passed**. 0 phone numbers, 0 email addresses, 0 street addresses, and 0 secret keys found in codebase. | 🟢 Verified |
| [x] | **SEC-02** | Credentials | **Cloudflare Variables** | ✅ **Passed**. `GEMINI_API_KEY`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` configured in environment. | 🟢 Verified |
| [ ] | **SEC-03** | WAF / Firewall | **API Rate Limiting** | Enable Cloudflare WAF rate limiting for `/api/chat` to protect against automated API key spam. | 🟡 Medium |
