// npm install
import { Router } from 'express';
import Dog from "../models/dog.model.js";

const router = Router();

// GET ALL
router.get("/", async (req, res) => {
    try {
        const dogs = await Dog.find();
        res.json(dogs);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Failed to fetch dogs"})
    }
});

// GET one dog by ID
router.get("/:id", async (req, res) => {
    try {
        const dog = await Dog.findById(req.params.id);
        if(!dog)
            res.status(404).json({ Error: "Dog not found" });
        res.status(200).json(dog);
    } catch (error) {
        console.error(error);
        res.status(400).json({ Error: "Invalid User Id" });
    }
});


// POST: Add the new dog
router.post("/", async (req, res) => {
    try {
        const dog = await Dog.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.error(error);
        res.status(400).json({ Error: error.message });
    }
});

// PUT: Update the dog
router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const dog = await Dog.findByIdAndUpdate(id, req.body);

        if (!dog) 
            res.status(404).json({Error: "Dog not found"});

        const UpdatedDog = await Dog.findById(id);

        res.status(200).json(UpdatedDog);
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
});

// DELETE: delete the dog
router.delete("/:id", async (req, res) =>  {
    try {
        const {id} = req.params;

        const dog = await Dog.findByIdAndDelete(id);

        if (!dog) 
            res.status(404).json({Error: "Dog not found"});

        res.status(200).json({message: "Delete successfully"});
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
});

export default router;
