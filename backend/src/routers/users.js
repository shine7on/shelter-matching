import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// GET one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Invalid user id" });
  }
});

// POST: Add the new user
router.post("/", async (req, res) => {
  try {
      const user = await User.create(req.body);
      res.status(200).json(req.body);
  } catch (error) {
      console.error(error);
      res.status(400).json({ Error: error.message });
  }
});

// PUT: Update the user
router.put("/:id", async (req, res) => {
  try {
    const {id} = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user)
      res.status(404).json({ message: "User not found" });

    const UpdatedUser = await User.findById(id);

    res.status(200).json(UpdatedUser);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;