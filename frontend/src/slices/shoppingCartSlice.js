import { createSlice } from "@reduxjs/toolkit";

import { addMissingProperties } from "../utils/common";

import { SHOPPING_CART_SLICE_NAME, SHOPPING_CART_STORAGE_KEY } from "../constants";

const EMPTY_SHOPPING_CART = {
    items: [],
    shippingAddress: {},
    paymentMethod: "PayPal",
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0
};

const initializeState = () => {
    const storedShoppingCart = localStorage.getItem(SHOPPING_CART_STORAGE_KEY);

    const shoppingCart = storedShoppingCart && JSON.parse(storedShoppingCart);

    if (!shoppingCart) {
        return EMPTY_SHOPPING_CART;
    }

    addMissingProperties(shoppingCart, EMPTY_SHOPPING_CART);
    return shoppingCart;
};

const calculateCartItemsPrice = (state) => {
    const itemsPrice = state.items.reduce((priceAcc, cartItem) => {
        return priceAcc + cartItem.price * cartItem.quantity
    }, 0);
    state.itemsPrice = itemsPrice;
};

const calculateShippingPrice = (state) => state.shippingPrice = state.itemsPrice < 100 ? 10 : 0;

const calculateTaxPrice = (state) => state.taxPrice = state.itemsPrice * 0.15;

const calculateTotalPrice = (state) => {
    const { itemsPrice, shippingPrice, taxPrice } = state;
    state.totalPrice = itemsPrice + shippingPrice + taxPrice;
};

const updateShoppingCartState = (state) => {

    calculateCartItemsPrice(state);
    calculateShippingPrice(state);
    calculateTaxPrice(state);
    calculateTotalPrice(state);

    localStorage.setItem(SHOPPING_CART_STORAGE_KEY, JSON.stringify(state));
};

const shoppingCartSlice = createSlice({
    name: SHOPPING_CART_SLICE_NAME,
    initialState: initializeState(),
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;

            const isItemInCart = state.items.some(cartItem => cartItem.id === item.id);

            state.items = isItemInCart ?
                state.items.map(cartItem => cartItem.id === item.id ? item : cartItem) :
                [...state.items, item];

            updateShoppingCartState(state);
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;

            state.items = state.items.filter(cartItem => cartItem.id !== itemId);

            updateShoppingCartState(state);
        },
        addShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            updateShoppingCartState(state);
        }
    }
});

export const { addItemToCart, removeItemFromCart, addShippingAddress } = shoppingCartSlice.actions;

export const actionTypes = Object.values(shoppingCartSlice.actions).map(action => action.type);

export default shoppingCartSlice.reducer;
