const { test, expect } = require('@playwright/test')


test.skip('Dialog Handler', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    //Enabling alert Handling
    page.on('Alert is Ok', async dialog => {
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Simple Alert']").click();
    await page.waitForTimeout(5000);
})

test.skip('Confirm dialog Handler- Alert with Ok and Cancel ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert Handling

    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();// close using OK button 
        // await dialog.dismiss();// close using cancel button
    })

    await page.locator("//button[normalize-space()='Confirmation Alert']").click();
    await expect(await page.locator("#demo")).toContainText("You pressed OK!")

    await page.waitForTimeout(5000);
})

test('Confirm dialog Handler- Alert with Ok and Cancel and Input', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert Handling

    page.on('dialog', async dialog => {
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Rakshitha');// close using OK button 

        // await dialog.dismiss();// close using cancel button
    })

    await page.locator("//button[normalize-space()='Prompt Alert']").click();
    await expect(await page.locator("#demo")).toContainText("Hello Rakshitha! How are you today?")

    await page.waitForTimeout(5000);
})