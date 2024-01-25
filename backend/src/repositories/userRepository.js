import User, { convertToDomainObject } from "../models/User.js";

const findByCredentials = async (email, password) => {
    const userDocument = await User.findOne({ email });

    const isUserFound = userDocument && (await userDocument.matchPassword(password));
    if (!isUserFound) {
        return null;
    }

    return convertToDomainObject(userDocument);
};

const findById = async (id) => {
    const user = await User.findById(id);
    return convertToDomainObject(user);
};

const findByEmail = async (email) => {
    const user = await User.findOne({ email }).lean();
    return convertToDomainObject(user);
};

const create = async (user) => {
    const createdUser = (await User.create(user)).toObject();
    return convertToDomainObject(createdUser);
};

export default {
    findByCredentials,
    findById,
    findByEmail,
    create
};
