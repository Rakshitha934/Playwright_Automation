import { test, expect } from '@playwright/test';
import { inventoryPage } from '../Pages/inventory.spec';
import { LoginPage } from '../Pages/login.spec';
import { CheckoutPage } from '../Pages/checkOut.spec';


test("Redirect to order details and add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventory = new inventoryPage(page);
    const Checkoutpage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce")
    const products = await inventory.navigateToCartPage();

    for (const item of products) {
        console.log(item);
        if (item === "Sauce Labs Bolt T-Shirt") {
            await inventory.productName.click();
            await inventory.addToCartBtn.click();
            await inventory.cartIcon.click();
            await inventory.checkOutBtn.click();
            await Checkoutpage.firstNameInput.fill("Rakshitha")
            await Checkoutpage.lastNameInput.fill("N")
            await Checkoutpage.zipcode.fill("561000")
            await Checkoutpage.continueButton.click()
            await Checkoutpage.finistBtn.click()
            const successMsg = await page.locator("h2[data-test='complete-header']").textContent();
            await expect(successMsg).toContain("Thank you for your order!")
        }
    }

})






