import { test as base, expect } from '@playwright/test';


type BaseTestFixture = 
{  
    brownserName: string; 
};


export const test = base.extend<BaseTestFixture>({
    brownserName: async ({},use, testInfo) => {
        await use(testInfo.project.name.toLocaleLowerCase());
    }
});


base.beforeEach(async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?');
    });

export { expect };