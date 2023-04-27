import { expect, test } from "../base/fixture";
import { Support } from "../support/constant"

let support: Support;

test.beforeEach(async ({page,baseURL}) => {
    support = new Support();
    await page.goto(`${baseURL}route=account/login`);

});
test("Verification of WishList ", async ({ page,loginPage,wishlistpage}) => {
    await loginPage.loginFillforms();
    await expect(page).toHaveURL(support.loginConfim);
    await wishlistpage.clickWishlist();
    await wishlistpage.clickRemove();
    await wishlistpage.clickContinue();


});
test.afterAll(async ({ page }) => { 
    await page.close();
});
