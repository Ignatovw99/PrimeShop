import userRepository from "../repositories/userRepository.js";

import { objectIdValidation } from "../validations/validationRules.js";
import { validateData } from "../utils/validationUtils.js";

import { InvalidDataError } from "../errors.js";
import { USER_NOT_FOUND } from "../messages.js";

const getUserById = async (id) => {
    const validationError = validateData(objectIdValidation, id);
    if (validationError) {
        throw new InvalidDataError(validationError);
    }

    const user = await userRepository.findById(id);
    if (!user) {
        throw new NotFoundError(USER_NOT_FOUND);
    }

    return user;
};

export default {
    getUserById
};
