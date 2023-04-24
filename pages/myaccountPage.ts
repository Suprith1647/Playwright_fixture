import { expect, Locator, Page } from "@playwright/test";

export class MyaccountPage {
    readonly page: Page;
    readonly myaccountpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.myaccountpageLocators = {

            editInformation: "//a[contains(text(),'Edit your account information')]",
            changePassword: "//a[contains(text(),' Change your password')]",
            addressBook: "//a[contains(text(),'Modify your address book entries')]",
            wishList: "//a[contains(text(),'Modify your wish list')]",
            subscribe: "//a[contains(text(),'Subscribe / unsubscribe to newsletter')]",
            orderHistory: "//a[contains(text(),'View your order history')]",
            downloads: "//a[@class='d-inline-flex text-decoration-none text-reset flex-column my-3'][normalize-space()='Downloads']",
            rewardPoint: "//a[contains(text(),' Your Reward Points')]",
            returns: "//a[contains(text(),' View your return requests')]",
            transactions: "//a[contains(text(),' Your Transactions')]",
            recurringPayments: "//a[@class='d-inline-flex text-decoration-none text-reset flex-column my-3'][normalize-space()='Recurring payments']",
            affiliateAccount: "//a[contains(text(),' Register for an affiliate account')]",
            backButton: "//a[contains(text(),'Back')]",
            continueButton: "//a[contains(text(),'Continue')]",
        }
    }

    async myAccountpageVerification() {

        await this.page.locator(this.myaccountpageLocators.editInformation).click();
        await expect(this.page).toHaveURL(/.*edit/);
        await this.page.locator(this.myaccountpageLocators.backButton).click();
        await this.page.locator(this.myaccountpageLocators.changePassword).click();
        await expect(this.page).toHaveURL(/.*password/);
        await this.page.locator(this.myaccountpageLocators.backButton).click();
        await this.page.locator(this.myaccountpageLocators.addressBook).click();
        await expect(this.page).toHaveURL(/.*address/);
        await this.page.locator(this.myaccountpageLocators.backButton).click();
        await this.page.locator(this.myaccountpageLocators.wishList).click();
        await expect(this.page).toHaveURL(/.*wishlist/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.subscribe).click();
        await expect(this.page).toHaveURL(/.*newsletter/);
        await this.page.locator(this.myaccountpageLocators.backButton).click();
        await this.page.locator(this.myaccountpageLocators.orderHistory).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.downloads).click();
        await expect(this.page).toHaveURL(/.*download/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.rewardPoint).click();
        await expect(this.page).toHaveURL(/.*reward/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.returns).click();
        await expect(this.page).toHaveURL(/.*return/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.transactions).click();
        await expect(this.page).toHaveURL(/.*transaction/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.recurringPayments).click();
        await expect(this.page).toHaveURL(/.*recurring/);
        await this.page.locator(this.myaccountpageLocators.continueButton).click();
        await this.page.locator(this.myaccountpageLocators.affiliateAccount).click();
        await expect(this.page).toHaveURL(/.*affiliate/);

    }

}