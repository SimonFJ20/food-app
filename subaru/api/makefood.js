const { getDatabase } = require('../database')
const bcrypt = require('bcrypt');

const secret = '$2b$10$rdw7fHhbru0utWmZmwFxMujlmw/7KzAnVZLkMIpUWVArPfQJ4D/5u';

module.exports = async (req, res) => {

    const database = getDatabase();
    const Foods = database.collection('foods');

    if(await bcrypt.compare(req.body.secret, secret)) {
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
