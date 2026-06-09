# Portfolio Website Architecture Design Document

This document provides a detailed technical specification of the portfolio website's architecture, data flows, and hosting environments. It outlines the interaction between the Astro hybrid framework, Decap CMS, Google Gemini API, GitHub, and Cloudflare Pages.

---

## 📊 1. Component Summary Table

| Component Name | Technology / Platform | Primary Purpose | Hosting / Runtime | Key Interactions |
| :--- | :--- | :--- | :--- | :--- |
| **Frontend UI** | Astro, HTML5, Vanilla CSS | Serves the responsive public pages, timelines, PhotoReel, and AIGuide widget. | Cloudflare Pages Edge network | Loads content from local Markdown collections; queries `/api/chat` for the AI Twin. |
| **Decap CMS** | React (decap-cms-app) | Visual content editor interface accessible at `/admin`. | Cloudflare Pages (built as a static route) | Queries `/api/config.yml` for dynamic base URLs; authenticates via GitHub OAuth. |
| **Local CMS Proxy** | Node.js (`decap-server`) | Bypasses GitHub API locally; commits directly to local files. | Local machine (runs on Port `8081`) | Intercepts CMS saves and writes Markdown files directly to `src/content/` directories. |
| **Auth Gateway** | Astro Serverless Route (`/api/auth`, `/api/callback`) | Handles GitHub OAuth authentication handshake for Decap CMS. | Cloudflare Pages (Serverless Functions) | Exchanges OAuth codes for GitHub access tokens with GitHub's auth servers. |
| **AI Twin API** | Astro Serverless Route (`/api/chat`) | Grounded personal chatbot engine powered by Gemini 2.5 Flash. | Cloudflare Pages (Serverless Functions) | Gathers all local Markdown collections to feed as prompt context; calls Google Gemini API. |
| **AI Writing Coach API** | Astro Serverless Route (`/api/ai-feedback`) | Provides content scores and quality advice for draft entries. | Cloudflare Pages (Serverless Functions) | Analyzes post body text and asset completeness; queries the Google Gemini API. |
| **Config Endpoint** | Astro Serverless Route (`/api/config.yml`) | Dynamic CMS configuration generator. | Cloudflare Pages (Serverless Functions) | Modifies `config.yml` on the fly to inject the request origin as the `base_url`. |
| **Git Repository** | GitHub | Version control, codebase storage, and deployment trigger. | GitHub Cloud | Receives commits from developers and Decap CMS; triggers Cloudflare Page builds. |
| **AI Inference** | Google Gemini API (`gemini-2.5-flash`) | Core LLM engine executing context-guided Q&A. | Google AI Infrastructure | Resolves prompts submitted by `/api/chat` and `/api/ai-feedback` serverless routes. |

---

## 🗺️ 2. Component Interaction Diagram

```mermaid
graph TD
    %% Define Styles
    classDef client fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef server fill:#0f172a,stroke:#1c6fb5,stroke-width:2px,color:#cbd5e1;
    classDef external fill:#1c1917,stroke:#e8590c,stroke-width:2px,color:#f8fafc;

    subgraph Client [Browser / Frontend]
        Visitor[Visitor / Public Page]:::client
        AIGuide[AIGuide Chat Widget]:::client
        Admin[Decap CMS /admin]:::client
    end

    subgraph Hosting [Cloudflare Pages & Edge Functions]
        Static[Astro Static Pages / Assets]:::server
        APIChat[/api/chat Serverless Function]:::server
        APIFeedback[/api/ai-feedback Serverless Function]:::server
        APIConfig[/api/config.yml Serverless Function]:::server
        APIAuth[/api/auth & /api/callback]:::server
    end

    subgraph External [External APIs & Services]
        Gemini[Google Gemini API]:::external
        GitHubRepo[(GitHub Repository)]:::external
        GitHubAuth[GitHub OAuth App]:::external
    end

    %% Interactions
    Visitor -->|Requests Site| Static
    AIGuide -->|Chat Payload| APIChat
    APIChat -->|1. Reads Collections Context| Static
    APIChat -->|2. Structured Prompts| Gemini
    
    Admin -->|Dynamic Configuration| APIConfig
    Admin -->|Trigger Feedback| APIFeedback
    APIFeedback -->|Evaluates Text| Gemini
    
    Admin -->|Init Auth| APIAuth
    APIAuth <-->|OAuth Handshake| GitHubAuth
    Admin -->|Commits Content Changes| GitHubRepo
    GitHubRepo -->|Build & Deploy Hook| Static
```

