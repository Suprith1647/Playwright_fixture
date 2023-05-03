import {test as baseText} from "@playwright/test"
import {RegistrationPage}  from "../pages/registrationPage";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { MyaccountPage } from "../pages/myaccountPage";
import { EditPage } from "../pages/editPage";
import { ChangePasswordPage } from "../pages/changepasswordPage";
import { AddressPage } from "../pages/addressbookPage";
import { WishListPage } from "../pages/wishlistPage";
import { NewspaperPage } from "../pages/newsPage";
import { MyOrderPage } from "../pages/myordersPage";
import { DownloadPage } from "../pages/downloadsPages";
import { RewardPage } from "../pages/rewardPages";
import { ReturnPage } from "../pages/returnPages";
import { TranscationPage } from "../pages/transcationsPages";
import { RecurringPage } from "../pages/recurringpaymentPage";
import { AffiliatePage } from "../pages/affiliatePage";
import { CategoryPage } from "../pages/categoryPage";

type pages ={
    registrationPage : RegistrationPage
    loginPage : LoginPage
    homePage : HomePage
    myaccountpage : MyaccountPage
    editpage : EditPage
    changepasswordpage : ChangePasswordPage
    addresspage : AddressPage
    wishlistpage : WishListPage
    newspaperpage : NewspaperPage
    myorderpage : MyOrderPage
    downloadpage : DownloadPage
    rewardpage : RewardPage
    returnpage : ReturnPage
    transcationpage : TranscationPage
    recurringpage  : RecurringPage
    affiliatepage : AffiliatePage
    categorypage : CategoryPage
}


const testPages =baseText.extend<pages>({

    registrationPage: async({page},use)=>{
        await use(new RegistrationPage(page));
    },
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },
    homePage :async({page},use)=>{
        await use(new HomePage(page));
    },
    myaccountpage: async({page},use)=>{
        await use(new MyaccountPage(page));
    },
    editpage: async({page},use)=>{
        await use(new EditPage(page));
    },
    changepasswordpage: async({page},use) => {
        await use(new ChangePasswordPage(page));   
    },
    addresspage: async({page},use) => {
        await use(new AddressPage(page));  
    },
    wishlistpage: async({page},use) => {
        await use(new WishListPage(page)); 
    },
    newspaperpage: async({page},use) => {
        await use(new NewspaperPage(page)); 
    },
    myorderpage: async({page},use) => {
        await use(new MyOrderPage(page)); 
    },
    downloadpage: async({page},use) => {
        await use(new DownloadPage(page)); 
    },
    rewardpage: async({page},use) => {
        await use(new RewardPage(page)); 
    },
    returnpage: async({page},use) => {
        await use(new ReturnPage(page)); 
    },
    transcationpage: async({page},use) => {
        await use(new TranscationPage(page)); 
    },
    recurringpage: async({page},use) => {
        await use(new RecurringPage(page)); 
    },
    affiliatepage: async({page},use) => {
        await use(new AffiliatePage(page)); 
    },
    categorypage: async({page},use) => {
        await use(new CategoryPage(page)); 
    },
    
})

export  const test= testPages;
export const expect= testPages.expect;