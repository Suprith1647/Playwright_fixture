import { expect, Locator, Page } from "@playwright/test";
import constant from "../utils/lamdatest.json"; 

export class RegistrationPage {
    readonly page: Page;
    readonly registrationPageLocators: any;

    constructor(page: Page) {
        this.page = page;
        this.registrationPageLocators = {
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email:  "#input-email",
        phone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        radio_btn: `input[id="input-newsletter-no"]`,
        termcondition_btn: `input[name='agree']`,
        continue_btn:  `input[value='Continue']`

}   
    }

    async fillForms(){
        await this.page.locator(this.registrationPageLocators.firstName).type(constant.Fname);
        await this.page.locator(this.registrationPageLocators.lastName).type(constant.Lname);
        await this.page.locator(this.registrationPageLocators.email).type(constant.Email);
        await this.page.locator(this.registrationPageLocators.phone).type(constant.Phone);
        await this.page.locator(this.registrationPageLocators.password).type(constant.Password);
        await this.page.locator(this.registrationPageLocators.confirmPassword).type(constant.Confirmpassword);
        await this.page.locator(this.registrationPageLocators.radio_btn).click({force:true});
        await this.page.locator(this.registrationPageLocators.termcondition_btn).click({force:true});
        await this.page.locator(this.registrationPageLocators.continue_btn).click();
    }
}
