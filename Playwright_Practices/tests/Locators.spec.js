// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/")

    //click on login button

    await page.locator('id=login2').click()
    await page.locator("input[id='loginusername']").fill("pavanol");
    await page.locator("input[id='loginpassword']").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click()

    const logoutlink = await page.locator("//a[@id='logout2']");

    await expect(logoutlink).toBeVisible()
    await page.close();
})
