import { test, expect } from '@playwright/test'


test.skip('page screenshot', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })
})


test.skip('Full Page screenshot', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullHomePage.png', fullPage: true })
})

test('Element screenshot', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html")
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]/div[1]").screenshot({ path: 'tests/screenshots/' + Date.now() + 'Samsunggalaxys6.png' })
})