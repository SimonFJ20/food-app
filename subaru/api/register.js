const { validationResult } = require('express-validator');
const { getDatabase } = require('../database');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Users = database.collection('users');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }
        
        const user = {
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            password: await bcrypt.hash(req.body.password, 10),
        }
        
        const userInsert = await Users.insertOne(user);
        
        res.status(200).json({
            success: true,
            response: 'success',
            operation: userInsert.ops[0]
        });
        
    } catch(error) {
        console.error('/api/register', error);
        res.status(500).json({
            success: false,
            response: 'error',
            error: error
        });
    }
}
