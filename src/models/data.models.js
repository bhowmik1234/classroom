import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    file: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export const Data = mongoose.model("Data", dataSchema);