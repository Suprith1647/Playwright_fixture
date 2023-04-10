import {test as baseText} from "@playwright/test"
import {RegistrationPage}  from "../pages/registrationPage";
import { LoginPage } from "../pages/loginPage";

type pages ={
    registrationPage : RegistrationPage
    loginPage : LoginPage
}


const testPages =baseText.extend<pages>({

    registrationPage: async({page},use)=>{
        await use(new RegistrationPage(page));
    },
    loginPage : async({page},use)=>{
        await use(new LoginPage(page));
    },

})

export  const test= testPages;
export const expect= testPages.expect;