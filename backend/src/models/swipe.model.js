import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const swipeSchema = new Schema (
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        dogId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        liked: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// One swipe per user and per dog
swipeSchema.index({ userId: 1, dogId: 1 }, { unique: true });

export default mongoose.model("Swipe", swipeSchema);
