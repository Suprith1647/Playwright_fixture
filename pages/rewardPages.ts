import { expect, Locator, Page } from "@playwright/test";

export class RewardPage {
    readonly page: Page;
    readonly rewardpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.rewardpageLocators = {
        
            rewardPoint: "//a[contains(text(),' Your Reward Points')]",
            rewardpageValidation : ".page-title.h3.mb-3",
            continueBtn: "//a[contains(text(),'Continue')]",



        }
    }

    async clickReward(){
        await this.page.locator(this.rewardpageLocators.rewardPoint).click();
        expect(await this.page.locator(this.rewardpageLocators.rewardpageValidation).textContent()).toEqual('Your Reward Points');
        await this.page.locator(this.rewardpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
    }
}
