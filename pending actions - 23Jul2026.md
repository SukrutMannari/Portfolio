# 📋 Portfolio Pending Actions & BCA Admissions Upgrade Guide (23 Jul 2026)

This document provides **actionable, bullet-by-bullet writing prompts** for Sukrut to elevate every portfolio article to maximum engagement for an 8th grader, as well as a **strategic review tailored specifically for the Bergen County Academies (BCA) Admissions Panel**.

---

## 🏛️ Part 1: BCA Admissions Panel Strategic Review

### How the BCA Admissions Panel Will Evaluate This Portfolio
The Bergen County Academies admissions committee (especially for **ATCS** - Academy for Tech & Computer Science, and **AEDT** - Academy for Engineering & Design Technology) looks beyond grades and test scores to evaluate a candidate’s **authentic passion, technical initiative, and problem-solving resilience**.

| BCA Evaluation Criteria | How Sukrut's Portfolio Demonstrates It | Upgrade Needed to Maximize Panel Impression |
| :--- | :--- | :--- |
| **Technical Initiative & Self-Directed Learning** | Building Linux dual-boot setups, Home Assistant servers, custom Arduino game controllers, and OpenRocket aero simulations. | Frame projects as *self-driven investigations*, emphasizing **why** he chose to build them, not just *what* he built. |
| **Problem Solving & Engineering Resilience** | Hardware troubleshooting (fixing laptop keyboard), iteration (Steering Wheel V1 vs. V2), and debugging remote connectivity. | Explicitly document **what failed during testing** and how he debugged the issue (the "Engineering Process"). |
| **Community Impact & Peer Leadership** | Creating online practice test tools for classmates (BCA Mock Test & NJSLA), volunteering at the library, FLL robotics. | Highlight student user impact (e.g. *"Helped 15+ classmates practice under timed test conditions"*). |
| **Multidisciplinary Balance** | Taekwondo Black Belt discipline, Baritone Saxophone stage band leadership, NJHS honors, and STEM builds. | Highlight **discipline, teamwork, and time management** across music, martial arts, and technical projects. |

---

## 🎯 Part 2: Actionable Task Checklist for Sukrut

Use this checklist to track all open tasks.

### Section A: Missing & Priority Content Articles

| Status | Task ID | Category | Item | Core Action Required | Priority |
| :---: | :--- | :--- | :--- | :--- | :---: |
| [ ] | **CS-01** | CS / AI | **Mock NJSLA Test Site** | Create `src/content/projects/njsla-mock-test.md` using Lovable. Include problem statement, features, and test simulator screenshot. | 🔴 High |
| [ ] | **HW-01** | Hardware | **Gaming Steering Wheel & Shifter Setup** | Create or expand dedicated section on the custom steering wheel & shifter build (potentiometer mapping, joycon wiring, housing). | 🔴 High |
| [ ] | **NET-01**| Networking | **Orion PC Remote Boot & Login (India Trip)** | Expand `remote-access.md` detailing Wake-on-LAN (remote boot), Dynamic DNS, SSH keys, and logging in from India. | 🔴 High |
| [ ] | **HW-02** | Hardware Repair | **Laptop Keyboard Repair Story** | Polish `fixing-laptop.md` narrative (diagnosing damaged cable vs. ribbon connector vs. full keyboard swap). | 🟡 Medium |
| [ ] | **MUS-01**| Music | **Music Articles Narrative** | Add 1–2 descriptive paragraphs to `spring-concert-2026.md`, `winter-concert-2026.md`, and `district-jazz-night-2026.md`. | 🟡 Medium |
| [ ] | **MUS-02**| Music | **Teen Arts Festival Link** | Verify Bergen Community College Teen Arts PDF link opens correctly and add a performance highlight note. | 🟢 Low |

---

## ✍️ Part 3: Article-by-Article Bulleted Writing Prompts for Sukrut

To make every article stand out to BCA admissions readers and STEM evaluators, Sukrut should incorporate the following bulleted points into each article:

---

### 💻 Computer Science & AI Projects

#### 1. `bca-mock-test.md` — Mock BCA Admission Test Site
- **The Hook / Motivation**: Explain *why* you built it — wanting to help yourself and your middle school friends practice under realistic BCA exam constraints without expensive prep software.
- **Tools & Prompt Engineering**: Explain using Lovable.dev AI platform to rapidly prototype UI elements, timer algorithms, and question navigation.
- **Key Features**: List 3 main features: timed test sections, instant score feedback, and math/essay question sets.
- **BCA Panel Note**: Emphasize how you used your coding skills to support your peers and solve a real-world student need.

#### 2. `njsla-mock-test.md` — Mock NJSLA Practice Test Site *(Needs Creation)*
- **The Hook**: Created a practice platform to help middle school classmates familiarize themselves with NJSLA standardized test question structures and digital timing.
- **Technical Execution**: Describe structuring the state management (tracking answered vs. flagged questions) using prompt-driven code iteration.
- **Impact & Feedback**: Mention testing it with friends and gathering user feedback to improve button layout and timer clarity.

#### 3. `website-antigravity.md` — Portfolio Development with Antigravity AI
- **The Tech Stack**: Highlight using Astro (modern static site generator), Tailwind CSS for custom styling, Decap CMS, and Google's Antigravity AI pair programmer.
- **Key Takeaway**: Describe what AI pair-programming taught you about clean code architecture, Git workflows, and component modularity.

