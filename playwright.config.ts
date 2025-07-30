import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/orange_001.spect.ts'],
  use: {
    headless: false,
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  timeout: 120000,
  reporter: [
    ['dot'],
    ['json', { outputFile: 'Test-rs/test-results.json' }],
    ['html', { open: 'never' }],
  ],
};

export default config;