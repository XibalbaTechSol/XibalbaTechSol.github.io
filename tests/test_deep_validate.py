import pytest
import os
import re
from playwright.sync_api import Page, expect

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCREENSHOT_DIR = os.path.join(BASE_DIR, "screenshots/audit")

def get_file_url(filename):
    return f"file://{os.path.join(BASE_DIR, filename)}"

@pytest.fixture(scope="session", autouse=True)
def ensure_screenshot_dir():
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def test_index_hero_and_logo(page: Page):
    page.goto(get_file_url("index.html"))
    
    # 1. Verify Hero Logo is present and focused
    hero_logo = page.locator(".hero-logo-main")
    expect(hero_logo).to_be_visible()
    
    # 2. Verify Hero Headline is present but subordinate
    headline = page.locator("h1")
    expect(headline).to_contain_text("Sovereign Intelligence")
    
    # 3. Capture Screenshot
    page.screenshot(path=os.path.join(SCREENSHOT_DIR, "index_obsidian_hero.png"))

def test_blog_content_and_mermaid(page: Page):
    # Test blog.html first
    page.goto(get_file_url("blog.html"))
    
    # Verify 5 posts exist (4 new + 1 old)
    expect(page.locator(".blog-card")).to_have_count(5)
    
    # Go to Integrity Coin post
    page.goto(get_file_url("blog/integrity-coin-reputation.html"))
    
    # Wait for mermaid to initialize
    mermaid_div = page.locator(".mermaid").first
    expect(mermaid_div).to_be_visible()
    
    # Capture state
    page.screenshot(path=os.path.join(SCREENSHOT_DIR, "blog_integrity_mermaid.png"))

def test_contact_form_ux(page: Page):
    page.goto(get_file_url("contact.html"))
    
    # Verify form elements visibility using names
    expect(page.locator("input[name='name']")).to_be_visible()
    expect(page.locator("input[name='email']")).to_be_visible()
    expect(page.locator("select[name='interest']")).to_be_visible()
    expect(page.locator("button[type='submit']")).to_be_visible()
    
    # Capture Screenshot
    page.screenshot(path=os.path.join(SCREENSHOT_DIR, "contact_obsidian.png"))

def test_ai_agents_visuals(page: Page):
    page.goto(get_file_url("ai-agents.html"))
    
    expect(page.locator("text=The Hermes 3 Engine")).to_be_visible()
    expect(page.locator("text=01 OBSERVE & COLLECT")).to_be_visible()
    
    page.screenshot(path=os.path.join(SCREENSHOT_DIR, "ai_agents_obsidian.png"))

def test_mobile_responsive_nav(page: Page):
    # Set to mobile viewport
    page.set_viewport_size({"width": 375, "height": 812})
    page.goto(get_file_url("index.html"))
    
    hamburger = page.locator(".hamburger")
    expect(hamburger).to_be_visible()
    
    # Toggle menu
    hamburger.click()
    expect(page.locator(".nav-links")).to_have_class(re.compile(r"active"))
    
    page.screenshot(path=os.path.join(SCREENSHOT_DIR, "mobile_nav_obsidian.png"))
