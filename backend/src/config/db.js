import { MongoClient } from 'mongodb';
import { MONGODB_URI, DB_NAME } from './env.js';

const client = new MongoClient(MONGODB_URI);


export async function connectDB(app) {
    await client.connect();
    const db = client.db(DB_NAME);

    app.locals.db = db;

    console.log("Connected to MongoDB Atlas");

    return db;
}