export default {
    server: {
        port: process.env.PORT || 5000
    },
    database: {
        url: process.env.MONGO_URL || "mongodb://localhost:27017/primeshop-db"
    },
    auth: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        secret: process.env.JWT_SECRET,
        accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "1h"
    },
    environemnt: {
        isProduction: process.env.NODE_ENV === "production",
        isDevelopment: process.env.NODE_ENV === "development"
    }
};
