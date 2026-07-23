# 📋 Portfolio Pending Actions & Pre-Launch Checklist (23 Jul 2026)

This document summarizes the current completion status of Sukrut's portfolio website following today's code synchronization, automated image compression, and content review. It contains a **tabular checklist** for Sukrut to complete before taking the site live.

---

## ⚡ Progress & Automations Completed Today

1. **Git Code & Content Pull**: Successfully pulled latest commit `d9f3ec5` with 52 updated/added files.
2. **Automated Image Compression**: Executed an automated image compression pass across all newly added high-res images in `public/images/` and `public/photos/`.
   - **Total Storage Saved**: **>70.6 MB**
   - **Key files optimized**: `pxl_20260701_022601936.raw-01.jpg` (5.7 MB → 0.6 MB), `SukrutHeadshot.png` (4.5 MB → 0.3 MB), `rocket_1.png` - `rocket_5.png`, `planes_1.png` - `planes_4.png`.
3. **Build Status**: Site compiles cleanly (`npm run build` succeeded with zero static/hybrid routing errors).

---

## 📊 Offline List Cross-Verification

| Offline List Item | Category | Found in Codebase? | Current Status & Notes |
| :--- | :--- | :---: | :--- |
| **Spring Concert** (June 2nd 2026) | Music | ✅ Yes | `src/content/performances/spring-concert-2026.md` created. Needs body content. |
| **Winter Concert** (Jan 15 2026) | Music | ✅ Yes | `src/content/performances/winter-concert-2026.md` created. Needs body content. |
| **District Jazz Night** (04/29/2026) | Music | ✅ Yes | `src/content/performances/district-jazz-night-2026.md` created. Needs body content. |
| **Teen Arts Music Festival** (05/15/2026) | Music | ✅ Yes | `src/content/performances/teen-arts-festival-2026.md` created. Contains PDF link. |
| **Linux double boot** | Engineering / CS | ✅ Yes | `src/content/projects/linux-double-boot.md` created. |
| **Setting up remote access** | Engineering / CS | ✅ Yes | `src/content/projects/remote-access.md` created. (Needs Orion PC remote boot details). |
| **Website setup via Antigravity** | Engineering / CS | ✅ Yes | `src/content/projects/website-antigravity.md` created. |
| **Mock BCA test website (Lovable)** | Engineering / CS | ✅ Yes | `src/content/projects/bca-mock-test.md` created with 3 gallery photos. |
| **Mock NJSLA test website (Lovable)**| Engineering / CS | ❌ **MISSING** | **Action required**: Create `src/content/projects/njsla-mock-test.md`. |
| **Home Assistant setup** | Engineering / CS | ✅ Yes | `src/content/projects/home-assistant-setup.md` created with cover photo. |
| **Additional Arduino projects** | Engineering / CS | ✅ Yes | `src/content/projects/arduino-projects.md` created. (Needs Shifter V2 updates). |
| **Gaming Steering Wheel & Shifter** | Hardware / Electronics | 🟡 Partial | Exists in `arduino-projects.md`; needs dedicated section / new standalone article on wheel & shifter setup. |
| **Orion PC Remote Boot & Login (India Trip)** | System Admin / Net | 🟡 Partial | Basic remote access exists; needs specific Wake-on-LAN (remote boot) and remote login story from India trip. |
| **Laptop Keyboard Repair** | Hardware Repair | ✅ Yes | `src/content/projects/fixing-laptop.md` created with 3 photos. Needs narrative polish. |
| **Simulation rocket builds** | Engineering / CS | ✅ Yes | `src/content/projects/sim-rocket-builds.md` created with 4 airplane/rocket photos. |
| **Simulation Airframe builds** | Engineering / CS | ✅ Yes | `src/content/projects/sim-airframe-builds.md` created with 4 airplane photos. |

---

## 🎯 Actionable Task Checklist for Sukrut

Use this checklist to track remaining items to complete before launching live.

### Section A: Missing & Priority Content Articles

