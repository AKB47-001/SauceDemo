import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { USERS } from '../data/testData';

type TestFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    authenticatedInventoryPage: InventoryPage;
};

export const test = base.extend<TestFixtures>({

    // Login Page fixture
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    // Plain Inventory Page fixture
    // Does NOT perform login
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    // Logged-in Inventory Page fixture
    authenticatedInventoryPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(inventoryPage.pageTitle).toBeVisible();
    await use(inventoryPage);
}
});

export { expect };