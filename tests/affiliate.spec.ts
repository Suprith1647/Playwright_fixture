import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({ page, baseURL }) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});

test("Validate Affiliate information page without entering data", async ({ page, loginPage,affiliatepage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await affiliatepage.clickAffiliate();

});
test("Validate Affiliate information page after entering data ", async ({ page, loginPage,affiliatepage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await affiliatepage.fillAffiliate();
});

test.afterAll(async ({ page }) => {
    await page.close();
});