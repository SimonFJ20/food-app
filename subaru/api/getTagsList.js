const { getDatabase } = require('../database');

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
        
        const tagsCursor = await Users.find({title: {$regex: new RegExp(req.params.title, 'gi')}});
        
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

