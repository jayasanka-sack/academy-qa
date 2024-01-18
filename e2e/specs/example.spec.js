// tests/example.test.js
import {test, expect} from '@playwright/test';
test('basic test', async ({ page }) => {
  await page.goto('https://dev3.openmrs.org/');

  const searchIcon = page.locator('[data-testid="searchPatientIcon"]');
  const searchInput = page.locator('[data-testid="patientSearchBar"]');

  await searchIcon.click();

  await searchInput.fill("1000DVT");

  await expect(page.locator("text=1 search result")).toBeVisible()
  await expect(page.locator("text=Joshua Johnson")).toBeVisible()

  await page.click("text=Joshua Johnson");

  await expect(page.locator("text=Joshua Johnson")).toBeVisible()

});
