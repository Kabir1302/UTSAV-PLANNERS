import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "Name must conatin atleast 3 characters"],
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        validate: [validator.isEmail, "please provide valid Email"],
    },
    subject: {
        type: String,
        required: [true, "Subject Required"],
        minLength: [8," Subject contain atleast 8 characters"],
    },
    message: {
        type: String,
        required: [true, "Message Required"],
        minLength: [14," Message contain atleast 14 characters"],
    },
});

export const Message = mongoose.model("Message",messageSchema);