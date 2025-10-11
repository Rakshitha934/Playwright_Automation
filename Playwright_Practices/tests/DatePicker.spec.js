import { test, expect } from '@playwright/test';

test('Date Picker', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#datepicker").fill("06/02/2025")

    //date picker

    const year = "2025"
    const date = "20"
    const month = "January"


    await page.click("#datepicker");

    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        }

        // await page.locator("a[title='Prev']").click();
        await page.locator("a[title='Next']").click();

    }

    const dates = await page.$$("//a[@class='ui-state-default']");

    //date selection using loop
    // for (const dt of dates) {

    //     if (await dt.textContent() === date) {
    //         await dt.click();
    //         break;
    //     }
    // }

    // date selection without loop

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);
})