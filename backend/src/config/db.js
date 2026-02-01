import mongoose from 'mongoose';
import { MONGODB_URI, DB_NAME } from './env.js';

export async function connectDB() {
    if (!MONGODB_URI) throw new Error("Missing MONGODB_URI in env");
    await mongoose.connect(MONGODB_URI, { dbName: DB_NAME });
    console.log("Mongoose DB:", mongoose.connection.name);
    console.log("MongoDB connected (mongoose)");
}