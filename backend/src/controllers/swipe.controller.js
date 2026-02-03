import Swipe from  "../models/swipe.model.js";


export async function createSwipe (req, res) {
    try {
        const { userId, dogId, liked } = req.body;

        if ( !userId || !dogId || typeof liked !== "boolean") 
            res.status(404).json({Error: "Can not find"});

        const swipe = await Swipe.create({ userId, dogId, liked });
        res.status(200).json(swipe);

    } catch (error) {
        // Duplicate swipe (same userId+dogId)
        if (error.code === 11000) {
            return res.status(409).json({ error: "User already swiped this dog" });
        }

        res.status(500).json({Error: "Failed to create the swipe data"})
    }
}

export async function getSwipes (req, res) {
    try {
        const swipes = await Swipe.find();
        res.status(200).json(swipes);
    } catch (error) {
        res.status(500).json({Error: "Failed to get the swipe data"});
    }
}

