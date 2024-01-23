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

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(String(password), this.password);
};

const User = mongoose.model("User", userSchema);

export const convertToDomainObject = (user) => {
    if (!user) {
        return null;
    }
    const { _id, email, name } = user;

    return {
        id: _id.toString(),
        email,
        name
    };
};

export default User;
