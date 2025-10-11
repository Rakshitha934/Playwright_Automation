import { test, expect } from '@playwright/test'

test("Handle mouse clicks inplaywright", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator("//button[normalize-space()='START']").click();
    // await page.waitForTimeout(3000)
    // await page.locator("//button[normalize-space()='Copy Text']").dblclick();
    // await page.locator("#singleFileInput").click({ button: 'left' })
    // await page.waitForTimeout(3000)
    // await page.locator('#multipleFilesInput').click({button:'right'})
    await page.locator("//a[text()='Errorcode 403']").click({ modifiers: ['Control'] })
    await page.waitForTimeout(3000)
})