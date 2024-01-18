import {test, expect} from '@playwright/test';
test('basic test', async ({ page }) => {
  await page.goto('https://dev3.openmrs.org/openmrs/spa');

  const searchIcon = page.getByTestId('searchPatientIcon')
  const searchInput = page.getByPlaceholder(/Search for a patient/)

  await searchIcon.click()
  await searchInput.fill("1000DVT")

  await expect(page.locator('text=1 search result')).toBeVisible()
  await expect(page.locator('text=Joshua Johnson')).toBeVisible()

});