---

### 🔧 Engineering, Hardware & Systems

#### 4. `arduino-projects.md` — Microcontroller Experiments & Steering Wheel/Shifter V1 & V2
- **Iteration Story (V1 vs. V2)**:
  - *V1*: Built basic steering wheel with a potentiometer and Unojoy firmware, but it was limited to 180° rotation and had limited buttons.
  - *V2 & Shifter*: Ground-up redesign featuring >270° rotation potentiometer, custom switch joycon wiring for button inputs, multi-gear shifter assembly, and cleaner wire harness.
- **Circuitry & Code**: Mention writing non-blocking C++ code in Arduino IDE, analog-to-digital signal conversion, and HID game controller emulation.
- **BCA Panel Note**: This is a stellar engineering example showing **iterative design** — taking a working prototype and rebuilding it better.

#### 5. `remote-access.md` — Orion PC Remote Boot (Wake-on-LAN) & Remote Login (India Trip)
- **The Real-World Challenge**: Needed full access to primary "Orion PC" desktop workstation while traveling abroad in India, without leaving the PC running 24/7.
- **The Dual Solution**:
  - *Remote Boot*: Configured Wake-on-LAN (WOL) magic packets on the motherboard/router to boot the PC on demand remotely.
  - *Remote Login*: Set up encrypted SSH tunnels and secure remote desktop access with dynamic DNS.
- **Result**: Successfully powered on, logged in, and managed files on Orion PC from thousands of miles away in India over hotel Wi-Fi!

#### 6. `fixing-laptop.md` — Laptop Keyboard Troubleshooting & Component Replacement
- **Troubleshooting Steps**:
  - Step 1: Diagnosed unresponsive keys and identified a damaged connection ribbon cable.
  - Step 2: Researched replacement components and sourced a compatible keyboard assembly.
  - Step 3: Carefully disassembled laptop casing, disconnected battery safety power, unseated motherboard ribbon connectors, and swapped the component.
- **Key Skill Learned**: Precision hardware handling, anti-static precautions, and hardware troubleshooting confidence.

#### 7. `home-assistant-setup.md` — Home Assistant Integration & Smart Home
- **Why Local Control?**: Explain choosing Home Assistant to keep home automation local, secure, and independent from third-party cloud outages.
- **Configuration**: Detail installing Home Assistant on a virtual machine, connecting Zigbee/Z-Wave smart switches, and writing custom YAML automation rules for lighting and safety alerts.

#### 8. `linux-double-boot.md` — Linux Dual Boot Setup & Disk Partitioning
- **The Process**: Describe shrinking Windows partitions using Disk Management, creating Linux root (`/`) and swap partitions, and configuring the GRUB bootloader.
- **Why It Matters**: Gives you access to a dedicated Linux environment for terminal tools, ROS (Robot Operating System), and shell scripting alongside Windows gaming.

#### 9. `sim-rocket-builds.md` — Model Rocket Flight Simulation (OpenRocket)
- **Aerodynamic Concepts**: Explain using OpenRocket software to optimize Center of Pressure (CP) vs. Center of Gravity (CG) for flight stability.
- **Simulated Variables**: Describe testing different motor impulses (e.g. Estes C6-5 vs. D12-5), fin shapes (trapezoidal vs. elliptical), and nose cone drag coefficients to predict apogee altitude.

#### 10. `sim-airframe-builds.md` — Custom Airframe Aerodynamics
- **Flight Mechanics**: Describe modeling wing aspect ratios, center-of-lift, and weight distribution for RC glider and plane airframes.
- **Virtual Testing**: Discuss using simulation feedback to adjust wing dihedral angles for passive lateral stability before physical construction.

---

### 🎷 Music, Leadership & Service

#### 11. `spring-concert-2026.md`, `winter-concert-2026.md`, `district-jazz-night-2026.md` — Baritone Saxophone Performances
- **The Role of the Bari Sax**: Explain playing the Baritone Saxophone as the sonic foundation of the stage band and jazz ensemble, anchoring both the bassline and brass/woodwind sections.
- **Performance Highlights**: Mention specific pieces performed, rhythmic precision required for big band jazz, and section leadership.
- **BCA Panel Note**: Shows commitment, team collaboration, discipline, and artistic expression alongside high STEM aptitude.

#### 12. `teen-arts-festival-2026.md` — Bergen Community College Teen Arts Music Festival
- **Community Recognition**: Note being selected to perform at Bergen Community College for the county-wide Teen Arts program.
- **Link**: Reference the official Bergen County program brochure link.

#### 13. `library-ongoing-2026.md` & Leadership / Taekwondo
- **Service**: Highlight volunteering at the public library, organizing media collections, and assisting patrons.
- **Taekwondo**: Highlight the multi-year journey to Black Belt, teaching younger students discipline, focus, and perseverance.

---

## 🔒 Pre-Launch Security & Host Environment Checklist

- [ ] **Cloudflare Environment Variables**: Ensure `GEMINI_API_KEY`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` are set in the Cloudflare Pages deployment settings.
- [ ] **Rate Limiting**: Enable Cloudflare WAF rate limiting for `/api/chat` to protect the Gemini API key.
- [ ] **PII Scrubbing**: Confirm no private phone numbers, home street addresses, or sensitive credentials are visible in public markdown files or images.
