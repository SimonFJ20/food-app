const { validationResult } = require('express-validator');
const { getDatabase } = require('../database');
const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Users = database.collection('users');
        const Tokens = database.collection('tokens');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }
        const token = req.body.token;
        const existingToken = await Tokens.findOne({token: token});
        if(!existingToken) {
            res.status(400).json({
                success: false,
                response: 'unknown'
            });
            return;
        }

        const userFound = await Users.findOne({_id: new ObjectId(existingToken.user)});
        
        
        res.status(200).json({
            success: true,
            response: 'success',
            user: userFound
        });
    } catch(error) {
        console.error('/api/updateuser', error);
        res.status(500).json({
            success: false,
            response: 'error',
            error: error
        });
    }
}
