import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/lamdatest.json";


export class HomePage {
  readonly page: Page;
  readonly homePageLocators: any;
  readonly billingAddressLocators: any;

  constructor(page: Page) {
    this.page = page;
    this.homePageLocators = {

      home_link: "//span[text()[normalize-space()='Home']]",
      addCart  : "(//button[@title='Add to Cart'])",
      viewCart : "//a[contains(text(),'View Cart')]",
      checkOut : "//a[contains(text(),'Checkout')]"

    }
    this.billingAddressLocators = {

      firstname: "#input-payment-firstname",
      lastname: "#input-payment-lastname",
      company: "#input-payment-company",
      address_1: "#input-payment-address-1",
      address_2: "#input-payment-address-2",  
      city: "#input-payment-city",
      post_code: "#input-payment-postcode",
      country: "#input-payment-country",
      region: "#input-payment-zone",
      tearm_condition: `input[name='agree']`,
      continue_Btn: "//button[text()='Continue ']",
      confirm_Btn : "//button[text()='Confirm Order ']",
      confirmContinue_Btn : "//a[contains(text(),'Continue')]",


    }

  }
  async clickHomeMenu() {
    await this.page.locator(this.homePageLocators.home_link).click();
    await expect(this.page).toHaveURL(/.*home/);
    await this.page.waitForTimeout(5000);
    await this.page.hover("//div[@class='image']/a", { strict: false });
    await this.page.locator(this.homePageLocators.addCart).nth(0).click();

  }
  async isTostVisible() {
    const toast = this.page.locator("//a[.='View Cart ']");
    await toast.waitFor({ state: "visible" })
    return toast;
  }

  async addCart() {
    await this.page.locator(this.homePageLocators.viewCart).click();
    await expect(this.page).toHaveURL(/.*cart/);
  }

  async checkOut() {
    await this.page.locator(this.homePageLocators.checkOut).click();
    await expect(this.page).toHaveURL(/.*checkout/);

  }
  async fillBillingAddress() {
    await this.page.locator(this.billingAddressLocators.firstname).type(constant.Fname);
    await this.page.locator(this.billingAddressLocators.lastname).type(constant.Lname);
    await this.page.locator(this.billingAddressLocators.company).type(constant.Company);
    await this.page.locator(this.billingAddressLocators.address_1).type(constant.address_1);
    await this.page.locator(this.billingAddressLocators.address_2).type(constant.address_2);
    await this.page.locator(this.billingAddressLocators.city).type(constant.city);
    await this.page.locator(this.billingAddressLocators.post_code).type(constant.postcode);
    await this.page.locator(this.billingAddressLocators.country).selectOption(constant.country);
    await this.page.locator(this.billingAddressLocators.region).selectOption(constant.region);
    await this.page.locator(this.billingAddressLocators.tearm_condition).click({ force: true });
    await this.page.locator(this.billingAddressLocators.continue_Btn).click();
    await expect(this.page).toHaveURL(/.*confirm/);
  
  }
  async clickOrderconfirm(){
    await this.page.locator(this.billingAddressLocators.confirm_Btn).click();
    await expect(this.page).toHaveURL(/.*success/);
    await this.page.locator(this.billingAddressLocators.confirmContinue_Btn).click();
  }
}






