const express = require('express');
const validators = require('./validators');
const register = require('./api/register');


module.exports = api = async () => {
    const router = express.Router();
    
    
    
    router.post('/register', validators.register, register);
    
    
    
    
    
    
    
    return router;
}


