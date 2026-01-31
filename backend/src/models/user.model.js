import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        prefs: {
            hasKids: {
                type: Boolean,
                default: false
            },
            hasOtherDogs: {
                type: Boolean,
                default: false
            },
            experienceLevel: {
                type: String,
                enum: ["beginner", "intermediate", "expert"],
                default: "beginner",
            },
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

export default User;