import { Page } from '@playwright/test';
import { LocatorHelper } from '../utils/locatorHelper'; 
import { User } from '../models/User';


export class LoginPage {

    private page :Page;
    private locatorsFile : any

    constructor(page: Page, browserName: string, language: string){
        this.page = page;
        this.locatorsFile = new LocatorHelper(page,browserName,'login', language);
    } 

    async loginAccount (userData: User){
        await this.page.locator(this.locatorsFile.getValue('txtUsername')).fill(userData.getUserName());
        await this.page.locator(this.locatorsFile.getValue('txtPassword')).fill(userData.getPassword());

        const btnLogin = this.page.locator(this.locatorsFile.getValue('btnLogin'));

        await btnLogin.click();
    }

}
