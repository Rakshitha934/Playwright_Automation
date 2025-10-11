const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a")
    const links = await page.$$("//div[@id='tbodyid']//div/h4/a");

    console.log(links);
    for (const link of links) {
        console.log(await link.textContent());
    }
})