import { Page, Locator, expect } from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';
import { logger } from '../utils/logger';

export class LoginPage {

    constructor(private readonly page: Page) {}

    // Getters for the page elements using locators
    private get usernameInput(): Locator {
        return this.page.locator(LoginLocators.username);
    }
    private get passwordInput(): Locator {
        return this.page.locator(LoginLocators.password);
    }
    private get loginButton(): Locator {
        return this.page.locator(LoginLocators.loginButton);
    }
    private get errorMessage(): Locator {
        return this.page.locator(LoginLocators.errorMessage);
    }

    // Goto Function to navigate to the login page
    async goto(): Promise<void> {
        logger.info('Navigating to SauceDemo login page');
        await this.page.goto('/');
    }

    // Login Function to perform login action
    async login(username: string, password: string): Promise<void> {
        // Don't log the password.
        logger.info(`Attempting login for user: ${username}`);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        logger.info(`Login action completed for user: ${username}`);
    }


    // Verify Login Error Function to check for error messages
    async verifyLoginError(expectedMessage: string): Promise<void> {
        logger.info(`Verifying login error: ${expectedMessage}`);
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }

    // Verify Login Successful Function to check if login was successful
    async verifyLoginSuccessful(): Promise<void> {
        logger.info('Verifying successful login');
        await expect(this.page).toHaveURL(/inventory\.html/);
    }
}