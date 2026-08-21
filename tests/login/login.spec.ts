import { test } from '../../fixtures/testFixtures';
import { credentials } from '../../config/credentials';
import testData from '../../data/testData.json';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('should login successfully with valid credentials',
        { tag: '@smoke' }, async ({ loginPage }) => {
            await loginPage.login(credentials.username,
                credentials.password);
            await loginPage.verifyLoginSuccessful();
        }
    );   


    for (const scenario of testData.negativeLoginScenarios) {
        test(`should display error for ${scenario.name}`,
            { tag: '@negative' }, async ({ loginPage }) => {
                await loginPage.login(scenario.username,
                scenario.password);
                await loginPage.verifyLoginError(scenario.expectedError);                
            }
        );
    }
});