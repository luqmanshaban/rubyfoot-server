import mongoose from "mongoose";

const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Please enter a username"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter an email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"]
    },
})

const User = mongoose.model('User', UserSchema)

export default User