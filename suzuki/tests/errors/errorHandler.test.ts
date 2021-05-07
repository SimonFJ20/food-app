import { Errors, formatError, getInstanceOfError } from '../../src/errors/errorHandler'

test('log 2 errors, get length and clear', () => {
    Errors.log(new TypeError('error 1'), 'test1 location', true);
    Errors.log(new Error('error 2'), 'test2 location', true);
    expect(Errors.getLength()).toBe(2);
    Errors.clear();
})

test('log 3 errors, get all errors as LoggedError and clear', () => {
    Errors.log(new Error('error 1'), 'test1 location', true);
    Errors.log(new TypeError('error 2'), 'test2 location', true);
    Errors.log(new URIError('error 3'), 'test3 location', true);
    expect(Errors.getAllLoggedErrors()[1].error.name).toBe('TypeError');
    Errors.clear();
});

test('log 3 errors, get all errors as Error and clear', () => {
    Errors.log(new Error('error 1'), 'test1 location', true);
    Errors.log(new TypeError('error 2'), 'test2 location', true);
    Errors.log(new URIError('error 3'), 'test3 location', true);
    expect(Errors.getAllErrors()[1].name).toBe('TypeError');
    Errors.clear();
});


test('get error instance type EvalError', () => {
    expect(getInstanceOfError(new EvalError())).toBe('EvalError');
});

test('get error message formatted', () => {
    expect(formatError(ReferenceError('msg'), 'some location'))
        .toBe(`ReferenceError at some location\n┗Name: ReferenceError\n┗Message: msg\n`);
});



