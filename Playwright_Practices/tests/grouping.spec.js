import { test, expect } from '@playwright/test'


test.beforeAll(async ({ browser }) => {

    console.log("This is before All hook ");
})
test.afterAll(async ({ browser }) => {

    console.log("This is After All hook ");
})
test.beforeEach(async ({ browser }) => {

    console.log("This is Before Each  hook ");
})
test.afterEach(async ({ browser }) => {

    console.log("This is After Each  hook ");
})


test.describe("Group 1", async () => {
    test('Test 1', async ({ page }) => {

        console.log("This is Test 1..........");
    })

    test('Test 2', async ({ page }) => {

        console.log("This is Test 2...........");
    })
})


test.describe("Group 2", async () => {
    test('Test 3', async ({ page }) => {

        console.log("This is Test 3............");
    })

    test('Test 4', async ({ page }) => {

        console.log("This is Test 4...........");
    })
})



