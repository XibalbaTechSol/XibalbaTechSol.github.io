import pytest
import os
from playwright.sync_api import Page, expect

def test_index_page_visuals(page: Page):
    abs_path = os.path.abspath("index.html")
    page.goto(f"file://{abs_path}")
    
    # 1. Hero Content
    expect(page.locator("h1")).to_contain_text("Sovereign Intelligence Foundries")
    
    # 2. Mermaid Visual Validation (Crisis of Chaos)
    # Ensure SVG is generated and has nodes
    page.wait_for_selector(".mermaid svg", timeout=15000)
    svg = page.locator(".mermaid svg").first
    expect(svg).to_be_visible()
    
    # 3. Interactive Pillar Cards
    cards = [
        "Hermes UI",
        "Hermes Swarm",
        "Integrity Protocol"
    ]
    for card_title in cards:
        card = page.locator("article", has=page.locator(f"h3:text('{card_title}')"))
        expect(card).to_be_visible()
        expect(card).to_have_css("cursor", "pointer")
        
        # Validate internal links work (checking attribute instead of navigating to avoid file:// errors)
        onclick = card.get_attribute("onclick")
        assert ".html" in onclick or "blog/" in onclick
