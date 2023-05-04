import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/forgotpassword.json"; 
export class ForgotPasswordPage {
    readonly page: Page;
    readonly forgotpasswordpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.forgotpasswordpageLocators = {

            forgotpasswordLoc: "//a[text()='Forgotten Password']",
            pageLoc :  "//li[text()='Forgotten Password']",
            emailLoc :  "//input[@placeholder='E-Mail Address']",
            submitLoc : "//button[text()='Continue']",
            emailsuccessmsgLoc : "//div[text()=' An email with a confirmation link has been sent your email address.']"

        }

    }
    async clickforgotpassword(){
        await this.page.locator(this.forgotpasswordpageLocators.forgotpasswordLoc).click();
        expect(await this.page.locator(this.forgotpasswordpageLocators.pageLoc).textContent()).toEqual(constant.textValidation);
        await this.page.locator(this.forgotpasswordpageLocators.emailLoc).type(constant.email);
        await this.page.locator(this.forgotpasswordpageLocators.submitLoc).click();
        expect(await this.page.locator(this.forgotpasswordpageLocators.emailsuccessmsgLoc).textContent()).toEqual(constant.successValidation);
    }
}