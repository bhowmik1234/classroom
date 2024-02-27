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
    email: {
        type: String,
        required: true,
    },
    classroomCode: [
        {
            type: mongoose.Schema.Types.ObjectId,
            rel: "Classroom",
        }
    ]

}, {timestamps: true});

facultySchema.plugin(mongooseAggregate);

export const Faculty = mongoose.model("Faculty", facultySchema);