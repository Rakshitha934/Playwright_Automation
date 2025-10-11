const { test, expect } = require('@playwright/test')

test('Handle dropdowns', async ({ page }) => {

    //multiple ays to sleect option from dropdown 

    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator("#country").selectOption({ label: 'India' }) //label /visible test
    // await page.locator("#country").selectOption('India') // visible index
    // await page.locator("#country").selectOption({value: 'uk'})  //by using value attribute
    // await page.locator("#country").selectOption({ index: 1 }) // by using index 
    // await page.selectOption('#country', 'India');

    //Assertion 

    //Approach 1 
    //  const option =await page.locator("#country option")
    //  await expect(option).toHaveCount(10);

    //Approach 2 
    // const options = await page.$$("#country option")
    // console.log("number of option:", options.length);
    // await expect(options.length).toBe(10);


    // check presense of options in the Dropdown

    // Approach 1

    // const content = await page.locator("#country").textContent()
    // await expect(content.includes('India')).toBeTruthy()

    //Presence of
    //  option in the dropdown -Approach 2

    // const options = await page.$$("#country option")

    // let status = false;

    // for (const option of options) {
    //     // console.log(await option.textContent());

    //     let value = await option.textContent()

    //     if (value.includes('India')) {
    //         status = true;
    //         break;
    //     }

    // }

    // expect(status).toBeTruthy()



    //select option from dropdown using loop

    const options = await page.$$("#country option")

    let status = false;

    for (const option of options) {
        // console.log(await option.textContent());

        let value = await option.textContent()

        if (value.includes('India')) {

            await page.selectOption("#country", value)
            break;
        }

    }


    await page.waitForTimeout(5000)
})