const { getDatabase } = require('../database')
const bcrypt = require('bcrypt');

const secret = '$2b$10$rdw7fHhbru0utWmZmwFxMujlmw/7KzAnVZLkMIpUWVArPfQJ4D/5u';

module.exports = async (req, res) => {

    const database = getDatabase();
    const Restaurants = database.collection('restaurants');

    if(await bcrypt.compare(req.body.secret, secret)) {
        res.status(400).json({success: false});
        return;
    };

    const insert = await Restaurants.insertOne({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        address: req.body.location,
        does_deliver: req.body.deliver,
        external_links: req.body.links,
        image: req.body.link,
        food_list: [],
        score: 0
    });

    res.status(200).json({success: true});
}
