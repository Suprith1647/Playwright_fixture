import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test("Verify that user is able to click on Forgot password ", async ({ page,forgotpasswordpage}) => {
    await forgotpasswordpage.clickforgotpassword();
});

test.afterAll(async ({ page }) => { 
    await page.close();
});