import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({ page, baseURL }) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test("Validate shop by category by ordering the product", async ({ page, loginPage,categorypage,homePage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await categorypage.clickCategory();
    await categorypage.moveSlider();
    await categorypage.clickManufacturer();
    await categorypage.clickAvaliablity();
    await categorypage.clickAddCart();
    await homePage.addCart();
    await homePage.checkOut();
    await homePage.fillBillingAddress();
    await homePage.clickOrderconfirm();
      
});
test.afterAll(async ({ page }) => {
    await page.close();
});