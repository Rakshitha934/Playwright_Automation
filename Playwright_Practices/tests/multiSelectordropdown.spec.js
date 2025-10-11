const { test, expect } = require('@playwright/test')

test('Handle dropdowns', async ({ page }) => {


    //select multiple options from multi select  dropdown

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])


    ///Assertion 
    //1. check no of option in the dropdown

    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);


    //2. check no of option in dropdown using JS array


    const options1 = await page.$$('#colors option')
    await expect(options1.length).toBe(7)


    //3. check presence of option in the dropdown

    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()




    await page.waitForTimeout(5000);


})