---

## 💾 3. Data & Storage Model

The project utilizes a **Git-based flat-file database** model. There are no relational or NoSQL databases hosted externally.

### Content Collections
- **Format**: Frontmatter-metadata + Markdown content.
- **Paths**:
  - Projects: `src/content/projects/*.md` (YAML-structured thumbnail, ordering, and skills).
  - Journal: `src/content/journal/*.md` (Categories: music, engineering, service, etc.).
  - Photos: `src/content/photos/*.md` (Image paths and captions).
  - Service Log: `src/content/service/*.md` (Date, hours, volunteering descriptions).
  - Taekwondo Log: `src/content/taekwondo/*.md` (Belt updates, grading notes).
  - Performances: `src/content/performances/*.md` (Band logs, saxophone instruments).

### Media & Binary Storage
- **Images & Visual Assets**:
  - Saved to: [public/images/](file:///c:/Website/portfolio/public/images/)
  - Served via relative path: `/images/filename.png`
  - Managed by Decap CMS settings in `config.yml`:
    ```yaml
    media_folder: "public/images"
    public_folder: "/images"
    ```
- **3D Models**:
  - Saved as `.glb` files under [public/models/](file:///c:/Website/portfolio/public/models/) or `/images/`.
  - Loaded dynamically inside pages via `<model-viewer>` components.
- **Documents**:
  - Résumé PDF saved as [public/resume.pdf](file:///c:/Website/portfolio/public/resume.pdf).

---

## 🔒 4. Authentication & Security Flow

Decap CMS relies on GitHub OAuth to authorize editors before permitting commits to the repository.

```
[CMS Client] ────(1) Auth Request────> [Astro /api/auth]
     ▲                                         │
     │                                     (2) Redirect
     │                                         ▼
     │                                  [GitHub OAuth App]
     │                                         │
     ├────(4) Auth Token / Callback ◄──────────┘
     │
[Astro /api/callback] ◄──(3) Auth Code
```

### Authentication Environments
- **Local Development**:
  - OAuth App: `Portfolio local`
  - Callback URL: `http://localhost:4321/api/callback`
  - Filesystem Proxy: When `npx decap-server` is active, it runs a local Git API on `http://localhost:8081`. The CMS automatically connects to this proxy locally instead of making remote calls to GitHub.
- **Production Environment**:
  - OAuth App: `Portfolio`
  - Callback URL: `https://sukrutmannari.com/api/callback`

### Environment Secrets Management
Secrets are injected into the runtime using Cloudflare Pages environment variables, keeping them out of source control.

| Environment Variable | Context / Scope | Primary Function |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Local (`.env`) & Production (Cloudflare Pages Dashboard) | Authorizes connections to the Google Gemini API. |
| `GITHUB_CLIENT_ID` | Local (`.env`) & Production (Cloudflare Pages Dashboard) | Identifies the respective GitHub OAuth app (Local vs. Prod). |
| `GITHUB_CLIENT_SECRET` | Local (`.env`) & Production (Cloudflare Pages Dashboard) | Cryptographically signs authentication requests. |

---

## ⚙️ 5. Local Development vs. Production Execution

### Local Development Flow
1. **Launch Services**:
   - Run Astro dev server: `npm run dev` (Runs on `http://localhost:4321/`).
   - Run Decap CMS Proxy: `npx decap-server` (Runs on `http://localhost:8081/`).
2. **Local Environment Variables**:
   - Loaded from a `.env` file in the project root.
3. **Decap CMS Routing**:
   - The browser opens `/admin`.
   - The `/api/config.yml` endpoint detects `localhost` in the host headers and prepends `local_backend: true` to the configuration stream.
   - Saves made in `/admin` bypass GitHub and edit local markdown files in `src/content/` instantly.

### Production Deployment Flow
1. **Commit and Push**:
   - Changes are pushed to the `main` branch on GitHub.
2. **Build Stage**:
   - Cloudflare Pages detects the commit, clones the repo, and runs `npm run build`.
   - Astro compiles static routes (e.g., `/engineering`, `/about`) into static HTML files and compiles dynamic serverless entry points (like `/api/chat` and `/api/auth`) for the Cloudflare Workers runtime.
3. **Edge Serving**:
   - HTML, CSS, and media assets are served directly from Cloudflare’s global edge network.
   - Dynamic endpoints execute on Cloudflare Workers close to the visitor.
