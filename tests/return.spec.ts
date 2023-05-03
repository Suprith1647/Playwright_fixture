import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({ page, baseURL }) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});

test("Validate products returns without ordering any product", async ({ page, loginPage, returnpage }) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await returnpage.clickReturnrequest();

});

test("Validate product return by ordering and returning any product", async ({ page, loginPage, returnpage, homePage, myorderpage }) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await homePage.clickHomeMenu();
    await homePage.isTostVisible();
    await homePage.addCart();
    await homePage.checkOut();
    await homePage.fillBillingAddress();
    await homePage.clickOrderconfirm();
    await myorderpage.returnorderVerification();
});
test("Validate product return information by clicking on view icon beside product in the list", async ({ page, loginPage, returnpage }) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await returnpage.returnProductvalidation();


});

test.afterAll(async ({ page }) => {
    await page.close();
});
