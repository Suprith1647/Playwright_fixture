import { expect, Locator, Page } from "@playwright/test";

export class RecurringPage {
    readonly page: Page;
    readonly recurringpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.recurringpageLocators = {

            recurringPayments: "//a[@class='d-inline-flex text-decoration-none text-reset flex-column my-3'][normalize-space()='Recurring payments']",
            resultvalidation: "//p[text()='No results!']",
            continueBtn: "//a[contains(text(),'Continue')]",

        }
    }
    async clickRecurring()
    {
        await this.page.locator(this.recurringpageLocators.recurringPayments).click();
        expect(await this.page.locator(this.recurringpageLocators.resultvalidation).textContent()).toEqual('No results!');
        await this.page.locator(this.recurringpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
        
    }
}
