const { getDatabase } = require('../database')

module.exports = async (req, res) => {

    const database = getDatabase();
    const Foods = database.collection('foods');

    if(req.body.secret !== 'ELJ9wcrQ68QAYQPP') {
        res.status(400).json({success: false});
        return;
    };

    const insert = await Foods.insertOne({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        tags: req.body.tags,
        info: req.body.info,
        score: 0,
        restaurant: req.body.rest
    });

    res.status(200).json({success: true});
}
