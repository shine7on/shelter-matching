// npm install
import { Router } from 'express';
import Dog from "../models/dog.model.js";
import { getDogs, getDogById, addDog, updateDog, deleteDog } from "../controllers/dog.controller.js";

const router = Router();

// GET ALL
router.get("/", getDogs);

// GET one dog by ID
router.get("/:id", getDogById);

// POST: Add the new dog
router.post("/", addDog);

// PUT: Update the dog
router.put("/:id", updateDog);

// DELETE: delete the dog
router.delete("/:id", deleteDog);

export default router;
