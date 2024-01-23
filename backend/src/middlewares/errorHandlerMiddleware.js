import {
    NotFoundError,
    DuplicateError,
    ServerError,
    UnauthorizedError,
    ForbiddenError,
    InvalidDataError
} from "../errors.js";
import { SERVER_ERROR } from "../messages.js";

const initializeError = (message, status) => ({ message, status });

const errorTypeHandlers = {
    [InvalidDataError.name]: (err) => initializeError(err.message, 400),
    [UnauthorizedError.name]: (err) => initializeError(err.message, 401),
    [ForbiddenError.name]: (err) => initializeError(err.message, 403),
    [NotFoundError.name]: (err) => initializeError(err.message, 404),
    [DuplicateError.name]: (err) => initializeError(err.message, 409),
    [ServerError.name]: (err) => initializeError(err.message, 500),
    default: (err) => initializeError(SERVER_ERROR, 500)
};

const errorHandler = (err, req, res, next) => {
    const errorHandler = errorTypeHandlers[err.name] || errorTypeHandlers.default;

    const { message, status } = errorHandler(err);
    const response = {
        message,
        status,
        error: err.name,
        timestamp: new Date().toISOString(),
        path: req.path
    };

    res.status(status)
        .json(response);
};

export default errorHandler;
