import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DogShema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        breed: {
            type: String,
            required: true
        },
        difficulties: {
            type: String,
            enum: ["easy", "medium", "hard"],
            required: false
        },
        goodWithKids: {
            type: Boolean,
            required: false
        },
        goodWithDogs: {
            type: Boolean,
            required: false
        },
        shelterId: {
            type: Number,
            default: '00000',
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Dog = mongoose.model("Dog", DogShema);
export default Dog;