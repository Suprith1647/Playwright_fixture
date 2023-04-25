import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"
import ENV from "../support/env";
let support: Support;

test.beforeEach(async () => {
    support = new Support();

});

test("Edit Page verification", async ({ page, baseURL, loginPage,editpage}) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await editpage.editInfo();
    
})
test.afterAll(async ({ page }) => { 
    await page.close();
});