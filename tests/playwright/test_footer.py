import pytest
import os
from playwright.sync_api import Page, expect

PAGES = [
    "index.html",
    "ai-agents.html",
    "integrity-protocol.html",
    "blog.html"
]

@pytest.mark.parametrize("page_path", PAGES)
def test_unified_footer_llc(page: Page, page_path):
    abs_path = os.path.abspath(page_path)
    page.goto(f"file://{abs_path}")
    
    # 1. Assert Footer exists
    footer = page.locator("footer")
    expect(footer).to_be_visible()
    
    # 2. Assert Centered LLC notice
    meta = footer.locator(".footer-meta")
    expect(meta).to_contain_text("Xibalba Solutions LLC. All rights reserved.")
    expect(meta).to_have_css("justify-content", "center")
    
    # 3. Assert treasury address component is GONE
    expect(page.locator(".eth-address")).not_to_be_visible()
    
    # 4. Assert Footer Links (Source of Truth)
    links = [
        "Hermes Agents",
        "Hermes Swarm",
        "Integrity Protocol",
        "Technical Whitepaper",
        "Strategic Business Plan"
    ]
    for link_text in links:
        expect(footer.get_by_text(link_text, exact=False)).to_be_visible()
