import { test, expect } from '@playwright/test'
import path from 'path'

test.skip('handle single file upload', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#singleFileInput").setInputFiles('tests/uploadFiles/dummy-pdf_1.pdf')

    await page.waitForTimeout(5000)
})



test.skip('handle multiple file upload', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#multipleFilesInput')
        .setInputFiles(['tests/uploadFiles/dummy-pdf_1.pdf', 'tests/uploadFiles/dummy-pdf_2.pdf']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    await page.locator('#multipleFilesInput').setInputFiles([]);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    // await expect(await page.locator('multipleFilesStatus'))
    

    await page.waitForTimeout(5000)
})


test("verify file uploads", async({page})=>{

    // await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#singleFileInput").setInputFiles("tests/uploadFiles/dummy-pdf_1.pdf");

    

 console.log(path.join(__dirname,"uploadFiles"
    
 ));
})