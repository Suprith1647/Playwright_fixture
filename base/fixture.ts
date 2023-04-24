import {test as baseText} from "@playwright/test"
import {RegistrationPage}  from "../pages/registrationPage";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { MyaccountPage } from "../pages/myaccountPage";

type pages ={
    registrationPage : RegistrationPage
    loginPage : LoginPage
    homePage : HomePage
    myaccountpage : MyaccountPage
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
    }


})

export  const test= testPages;
export const expect= testPages.expect;