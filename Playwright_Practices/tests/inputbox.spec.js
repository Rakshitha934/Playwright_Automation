const { test, expect } = require('@playwright/test');

test('handle inputboc', async ({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/register.htm");

    //InputBox -firstName


    await expect(await page.locator("//input[@id='customer.firstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='customer.firstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='customer.firstName']")).toBeEnabled();
    await expect(await page.locator("//input[@id='customer.firstName']")).toBeEditable();
    // await page.locator("//input[@id='customer.firstName']").fill("Rakshitha");
    page.fill("//input[@id='customer.firstName']", "Rakshitha")

    await page.waitForTimeout(5000);
})