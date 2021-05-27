const { getDatabase } = require('../database');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Restaurants = database.collection('restaurants');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }
        
        const found = await Restaurants.findOne({name: req.body.name})
        
        res.status(200).json({
            success: true,
            response: 'success',
            restaurant: found
        });
        
    } catch(error) {
        console.error('/api/gettags', error);
        res.status(500).json({
            success: false,
            response: 'error',
            error: error
        });
    }
}
