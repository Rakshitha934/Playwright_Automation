import { expect, test } from '@playwright/test'


test("Verify the Dropdowns", async ({ page }) => {

    await page.goto('https://www.google.com/')
    await page.locator('//textarea[@class="gLFyf"]').fill('photon')

    await page.waitForSelector("//ul[@role='listbox']")

    const searchvalue = page.getByRole('presentation').filter({ has: page.getByRole('listitem') }).all()

    console.log(searchvalue);



})

test.only("handling multiple Tabs", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/docs/locators#filter-by-childdescendant')


    const pagepromise = context.waitForEvent('page')
    await page.getByRole('link', { name: 'buttons, checkboxes, headings, links, lists, tables, and many more' }).click()
    const newPage = await pagepromise;

    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL('https://www.w3.org/TR/html-aria/#docconformance')



})