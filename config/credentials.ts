const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;

if (!username || !password) {
    throw new Error(
        'TEST_USERNAME and TEST_PASSWORD environment variables are required'
    );
}

export const credentials = {
    username,
    password
};