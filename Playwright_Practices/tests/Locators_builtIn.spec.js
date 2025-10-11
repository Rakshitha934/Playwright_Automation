const { test, expect } = require('@playwright/test')


test('Built-In-Locators', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const logo = await page.getByAltText('company-branding');
    console.log(logo);
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();

    const name = await page.locator("//p[@class='oxd-userdropdown-name']")
    await expect(name).toBeVisible();
    await page.getByText("João Silva").click;
    await page.getByText('Logout').click;
})