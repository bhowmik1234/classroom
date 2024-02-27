import mongoose from "mongoose"

const sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default Section = mongoose.model("Section", sectionSchema);