import Dog from '../models/dog.model.js';
import Swipe from '../models/swipe.model.js';

export async function getFeed (req, res) {
    try {
        const { userId } = req.params;

        if (!userId)
            return res.status(404).json({ error: "User not found" });

        const limit = Math.min(parseInt(req.query.limit || "20", 10), 50);
        const skip = Math.max(parseInt(req.query.skip || "0", 10), 0);

        console.log("QUERY:", req.query);

        const swipes = await Swipe.find({userId}).select("dogId");
        const swipedDogsIds = swipes.map(s => s.dogId);

        const dogs = await Dog.find({ _id: { $nin: swipedDogsIds }})
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            meta: {
                limit,
                skip,
                returned: dogs.length,
                hasMore: dogs.length === limit
            },
            dogs});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}