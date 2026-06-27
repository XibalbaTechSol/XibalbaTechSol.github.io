const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('request', request => console.log('REQUEST:', request.method(), request.url()));

    try {
        console.log("Navigating to personal site...");
        await page.goto('http://localhost:8082/');
        await page.waitForLoadState('networkidle');

        console.log("Scrolling to contact form...");
        await page.click('a[href="#contact"]');
        await page.waitForTimeout(1000); // wait for smooth scroll

        console.log("Filling form...");
        await page.fill('#contactName', 'Test User (Personal Site)');
        await page.fill('#contactEmail', 'test@xibalbasolutions.com');
        await page.fill('#contactMessage', 'This is a test of the FormSubmit integration on the personal site.');

        console.log("Submitting form...");
        await page.click('#contactSubmit');

        console.log("Waiting for success message...");
        await page.waitForSelector('text=Message sent successfully!', { state: 'visible', timeout: 5000 });

        console.log("Success!");
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await browser.close();
    }
})();
