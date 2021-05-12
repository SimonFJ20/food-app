import { exists, isType, validateEmail } from '../../src/layer/checkers';

test('check if number value in const exists', () => {
    const myVar = 5;
    expect(exists(myVar)).toBe(true);
});

test('check if null value in let exists', () => {
    let myVar = null;
    expect(exists(myVar)).toBe(false);
});



test('check string value let is type string', () => {
    let myVar = 'testString';
    expect(isType(myVar, 'string')).toBe(true);
});

test('check null value let', () => {
    let myVar = null;
    expect(isType(myVar, 'null')).toBe(true);
});



test('check valid email is valid', () => {
    expect(validateEmail('thisisatest@tests.com')).toBe(true);
});

test('check invalid email is invalid', () => {
    expect(validateEmail('thisisnotanemail.com')).toBe(false);
});

