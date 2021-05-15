import { MongoClient } from 'mongodb';
import { Errors } from '../errors/errorHandler';

export const mongoConnect = async () => {
    try {
        const mongoURI = <string>process.env.MONGODB;
        const client = new MongoClient(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        const database = client.db('MessAngerV2');
        console.log('Connected to MongoDB Cloud');
        return database;
    } catch(error) {
        Errors.log(error, './database/mongodb.ts mongoConnect');
    }
}
