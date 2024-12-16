import { match } from "assert"
import { create } from "domain"
import mongoose, { Schema, Document } from "mongoose"
import { unique } from "next/dist/build/utils"
import { Content } from "next/font/google"

export interface message extends Document {
    Content: string
    createdAt: Date
}

const MessageSchema: Schema<message> = new Schema({
    Content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface user extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerifed:boolean;
    isAcceptingMessage: boolean;
    messages: message[]
}

const UserSchema: Schema<user> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please use a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    verifyCode: {
        type: String,
        required: [true, "verify Code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify Code Expiry is required"]
    },
    isVerifed: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<user>)  || mongoose.model<user>("user", UserSchema )

export default UserModel;