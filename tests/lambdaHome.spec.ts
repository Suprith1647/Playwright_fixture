import { expect,test } from "../base/fixture";
import {Support} from "../support/constant"
let support: Support;

test.beforeEach(async () => {   
support = new Support();

})

test("Home Page ", async({page,baseURL,loginPage,homePage}) =>{
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