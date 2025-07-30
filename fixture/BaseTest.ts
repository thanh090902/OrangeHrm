import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type BrowserName = 'chromium' | 'firefox' | 'webkit';

type BaseTestFixture = {
  browserName: BrowserName;
};

export const test = base.extend<BaseTestFixture>({
  browserName: async ({}, use, testInfo) => {
    await use(testInfo.project.name as BrowserName);
  }
});

// global beforeEach
test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`, { waitUntil: 'networkidle' });

});

export { expect };