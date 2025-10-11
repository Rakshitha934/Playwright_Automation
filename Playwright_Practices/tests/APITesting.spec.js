import { test, expect } from "@playwright/test";
import { request } from "http";

test("verify POST Request", async ({ request }) => {

    const newProduct = await request.post("https://dummyjson.com/carts/add",
        {
            data: {
                userId: 1,
                products: [
                    {
                        id: 144,
                        quantity: 4,
                    },
                    {
                        id: 98,
                        quantity: 1,
                    },
                ]
            }
        }
    )

    await expect(newProduct.ok()).toBeTruthy();
    await expect(newProduct.status(200)).toBeTruthy();
    const response = await newProduct.json()
    console.log(response);
})

test("Locator filters", async ({ page }) => {

    await page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button', { name: 'Add to cart' })
        .click();
})


test("Title", { tag: "@smoke", }, async ({ page }) => {
    await page.goto("https://playwright.dev/")
})

test("title @sanity", async ({page})=>{
    await page.goto('https://playwright.dev/')
})