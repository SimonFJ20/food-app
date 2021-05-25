const { getDatabase } = require('../database')

module.exports = async (req, res) => {

    const database = getDatabase();
    const Restaurants = database.collection('restaurants');

    if(req.body.secret !== 'ELJ9wcrQ68QAYQPP') {
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
