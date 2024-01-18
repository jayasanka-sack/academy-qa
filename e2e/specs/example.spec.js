// tests/example.test.js
import {test, expect} from '@playwright/test';
test('basic test', async ({ page }) => {
  await page.goto('https://dev3.openmrs.org/');

});
