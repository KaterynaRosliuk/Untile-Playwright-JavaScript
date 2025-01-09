import { test, expect } from '@playwright/test';

test('test_id_1_playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Installation' }).click();
  await page.getByRole('button', { name: 'Guides' }).click();
  await page.getByRole('button', { name: 'Guides' }).click();
  await page.getByRole('link', { name: 'Library' }).click();
  await page.getByRole('link', { name: 'Getting Started Guide' }).click();
  await page.getByRole('link', { name: 'What\'s next', exact: true }).click();
  await page.locator('div:nth-child(31) > .tabs > li:nth-child(3)').click();
});

test('test_id_2_playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Outlook' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Accept' }).click();
  await page.getByLabel('Search (Command+K)').click();
  await page.getByPlaceholder('Search docs').fill('code');
  await page.getByRole('link', { name: 'Running Codegen​ Generating' }).click();
});

test('test_id_3_playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page2.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await expect(page2.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await page2.getByText('Cross-language. Use the').click();
  await page2.getByRole('heading', { name: 'Any browser • Any platform •' }).click();
  const page3Promise = page2.waitForEvent('popup');
  await page2.getByRole('link', { name: 'Disney+ Hotstar' }).click();
  const page3 = await page3Promise;
});

test('test_id_4_playwright', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('link', { name: 'playwright.config', exact: true }).click();
    await page.getByRole('link', { name: 'Parallelism' }).nth(2).click();
    await page.getByRole('link', { name: 'Previous « Global setup and' }).click();
  });

  test('test_id_5_playwright', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByLabel('Search (Command+K)').click();
    await page.getByPlaceholder('Search docs').fill('inst');
    await page.getByRole('link', { name: 'Introduction​ Installation' }).click();
    await page.getByRole('link', { name: 'How to install Playwright' }).click();
    await page.getByRole('img', { name: 'UI Mode' }).click();
    await page.getByRole('link', { name: 'Next Writing tests »' }).click();
    await page.getByRole('link', { name: 'Videos', exact: true }).click();
  });