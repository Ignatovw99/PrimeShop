import User, { convertToDomainObject } from "../models/User.js";

const findByCredentials = async (email, password) => {
    const userDocument = await User.findOne({ email });

    if (!(await userDocument.matchPassword(password))) {
        return null;
    }

    return convertToDomainObject(userDocument);
};

export default {
    findByCredentials,
};
