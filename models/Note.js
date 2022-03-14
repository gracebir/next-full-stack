import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, 'please add a tittle'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 character']
    },
    description: {
        type: String,
        required: true
    }
});

export default mongoose.models.Note || mongoose.model('Note', NoteSchema)