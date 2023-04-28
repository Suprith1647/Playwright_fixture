import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/news.json";
import constants from "../support/lamdatest.json";


export class MyOrderPage {
    readonly page: Page;
    readonly myorderpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.myorderpageLocators = {

            orderHistory: "//a[contains(text(),'View your order history')]",
            resultvalidation: "//p[text()='No results!']",
            continueBtn: "//a[contains(text(),'Continue')]",
            myaccountBtn: "//a[@role='button']//span[@class='title'][normalize-space()='My account']",
            viewIcon: "//i[@class='fa fa-eye']",
            orderinfoValidation: "//li[text()='Order Information']",
            reorderIcon : "//i[@class='fa fa-shopping-cart']",
            reorderValidation : ".alert.alert-success.alert-dismissible",
            returnIcon  : "//i[@class='fa fa-reply']",
            returninfoValidation:"//li[text()='Product Returns']",
            firstName: "#input-firstname",
            lastName: "#input-lastname",
            email:  "#input-email",
            phone: "#input-telephone",
            orderId: "#input-order-id",
            radioBtn : "//label[normalize-space()='Dead On Arrival']",
            comments : "#input-comment",
            orderdate: "//input[@data-date-format='YYYY-MM-DD']",
            submit :   "//input[@type='submit']"


        }
    }
    async clickOrderHistory() {
       
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        expect(await this.page.locator(this.myorderpageLocators.resultvalidation).textContent()).toEqual('No results!');
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
    }

    async orderVerification() {
       
        await this.page.locator(this.myorderpageLocators.myaccountBtn).click();
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.viewIcon).click({ force: true });
        expect(await this.page.locator(this.myorderpageLocators.orderinfoValidation).textContent()).toEqual('Order Information');
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);

    }
    async reorderVerification(){
        
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.viewIcon).click({ force: true });
        expect(await this.page.locator(this.myorderpageLocators.orderinfoValidation).textContent()).toEqual('Order Information');
        await this.page.locator(this.myorderpageLocators.reorderIcon).click({ force: true });
        await expect(this.page).toHaveURL(/.*order/);  
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.continueBtn).click();
        await expect(this.page).toHaveURL(/.*account/);
        
    }

    async returnorderVerification(){
    
        await this.page.locator(this.myorderpageLocators.orderHistory).click();
        await expect(this.page).toHaveURL(/.*order/);
        await this.page.locator(this.myorderpageLocators.viewIcon).click({ force: true });
        expect(await this.page.locator(this.myorderpageLocators.orderinfoValidation).textContent()).toEqual('Order Information');
        await this.page.locator(this.myorderpageLocators.returnIcon).click({ force: true });
        expect(await this.page.locator(this.myorderpageLocators.returninfoValidation).textContent()).toEqual('Product Returns');
        await this.page.locator(this.myorderpageLocators.firstName).fill(constants.Fname);
        await this.page.locator(this.myorderpageLocators.lastName).fill(constants.Lname);
        await this.page.locator(this.myorderpageLocators.email).fill(constants.Email);
        await this.page.locator(this.myorderpageLocators.phone).fill(constants.Phone);
        await this.page.locator(this.myorderpageLocators.radioBtn).click({ force: true });
        await this.page.locator(this.myorderpageLocators.orderId).fill(constants.orderid);
        await this.page.locator(this.myorderpageLocators.orderdate).fill(constants.orderdate);
        await this.page.locator(this.myorderpageLocators.comments).fill(constants.comments);
        await this.page.locator(this.myorderpageLocators.submit).click();

    }



}
