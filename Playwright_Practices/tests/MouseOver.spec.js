import { test, expect } from '@playwright/test';

test("Mouse Over Handling", async ({ page }) => {

    await page.goto("https://demo.opencart.com/en-gb/catalog/desktops/pc");

    await page.locator("//a[@class='nav-link dropdown-toggle'][normalize-space()='Desktops']").hover();
    await page.locator("a[normalize-space()='PC (0)']").hover();

    await page.waitForTimeout(5000);
})