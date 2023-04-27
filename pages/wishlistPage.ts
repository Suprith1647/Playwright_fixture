import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/wishlist.json";

export class WishListPage {
    readonly page: Page;
    readonly wishlistpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.wishlistpageLocators = {


            wishList: "//a[contains(text(),'Modify your wish list')]",
            productnameTextcontent: "//td[@class='text-left']//a[contains(text(),'iMac')]",
            addcartBtn: "//button[@data-toggle='tooltip']",
            addcartMsg: "//p[contains(text(),'Success: You have added')]",
            removeBtn: "//i[@class='fa fa-times']",
            modifiedMsg: "//div[contains(@class,'alert alert-success')]",
            continueBtn: "//a[contains(text(),'Continue')]",

        }
    }
    async clickWishlist() {
        await this.page.locator(this.wishlistpageLocators.wishList).click();
        await expect(this.page).toHaveURL(/.*wishlist/);
        expect(await this.page.locator(this.wishlistpageLocators.productnameTextcontent).textContent()).toEqual("iMac");
        await this.page.locator(this.wishlistpageLocators.addcartBtn).click();
        expect(await this.page.locator(this.wishlistpageLocators.addcartMsg).textContent()).toEqual(constant.addcartPopupMsg);
    }
    async clickRemove() {
        await this.page.locator(this.wishlistpageLocators.removeBtn).click();

    }
    async clickContinue() {
        await this.page.locator(this.wishlistpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
    }


}
