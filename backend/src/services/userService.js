import userRepository from "../repositories/userRepository.js";

import userValidation from "../validations/userValidation.js";
import passwordValidator from "../validations/passwordValidator.js";
import { objectIdValidation } from "../validations/validationRules.js";
import { validateData } from "../utils/validationUtils.js";

import { DuplicateError, InvalidDataError } from "../errors.js";
import { USER_ALREADY_EXISTS, USER_NOT_FOUND, INVALID_PASSWORD, PASSWORD_MISMATCH } from "../messages.js";

const registerUser = async (user) => {
    const validationError = validateData(userValidation.registerSchema, user);
    if (validationError) {
        throw new InvalidDataError(validationError);
    }

    const { password, confirmPassword } = user;
    const isPasswordValid = passwordValidator.validate(password);

    if (!isPasswordValid) {
        throw new InvalidDataError(INVALID_PASSWORD);
    }
    if (password !== confirmPassword) {
        throw new InvalidDataError(PASSWORD_MISMATCH);
    }

    const existingUser = await userRepository.findByEmail(user.email);

    if (existingUser) {
        throw new DuplicateError(USER_ALREADY_EXISTS);
    }

    return await userRepository.create(user);
};

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
    registerUser,
    getUserById
};
