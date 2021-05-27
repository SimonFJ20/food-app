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

        const toUpdate = {
            name: true,
            email: true,
            phone: true
        };
        for(let error in errors.array()) toUpdate[error.param] = false;

        const userToUpdate = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        }

        for(let i in userToUpdate) if(!toUpdate[i]) delete userToUpdate[i]

        const token = req.body.token;
        const existingToken = await Tokens.findOne({token: token});
        if(!existingToken) {
            res.status(400).json({
                success: false,
                response: 'unknown'
            });
            return;
        }

        if(userToUpdate.phone) {
            const userFound = await Users.findOne({phone: req.body.phone});
            if(userFound && userFound._id.toString() !== existingToken.user.toString()) {
                res.status(400).json({
                    success: false,
                    response: 'occupied',
                    other: {a: userFound, b: userFound._id, c: existingToken.user}
                });
                return;
            }
        }

        const userFound = await Users.findOne({_id: new ObjectId(existingToken.user)});

        const userUpdate = await Users.updateOne({_id: new ObjectId(existingToken.user)}, {$set: userToUpdate}, {upsert: true});
        
        res.status(200).json({
            success: true,
            response: 'success',
            operations: userUpdate.result.n
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
