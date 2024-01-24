import Joi from "joi";

export const initializeObjectIdValidationRule = () => {
    return Joi.string()
        .hex()
        .length(24)
        .required();
};

export const objectIdValidation = initializeObjectIdValidationRule();
