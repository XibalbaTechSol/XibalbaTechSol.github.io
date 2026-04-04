import pytest
import os
from playwright.sync_api import Page, expect

def test_protocol_source_of_truth(page: Page):
    abs_path = os.path.abspath("integrity-protocol.html")
    page.goto(f"file://{abs_path}")
    
    # 1. Tri-Metric Hero Check (Visual Artifacts)
    expect(page.locator(".metric-hero")).to_be_visible()
    
    # 2. LaTeX/KaTeX Validation
    # Use first() to avoid strict mode violation
    expect(page.locator(".katex").first).to_be_visible()
    # The first display math is CV derivation
    expect(page.locator(".katex-display").first).to_contain_text("CV")
    
    # 3. Mermaid Visuals (XAO Pipeline)
    page.wait_for_selector(".mermaid svg", timeout=15000)
    mermaid_count = page.locator(".mermaid svg").count()
    assert mermaid_count >= 3
    
    # 4. Audit Tiers Data Check
    expect(page.locator("table.comparison-table")).to_contain_text("Tier III: Platinum")
    expect(page.locator("table.comparison-table")).to_contain_text("1,000 INTG / Yr")
