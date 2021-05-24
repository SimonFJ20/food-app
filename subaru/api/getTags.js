const { getDatabase } = require('../database');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    try {
        const database = getDatabase();
        const Tags = database.collection('tags');
        
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json({
                success: false,
                response: 'invalid',
                errors: errors.array()
            });
            return;
        }
        
        const tagsCursor = await Tags.find({title: {$regex: new RegExp(req.params.search, 'gi')}});
        
        const tags = [];
        await tagsCursor.forEach(tag => tags.push(tag));
        
        res.status(200).json({
            success: true,
            response: 'success',
            tags: tags
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

