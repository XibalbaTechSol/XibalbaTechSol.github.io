from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto("http://localhost:41931/")
        
        # Wait a generous amount of time for any loading states to resolve
        page.wait_for_timeout(5000)
        
        # Check if #root > div exists and is not empty
        html = page.content()
        with open("reports/hermes_dump.html", "w") as f:
            f.write(html)
            
        page.screenshot(path="screenshots/hermes_ui_dashboard_v2.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()
