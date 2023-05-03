import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/affiliate.json"; 

export class AffiliatePage {
    readonly page: Page;
    readonly affiliatepageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.affiliatepageLocators = {
          
            affiliateAccount: "//a[contains(text(),' Register for an affiliate account')]",
            warningmsg :  "//div[text()=' Warning: You must agree to the About Us!']",
            continueBtn : "//input[@type='submit']",
            company     : "#input-company",
            website : "#input-website",
            taxId : "#input-tax",
            chequeName: "#input-cheque",
            radioBtn: "//input[@value='cheque']",
            termcondition: "//input[@type='checkbox']",
            successmsg : "//div[text()=' Success: Your account has been successfully updated.']",

        }
    }

    async clickAffiliate(){
        await this.page.locator(this.affiliatepageLocators.affiliateAccount).click();
        await expect(this.page).toHaveURL(/.*affiliate/);
        await this.page.locator(this.affiliatepageLocators.continueBtn).click();
        expect(await this.page.locator(this.affiliatepageLocators.warningmsg).textContent()).toEqual(' Warning: You must agree to the About Us!');
    }

    async fillAffiliate(){
        await this.page.locator(this.affiliatepageLocators.affiliateAccount).click();
        await expect(this.page).toHaveURL(/.*affiliate/);
        await this.page.locator(this.affiliatepageLocators.company).type(constant.company);
        await this.page.locator(this.affiliatepageLocators.website).type(constant.website);
        await this.page.locator(this.affiliatepageLocators.taxId).type(constant.taxId);
        await this.page.locator(this.affiliatepageLocators.radioBtn).click({force:true});
        await this.page.locator(this.affiliatepageLocators.chequeName).type(constant.chequeName);
        await this.page.locator(this.affiliatepageLocators.termcondition).click({force:true});
        await this.page.locator(this.affiliatepageLocators.continueBtn).click();
        expect(await this.page.locator(this.affiliatepageLocators.successmsg).textContent()).toEqual(' Success: Your account has been successfully updated.');

    }
}
