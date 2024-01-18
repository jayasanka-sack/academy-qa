// tests/example.test.js
import {test, expect} from '@playwright/test';
test('basic test', async ({ page }) => {
  await page.goto('https://dev3.openmrs.org/');

  const searchIcon = page.getByTestId("searchPatientIcon");
  const input = page.getByPlaceholder("Search for a patient by name")

  await searchIcon.click();
  await input.fill("1000H37");

  // Verify there's only one patient
  await expect(page.getByText("1 search result")).toBeVisible();

  // Verify the patient's name is open Academy Jon
  await expect(page.getByText("open Academy Jon")).toBeVisible();
});
