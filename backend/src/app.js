import express from 'express';
import dogsRoute from './routers/dogs.js';
import usersRoute from './routers/users.js';
import swipesRoutes from "./routers/swipe.js";

const app = express();
app.use(express.json());

app.use("/api/v1/dogs", dogsRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/swipes", swipesRoutes);

export default app;