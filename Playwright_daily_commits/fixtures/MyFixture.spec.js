import { test as base } from '@playwright/test'
import fs from 'fs'

const users = JSON.parse(fs.readFileSync('../Playwright_daily_commits/test-data/users.json', 'utf-8'))

export const test = base.extend({

    loggedInPage: async ({ browser }, use, testInfo) => {

        const userIndex = testInfo.title.includes('locked') ? 1 : 0;
        const { username, password } = users[userIndex]
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill(username)
        await page.getByPlaceholder('Password').fill(password)
        await page.getByRole('button', { name: 'Login' }).click();

        await use(page);
        await context.close();
    }
})