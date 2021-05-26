const { getDatabase } = require('../database')
const bcrypt = require('bcrypt');

const secret = '$2b$10$rdw7fHhbru0utWmZmwFxMujlmw/7KzAnVZLkMIpUWVArPfQJ4D/5u';

module.exports = async (req, res) => {

    const database = getDatabase();
    const Tags = database.collection('tags');

    if(!await bcrypt.compare(req.body.secret, secret)) {
        res.status(400).json({success: false});
        return;
    };

    const insert = await Tags.insertOne({
        title: req.body.title,
    });

    res.status(200).json({success: true});
}
