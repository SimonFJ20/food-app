const { validationResult } = require('express-validator');
const { getDatabase } = require('../database');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils');

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

        
        const userFound = await Users.findOne({phone: req.body.phone});
        
        if(!userFound) {
            res.status(400).json({
                success: false,
                response: 'unknown'
            });
            return;
        }
        
        if(!await bcrypt.compare(req.body.password, userFound.password)) {
            res.status(400).json({
                success: false,
                response: 'unknown'
            });
            return;
        }
        
        const tokenInsert = await Tokens.insertOne({
            token: generateToken(32),
            createdAt: Date()
        });
        
        res.status(200).json({
            success: true,
            response: 'success',
            token: tokenInsert.ops[0].token,
            operation: tokenInsert.ops[0]
        });
        
    } catch(error) {
        console.error('/api/login', error);
        res.status(500).json({
            success: false,
            response: 'error',
            error: error
        });
    }
}
