import { test, expect } from "@playwright/test"


test("Home page Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()


    //Home Page 

    const products = await page.$$('.hrefch');
    await expect(products).toHaveLength(9);

    await page.locator('#logout2').click();

})

test("Add Product to Cart Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()


    //Home Page 

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()

    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })

    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.waitForTimeout(3000)

    await page.locator('#logout2').click();

})