const { test, expect } = require('@playwright/test')


test("Home Page", async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    const title = await page.title();
    const pageUrl = page.url();
    console.log("Page URL is :", pageUrl);
    console.log(title);
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/")
})


