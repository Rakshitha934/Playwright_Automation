import { test, expect } from "@playwright/test"

let page;

test.beforeAll(async ({ browser }) => {

    page = await browser.newPage();
    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()

})

test.afterAll(async () => {
    await page.locator('#logout2').click();
})


test("Home page Test", async () => {
    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9);

})

test("Add Product to Cart Test", async () => {
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })
    await page.locator("//a[normalize-space()='Add to cart']").click();
    await page.waitForTimeout(3000)

})