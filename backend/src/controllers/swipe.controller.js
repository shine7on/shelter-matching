import Swipe from  "../models/swipe.model.js";


export async function createSwipe (req, res) {
    try {

        const { userId, dogId, liked } = req.body;

        if ( !userId || !dogId || typeof liked !== "boolean") 
            return res.status(400).json({Error: "Can not find"});

        const existingSwipes = await Swipe.findOne({ userId, dogId}).lean();
        const created = !existingSwipes;

        // Duplicate swipe -> update
        const swipe = await Swipe.findOneAndUpdate(
            { userId, dogId },
            { $set: { liked } },
            { new: true, upsert: true }
        );

        res.status(200).json({
            data: { userId: swipe.userId, dogId: swipe.dogId, linked: swipe.linked },
            meta: { created }
        });

    } catch (error) {
        res.status(500).json({Error: "Failed to create the swipe data"});
    }
}

export async function getSwipes (req, res) {
    try {
        const limit = Math.min(parseInt( req.query.limit || "20", 10), 50);
        const skip = Math.max(parseInt( req.query.skip || "0", 10), 0);

        const swipes = await Swipe.find()
            .limit(limit)
            .skip(skip);

        res.status(200).json({
            meta: {
                limit,
                skip,
                returned: swipes.length,
                hasMore: swipes.length === limit
            },
            swipes});

    } catch (error) {
        res.status(500).json({Error: "Failed to get the swipe data"});
    }
}

