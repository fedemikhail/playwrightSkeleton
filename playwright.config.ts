import { defineConfig, devices } from '@playwright/test';
import { env } from './config/env';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html'],
    ['junit', { outputFile: 'reports/results.xml' }]
  ],

  use: {
    baseURL: env.baseUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup']
    }
  ]
});
