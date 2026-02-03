import { Router } from 'express';
import { getFeed } from "../controllers/feed.controller.js";

const router = Router();

// GET: read the dogs that user haven't swipe yet
router.get("/:userId", getFeed);

export default router;