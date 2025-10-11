const { test, expect } = require('@playwright/test')

test('handle radion BUttons', async ({ page }) => {

    await page.goto('https://trytestingthis.netlify.app/');

    await page.locator("//input[@id='male']")
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy();
    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
    await expect(await page.locator("//input[@id='other']").isChecked()).toBeFalsy();

    // await page.locator("//input[@id='male']").check()
    await page.locator("//input[@id='female']").check()
    await expect(await page.locator('//input[@id="female"]').isChecked()).toBeTruthy();

    await page.waitForTimeout(5000);


})