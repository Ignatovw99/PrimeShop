import Joi from "joi";

import { initializeObjectIdValidationRule } from "./validationRules.js";

const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
            "string.email": "Invalid email",
            "string.empty": "Email should not be empty",
            "any.required": "Email is required"
        }),
    name: Joi.string()
        .min(3)
        .required()
        .messages({
            "string.min": "Name should be at least {{#limit}} characters long",
            "string.empty": "Name should not be empty",
            "any.required": "Name is required"
        })
})
    .unknown(false)
    .messages({
        "object.unknown": "({{#key}}) property is not allowed"
    });

const registerSchema = schema.keys({
    password: Joi.string()
        .required()
        .messages({
            "string.empty": "Password should not be empty",
            "any.required": "Password is required"
        }),
    confirmPassword: Joi.string()
        .required()
        .messages({
            "string.empty": "Confirm password should not be empty",
            "any.required": "Confirm password is required"
        })
});

const updateSchema = schema.keys({
    id: initializeObjectIdValidationRule()
});

export default {
    schema,
    registerSchema,
    updateSchema
};
