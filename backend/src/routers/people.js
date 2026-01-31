// npm install
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json("Yey updated");
    } catch (error) {
        res.status(500).json(err);
    }
});


export default router;