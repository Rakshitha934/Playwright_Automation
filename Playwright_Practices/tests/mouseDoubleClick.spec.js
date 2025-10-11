const { test, expect } = require('@playwright/test');

test("Handle Double Click", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

    const feild2Value = await page.locator("input[id='field2']")
    await btnCopy.dblclick();
    await expect(feild2Value).toHaveValue("Hello World!");
})