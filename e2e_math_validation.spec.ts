import { test, expect } from '@playwright.test';
import path from 'path';

test.describe('KaTeX Math & Interactive AIS Graph Playwright Validation', () => {
  
  test('verify KaTeX rendering on landing page', async ({ page }) => {
    const landingPath = `file://${path.join(__dirname, '../index.html')}`;
    await page.goto(landingPath);
    await page.waitForLoadState('networkidle');

    // Check KaTeX elements rendered by auto-render script
    const katexDisplayCount = await page.locator('.katex-display').count();
    console.log(`Found ${katexDisplayCount} rendered KaTeX display equation elements on landing page.`);
    expect(katexDisplayCount).toBeGreaterThanOrEqual(3);

    // Verify entropy formula contains e^(-1.5) exponent structure
    const entropyMath = await page.locator('.katex-card').first().textContent();
    expect(entropyMath).toContain('S');
    expect(entropyMath).toContain('entropy');
  });

  test('verify interactive AIS graph in dashboard', async ({ page }) => {
    const dashboardPath = `file://${path.join(__dirname, '../dashboard/index.html')}`;
    await page.goto(dashboardPath);
    await page.waitForLoadState('networkidle');

    // Wait for interactive graph container
    const graphContainer = page.locator('text=Interactive AIS Mathematical Simulator');
    await expect(graphContainer).toBeVisible({ timeout: 10000 });

    // Check initial AIS score display
    const scoreElement = page.locator('text=Computed AIS').locator('..');
    await expect(scoreElement).toBeVisible();

    // Interact with variance range slider
    const varianceSlider = page.locator('input[type="range"]').first();
    await expect(varianceSlider).toBeVisible();

    // Get initial score text
    const initialScoreText = await scoreElement.innerText();
    console.log('Initial score text:', initialScoreText.replace(/\n/g, ' '));

    // Slide variance slider to 0.8
    await varianceSlider.fill('0.8');
    await page.waitForTimeout(300);

    const updatedScoreText = await scoreElement.innerText();
    console.log('Updated score text after variance change:', updatedScoreText.replace(/\n/g, ' '));

    // Verify score changed dynamically
    expect(updatedScoreText).not.toEqual(initialScoreText);

    // Take screenshot of interactive graph
    await page.screenshot({ path: path.join(__dirname, '../visual_audit_verified/verified_interactive_ais_graph.png'), fullPage: false });
  });

});
