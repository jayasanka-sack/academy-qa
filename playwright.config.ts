import * as dotenv from 'dotenv';
import {devices} from "playwright";
dotenv.config();

// See https://playwright.dev/docs/test-configuration.
const config = {
  testDir: './e2e/specs',
  timeout: 3 * 60 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  workers: 1,
  forbidOnly: !!process.env.CI,
  globalSetup: require.resolve('./e2e/core/global-setup'),
  retries: 0,
  reporter: [['html']],
  use: {
    video: 'on',
    storageState: 'e2e/storageState.json',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;
