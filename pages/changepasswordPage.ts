import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/lamdatest.json";


export class ChangePasswordPage {
    readonly page: Page;
    readonly changepasswordLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.changepasswordLocators = {
        
            changePassword: "//a[contains(text(),' Change your password')]",
            password: "#input-password",
            confirmPassword: "#input-confirm",
            continueBtn: "//input[@value='Continue']",
            successMsg : "//div[text()=' Success: Your password has been successfully updated.']",
        }
    }

    async fillchangepassword(){
        await this.page.locator(this.changepasswordLocators.changePassword).click();
        await expect(this.page).toHaveURL(/.*password/);
        await this.page.locator(this.changepasswordLocators.password).type(constant.Password);
        await this.page.locator(this.changepasswordLocators.confirmPassword).type(constant.Confirmpassword);
        await this.page.locator(this.changepasswordLocators.continueBtn).click();
        expect(await this.page.locator(this.changepasswordLocators.successMsg).textContent()).toEqual(constant.successmessage2);


    }




}