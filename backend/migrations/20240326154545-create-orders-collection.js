export const up = async (db, client) => {
    await db.createCollection("orders");
};

export const down = async (db, client) => {
    await db.collection("orders").drop();
};
