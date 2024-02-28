import userService from "../services/userService.js";

import asyncHandler from "../utils/asyncHandler.js";

/**
 * Get user profile
 * 
 * @function
 * @async
 * @route GET /api/users/profile
 * @accesslevel Authenticated
 * 
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * 
 * @throws {NotFoundError} Throws an error if the user profile is not found.
 * 
 * @returns {Promise<void>} A Promise that resolves after the user profile is found
 */
const getUserProfile = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const user = await userService.getUserById(id);
    res.json(user);
});


const updateUserProfile = (req, res) => {

};

export default {
    getUserProfile,
    updateUserProfile
};
