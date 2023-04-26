import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"
let support: Support;

test.beforeEach(async () => {
    support = new Support();

});
test("My Account Page verification", async ({ page, baseURL, loginPage, myaccountpage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await myaccountpage.myAccountpageVerification();

});
test.afterAll(async ({ page }) => { 
    await page.close();
});