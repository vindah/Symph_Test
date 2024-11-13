import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { InventoryPage } from '../../pages/inventory-page';

test.describe('Inventory Sorting', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login();
    await loginPage.verifySuccessfulLogin();
  });

  test('validate that user can sort items A-Z by name', async ({ page }) => {
    await inventoryPage.sortBy('Name (A to Z)');
    await inventoryPage.verifyItemsSortedAscending();
  });

  test('validate that user can sort items Z-A by name', async ({ page }) => {
    await inventoryPage.sortBy('Name (Z to A)');
    await inventoryPage.verifyItemsSortedDescending();
  });
});