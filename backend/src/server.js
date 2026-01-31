import app from './app.js';
import { connectDB } from './config/db.js';
import { PORT } from './config/env.js';


async function start() {
    try {
        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error("Startup error:", err);
        process.exit(1);
    }
}

start();