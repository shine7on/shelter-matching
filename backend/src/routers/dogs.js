// npm install
import { Router } from 'express';

const router = Router();

router.get("/", async (req, res) => {
    try {
        const dogs = await req.app.locals.db
            .collection("dogs")
            .find({})
            .toArray();

        res.status(200).json(dogs);
    } catch(error) {
        console.error(err);
        res.status(500).json({error: "Failed to fetch dogs"})
    }
});

export default router;
