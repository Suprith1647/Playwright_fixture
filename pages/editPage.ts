import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/lamdatest.json";


export class EditPage {
    readonly page: Page;
    readonly editPageLocators: any;
    
    constructor(page: Page) {
        this.page = page;
        this.editPageLocators = {
        
            editInformation: "//a[contains(text(),'Edit your account information')]",
            firstName: "#input-firstname",
            lastName: "#input-lastname",
            continueBtn: "//input[@value='Continue']",
            successMsg : "//div[text()=' Success: Your account has been successfully updated.']"

        }
    }

    async editInfo(){
        await this.page.locator(this.editPageLocators.editInformation).click();
        await expect(this.page).toHaveURL(/.*edit/);
        await this.page.locator(this.editPageLocators.firstName).fill(constant.CFname);
        await this.page.locator(this.editPageLocators.lastName).fill(constant.CLname);
        await this.page.locator(this.editPageLocators.continueBtn).click();
        expect(await this.page.locator(this.editPageLocators.successMsg).textContent()).toEqual(constant.successmessage);


    }



}