import mongoose from "mongoose"
import mongooseAggregate from "mongoose-aggregate-paginate-v2"

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    registerNo: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "Course",
    },
    email: {
        type: String,
        required: true,
    },
    classroomCode:[{
        type: mongoose.Schema.Types.ObjectId,
        rel: "Classroom",
    }],

}, {timestamps: true});

facultySchema.plugin(mongooseAggregate);

export const Student = mongoose.model("Student", studentSchema);