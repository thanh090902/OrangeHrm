import { LocatorHelper } from "../utils/locatorHelper";
import { Page } from "@playwright/test";
import { JobDetails } from "../models/JobDetails";

export class MyInforPage {
    private page: Page;
    private locatorsFile: any;

    constructor(page: Page, browserName: string, pageKey: string, language: string) {
        this.page = page;
        this.locatorsFile = new LocatorHelper(page, browserName, pageKey, language);
    }

    public async navigateToMyInfo(navigateText: string) {
        const navSidebarUserInfor = this.locatorsFile.getValue('navSidebarUserinfor');

        if (!navSidebarUserInfor) {
            throw new Error(`Locator for ${navigateText} not found in locators file.`);
        }

        const formattedLocator = this.locatorsFile.formatDynamicLocator(navSidebarUserInfor, [navigateText]);
        console.log(`Formatted locator for My Info: ${formattedLocator}`);

        const element = this.page.locator(formattedLocator);

        await element.click();
        await this.page.waitForLoadState('networkidle');
    }

    public async getJobTitle(): Promise<string> {
        return await this.page.locator(this.locatorsFile.getValue('lblJobTitle')).textContent() ?? "";
    }

    public async getJobDetails(): Promise<JobDetails> {
        const jobCategory = await this.page.locator(this.locatorsFile.getValue('lblJobCategory')).textContent() ?? "";
        const subUnit = await this.page.locator(this.locatorsFile.getValue('lblSubUnit')).textContent() ?? "";
        const location = await this.page.locator(this.locatorsFile.getValue('lblLocation')).textContent() ?? "";
        const employmentStatus = await this.page.locator(this.locatorsFile.getValue('lblEmploymentStatus')).textContent() ?? "";
        const joinedDate = await this.page.locator(this.locatorsFile.getValue('lblJoinedDate')).inputValue() ?? "";
        const jobSpecification = await this.page.locator(this.locatorsFile.getValue('lblJobSpecification')).textContent() ?? "";

        return new JobDetails(joinedDate, await this.getJobTitle(), jobCategory, subUnit, location, employmentStatus, jobSpecification);
    }
}