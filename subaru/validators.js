const { check } = require('express-validator');


exports.register = [
    check('name', 'Name error').trim().escape(),
    
    check('address', 'Address error').trim().escape(),
    
    check('email', 'Email error').isEmail().trim().escape(),
    
    check('phone', 'Phone error').isMobilePhone('da-DK'),
    
    check('password').isLength({ min: 8 })
    .withMessage('Password Must Be at Least 8 Characters')
    .matches('[0-9]').withMessage('Password Must Contain a Number')
    .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
    .trim().escape()
];

exports.login = [
    check('phone', 'Phone error').isMobilePhone('da-DK'),
    
    check('password').isLength({ min: 8 })
    .withMessage('Password Must Be at Least 8 Characters')
    .matches('[0-9]').withMessage('Password Must Contain a Number')
    .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
    .trim().escape()
];
