const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const api = require('./api');
const { database, setDatabase } = require('./database');
require('dotenv').config();
const path = require('path');

const main = async () => {
    
    const app = express();
    const client = new mongodb.MongoClient(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});
    
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch {
        console.error('Error connecting to MongoDB Atlas');
    }
    
    setDatabase(client.db('food-app-mock'));


    app.use(cors(), express.json(), express.urlencoded({extended: true}));
    app.use('/api', await api());

    app.use('/', express.static(path.join(__dirname, './public')));

    const port = 7000;
    app.listen(port, async () => {
        console.log('food-app mock on port', port);
    });
    
}

main();
