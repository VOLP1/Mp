import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        senha: String,
        email: String,
    }
)

const User= mongoose.models.User ||  mongoose.model("User", userSchema)

export default User;