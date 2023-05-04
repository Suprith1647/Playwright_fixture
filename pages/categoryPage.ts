import { expect, Locator, Page } from "@playwright/test";
import constant from "../support/affiliate.json"; 

export class CategoryPage {
    readonly page: Page;
    readonly categorypageLocators: any;


    constructor(page: Page) {
        this.page = page;
        this.categorypageLocators = {
             
             shopcategoryLoc : "//a[normalize-space()='Shop by Category']//*[name()='svg']",
             categotyheadder : "//h5[normalize-space()='Top categories']",
             categoryoption : "//span[normalize-space()='Cameras']",
             optionheadder : "//li[@class='breadcrumb-item active']",
             sliders       : "//span[@class='ui-slider-handle ui-corner-all ui-state-default ui-state-hover']",
             manufacturerLOC : "//label[@for='mz-fm-0-8']",
             availabilityLOC : "//label[@for='mz-fss-0--1']",
             addCart  : "//button[@class='btn btn-cart cart-41']//i[@class='fas fa-shopping-cart']",
             viewCart : "//a[contains(text(),'View Cart')]",
             checkOut : "//a[contains(text(),'Checkout')]"

        }
    }
    
    async clickCategory(){

        await this.page.locator(this.categorypageLocators.shopcategoryLoc).click();
        expect(await this.page.locator(this.categorypageLocators.categotyheadder).textContent()).toEqual('Top categories ');
        await this.page.locator(this.categorypageLocators.categoryoption).click();
        
    }
    async moveSlider(){
        const slider = this.categorypageLocators.sliders;
        const element = this.categorypageLocators.sliders;
       // await (this.categorypageLocators.sliders).hover();
        await this.page.hover(this.categorypageLocators.sliders)
        await this.page.mouse.down();
        await this.page.mouse.move(600, 300);
        await this.page.mouse.up();
    }
    async clickManufacturer(){
        await this.page.locator(this.categorypageLocators.manufacturerLOC).click();
        
    }
    async clickAvaliablity(){
        await this.page.locator(this.categorypageLocators.availabilityLOC).click({force:true});
    }

    async clickAddCart(){
        await this.page.hover("//a[@id='mz-product-grid-image-41-212408']//div[@class='carousel-item active']//img[@title='iMac']", { strict: false });
        await this.page.locator(this.categorypageLocators.addCart).click();
        
    }

}
