import { expect, test } from '@playwright/test'


test("Scenario:1 Open https://playwright.dev/ , Search for “Test Assertions”, Print the first 3 suggestions", async ({ page }) => {

    await page.goto('https://playwright.dev/')

    await page.locator('.DocSearch-Button-Container').click();
    await page.locator('input[id="docsearch-input"]').fill('Test Assertions');
    await page.waitForSelector("ul[id='docsearch-list']")
    const listItems = await page.locator("ul[id='docsearch-list']").first().locator('li .DocSearch-Hit-title').all()

    for (const li of listItems) {
        console.log(await li.textContent());
    }
    page.close()

})

test("Scenario:2 Open https://playwright.dev/ , Click on the “Get Started” link”, Print the URL of the new tab", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get Started' }).click()
    await page.waitForLoadState('load');
    console.log(page.url());
    await browser.close();
})
test("Scenario:3 Handle Alerts (Dialogs),Click 'Click for JS Alert' link , Accept the alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    const result = page.locator("[id='result']")

    console.log(await result.textContent());
    await expect(result).toHaveText('You successfully clicked an alert')
})

test("Scenario:4 Open a sample dropdown page ,Select a value using .selectOption(),Verify the selected value", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await page.waitForLoadState('load');
    await page.locator('#dropdown').selectOption('Option 1');
})

test('Go to a form page,Check a checkbox and select a radio button Verify they’re checked', async ({ page }, testInfo) => {

    await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });
    const cards = page.locator('.category-cards .card')
    const countofEle = await cards.count();

    for (let i = 0; i < countofEle; i++) {
        const text = await cards.nth(i).textContent();
        if (text.includes('Forms')) {
            await cards.nth(i).click();
            break;
        }
    }

    await expect(page).toHaveURL(/forms/)
    console.log(testInfo.title);
})






