import Joi from "joi";

import { INVALID_ID } from "../messages.js";

export const initializeObjectIdValidationRule = () => {
    return Joi.string()
        .hex()
        .length(24)
        .required()
        .error(new Error(INVALID_ID));
};

export const objectIdValidation = initializeObjectIdValidationRule();
