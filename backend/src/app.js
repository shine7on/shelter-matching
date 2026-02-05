import express from 'express';
import cors from 'cors';
const corsOptions = {
    origin: ("http://localhost:5173"),
};

import dogsRoute from './routers/dogs.js';
import usersRoute from './routers/users.js';
import swipesRoutes from "./routers/swipes.js";
import feedRoutes from "./routers/feeds.js";

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1/dogs", dogsRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/swipes", swipesRoutes);
app.use("/api/v1/feed", feedRoutes);

export default app;