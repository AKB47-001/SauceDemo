export type Environment = 'dev' | 'qa' | 'uat' | 'prod';

interface EnvironmentConfig {
    baseURL: string;
}

const environments: Record<Environment, EnvironmentConfig> = {

    dev: {
        baseURL: 'https://www.saucedemo.com'
    },

    qa: {
        baseURL: 'https://www.saucedemo.com'
    },

    uat: {
        baseURL: 'https://www.saucedemo.com'
    },

    prod: {
        baseURL: 'https://www.saucedemo.com'
    }
};

export const currentEnvironment =
    (process.env.TEST_ENV as Environment) || 'qa';

export const environmentConfig =
    environments[currentEnvironment];