import { defineConfig, devices } from '@playwright/test';
import * as dotEnv from 'dotenv';


// Read all variables from .env file.
dotEnv.config();


const platform = process.env.PLATFORM || 'desktop';
const browser = process.env.BROWSER_NAME || 'chromium';
const baseURL = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com';



const deviceMap = {
  desktop: {
    chromium: { name: 'Desktop Chromium', use: { ...devices['Asus 2025 Chrome'] } },
    firefox: { name: 'Desktop Firefox', use: { ...devices['Asus 2025 Firefox'] } },
    webkit: { name: 'Desktop Safari', use: { ...devices['Macbook Pro M4 Safari'] } },
  },
  mobile: {
    chromium: { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    webkit: { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  },
};


// Chọn đúng project theo browser + platform
const selectedProject = (deviceMap as any)[platform]?.[browser];
if (!selectedProject) {
  throw new Error(`There are no valid config with PLATFORM=${platform}, BROWSER_NAME=${browser}`);
}

  
export default defineConfig({
  timeout: 240000,
  testMatch: ['tests/**/*.spec.ts'],
  use: {
    baseURL,
    headless: false,
    screenshot: 'on',
    video: 'on',
  },
  projects: [selectedProject],
  reporter: [
    ['dot'],
    ['html', { open: 'never' }],
    ['allure-playwright', { outputFolder: 'Test-rs/allure-results' }],
  ],
});


// const config: PlaywrightTestConfig = {
//   testMatch: ['tests/orange_001.spect.ts'],
//   use: {
//     headless: false,
//     baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
//     screenshot: 'on',
//     video: 'on',
//   },
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
//   ],
//   timeout: 240000,
//   reporter: [
//     ['dot'],
//     ['json', { outputFile: 'Test-rs/test-results.json' }],
//     ['html', { open: 'always' }],
//     ['allure-playwright', { outputFolder: 'Test-rs/allure-results' }],
//   ],
// };

// export default config;