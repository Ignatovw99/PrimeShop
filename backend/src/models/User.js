import mongoose from "mongoose";
import bcrypt from "bcrypt";

import configProperties from "../config/properties.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const saltRounds = configProperties.auth.saltRounds;
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model("User", userSchema);

export default User;
