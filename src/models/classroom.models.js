import mongoose from "mongoose"

const classroomSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    data: [{
        type: mongoose.Schema.Types.ObjectId,
        rel: "Data",
    }],
    section: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "Section",
    },
    teacherId: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export const Classroom = mongoose.model("Classroom", classroomSchema);