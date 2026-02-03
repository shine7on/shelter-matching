import { Router } from 'express';
import { createSwipe, getSwipes } from "../controllers/swipe.controller.js";

const router = Router();

// POST: create the swiped record
router.post("/", createSwipe);
router.get("/", getSwipes);

export default router;