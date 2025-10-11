const { test, expect } = require('@playwright/test')

test('Hidden dropdowns', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click()

    await page.locator("//span[text()='PIM']").click()

    await page.locator('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]').click();

    await page.waitForTimeout(5000)
    const options = await page.$$("//div[@role='listbox']//span")

    for (let option of options) {

        console.log(await option.textContent());
    }

    await page.waitForTimeout(5000)
})