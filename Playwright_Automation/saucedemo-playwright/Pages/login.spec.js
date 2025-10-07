exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = this.page.locator("#user-name");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
        this.errorMessage = this.page.locator('h3[data-test="error"]');
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMsg() {
        return await this.errorMessage.textContent()
    }
}

