jest.mock('../api/google');
const google = require("../api/google");

const session = require('../controllers/sessionController');

test('it should return return true on valid google token', async () => {
    const token = "valid token";

    google.verify.mockImplementation(() => Promise.resolve());
    expect(await session.verified(token)).toBe(true);
});

test('it should return return false on invalid google token', async () => {
    const token = "invalid token";

    google.verify.mockImplementation(() => Promise.reject());
    expect(await session.verified(token)).toBe(false);
});

test('it should return return true on existing user', () => {
    const user = 'something exists';
    expect(session.authenticateUser(user)).toBe(true);
});
test('it should return return false on empty user', () => {
    const user = undefined;
    expect(session.authenticateUser(user)).toBe(false);
});