import { 
    exists,
    isType,
    validateEmail,
    validateMapLocation,
    validateName,
    validatePhone
} from '../../src/layer/checkers';

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



test('check valid name is valid', () => {
    expect(validateName('Thies hollebæk Peiter')).toBe(true)
});

test('check invalid name is invalid', () => {
    expect(validateName('jeg ErSej69')).toBe(false)
});

test('check inapropriet name is invalid', () => {
    expect(validateName('fuck the jews')).toBe(false)
});



test('check valid phonenumber without spaces is valid', () => {
    expect(validatePhone('60602456')).toBe(true);
});

test('check valid phonenumber with spaces is valid', () => {
    expect(validatePhone('60 602 456')).toBe(true);
});

test('check invalid phonenumber is invalid', () => {
    expect(validatePhone('60 602 45')).toBe(false);
});



test('check valid location is valid', () => {
    expect(validateMapLocation({latitude: 36, longitude: 36})).toBe(true);
});

test('check invalid too big location is invalid', () => {
    expect(validateMapLocation({latitude: 360, longitude: 36})).toBe(false);
});

test('check invalid location is invalid', () => {
    expect(validateMapLocation({latitude: 36, longitude: 360})).toBe(false);
});
