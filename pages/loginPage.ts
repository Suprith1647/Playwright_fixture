import { expect, Locator, Page } from "@playwright/test";
import constant from "../utils/lamdatest.json";

export class LoginPage {
    readonly page: Page;
    readonly loginPageLocators: any;

    constructor(page: Page) {
        this.page = page;
        this.loginPageLocators = {
            email:  "#input-email",
            password: "#input-password",
            login_btn:  `input[value='Login']`


        }
    }
    async loginFillforms(){
        await this.page.locator(this.loginPageLocators.email).type(constant.Email);
        await this.page.locator(this.loginPageLocators.password).type(constant.Password);
        await this.page.locator(this.loginPageLocators.login_btn).click();

}

}