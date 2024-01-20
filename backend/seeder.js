import User from "./src/models/User.js";
import Product from "./src/models/Product.js";

import { connectDatabase } from "./src/config/database.js";

import users from "./data/users.js";
import products from "./data/products.js";

const importData = async () => {
    try {
        await connectDatabase();

        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await Promise.all(users.map(user => User.create(user)));

        const adminUser = createdUsers[0];

        const productsToCreate = products.map(product => ({ ...product, user: adminUser._id }));
        await Product.insertMany(productsToCreate);

        console.log("Data imported!");
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await connectDatabase();

        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Deleted!");
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '--destroy') {
    destroyData();
} else {
    importData();
}
