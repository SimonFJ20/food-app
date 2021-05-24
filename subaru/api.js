const express = require('express');
const validators = require('./validators');
const register = require('./api/register');
const login = require('./api/login');
const updateUser = require('./api/updateUser');
const getTags = require('./api/getTags');


module.exports = api = async () => {
    const router = express.Router();
    
    
    
    router.post('/register', validators.register, register);
    router.post('/login', validators.login, login);
    router.post('/updateuser', validators.updateUser, updateUser)

    router.get('/gettags', validators.getTags, getTags);
    
    
    
    
    
    
    return router;
}


