import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test(" Validate downloads under My orders", async ({ page,loginPage,downloadpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await downloadpage.clickDownloads();
});
test.afterAll(async ({ page }) => { 
    await page.close();
});