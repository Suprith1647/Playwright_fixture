import { expect,test } from "../base/fixture";
import {Support} from "../utils/constant"
let support: Support;

test.beforeEach(async () => {   
support = new Support();

})
test("Registration test", async ({page, baseURL,registrationPage}) => {
    await page.goto(`${baseURL}route=account/register`);
    await registrationPage.fillForms();
    await expect(page).toHaveURL(support.registrationConfirm);
});

test.afterAll(async ({page}) => {
    await page.close();
});