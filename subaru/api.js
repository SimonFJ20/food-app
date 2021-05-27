const express = require('express');
const validators = require('./validators');
const register = require('./api/register');
const login = require('./api/login');
const updateUser = require('./api/updateUser');
const getTags = require('./api/getTags');
const makerest = require('./api/makerest');
const makefood = require('./api/makefood');
const maketag = require('./api/maketag');
const getFood = require('./api/getFood');
const getRestaurent = require('./api/getRestaurent');
const getuser = require('./api/getuser');


module.exports = api = async () => {
    const router = express.Router();
    
    
    
    router.post('/register', validators.register, register);
    router.post('/login', validators.login, login);
    router.post('/updateuser', validators.updateUser, updateUser)
    router.post('/getuser', validators.getUser, getuser)


    router.post('/gettags', validators.getTags, getTags);
    router.post('/getfood', validators.getFood, getFood)
    router.post('/getrestaurant', validators.getRestaurant, getRestaurent)

    
    router.post('/makerest', makerest);
    router.post('/makefood', makefood);
    router.post('/maketag', maketag);
    
    
    
    return router;
}


