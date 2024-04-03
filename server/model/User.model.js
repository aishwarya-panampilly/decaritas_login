import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema ([
    username : {
        type : String,
        required : [true, "Please provide unique Username"],
        unique : [true,"Username exist"]
    },
    password : {
        
    }
])