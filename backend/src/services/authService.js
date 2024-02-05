import ms from "ms";

import userRepository from "../repositories/userRepository.js";

import userValidation from "../validations/userValidation.js";
import passwordValidator from "../validations/passwordValidator.js";

import { issueJwt } from "../utils/jwtUtils.js";
import { validateData } from "../utils/validationUtils.js";

import configProperties from "../config/properties.js";

import { InvalidDataError, DuplicateError, NotFoundError, ServerError } from "../errors.js";
import {
    USER_ALREADY_EXISTS,
    INVALID_PASSWORD,
    PASSWORD_MISMATCH,
    INVALID_CREDENTIALS,
    ACCESS_TOKEN_CANNOT_BE_ISSUED
} from "../messages.js";

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

const getUserByCredentials = async (email, password) => {
    const user = await userRepository.findByCredentials(email, password);
    if (!user) {
        throw new NotFoundError(INVALID_CREDENTIALS);
    }
    return user;
};

const issueAccessToken = async (user) => {
    try {
        const expiresIn = configProperties.auth.accessTokenExpiresIn;
        const payload = {
            userId: user.id
        };

        const accessToken = await issueJwt(payload, { expiresIn });
        return {
            accessToken,
            expiresInMilliseconds: ms(expiresIn)
        };
    } catch (error) {
        throw new ServerError(ACCESS_TOKEN_CANNOT_BE_ISSUED);
    }
};

export default {
    registerUser,
    getUserByCredentials,
    issueAccessToken
};
