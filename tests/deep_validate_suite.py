import os
import asyncio
from playwright.async_api import async_playwright
import time

# Directory for screenshots
SCREENSHOT_DIR = "reports/master_screenshots"
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

class SiteValidator:
    def __init__(self, browser_type="chromium"):
        self.browser_type = browser_type
        self.pages_to_test = []
        self.results = []

    def discover_pages(self, base_dir):
        for root, _, files in os.walk(base_dir):
            if any(exclude in root for exclude in [".git", ".venv", "tests", "reports"]):
                continue
            for file in files:
                if file.endswith(".html"):
                    rel_path = os.path.relpath(os.path.join(root, file), base_dir)
                    # Skip post_template.html as it's a template
                    if "template" in rel_path:
                        continue
                    self.pages_to_test.append(rel_path)

    async def validate_page(self, browser, rel_path, base_url):
        page = await browser.new_page()
        url = f"{base_url}/{rel_path}"
        # print(f"[*] Validating: {url}")
        
        try:
            await page.goto(url, wait_until="networkidle")
            
            # 0. Layout / Visual Benchmark Capture
            screenshot_path = os.path.join(SCREENSHOT_DIR, rel_path.replace("/", "_") + ".png")
            await page.screenshot(path=screenshot_path, full_page=True)
            
            # 1. Basic Semantic Check
            h1 = await page.query_selector("h1")
            h1_text = await h1.inner_text() if h1 else "MISSING H1"
            
            # 2. Mermaid Validation (if applicable)
            mermaid_elements = await page.query_selector_all(".mermaid")
            mermaid_count = len(mermaid_elements)
            mermaid_ok = True
            for m in mermaid_elements:
                # Check if mermaid rendered (has svg)
                svg = await m.query_selector("svg")
                if not svg:
                    mermaid_ok = False
            
            # 3. Footer Validation
            footer_bottom = await page.query_selector(".footer-bottom")
            footer_legal = await page.query_selector(".footer-legal-links")
            
            # Check for centered style in .footer-bottom
            footer_centered = False
            if footer_bottom:
                style = await footer_bottom.evaluate("(element) => window.getComputedStyle(element).justifyContent")
                if style == "center":
                    footer_centered = True
            
            legal_hidden = True if not footer_legal or await footer_legal.evaluate("(element) => window.getComputedStyle(element).display === 'none'") else False

            # 4. Link Integrity
            links = await page.query_selector_all("a")
            broken_links = []
            for link in links:
                href = await link.get_attribute("href")
                if href and not href.startswith("#") and not href.startswith("mailto:") and not href.startswith("tel:"):
                    if not href.startswith("http"):
                        # Strip hash
                        test_href = href.split("#")[0]
                        if not test_href: continue # Just a hash
                        
                        target_path = os.path.normpath(os.path.join(os.path.dirname(rel_path), test_href))
                        full_target = os.path.join("/home/xibalba/Projects/xibalba-solutions-site", target_path)
                        # Check exist with and without .html
                        if not os.path.exists(full_target):
                            if not os.path.exists(full_target + ".html") and "." not in test_href:
                                # Try appending .html if it's a directory-like path
                                broken_links.append(href)
                            elif "." in test_href and not os.path.exists(full_target):
                                broken_links.append(href)
            
            self.results.append({
                "path": rel_path,
                "h1": h1_text,
                "mermaid_count": mermaid_count,
                "mermaid_ok": mermaid_ok,
                "footer_centered": footer_centered,
                "legal_hidden": legal_hidden,
                "broken_links_count": len(broken_links),
                "broken_links": broken_links,
                "status": "PASS" if not broken_links and footer_centered and legal_hidden else "FAIL"
            })
            
        except Exception as e:
            print(f"[!] Error on {rel_path}: {e}")
            self.results.append({"path": rel_path, "status": "ERROR", "error": str(e)})
        finally:
            await page.close()

    async def run(self):
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            base_dir = "/home/xibalba/Projects/xibalba-solutions-site"
            self.discover_pages(base_dir)
            
            total = len(self.pages_to_test)
            for i, rel_path in enumerate(self.pages_to_test):
                print(f"[{i+1}/{total}] Validating: {rel_path}")
                await self.validate_page(browser, rel_path, f"file://{base_dir}")
            
            await browser.close()
            self.print_summary()

    def print_summary(self):
        print("\n" + "="*80)
        print("SITE VALIDATION MASTER REPORT")
        print("="*80)
        passes = 0
        for res in self.results:
            status = res["status"]
            if status == "PASS": passes += 1
            icon = "✅" if status == "PASS" else ("❌" if status == "FAIL" else "⚠️")
            print(f"{icon} {res['path']} - {res.get('h1', 'N/A')}")
            if status != "PASS":
                if not res.get('footer_centered'): print("   - [!] Footer NOT centered")
                if not res.get('legal_hidden'): print("   - [!] Footer legal links VISIBLE")
                if res.get('broken_links'): print(f"   - [!] Broken Links: {res['broken_links']}")
            if res.get("mermaid_count") > 0:
                m_icon = "✅" if res["mermaid_ok"] else "❌"
                print(f"   - {m_icon} Mermaid Diagrams: {res['mermaid_count']}")
        
        print("="*80)
        print(f"TOTAL: {len(self.results)} | PASS: {passes} | FAIL: {len(self.results)-passes}")
        print(f"SCREENSHOTS: {SCREENSHOT_DIR}")

if __name__ == "__main__":
    validator = SiteValidator()
    asyncio.run(validator.run())
