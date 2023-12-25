import { test, expect } from '@playwright/test';

test.describe('LoginPage', () => {
 
  test('should display an error message with invalid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[type="email"]', 'invalid@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');

    await page.click('button:text("Login")');

    await expect(page.locator('text=Invalid credentials. Please try again.')).toBeVisible();
  });

});
