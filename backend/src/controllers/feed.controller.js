import Dog from '../models/dog.model.js';
import Swipe from '../models/swipe.model.js';

export async function getFeed (req, res) {
    try {
        const { userId } = req.params;

        if (!userId)
            res.status(404).json({Error: "User not found"});

        const swipes = await Swipe.find({userId}).select("dogId");
        const swipedDogsIds = swipes.map(s => s.dogId);

        const dogs = await Dog.find({ _id: { $nin: swipedDogsIds }}).limit(20);

        res.status(200).json(dogs);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}