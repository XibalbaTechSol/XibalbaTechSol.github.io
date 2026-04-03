from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        # Hermes UI
        page.goto("http://localhost:41931/")
        # Wait for the main React root to be fully populated
        page.wait_for_selector("#root > div", timeout=15000)
        # Extra wait to let animations/canvas settle
        page.wait_for_timeout(5000)
        page.screenshot(path="screenshots/hermes_ui_dashboard.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()
