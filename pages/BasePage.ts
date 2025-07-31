import { Page } from '@playwright/test';
import { LocatorHelper } from '../utils/locatorHelper';


export class BasePage {
    private page: Page;
    private locatorsFile: any;

    constructor(page: Page, browserName: string, pageKey: string, language: string) {
        this.page = page;
        this.locatorsFile = new LocatorHelper(page, browserName, pageKey, language);
    }
    getLocatorInFile(key: string): string {
        return this.locatorsFile.getValue(key);
    }

    async navigateTo(navigateText: string) {
        const locator = this.locatorsFile.getValue('navSidebarMenu');
        console.log(`Navigating to: ${navigateText}, Locator: ${locator}`);
        if (!locator) {
            throw new Error(`Locator for ${navigateText} not found in locators file.`);
        }

        const locatorFormated = this.locatorsFile.formatDynamicLocator(locator, [navigateText]);
        console.log(`Formatted locator: ${locatorFormated}`);
        const element = this.page.locator(locatorFormated);

        await element.click();
        await this.page.waitForLoadState('networkidle');
    }
}