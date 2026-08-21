import { Page, Locator } from '@playwright/test';
import { InventoryLocators } from '../locators/InventoryLocators';

export class InventoryPage {

    constructor(private readonly page: Page) {}


    // Getters for locators
    private get pageTitle(): Locator {
        return this.page.locator(
            InventoryLocators.pageTitle
        );
    }
    private get cartBadge(): Locator {
        return this.page.locator(
            InventoryLocators.cartBadge
        );
    }
    private get cartLink(): Locator {
        return this.page.locator(
            InventoryLocators.cartLink
        );
    }
    async getPageTitle(): Promise<string> {
        return await this.pageTitle.innerText();
    }
    async addProductToCart(productName: string): Promise<void> {
        const product = this.page.locator(InventoryLocators.inventoryItems)
            .filter({hasText: productName});
        await product.locator(InventoryLocators.addToCartButton).click();
    }

    async getCartCount(): Promise<string> {
        return await this.cartBadge.innerText();
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}