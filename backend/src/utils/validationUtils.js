export const validateData = (validationSchema, obj) => {
    const validationResult = validationSchema.validate(obj);

    if (!validationResult.error) {
        return null;
    }

    if (!validationResult.details) {
        return validationResult.error.message;
    }

    const validationErrorDetails = validationResult.error.details;
    const firstError = validationErrorDetails.shift();

    return firstError.message;
};
