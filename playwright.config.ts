import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/orange_001.spect.ts'],
  use: {
    headless: false,
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    screenshot: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  timeout: 240000,
  reporter: [
    ['dot'],
    ['json', { outputFile: 'Test-rs/test-results.json' }],
    ['html', { open: 'always' }],
    ['allure-playwright', { outputFolder: 'Test-rs/allure-results' }],
  ],
};

export default config;