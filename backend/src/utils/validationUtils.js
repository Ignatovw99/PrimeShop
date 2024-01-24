export const validateData = (validationSchema, obj) => {
    const validationResult = validationSchema.validate(obj);

    if (!validationResult.error) {
        return null;
    }

    const validationErrorDetails = validationResult.error.details;
    const firstError = validationErrorDetails.shift();

    return firstError.message;
};
