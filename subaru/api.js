const express = require('express');
const validators = require('./validators');
const register = require('./api/register');
const login = require('./api/login');


module.exports = api = async () => {
    const router = express.Router();
    
    
    
    router.post('/register', validators.register, register);
    router.post('/login', validators.login, login);
    
    
    
    
    
    
    return router;
}


