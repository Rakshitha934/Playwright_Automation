import { expect } from 'playwright/test';
import { test } from '../fixtures/MyFixture.spec.js'

test("Logged in with standard user", async ({ loggedInPage }) => {

    const productNames = await loggedInPage.locator('.inventory_item_name').all()

    for (const item of productNames) {
        const value = await item.textContent();
        console.log(value);
    }

})

