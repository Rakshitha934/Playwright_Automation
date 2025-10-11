import { chromium, test } from '@playwright/test'

test("Get the product list", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const productList = await page.locator('.inventory_item').all();
    console.log(productList);
    console.log(`Number of products in page is ${productList.length}`);

    for (const item of productList) {
        console.log(await item.textContent());
    }

    await browser.close();
})