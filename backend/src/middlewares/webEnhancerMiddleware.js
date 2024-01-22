import configProperties from "../config/properties.js";

const webEnhancer = (req, res, next) => {
    res.httpOnlyCookie = (cookieName, value, maxAge) => {
        res.cookie(cookieName, value, {
            httpOnly: true,
            secure: configProperties.environment.isProduction,
            sameSite: "strict",
            maxAge
        });
    };

    next();
};

export default webEnhancer;
