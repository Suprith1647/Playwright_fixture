import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/news.json";

export class MyOrderPage {
    readonly page: Page;
    readonly myorderpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.myorderpageLocators = {

            orderHistory: "//a[contains(text(),'View your order history')]",
            resultvalidation: "//p[text()='No results!']",
            continueBtn: "//a[contains(text(),'Continue')]",
            myaccountBtn: "//a[@role='button']//span[@class='title'][normalize-space()='My account']",
            viewIcon: "//a[@data-original-title='View']",
            orderinfoValidation: "//li[text()='Order Information']",

        }
    }
    async clickOrderHistory() {
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        expect(await this.page.locator(this.myorderpageLocators.resultvalidation).textContent()).toEqual('No results!');
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
    }

    async orderVerification() {

        await this.page.locator(this.myorderpageLocators.myaccountBtn).click();
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.viewIcon).click({ force: true });
        expect(await this.page.locator(this.myorderpageLocators.orderinfoValidation).textContent()).toEqual('Order Information');
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);


    }


}
