import pytest
import os
from playwright.sync_api import Page, expect

def test_product_pillars_v8(page: Page):
    abs_path = os.path.abspath("ai-agents.html")
    page.goto(f"file://{abs_path}")
    
    # FORCE visibility of animated elements
    page.add_style_tag(content=".animate-in { opacity: 1 !important; transform: none !important; transition: none !important; }")
    
    # 1. Header
    expect(page.locator("h1")).to_contain_text("Sovereign Product Architecture")
    
    # 2. Pillars - check each section specifically
    pillars = ["integrity-token", "hermes-agents", "local-ai", "hermes-swarm"]
    for p_id in pillars:
        section = page.locator(f"section#{p_id}")
        expect(section).to_be_visible()
        
        # Scroll to ensure rendering triggers
        section.scroll_into_view_if_needed()
        
        # Wait for SVG to exist (use state='attached' to avoid animation hidden issues)
        selector = f"section#{p_id} .mermaid svg"
        page.wait_for_selector(selector, state="attached", timeout=15000)
        expect(section.locator(".mermaid svg")).to_be_attached()
    
    # 3. Interactive features
    expect(page.locator("text=Recursive Self-Correction").first).to_be_visible()
    expect(page.locator("text=Sanctum Guard Architecture").first).to_be_visible()
