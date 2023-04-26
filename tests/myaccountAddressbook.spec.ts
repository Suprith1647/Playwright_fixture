import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"
import constant from "../support/address.json";

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test("Address Book New user", async ({ page,loginPage,addresspage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await addresspage.clickaddress();
    await addresspage.clickNewaddress();
    await addresspage.fillAddress();   
    expect(await page.locator(addresspage.addresspageLocators.successMsg).textContent()).toEqual(constant.successmessage);
});
test("Edit existing user info", async ({ page,loginPage,addresspage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await addresspage.clickaddress();
    await addresspage.clickEdit();
    await addresspage.fillAddress();  
    expect(await page.locator(addresspage.addresspageLocators.successMsg2).textContent()).toEqual(constant.successmessage2);
    
});
test("Verification of Delete funcationality  ", async ({ page,loginPage,addresspage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await addresspage.clickaddress();
    await addresspage.clickDelete();
    expect(await page.locator(addresspage.addresspageLocators.delsuccessMsg).textContent()).toEqual(constant.delsuccessmessage);

});
test("Verification of warning Message of Delete funcationality  ", async ({ page,loginPage,addresspage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await addresspage.clickaddress();
    await addresspage.clickdefaultDel();
    expect(await page.locator(addresspage.addresspageLocators.warningMsg).textContent()).toEqual(constant.warningMsg);
});

test.afterAll(async ({ page }) => { 
    await page.close();
});