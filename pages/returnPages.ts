import { expect, Locator, Page } from "@playwright/test";

export class ReturnPage {
    readonly page: Page;
    readonly returnpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.returnpageLocators = {
            
            returns: "//a[contains(text(),' View your return requests')]",
            resultvalidation: "//p[text()='No results!']",
            viewIcon: "//i[@class='fa fa-eye']",
            returninfoValidation : "//li[text()='Return Information']",
            continueBtn : "//a[contains(text(),'Continue')]",
       
        }
    }

    async clickReturnrequest(){
        await this.page.locator(this.returnpageLocators.returns).click();
        expect(await this.page.locator(this.returnpageLocators.resultvalidation).textContent()).toEqual('No results!');

    }
    async returnProductvalidation(){
        await this.page.locator(this.returnpageLocators.returns).click();
        await expect(this.page).toHaveURL(/.*return/);
        await this.page.locator(this.returnpageLocators.viewIcon).click({ force: true });
        expect(await this.page.locator(this.returnpageLocators.returninfoValidation).textContent()).toEqual('Return Information');
        await this.page.locator(this.returnpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*return/);
        await this.page.locator(this.returnpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);

    }
}
