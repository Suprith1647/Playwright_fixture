import { expect, Locator, Page } from "@playwright/test";

export class TranscationPage {
    readonly page: Page;
    readonly transcationpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.transcationpageLocators = {
          
            transactions: "//a[contains(text(),' Your Transactions')]",
            pageValidationLoc :"//h1[text()='Your Transactions']",
            continueBtn: "//a[contains(text(),'Continue')]",


        }
    }
    async clickTransaction(){
        await this.page.locator(this.transcationpageLocators.transactions).click();
        //await expect(this.page).toHaveURL(/.*transaction/);
        expect(await this.page.locator(this.transcationpageLocators.pageValidationLoc).textContent()).toEqual('Your Transactions');
        await this.page.locator(this.transcationpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);

    }
}
