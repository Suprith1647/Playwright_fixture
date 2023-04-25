import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/lamdatest.json";
import ENV from '../support/env';

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
        await this.page.locator(this.loginPageLocators.email).type(ENV.EMAIL);
        await this.page.locator(this.loginPageLocators.password).type(ENV.PASSWORD);
        await this.page.locator(this.loginPageLocators.login_btn).click();

}

}