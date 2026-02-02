import { Router } from "express";
import User from "../models/user.model.js";
import { getUsers, getUserById, addUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

// GET all users
router.get("/", getUsers);

// GET one user
router.get("/:id", getUserById);

// POST: Add the new user
router.post("/", addUser);

// PUT: Update the user
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

export default router;