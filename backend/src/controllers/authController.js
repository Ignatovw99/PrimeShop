import authService from "../services/authService.js";

import asyncHandler from "../utils/asyncHandler.js";

import { ACCESS_TOKEN_COOKIE_NAME } from "../constants.js";
import { LOGOUT_SUCCESSFULLY } from "../messages.js";

/**
 * Login a user and issue an authentication token.
 * 
 * @function
 * @async
 * @route POST /api/auth/login
 * @accesslevel Anonymous
 * 
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * 
 * @throws {Error} Throws an error if authentication fails.
 * 
 * @returns {Promise<void>} A Promise that resolves after successful login process
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await authService.getUserByCredentials(email, password);
    const { accessToken, expiresInMilliseconds } = await authService.issueAccessToken(user);

    res.httpOnlyCookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, expiresInMilliseconds);
    res.json(user);
});

/**
 * Logout a user and clear the access token cookie.
 * 
 * @function
 * @route POST /api/auth/logout
 * @accesslevel Authenticated
 * 
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * 
 * @returns {void}
 */
const logoutUser = (req, res) => {
    res.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
    res.json({ message: LOGOUT_SUCCESSFULLY });
};

export default {
    loginUser,
    logoutUser
};
