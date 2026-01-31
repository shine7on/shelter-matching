import express from 'express';
import dogRoute from './routers/dogs.js';
import peopleRoute from './routers/people.js';


const app = express();
app.use(express.json());

app.use("/api/v1/dogs", dogRoute);
app.use("/", peopleRoute);

export default app;