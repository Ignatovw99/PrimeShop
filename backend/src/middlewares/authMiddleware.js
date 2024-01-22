import userRepository from "../repositories/userRepository.js";

import asyncHandler from "../utils/asyncHandler.js";
import { verifyJwt } from "../utils/jwtUtils.js";

import { UnauthorizedError, ForbiddenError } from "../errors.js";
import { ACCESS_TOKEN_COOKIE_NAME } from "../constants.js";
import { UNAUTHORIZED, ACCESS_DENIED } from "../messages.js";

export const authenticate = asyncHandler(async (req, res, next) => {
    req.isAuthenticated = function () {
        return this.user && this.user.id;
    };

    const accessToken = req.cookies[ACCESS_TOKEN_COOKIE_NAME];

    if (!accessToken) {
        return next();
    }

    try {
        const decodedToken = await verifyJwt(accessToken);
        const user = await userRepository.findById(decodedToken.userId);
        req.user = user;
    } catch (error) {
        res.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
    } finally {
        next();
    }
});

export const isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next(new UnauthorizedError(UNAUTHORIZED));
    }
    next();
};

export const isAnonymous = (req, res, next) => {
    if (req.isAuthenticated()) {
        next(new ForbiddenError(ACCESS_DENIED));
    }
    next();
};

export const isAdmin = (req, res, next) => {
    const user = req.user;
    if (!user || !user.isAdmin) {
        next(new ForbiddenError(ACCESS_DENIED));
    }
    next();
};
