import { expect, Locator, Page } from "@playwright/test";

export class DownloadPage {
    readonly page: Page;
    readonly downloadpageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.downloadpageLocators = {
            
            downloads: "//a[@class='d-inline-flex text-decoration-none text-reset flex-column my-3'][normalize-space()='Downloads']",
            resultvalidation: "//p[text()='No results!']",
            continueBtn: "//a[contains(text(),'Continue')]",

    }
}

async clickDownloads(){
    
    await this.page.locator(this.downloadpageLocators.downloads).click();
    //await expect(this.page).toHaveURL(/.*download/);
    expect(await this.page.locator(this.downloadpageLocators.resultvalidation).textContent()).toEqual('No results!');
    await this.page.locator(this.downloadpageLocators.continueBtn).click();
    await expect(this.page).toHaveURL(/.*account/);

}
 
}

