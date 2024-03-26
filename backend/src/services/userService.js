import User from "../models/User.js";

import { objectIdValidation } from "../validations/validationRules.js";
import { validateData } from "../utils/validationUtils.js";

import { InvalidDataError } from "../errors.js";
import { USER_NOT_FOUND } from "../messages.js";

const getUserById = async (id) => {
    const validationError = validateData(objectIdValidation, id);
    if (validationError) {
        throw new InvalidDataError(validationError);
    }

    const user = await User.findById(id).lean();
    if (!user) {
        throw new NotFoundError(USER_NOT_FOUND);
    }

    return User.toDomainObject(user);
};

export default {
    getUserById
};
