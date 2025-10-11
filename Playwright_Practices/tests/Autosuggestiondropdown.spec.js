import { test, expect } from '@playwright/test'

test(' autosuggestion dropdown', async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/AutoComplete.html?utm_source=chatgpt.com")


    await page.locator("#searchbox").fill('in')
    await page.waitForSelector("#menucontainer #ui-id-1 li a")
    const content = await page.$$("#menucontainer #ui-id-1 li a")


    for (const el of content) {
     
       const value =  await el.textContent()

        if(value.includes('India')){

            await el.click();
            break;
        }


    }


    await page.waitForTimeout(5000);


})