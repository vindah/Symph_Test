import { expect } from '@playwright/test';
import BasePage from '../pages/base-page';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    this.inventoryList = page.getByTestId('inventory-list');
    this.sortDropdown = page.getByTestId('product-sort-container');
    this.itemNames = page.getByTestId('inventory-item-name');
  }

  async sortBy(order) {
    await this.sortDropdown.selectOption({ label: order });
  }

  async getItemNames() {
    return await this.itemNames.allTextContents();
  }

  async verifyItemsSortedAscending() {
    const names = await this.getItemNames();
    const sorted = [...names].sort();
    await expect(names).toEqual(sorted);
  }

  async verifyItemsSortedDescending() {
    const names = await this.getItemNames();
    const sorted = [...names].sort().reverse();
    await expect(names).toEqual(sorted);
  }
}