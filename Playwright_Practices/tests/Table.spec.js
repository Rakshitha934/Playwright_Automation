import { test, expect } from '@playwright/test';

test("Handling Table", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");


    //1.total number of rows and columns
    const columns = await table.locator("thead tr th")
    console.log("Number of columns :", await columns.count());
    await expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr")
    console.log("Number of rows:", await rows.count());
    await (expect(await rows.count())).toBe(5);


    //2. select specific  checkbox for product 4 

    // const matchedRows = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })

    // await matchedRows.locator("input").check();

    //3. select multiple products by reusable function

    // await selectProduct(page, rows, 'Tablet')
    // await selectProduct(page, rows, 'Smartphone')
    // await selectProduct(page, rows, 'Laptop')

    // 4. Print all  product details 

    // for (let i = 0; i < await rows.count(); i++) {

    //     const row = await rows.nth(i);
    //     const tds = await row.locator('td')

    //     for (let j = 0; j < await tds.count() - 1; j++) {

    //         console.log(await tds.nth(j).textContent());
    //     }
    // }


    //5.read data from all the pages in the Table

    const pages = await page.locator('.pagination li a');
    console.log('Number of Pages in the Table', await pages.count());


    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();

            for (let i = 0; i < await rows.count(); i++) {

                const row = await rows.nth(i);
                const tds = await row.locator('td')

                for (let j = 0; j < await tds.count() - 1; j++) {

                    console.log(await tds.nth(j).textContent());
                }
            }
        }
    }


    await page.waitForTimeout(5000)
})


const selectProduct = async (page, rows, nameOfProduct) => {

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: nameOfProduct
    })

    await matchedRows.locator("input").check();
}