import dotenv from 'dotenv';
import express from 'express';
import { MongoClient } from "mongodb";
import dummy from './dummy.js';

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const api = express();
const data = dummy;


async function main() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        api.locals.db = db;

        console.log("DB_NAME:", process.env.DB_NAME);
        console.log("Collections:", await db.listCollections().toArray());

        console.log('Connected to MongoDB Atlas');

        api.get('/', (req,res) => {
            res.send('Welcome to this awesome API')
        })

        api.get('/people', (req, res) => {
            res.status(200).json(data)
        })

        api.get('/api/v1/dogs', async (req, res) => {
            try {
                const dogs = await api.locals.db
                    .collection('dogs')
                    .find({})
                    .toArray()
                
                res.status(200).json(dogs);
            } catch (err) {
                res.status(500).json({error: 'Failed to fetch dogs'});
            }
        })

        api.listen(process.env.PORT, () => console.log(data));
    } catch (error) {
        console.error('Error');
    }
}

main().catch(console.error);

