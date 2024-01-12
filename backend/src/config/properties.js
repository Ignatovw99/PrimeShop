export default {
    server: {
        port: process.env.PORT || 5000
    },
    database: {
        url: process.env.MONGO_URL || "mongodb://localhost:27017/primeshop-db"
    },
    auth: {
        saltRounds: process.env.SALT_ROUNDS || 10
    }
};
