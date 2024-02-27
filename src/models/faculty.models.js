import mongoose from "mongoose"
import mongooseAggregate from "mongoose-aggregate-paginate-v2"

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    registerNo: {
        type: String,
        required: true,
    },
    section: [{
        type: mongoose.Schema.Types.ObjectId,
        rel: "Section",
    }],
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        rel: "Course",
    }],
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    }

}, {timestamps: true});

facultySchema.plugin(mongooseAggregate);

export const Faculty = mongoose.model("Faculty", facultySchema);