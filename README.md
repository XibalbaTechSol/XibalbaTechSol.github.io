# Xibalba Solutions — Landing Page

This repository is the public landing page for **Xibalba Solutions**, at [xibalbatechsol.github.io](https://xibalbatechsol.github.io/) (custom domain: `xibalbasolutions.com`). It's a client-facing business page introducing Xibalba Shield, Integrity Core, and Xibalba Cortex, built to get prospective clients to reach out for a free conversation / design-partner engagement — not a developer or investor pitch deck.

## Structure

- `index.html`, `style.css`, `script.js` — the landing page itself. Hand-written static HTML/CSS/JS, no build step.
  - Includes a collapsible "Technical Deep-Dive" panel (hidden by default) with the original protocol architecture write-up, code snippets, AIS scoring math (KaTeX), and a Three.js 3D manifold visualizer. Its Chart.js/Three.js visualizations only initialize the first time a visitor expands the panel.
- `dashboard/`, `integrity/`, `shield/` — pre-built SPA output (Vite/React and Next.js static exports) for the linked sub-apps. Not edited directly here; rebuilt and re-committed from their source repos.
- `docs/` — supporting static assets (e.g. PDFs). No whitepaper is currently linked from the page — see below.
- `.nojekyll` — present because paths like `_next/` would otherwise be swallowed by GitHub's default Jekyll processing.

## Local development

No build step for the landing page itself — open `index.html` directly, or serve the repo root with any static file server:

```bash
python3 -m http.server 8080
```

### QA tooling (Playwright)

```bash
npm install
node audit.js               # layout integrity checks — clipping, container width, horizontal scroll regressions
node capture_verification.js  # regenerate desktop/mobile verification screenshots
```

## Deployment

**GitHub Pages builds from the `main` branch root** (Settings → Pages → source: `main` / `/`). Pushing to `main` triggers a Pages build automatically — there is no separate `gh-pages` branch step required. (A `gh-pages` branch exists in this repo from an earlier deployment approach but is not what Pages currently serves from; don't rely on it.)

To deploy a change:
```bash
git add index.html style.css script.js   # or whatever you touched
git commit -m "..."
git push origin main
```
Check build status: `gh api repos/XibalbaTechSol/XibalbaTechSol.github.io/pages/builds/latest`

## Contact form

The contact form (`#contactForm`) POSTs to `https://integrity-protocol-backend.onrender.com/v1/contact`. If it's on a Render free tier, it may cold-start (~50s) after 15 minutes of inactivity — worth a warm-up request before sending anyone to the page for a first impression.

## Repo links referenced on the page

- `github.com/XibalbaTechSol/xibalba-shield`
- `github.com/XibalbaTechSol/integrity-core` (renamed from `integrity-latest` 2026-08-12)
- `github.com/XibalbaTechSol/xibalba-cortex` (renamed from `xibalba-graph-memory` 2026-08-12)

The Technical Deep-Dive panel links to `integrity-core/spec/integrity-protocol-v0.4.md` for the current protocol spec, rather than a static whitepaper — the previous whitepaper PDF was healthcare-only and out of sync with the site's current broader positioning, so it was removed rather than left stale.
