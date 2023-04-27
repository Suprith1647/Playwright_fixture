import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/news.json";

export class NewspaperPage {
    readonly page: Page;
    readonly newspaperpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.newspaperpageLocators = {
           

            subscribe: "//a[contains(text(),'Subscribe / unsubscribe to newsletter')]",
            radioBtn : "//label[@for='input-newsletter-yes']",
            continueBtn:"//input[@type='submit']",
            subscribesuccessMsg: "//div[text()=' Success: Your newsletter subscription has been successfully updated!']",


        }
    }

    async clickSubscribe(){

        await this.page.locator(this.newspaperpageLocators.subscribe).click();
        await expect(this.page).toHaveURL(/.*newsletter/);
        await this.page.locator(this.newspaperpageLocators.radioBtn).click({force:true});
        await this.page.locator(this.newspaperpageLocators.continueBtn).click();
        expect(await this.page.locator(this.newspaperpageLocators.subscribesuccessMsg).textContent()).toEqual(constant.subscribesuccessMsg);

    }
}