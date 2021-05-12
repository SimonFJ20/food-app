import { checkUserCreate } from '../../src/layer/checkUserCreate';

test('check new valid user', () => {

    let body = {
        name: 'myName',
        address: 'Location 1 at Joes',
        email: 'mytest@email.com',
        phone: '20202020',
        password: 'myV3ryStr0ngP4ssw0rd!'
    }

    expect(checkUserCreate(body)).toBe('success');

});

test('check new invalid user', () => {

    let body = {
        name: 'username',
        address: 'Location 1 Lo',
        email: 'mytestemail.com',
        phone: '20202020',
        password: 'myV3ryStr0ngP4ssw0rd!'
    }

    expect(checkUserCreate(body)).toBe('email invalid');

});
