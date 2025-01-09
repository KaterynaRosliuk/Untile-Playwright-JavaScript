import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').dblclick();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Kate');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('1234@gmail.com');
  await page.getByLabel('Promotion checkbox').check();
  await page.getByRole('button', { name: 'Submit' }).click();
});