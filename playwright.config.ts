import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/pomTest/registerAndLogin.spect.ts'],
  use: {
    headless: false,
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  timeout: 30000,
  reporter: [
    ['dot'],
    ['json', { outputFile: 'Test-rs/test-results.json' }],
    ['html', { open: 'never' }],
  ],
};

export default config;