import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('heading', { name: 'Welcome to EduReach College' }).click();
  await page.getByRole('link', { name: 'About', exact: true }).click();
});