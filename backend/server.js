import http from "node:http";

import app from "./src/app.js";
import { connectDatabase } from "./src/config/database.js";

import configProperties from "./src/config/properties.js";

const port = configProperties.server.port;
const server = http.createServer(app);

const startServer = async () => {
    try {
        await connectDatabase();
        server.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.log('The application cannot be started', error);
        return process.exit(1);
    }
};

startServer();
