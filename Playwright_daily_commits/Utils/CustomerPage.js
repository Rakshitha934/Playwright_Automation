export class BasePage {

    constructor(page) {

        this.page = page;
    }

    async login() {
        console.log("Generic login should be overridden");
    }
}