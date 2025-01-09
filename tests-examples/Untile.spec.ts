const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://untile.pt/';

test.describe('Demonstration of Advanced Testing Skills', () => {
  // Responsive design testing
  test('The website displays correctly on various devices', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 812, name: 'Mobile' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(BASE_URL);

      // Check if the main content is visible
      const mainContent = await page.locator('main');
      await expect(mainContent).toBeVisible();

      console.log(`Test on device: ${viewport.name} completed successfully`);
    }
  });

  // Interaction and lazy loading test
  test('Scrolling and dynamic content loading', async ({ page }) => {
    await page.goto(BASE_URL);

    // Scroll the page to the bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000); // Wait for potential lazy-loaded content

    // Check if the footer is visible
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();

    // Verify that images (lazy-loaded) have loaded
    const images = await page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const src = await image.getAttribute('src');
      expect(src).toBeTruthy(); // Ensure that the image src is not empty
    }
  });

  // JavaScript console error check
  test('No errors in the browser console', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto(BASE_URL);

    // Ensure there are no errors
    expect(errors).toHaveLength(0);
  });
});