| Status | Task ID | Category | Item | Action Required | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [ ] | **CS-01** | CS / AI | **Mock NJSLA Test Site** | Create `src/content/projects/njsla-mock-test.md`. Add summary, tools used (Lovable), and screenshot/photo. | 🔴 High |
| [ ] | **HW-01** | Hardware | **Gaming Steering Wheel & Shifter Setup** | Create or expand article detailing the new gaming steering wheel & shifter build, mounting hardware, potentiometer mapping, and custom buttons. | 🔴 High |
| [ ] | **NET-01**| Networking | **Orion PC Remote Boot & Remote Login (India Trip)** | Expand `src/content/projects/remote-access.md` (or create `orion-remote-access.md`) detailing Wake-on-LAN (remote boot), dynamic DNS, SSH, and how remote login was used during the trip to India. | 🔴 High |
| [ ] | **HW-02** | Hardware Repair | **Laptop Keyboard Troubleshooting & Replacement** | Review `src/content/projects/fixing-laptop.md`. Verify that all 3 repair photos (`fixing_laptop_1.jpg`, `2`, `3`) display correctly and add step-by-step troubleshooting notes (diagnosing cable vs. full keyboard swap). | 🟡 Medium |
| [ ] | **MUS-01**| Music | **Music Articles Body Text** | Add 1–2 descriptive paragraphs for `spring-concert-2026.md`, `winter-concert-2026.md`, and `district-jazz-night-2026.md` (e.g. songs played, solo highlights on Baritone Saxophone). | 🟡 Medium |
| [ ] | **MUS-02**| Music | **Teen Arts Festival Link Verification** | Verify the Bergen Community College Teen Arts PDF link opens correctly and add a short note about the performance piece. | 🟢 Low |

### Section B: Content Engagement & Polish Upgrades

| Status | Task ID | Category | Item | Action Required | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [ ] | **ENG-01** | Engineering | **Linux Double Boot** | Expand `linux-double-boot.md` with details on Linux distro used (e.g. Ubuntu), partition size, and GRUB experience. | 🟡 Medium |
| [ ] | **RES-01** | Resume | **Resume Page Review** | Check [/resume](file:///c:/Website/portfolio/src/pages/resume.astro) layout on mobile and desktop devices to verify formatting and alignment. | 🟡 Medium |
| [ ] | **IMG-01** | Media | **Photo Verification** | Verify that all newly added photos (`bca_mock_test_1.png`, `fixing_laptop_1.jpg`, `rocket_1.png`) display correctly in the browser. | 🟢 Low |

---

## 🔍 Detailed Content Engagement Evaluation

| Article Path | Engagement Level | Recommendation for Publishing |
| :--- | :---: | :--- |
| `src/content/projects/fixing-laptop.md` | ⭐⭐⭐⭐ **Good** | **Ready for Live**. Covers keyboard troubleshooting & replacement with 3 photos. Polish story paragraphs if desired. |
| `src/content/projects/arduino-projects.md` | ⭐⭐⭐⭐⭐ **High** | **Ready for Live**. Outstanding detail on microcontrollers. Add sub-heading/link for new shifter setup. |
| `src/content/projects/bca-mock-test.md` | ⭐⭐⭐⭐ **Good** | **Ready for Live**. Clear problem statement and 3 screenshot images. |
| `src/content/projects/sim-rocket-builds.md` | ⭐⭐⭐⭐ **Good** | **Ready for Live**. Good OpenRocket simulation summary and 5 gallery screenshots. |
| `src/content/projects/home-assistant-setup.md` | ⭐⭐⭐ **Moderate** | **Ready for Live**. Add 1 bullet point on smart devices connected (e.g. lights, switches, safety sensors). |
| `src/content/projects/remote-access.md` | ⭐⭐ **Needs Detail** | **Add India Trip Story**. Update with Wake-on-LAN (remote boot) and Orion PC remote login details. |
| `src/content/projects/linux-double-boot.md` | ⭐⭐ **Needs Detail** | **Add Details**. Expand beyond 2 sentences to share distro choice and disk partitioning experience. |
| `src/content/performances/*.md` | ⭐⭐ **Needs Detail** | **Add Story**. Currently frontmatter-only. Add 2–3 sentences on songs performed and Bari Sax solos. |

---

## 🔒 Pre-Launch Security & Host Environment Checklist

- [ ] **Cloudflare Environment Variables**: Ensure `GEMINI_API_KEY`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` are set in the Cloudflare Pages deployment settings.
- [ ] **Rate Limiting**: Enable Cloudflare WAF rate limiting for `/api/chat` to protect the Gemini API key.
- [ ] **PII Scrubbing**: Confirm no private phone numbers, home street addresses, or sensitive credentials are visible in public markdown files or images.
