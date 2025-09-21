exports.inventoryPage = class inventoryPage {

    constructor(page) {
        this.page = page;
        this.productNameList = this.page.locator("div[data-test='inventory-item-name']");
        console.log(this.productNameList);
        this.addToCartBtn = this.page.locator("#add-to-cart");
        this.cartIcon = this.page.locator(".shopping_cart_link");
        this.checkOutBtn = this.page.locator("button[id='checkout']");
        this.productName = this.page.locator("//div[text()='Sauce Labs Bolt T-Shirt']");
    }

    async navigateToCartPage() {
        const value = await this.productNameList.allTextContents();
        console.log(value);
        return value
    }

    async sortProducts() {
        await this.page.selectOption('select.product_sort_container', "za")
    }


    async goToCart() {
        await this.cartIcon.click();
    }



}