import { apiUsersRegisterCheckRequest } from '../../../src/api/users/register';


test('test success response on apiUsersRegisterCheckRequest', () => {
    expect(apiUsersRegisterCheckRequest('success')).toBe(200);
});

test('test email invalid response on apiUsersRegisterCheckRequest', () => {
    expect(apiUsersRegisterCheckRequest('email invalid')).toBe(400);
});

test('test error response on apiUsersRegisterCheckRequest', () => {
    expect(apiUsersRegisterCheckRequest('error')).toBe(500);
});


