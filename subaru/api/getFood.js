const { getDatabase } = require('../database');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Tags = database.collection('tags');
        const Food = database.collection('foods');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }

        const search = (req.body.tags.length > 0) ? {tags: {$in: req.body.tags}} : null;
        
        const foodCursor = Food.find(search);
        
        const foods = [];
        await foodCursor.forEach(food => foods.push(food));
        
        res.status(200).json({
            success: true,
            response: 'success',
            foods: foods
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
