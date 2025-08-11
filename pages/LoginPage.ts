import { Page } from '@playwright/test';
import { LocatorHelper } from '../utils/locatorHelper';
import { User } from '../models/User';


export class LoginPage {

    protected page: Page; 
    protected locatorsFile: any;


    constructor(page: Page, browserName: string, pageKey: string, language: string) {
        this.page = page;
        this.locatorsFile = new LocatorHelper(page, browserName, pageKey, language);
    }

    public async loginAccount(userData: User) {
        await this.page.locator(this.locatorsFile.getValue('txtUsername')).fill(userData.getUserName());
        await this.page.locator(this.locatorsFile.getValue('txtPassword')).fill(userData.getPassword());
        const btnLogin = this.page.locator(this.locatorsFile.getValue('btnLogin'));
        await btnLogin.click();
    }

    public async waitForLoginSuccess() {
        await this.page.waitForSelector(this.locatorsFile.getValue('lblDashboard'), { state: 'visible' });
    }

}
