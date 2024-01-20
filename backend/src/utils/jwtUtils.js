import jwt from "jsonwebtoken";

import configProperties from "../config/properties.js";

const secret = configProperties.auth.secret;

export const issueJwt = (payload, options) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    });
};

export const verifyJwt = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (error, decotedToken) => {
            if (error) {
                reject(error);
            } else {
                resolve(decotedToken);
            }
        });
    });
};
