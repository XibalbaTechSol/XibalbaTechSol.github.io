import { test, expect } from '@playwright.test';
import path from 'path';

test.describe('Strict Mathematical & Graph Interactive Verification Suite', () => {

  test('Strict KaTeX LaTeX Rendering Assertions', async ({ page }) => {
    const landingPath = `file://${path.resolve(__dirname, 'index.html')}`;
    await page.goto(landingPath);
    await page.waitForLoadState('networkidle');

    // 1. Strict element presence assertion
    const katexCards = page.locator('.katex-card');
    await expect(katexCards).toHaveCount(1);

    // 2. Assert display equations render exactly 3 formula blocks
    const displayEqs = page.locator('.katex-display');
    await expect(displayEqs).toHaveCount(3);

    // 3. Strict DOM structure checks inside KaTeX output
    for (let i = 0; i < 3; i++) {
      const eq = displayEqs.nth(i);
      await expect(eq.locator('.katex-html')).toBeVisible();
      await expect(eq.locator('.mord')).not.toHaveCount(0);
    }

    // 4. Assert inline math variables are properly transformed
    const inlineEqs = page.locator('.eq-inline .katex');
    await expect(inlineEqs.first()).toBeVisible();
  });

  test('Strict Interactive Graph Axes & Dynamic Slider Assertions', async ({ page }) => {
    const dashboardPath = `file://${path.resolve(__dirname, 'dashboard/index.html')}#/integrity/telemetry`;
    await page.goto(dashboardPath);
    await page.waitForLoadState('networkidle');

    const graphContainer = page.locator('text=Interactive AIS Mathematical Simulator');
    await expect(graphContainer).toBeVisible({ timeout: 15000 });

    // 1. Strict Axes Labels Check
    const xAxisLabel = page.locator('text=Y-AXIS: AGENT INTEGRITY SCORE (AIS)');
    const yAxisLabel = page.locator('text=X-AXIS: BEHAVIORAL VARIANCE (σ²)');
    await expect(xAxisLabel).toBeVisible();
    await expect(yAxisLabel).toBeVisible();

    // 2. Strict Slider Quantity Check
    const sliders = page.locator('input[type="range"]');
    await expect(sliders).toHaveCount(3);

    // 3. Strict Slider Range Boundaries (Min/Max/Step)
    const varianceSlider = sliders.nth(0);
    await expect(varianceSlider).toHaveAttribute('min', '0');
    await expect(varianceSlider).toHaveAttribute('max', '1');
    await expect(varianceSlider).toHaveAttribute('step', '0.01');

    // 4. Strict AIS Score Calculation Reaction Test
    const scoreBadge = page.locator('text=Computed AIS').locator('..');
    
    // Set Variance to 0.0 (Minimal Variance -> Max Entropy Score)
    await varianceSlider.fill('0.00');
    await page.waitForTimeout(300);
    const maxScoreText = await scoreBadge.innerText();
    expect(maxScoreText).toContain('TIER 3');

    // Set Variance to 1.0 (Maximum Variance -> Minimum Entropy Score)
    await varianceSlider.fill('1.00');
    await page.waitForTimeout(300);
    const minScoreText = await scoreBadge.innerText();
    expect(minScoreText).not.toEqual(maxScoreText);

    // 5. Strict ZK Boost Toggle State Shift Assertion
    const zkToggle = page.locator('button:has-text("Boost")');
    await expect(zkToggle).toBeVisible();
    const initialToggleText = await zkToggle.innerText();
    
    await zkToggle.click();
    await page.waitForTimeout(300);
    const clickedToggleText = await zkToggle.innerText();
    expect(clickedToggleText).not.toEqual(initialToggleText);
  });

});
