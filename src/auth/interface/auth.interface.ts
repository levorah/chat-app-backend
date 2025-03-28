import { Document, Types } from "mongoose";

export interface User extends Document {
    _id: Types.ObjectId
    username: string;
    // email: string;
    fullname: string;
    gender: string;
    password: string;
    profilePic: string;
}