const { test, expect } = require('@playwright/test')

test('handling check boxes', async ({ page }) => {

    await page.goto('https://trytestingthis.netlify.app/');

    await expect(await page.locator("//input[@type='checkbox' and @value='Option 1']").isChecked()).toBeFalsy();

    await page.locator("//input[@type='checkbox' and @value='Option 1']").check();

    await expect(await page.locator("//input[@type='checkbox' and @value='Option 1']").isChecked()).toBeTruthy();


    await expect(await page.locator("//input[@type='checkbox' and @value='Option 2']").isChecked()).toBeFalsy();


    //multiple check boxes 

    const checkboxelocators = [
        "//input[@type='checkbox' and @value='Option 1']",
        "//input[@type='checkbox' and @value='Option 2']"
    ]

    for (const checkEle of checkboxelocators) { // select multiple check boxes

        await page.locator(checkEle).check();

    }

    for (const checkEle of checkboxelocators) {  // unselect multiple check box

        if (await page.locator(checkEle).isChecked()) {

            await page.locator(checkEle).uncheck();
        }

    }


    await page.waitForTimeout(5000);

})