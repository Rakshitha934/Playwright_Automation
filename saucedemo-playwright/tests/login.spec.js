import { test, expect } from '@playwright/test'
import { LoginPage } from "../Pages/login.spec"

let loginpage;
test.beforeEach(async ({ page }) => {
    loginpage = new LoginPage(page);
    await loginpage.navigate()
})

test("Verify the login with Valid Credentials", async ({ page }) => {
    await loginpage.login("standard_user", "secret_sauce")
})

test("Verify login with invalid credentials", async ({ page }) => {
    await expect(loginpage.loginButton).toBeEnabled();
    await loginpage.login("standard_user", "abc@123")
    const errMsg = await loginpage.getErrorMsg()
    await expect(errMsg).toContain("Username and password do not match ")
})

test("Verify error Message on clicking Login button without entering Username & password", async ({ page }) => {
    await expect(loginpage.loginButton).toBeEnabled();
    await loginpage.loginButton.click();
    const errmsg = await loginpage.getErrorMsg();
    await expect(errmsg).toContain("Epic sadface: Username is required")
})

test("Verify the error message for login without entering the password", async ({ page }) => {
    await expect(loginpage.loginButton).toBeEnabled();
    await loginpage.usernameInput.fill("standard_user");
    await loginpage.loginButton.click();
    const errmsg = await loginpage.getErrorMsg();
    await expect(errmsg).toContain("Epic sadface: Password is required")
})

test("Locked-out user login", async ({ }) => {

    await loginpage.login("locked_out_user", "secret_sauce")
    const errmsg = await loginpage.getErrorMsg();
    await expect(errmsg).toContain("Epic sadface: Sorry, this user has been locked out.")
})

test("Verify the Problem user ", async ({ page }) => {
    await loginpage.login("standard_user", "secret_sauce")
    const standardImages = await page.locator(".inventory_item_img img")
    const expectedImages = await standardImages.evaluateAll(imgs => imgs.map((img) => img.getAttribute('src')))
    console.log(expectedImages);

    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");


    await loginpage.login("problem_user", "secret_sauce")
    const problemUserImgs = await page.locator(".inventory_item_img img")
    const ActualImgs = await problemUserImgs.evaluateAll(imgs => imgs.map(img => img.getAttribute("src")))
    console.log(ActualImgs);
    await page.click("#react-burger-menu-btn");
    await page.click("#logout_sidebar_link");

    let misMatchFound = false;

    for (let i = 0; i <= expectedImages.length; i++) {

        if (expectedImages[i] !== ActualImgs[i]) {

            misMatchFound = true;
            console.log(`MIsmatch at index ${i}: Expected : ${expectedImages[i]}, but got ${ActualImgs[i]} `);
        } else {

            console.log(`Match found at index ${i}: ${expectedImages[i]}`);
        }
    }

    expect(misMatchFound).toBeTruthy();
})

