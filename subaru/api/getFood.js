const { getDatabase } = require('../database');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Tags = database.collection('tags');
        const Food = database.collection('food');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }
        
        const foodCursor = Food.find(/*{tags: {$in: req.body.tags}}*/);
        
        const foods = [];
        await foodCursor.forEach(food => foods.push(food));
        
        res.status(200).json({
            success: true,
            response: 'success',
            foods: foods,
            tags: req.body.tags
        });
        
    } catch(error) {
        console.error('/api/getfood', error);
        res.status(500).json({
            success: false,
            response: 'error',
            error: error
        });
    }
}
