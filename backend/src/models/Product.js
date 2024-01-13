import mongoose from "mongoose";

const PRODUCT_CATEGORIES = ["Electronics"];

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: PRODUCT_CATEGORIES
    },
    availableQuantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        required: true,
        default: 1,
        min: 1,
        max: 5
    },
    reviewsCount: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export const productCategories = [...PRODUCT_CATEGORIES];
export default Product;
