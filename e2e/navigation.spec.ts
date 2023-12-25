import { test, expect } from '@playwright/test';

test.describe('Page Navigation and Rendering', () => {
  test('should navigate to home and display correct content', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page.locator('text=Welcome to the coding exercise')).toBeVisible();
    await expect(page.locator('img[alt="Toilet"]')).toBeVisible();
  });
});
