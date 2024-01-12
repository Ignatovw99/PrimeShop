import mongoose from "mongoose";

import configProperties from "../config/properties.js";

mongoose.connection.once("open", () => console.log("Connected to MongoDB!"));
mongoose.connection.on('error', error => console.error(error));

export const connectDatabase = async () => await mongoose.connect(configProperties.database.url);
