import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});

test("Verification of News Letter Page ", async ({ page,loginPage,newspaperpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await newspaperpage.clickSubscribe();

});
test.afterAll(async ({ page }) => { 
    await page.close();
});