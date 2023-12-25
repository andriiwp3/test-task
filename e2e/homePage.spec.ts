import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {

  test('should display the welcome message and login link for unauthenticated users', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    await expect(page.locator('text=Welcome to the coding exercise')).toBeVisible();
    await expect(page.locator('a:text("Login")')).toBeVisible();

  });
});
