export class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.firstNameInput = this.page.locator("input[id='first-name']");
        this.lastNameInput = this.page.locator("input[id='last-name']");
        this.zipcode = this.page.locator("input[id='postal-code']");
        this.continueButton = this.page.locator("input[id='continue']");
        this.finistBtn = this.page.locator("//button[text()='Finish']");
    }
}