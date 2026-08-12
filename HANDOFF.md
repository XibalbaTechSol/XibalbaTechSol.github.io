# Handoff: Business-Page Rework (2026-08-12)

## What this session did

Transformed `XibalbaTechSol.github.io` from a developer/investor protocol pitch page into a client-facing business page for Xibalba Solutions, per the user's request to feature `xibalba-shield`, `integrity-core`, and `xibalba-cortex` as proof of delivery and drive visitors to reach out.

All work is committed and pushed to `main` (latest: `df56f53`). Nothing is stuck uncommitted.

### Content changes (`index.html`, `script.js`, `style.css`)

- Rewrote hero, problem statement, and "What We Do" copy for a general business audience instead of developers/investors.
- New 3-card proof section: Xibalba Shield, Integrity Core, Xibalba Cortex, each linking to its GitHub repo.
- Cut the old competitor-comparison table and "traction bar" stats (unverifiable/driftable claims not appropriate for a client-facing page).
- Restored the original deep technical content (4-phase protocol lifecycle, Solidity/Rust/Noir code, AIS scoring math with KaTeX, Chart.js sliders, Three.js 3D manifold) behind a collapsible **"Technical Deep-Dive"** panel, collapsed by default. Its Chart.js/Three.js visualizations lazy-init on first expand, not on page load.
- Replaced the FAQ (was 13 deep protocol-internals questions) with 10 client-relevant ones, including a new "why work with an early-stage company" item that owns the pre-revenue/design-partner framing honestly rather than avoiding it.
- Added a **"Compliance Isn't an Afterthought"** section (`#industries`) — Healthcare (HIPAA-aware) and Financial Services (auditable by default) cards, tying back to Shield/Integrity Core.
- Contact section reframed around **design partnership** ("Let's Build This Together") rather than generic consultation language, per the pre-revenue positioning discussion.
- Dark mode is now permanent — removed the dead theme-toggle JS and the `localStorage` theme check; no toggle button anywhere.
- Fixed stale `integrity-latest`/`integrity-master` links → `integrity-core` (this rename is now also live on GitHub, confirmed).
- Removed the outdated Shield whitepaper PDF link (healthcare-only investor pitch from June, out of sync with current positioning) from both the footer and the Deep-Dive CTA. Replaced the Deep-Dive CTA with a link to `integrity-core/spec/integrity-protocol-v0.4.md` instead — it lives in the actively-developed repo and was last updated 2026-08-06, so it's far less likely to go stale the same way. **The old PDF file itself (`docs/xibalba_shield_proposal.pdf`) is still in the repo, just unlinked** — delete it or replace it if/when a current whitepaper exists.
- Fixed two small pre-existing bugs unrelated to this rework while touching the restored content: literal `**bold**` markdown syntax that was never converted to `<strong>`, and inline `$...$` math the KaTeX auto-render config didn't have a delimiter for (added one).
- Fixed a stray unmatched `</section>` tag near the contact form that predated this session.

### README rewrite

Old README was a YC-application checklist for the previous pitch (wrong repo names, a placeholder Rickroll demo link, wrong deployment instructions). Rewritten to describe the site's actual current purpose, structure, local dev commands (still valid — `audit.js`, `capture_verification.js`), and the **actual** deploy mechanism (see below).

## ⚠️ Open issue: the site is not currently deploying

This is **pre-existing and unrelated to this session's edits** — confirmed it's been broken since at least 2026-07-02, before any of this work started.

**Root cause:** GitHub Pages is configured to build from `main` (`Settings → Pages → source: main / root`), and `main` has `node_modules` committed directly to it — 2,380 tracked files, including multi-MB minified bundles (`playwright-core/lib/coreBundle.js` at 3.2MB, a Chromium bidi sourcemap at 4.4MB) and several 2-4MB screenshot PNGs (`visual_audit/`, `visual_audit_verified/`, `merged_landing_page_full.png`). The legacy Jekyll-based Pages builder chokes on this — builds either error immediately with a generic `"Page build failed."` (no useful detail) or hang in `"building"` indefinitely (observed both during this session).

Confirmed via `gh api repos/XibalbaTechSol/XibalbaTechSol.github.io/pages/builds` — every build since 07-02 is `errored`, except the most recent two from this session, which each eventually errored too (one after ~10 min hung in `"building"`).

**Also note:** a `gh-pages` branch exists in this repo from an earlier deployment approach and is *not* what Pages currently serves from (confirmed via the Pages API `source.branch == "main"`). Don't push there expecting it to matter — I mistakenly deployed there first this session before discovering the actual source branch; it's harmless but unused.

### Fix (not yet done — needs explicit go-ahead, it's a real repo change)

```bash
cd /home/xibalba/Projects/XibalbaTechSol.github.io
git rm -r --cached node_modules visual_audit visual_audit_verified merged_landing_page_full.png
cat >> .gitignore <<'EOF'
node_modules/
visual_audit/
visual_audit_verified/
merged_landing_page_full.png
EOF
git add .gitignore
git commit -m "Stop tracking node_modules and screenshot artifacts on main"
git push origin main
```
Then re-check `gh api repos/XibalbaTechSol/XibalbaTechSol.github.io/pages/builds/latest` for a `"built"` status. If `audit.js`/`capture_verification.js` need `node_modules` to run locally, `npm install` still works fine — the fix only removes it from *git tracking*, not from disk.

## Verification done this session

- Local static server + Claude-in-Chrome: confirmed dark theme, no toggle, all copy, product card links, Technical Deep-Dive toggle (expand/collapse + lazy chart/3D init), KaTeX math rendering, contact form, and footer all work correctly with no new console errors.
- Confirmed live: `xibalba-shield`, `integrity-core`, `xibalba-cortex` GitHub repos all resolve (200) at their final renamed URLs.
- Confirmed the `integrity-protocol-v0.4.md` spec link resolves publicly (200 via raw.githubusercontent.com).

## Not done / left for you

- The `node_modules`-on-main fix above (blocks the live site from updating at all right now).
- Deciding what (if anything) replaces `docs/xibalba_shield_proposal.pdf` — file is still present but unlinked.
- Any further copy iteration once you can actually see it live.
