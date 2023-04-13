import { expect,test } from "../base/fixture";
import {Support} from "../utils/constant"
let support: Support;

test.beforeEach(async () => {   
support = new Support();

})
test("Registration test", async ({page, baseURL,registrationPage}) => {
    await page.goto(`${baseURL}route=account/register`);
    await registrationPage.fillForms();
    await expect(page).toHaveURL(support.registrationConfirm);
});

test("Login test", async({page,baseURL,loginPage,homePage}) =>{
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);   
    await homePage.clickHomeMenu();
    await homePage.isTostVisible();
    await homePage.addCart();
    await homePage.checkOut();   
    await homePage.fillBillingAddress(); 
})

test.afterAll(async ({page}) => {
    await page.close();
});