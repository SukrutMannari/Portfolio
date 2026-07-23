# 📋 Portfolio Pending Actions & BCA Admissions Checklist (23 Jul 2026)

> [!NOTE]
> All 13 previously logged content and media tasks (steering wheel V1/V2, Orion PC remote boot for India trip, laptop repair story, saxophone stage band logs, OpenRocket simulations, and automated image compression) have been completed and verified. The NJSLA mock test task was dropped as only the BCA mock test site was built.

---

## 🎯 Single Master Per-Article Action Checklist

| [ ] Done | Article / Page Path | Priority | Specific Enhancements & BCA Guidance |
| :---: | :--- | :---: | :--- |
| [ ] | `src/content/projects/arduino-projects.md` | 🔴 High | • **C++ Code Snippet**: Embed a 10-line C++ code block showing the potentiometer signal-smoothing loop (moving-average filter).<br>• **Iterative Redesign (V1 vs V2)**: Detail upgrading from a 180° limited wheel (V1) to a >270° wheel (V2) with custom joycon button wiring, multi-gear shifter assembly, and cleaner harness.<br>• **Engineering Debug Box**: Include a debug note explaining how analog line signal jitter was eliminated. |
| [ ] | `src/content/projects/fixing-laptop.md` | 🔴 High | • **Hardware Debug Box**: Detail isolating the unresponsive keys to a damaged connection ribbon cable rather than motherboard failure.<br>• **Safety & Precision**: Mention disconnecting the internal battery first for safety, anti-static precautions, and ribbon connector unseating.<br>• **Key Skill**: Emphasize hardware troubleshooting confidence and precision electronics handling. |
| [ ] | `src/content/projects/remote-access.md` | 🔴 High | • **Code / Command Snippet**: Add a short snippet showing the Wake-on-LAN magic packet configuration or SSH key command.<br>• **Real-World Story**: Detail waking up and logging into his Orion PC from India over hotel Wi-Fi without leaving the PC running 24/7.<br>• **Security Callout**: Highlight disabling password logins, dynamic DNS, and forwarding only encrypted SSH ports. |
| [ ] | `src/content/projects/bca-mock-test.md` | 🔴 High | • **Peer Impact Story**: Explain building the app to help classmates practice under realistic BCA exam pressure without expensive prep courses.<br>• **Prompt Engineering**: Detail using Lovable.dev to iterate on UI state management, question navigation, and timer logic.<br>• **Core Features**: List 3 main features: timed test modules, automatic score calculators, and realistic question formats. |
| [ ] | `src/content/projects/linux-double-boot.md` | 🟡 Med | • **Partition Specs**: Specify shrinking Windows partition, allocating root (`/`) and swap space, and GRUB bootloader setup.<br>• **Engineering Purpose**: Explain needing native Linux for ROS (Robot Operating System), terminal tools, and shell scripting. |
| [ ] | `src/content/projects/home-assistant-setup.md` | 🟡 Med | • **YAML Code Snippet**: Include a 5-line YAML snippet showing an automated lighting or safety alert rule.<br>• **Local Privacy**: Highlight choosing Home Assistant to keep home automation 100% local and independent from cloud outages. |
| [ ] | `src/content/projects/sim-rocket-builds.md` | 🟡 Med | • **Simulation Metrics**: Include specific OpenRocket figures: Center of Pressure (CP) vs. Center of Gravity (CG) stability margin and predicted max apogee altitude.<br>• **Variables Comparison**: Compare testing Estes C6-5 vs. D12-5 motors and fin shape drag coefficients. |
| [ ] | `src/content/projects/sim-airframe-builds.md` | 🟡 Med | • **Flight Mechanics**: Detail aerodynamic factors: wing aspect ratio, center of lift, and wing dihedral angle for passive stability. |
| [ ] | `src/content/projects/website-antigravity.md` | 🟢 Low | • **Modern Tech Stack**: Explain using Astro (static site generator), Tailwind CSS, Decap CMS, and Google's Antigravity AI programmer.<br>• **Workflow Insights**: Share lessons learned about clean component architecture, Git branching, and automated builds. |
| [ ] | `src/content/performances/district-jazz-night-2026.md` | 🟡 Med | • **Instrument Leadership**: Detail playing Lead Baritone Saxophone as the sonic/harmonic foundation for the stage band and jazz ensemble.<br>• **Musical Precision**: Connect musical rhythmic precision and section leadership to the discipline applied in STEM builds. |
| [ ] | `src/content/performances/spring-concert-2026.md` | 🟡 Med | • **Bassline Anchor**: Describe anchoring the stage band's bassline and woodwind/brass balance on Baritone Sax. |
| [ ] | `src/content/performances/winter-concert-2026.md` | 🟡 Med | • **Ensemble Performance**: Highlight rhythmic precision, section lead responsibilities, and winter setlist highlights. |
| [ ] | `src/content/performances/teen-arts-festival-2026.md` | 🟢 Low | • **Recognition**: Note selection for the county-wide festival at Bergen Community College and link the official brochure. |
| [ ] | `src/pages/index.astro` | 🔴 High | • **At-a-Glance Impact Banner**: Add a 4-card metric banner: **15+** Sims Built \| **35+** Library Hours \| **6+ Yrs** Taekwondo Black Belt \| **3 Yrs** Lead Bari Sax. |
| [ ] | `src/pages/about.astro` | 🟡 Med | • **Align STEM Goals**: Refine the Goals section to explicitly connect aspirations with BCA academy labs, VEX/FLL robotics, and collaborative engineering. |
| [ ] | `src/pages/resume.astro` | 🟡 Med | • **Printable PDF Option**: Add a print-optimized stylesheet / *"Save as 1-Page PDF"* button. |
| [ ] | `src/pages/academics.astro` | 🟢 Low | • **Math Competition Prep**: Highlight Russian School of Math (RSM) Algebra Honors & Geometry, AMC 8, and MATHCOUNTS prep. |
| [ ] | Cloudflare WAF Settings | 🟡 Med | • **API Rate Limiting**: Enable Cloudflare WAF rate limiting for `/api/chat` to protect against automated API key spam. |
