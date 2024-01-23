import { NotFoundError } from "../errors.js";
import { ROUTE_WITH_METHOD_NOT_FOUND } from "../messages.js";

const routeNotFound = (req, res, next) => {
    const errorOptions = {
        method: req.method,
        url: req.url
    };
    
    NotFoundError.throwError(ROUTE_WITH_METHOD_NOT_FOUND, errorOptions);
};

export default routeNotFound;
