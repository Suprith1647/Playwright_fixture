import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/address.json";

export class AddressPage {
    readonly page: Page;
    readonly addresspageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.addresspageLocators = {


            addressBook: "//a[contains(text(),'Modify your address book entries')]",
            newaddressBtn: "//a[contains(text(),'New Address')]",
            firstname: "#input-firstname",
            lastname: "#input-lastname",
            company: "#input-company",
            address_1: "#input-address-1",
            address_2: "#input-address-2",
            city: "#input-city",
            post_code: "#input-postcode",
            country: "#input-country",
            region: "#input-zone",
            radioBtn: "//input[@checked='checked']",
            continue_Btn: "//input[@type='submit']",
            successMsg : "//div[text()=' Your address has been successfully added']",
            successMsg2 :"//div[text()=' Your address has been successfully updated']",
            delsuccessMsg : "//div[text()=' Your address has been successfully deleted']",
            warningMsg : "//div[text()=' Warning: You can not delete your default address!']",
            editBtn :"(//a[@class='btn btn-info'])[2]",
            textverify: "//li[text()='Edit Address']",
            deleteBtn : "(//a[@class='btn btn-danger'][normalize-space()='Delete'])[3]",
            defaultdelBtn : "(//a[contains(@class,'btn btn-danger')])[1]"

        }
    }

     async clickaddress(){
        await this.page.locator(this.addresspageLocators.addressBook).click();
        await expect(this.page).toHaveURL(/.*address/);
     }
     async clickNewaddress(){
        await this.page.locator(this.addresspageLocators.newaddressBtn).click();
        await expect(this.page).toHaveURL(/.*add/);
     }
     async clickEdit(){
         await this.page.locator(this.addresspageLocators.editBtn).click();
         expect(await this.page.locator(this.addresspageLocators.textverify).textContent()).toEqual("Edit Address");
     }
     async clickDelete(){
        await this.page.locator(this.addresspageLocators.deleteBtn).click();
     }
     async clickdefaultDel(){
        await this.page.locator(this.addresspageLocators.defaultdelBtn).click();
     }
      
    async fillAddress() {
        await this.page.locator(this.addresspageLocators.firstname).fill(constant.Fname);
        await this.page.locator(this.addresspageLocators.lastname).fill(constant.Lname);
        await this.page.locator(this.addresspageLocators.company).fill(constant.Company);
        await this.page.locator(this.addresspageLocators.address_1).fill(constant.address_1);
        await this.page.locator(this.addresspageLocators.address_2).fill(constant.address_2);
        await this.page.locator(this.addresspageLocators.city).fill(constant.city);
        await this.page.locator(this.addresspageLocators.post_code).fill(constant.postcode);
        await this.page.locator(this.addresspageLocators.country).selectOption(constant.country);
        await this.page.locator(this.addresspageLocators.region).selectOption(constant.region);
        await this.page.locator(this.addresspageLocators.radioBtn).click({force:true});
        await this.page.locator(this.addresspageLocators.continue_Btn).click();
    }
    
}
