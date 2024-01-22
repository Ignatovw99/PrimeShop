import ms from "ms";

import userRepository from "../repositories/userRepository.js";
import { issueJwt } from "../utils/jwtUtils.js";

import { NotFoundError, ServerError } from "../errors.js";
import { INVALID_CREDENTIALS, ACCESS_TOKEN_CANNOT_BE_ISSUED } from "../messages.js";

import configProperties from "../config/properties.js";

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
    getUserByCredentials,
    issueAccessToken
};
