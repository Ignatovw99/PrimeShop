import mongoose from "mongoose";

/**
 * Subdocuments vs. Referance to other Models
 *      Representing relationships between different types of data
 * 
 * 1. Subdocuments
 *      - Embedding one schema within another
 *      - Useful when the embedded data is logically a part of the parent document and doesn't exist independently
 *      - Uypically used for one-to-few relationships where the child documents are tightly coupled with the parent document
 *      - Atomic operations on embedded data, meaning you can update or delete embedded documents within a single atomic operation.
 *      With references, you may need to perform multiple operations to achieve the same result.
 * 
 * 2. Referencing Other Models
 *      - Storing a reference (usually the ObjectId) to another document rather than embedding it directly
 *      - Useful when the referenced data exists independently and may be shared across multiple documents
 *      - Used for one-to-many or many-to-many relationships
 *      - Faster queries, especially for large datasets, as MongoDB doesn't need to retrieve the entire parent document to access referenced data
 *      - Scalability
 * 
 * 3. General rule
 *      - If you have a lot of child documents or if they are large or with flexible size, a separate collection/schema might be best option.
 *      - Smaller and/or fewer or fixed number of documents tend to be a natural fit for embedding/Subdocuments.
 */

const orderItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
});

const shippingAddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const paymentResultSchema = new mongoose.Schema({
    id: {
        type: String
    },
    status: {
        type: String
    },
    updateTime: {
        type: String
    },
    emailAddress: {
        type: String
    }
});

const orderSchema = new mongoose.Schema({
    orderItems: [orderItemSchema],
    shippingAddress: shippingAddressSchema,
    paymentResult: paymentResultSchema,
    paymentMethod: {
        type: String,
        required: true
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
