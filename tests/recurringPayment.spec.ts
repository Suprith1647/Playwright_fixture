import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({ page, baseURL }) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test("Validate Recurring payments under My orders", async ({ page, loginPage,recurringpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await recurringpage.clickRecurring();


});
test.afterAll(async ({ page }) => {
    await page.close();
});