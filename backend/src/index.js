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
        console.log('Connected to MongoDB Atlas');

        api.get('/', (req,res) => {
            res.send('Welcome to this awesome API')
        })

        api.get('/people', (req, res) => {
            res.status(200).json(data)
        })

        api.listen(process.env.PORT, () => console.log(data));
    } catch (error) {
        console.error('Error');
    }
}

main().catch(console.error);

