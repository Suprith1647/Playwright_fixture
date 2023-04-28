import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});

test("Validate order history without ordering any product ", async ({ page,loginPage,myorderpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await myorderpage.clickOrderHistory();  
});
test("Validate reorder in order history by ordering any product ", async ({ page,loginPage,myorderpage,homePage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await homePage.clickHomeMenu();
    await homePage.isTostVisible();
    await homePage.addCart();
    await homePage.checkOut();   
    await homePage.fillBillingAddress(); 
    await homePage.clickOrderconfirm();
    await myorderpage.orderVerification();
});
test("Validate order history by  re-ordering any product ", async ({ page,loginPage,myorderpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await myorderpage.reorderVerification();

});
test("Validate return in order history by ordering any product ", async ({ page,loginPage,myorderpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await myorderpage.returnorderVerification();
    
});

test.afterAll(async ({ page }) => { 
    await page.close();
});