const { getDatabase } = require('../database')

module.exports = async (req, res) => {

    const database = getDatabase();
    const Tags = database.collection('tags');

    if(req.body.secret !== 'ELJ9wcrQ68QAYQPP') {
        res.status(400).json({success: false});
        return;
    };

    const insert = await Tags.insertOne({
        title: req.body.title,
    });

    res.status(200).json({success: true});
}
