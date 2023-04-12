import { expect, test, Page } from "@playwright/test";
import { RegistrationPage } from "./../pages/registrationPage";
import { LoginPage } from "./../pages/loginPage";
import { HomePage } from "../pages/homePage";
import {Support} from "./../utils/constant";

let page: Page;
let browser, context: any;
let registrationPage : RegistrationPage;
let loginPage : LoginPage;
let homePage : HomePage;
let support: Support;

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    registrationPage = new RegistrationPage(page);
    loginPage   = new LoginPage(page);
    homePage = new HomePage(page);
    support = new Support();

})

test("Registration test", async ({baseURL}) => {
    await page.goto(`${baseURL}route=account/register`);
    await registrationPage.fillForms();
    await expect(page).toHaveURL(support.registrationConfirm);

});
test("Login test", async({baseURL}) =>{
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await homePage.clickHomeMenu();
    await homePage.isTostVisible();
    await homePage.addCart();
    await homePage.checkOut();   
    await homePage.fillBillingAddress(); 

});


test.afterAll(async (browser) => {
    await page.close();
});