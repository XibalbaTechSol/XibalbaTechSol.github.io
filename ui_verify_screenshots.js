const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    const filePath = `file://${path.join(__dirname, 'index.html')}`;
    
    // Desktop Viewport
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(filePath);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => {
        document.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
    });
    await page.screenshot({ path: path.join(__dirname, 'visual_audit_verified', 'verified_desktop_dark_full.png'), fullPage: true });

    // Mobile Viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: path.join(__dirname, 'visual_audit_verified', 'verified_mobile_dark_full.png'), fullPage: true });
    
    console.log("Screenshots successfully written to visual_audit_verified.");
    await browser.close();
})();
