# Master UI/UX Validation & Verification Plan: Xibalba Solutions

## 1. Objective
Achieve 100% functional and aesthetic perfection for the `xibalba-solutions-site`. This plan implements a rigorous, iterative validation pipeline acting as a **Custom UI Designer**. Success is defined as passing all tailored Playwright tests and receiving LLM approval for every visual feature across all viewports.

---

## 2. Design Specification: Industrial Utilitarian
To comply with the `ui-design` skill and the brand's "Sovereign Intelligence" mission, the site is transitioning from generic AI aesthetics to a high-precision **Industrial/Utilitarian** style.

- **Purpose Statement**: A solo technical studio site specializing in high-fidelity AI agent engineering and data sovereignty consultancy.
- **Aesthetic Direction**: **Industrial/Utilitarian** — emphasizing precision, functionality, raw engineering (monospaced fonts, blueprint borders, hazard accents).
- **Color Palette**:
    - **Base**: `#020204` (Deep Space)
    - **Primary**: `#06b6d4` (Cyan Core)
    - **Accent**: `#facc15` (Hazard Yellow) — *Replacing all forbidden violet/purple.*
    - **Neutral**: `#1e293b` (Slate Grey)
- **Typography**:
    - **Headers**: `'Space Mono'`, monospace
    - **Body**: `'Geist Mono'`, monospace or `'JetBrains Mono'`
- **Layout Strategy**: Asymmetric, grid-breaking layouts with diagonal separators and technical overlays (noise overlays, grain).

---

## 3. Page-by-Page Analysis & Action Items

| Page | Functional Intent | Key Features | Action Items |
| :--- | :--- | :--- | :--- |
| **`index.html`** | Brand Identity & Conversion | Animated Hero Orbit, Pillar Cards, Chat Logos | Replace 'Inter' font. Swap violet for Hazard Yellow. Implement asymmetric hero grid. |
| **`about.html`** | Trust & Mission | Founder Story, Core Values Card | Refine "01-04" list colors. Ensure "Founder's Intent" text has industrial spacing. |
| **`ai-agents.html`**| Technical Showcase | Hermes 3 Section, Learning Loop Visual, Multi-channel Logos | Replace violet glow with Cyan/Yellow. Refine step boxes to use "blueprint" border styles. |
| **`blog.html`** | Thought Leadership | Technical Blog Index, Article Cards | Verify Mermaid.js rendering in tests. Ensure card hover states are consistent with hazard palette. |
| **`local-ai.html`** | Compliance & Security | Sanctum Guard Stack list, HIPAA icons | Replace emoji icons with Lucide/FontAwesome. Modernize the "Sovereign Status" visual. |
| **`pricing.html`** | Business Model | Service/Agent Studio cards | Fix card alignment. Use high-contrast industrial borders for pricing tiers. |
| **`contact.html`** | Lead Generation | Form with Technical interest selector | Refine focus states with Hazard Yellow. Add blueprint-style grid lines to the form background. |
| **`thank-you.html`** | Confirmation | Objective Logged confirmation | Ensure footer sitemap matches the rest of the site (fix currently mismatched links). |

---

## 4. Tailored Playwright Test Suite (`tests/deep_validate.py`)
Each page has a unique test tailored to its unique functional needs:
- **`test_index_conversion_ux`**: Verifies the "hero-orbit" animation is running and the "Initiate Project" CTA correctly routes to `contact.html`.
- **`test_blog_mermaid_render`**: Specifically waits for Mermaid.js to initialize and verifies that SVG diagrams are generated and visible.
- **`test_contact_form_validation`**: Fills the form with test data and verifies that validation errors trigger correctly for invalid emails.
- **`test_agent_learning_loop`**: Ensures the "Learning Loop" visual steps (01-03) are present and the hover effects on omnichannel logos work.
- **`test_responsive_integrity`**: Runs a snapshot comparison on both Desktop (1440x900) and Mobile (375x812) for every page.

---

## 5. LLM Visual Review & Automated Audit
- **Pipeline**:
    1. `deep_validate.py` executes and captures full-page and component-level screenshots.
    2. `scripts/visual_audit.py` passes these images to the LLM (Gemini 1.5 Pro).
- **Audit Criteria**:
    - **Forbidden Check**: Fail if 'Inter', 'Roboto', or 'Violet' gradients are detected.
    - **Aesthetic Score**: Evaluate alignment with the Industrial/Utilitarian specification.
    - **Legibility Audit**: Check contrast on Hazard Yellow text against Dark backgrounds.
- **Manual Review Simulation**: The LLM will provide a detailed critique of each feature's UX (e.g., "The button is too small for mobile touch targets").

---

## 6. Master Orchestration Script (`deep_validate_master.sh`)
- **Execution Flow**:
    1. Cleanup: `rm -rf screenshots/audit/*`
    2. Test: `pytest tests/deep_validate.py --headless`
    3. Audit: `python3 scripts/visual_audit.py`
    4. Compile: Generate a `final_report.html` combining Playwright logs and LLM visual approval stamps.
- **Source of Truth**: No page is marked "DONE" until the script returns a 100% success rate.

---

## 7. Iterative Refinement Strategy
1. **Analyze**: Run the Master Script and identify failures.
2. **Patch**: Agent applies surgical fixes to CSS/HTML based on LLM feedback or Playwright errors.
3. **Verify**: Rerun the Master Script.
4. **Repeat**: Continue until the site is functionally flawless and visually perfect.
