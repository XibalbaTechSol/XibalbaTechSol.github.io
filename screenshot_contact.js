const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the local server
  await page.goto('http://localhost:8082/');
  
  // Scroll to contact section
  await page.evaluate(() => {
    document.getElementById('contact').scrollIntoView();
  });
  
  // Wait for any animations
  await page.waitForTimeout(1000);
  
  // Take a screenshot of the contact section
  const contactSection = await page.locator('#contact');
  await contactSection.screenshot({ path: '/home/xibalba/.gemini/antigravity-cli/brain/3d415e2c-8937-40e0-991c-6572e0c0775c/contact_ui_redesign.png' });
  
  await browser.close();
})();
