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

userSchema.statics.findByEmail = function (email) {
    return this.findOne({ email });
};

userSchema.statics.findByCredentials = async function (email, password) {
    const userDocument = await this.findByEmail(email);

    if (!(userDocument && (await userDocument.matchPassword(password)))) {
        return null;
    }

    return userDocument;
};

userSchema.statics.toDomainObject = function (user) {
    if (!user) {
        return null;
    }
    const { _id, email, name } = user;

    return {
        id: _id.toHexString(),
        email,
        name
    };
};

userSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(String(password), this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
