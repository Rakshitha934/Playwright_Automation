import { test, expect } from '@playwright/test';

test.skip(" Drag and Drop", async ({ page }) => {

    await page.goto("https://web.archive.org/web/20250619145605/http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const washingTon = await page.locator("#box3");
    const US = await page.locator("#box103");

    //Approach 1
    // await washingTon.hover();
    // await page.mouse.down();

    // await US.hover();
    // await page.mouse.up();

    //Approach 2

    await washingTon.dragTo(US);

    await page.waitForTimeout(5000);

})

test("Drag and drop 2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#draggable").dragTo(await page.locator("#droppable"))


    // different Approach 

    await page.locator('#draggable').hover();
    await page.mouse.down()
    await page.locator('#droppable').hover();
    await page.mouse.up()
    await page.waitForTimeout(5000)
})