import { configureStore } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";

import apiSlice from "./slices/api/apiSlice";
import shoppingCartReducer, { actionTypes } from "./slices/shoppingCartSlice";
import authReducer from "./slices/authSlice";

import { clearAuthentication } from "./slices/authSlice";

import { ENABLE_REDUX_DEV_TOOLS } from "./config";

const unauthorizedApiErrorMiddleware = (store) => (next) => (action) => {
    const { type, payload } = action;

    if (type.endsWith("/rejected") && payload?.status === 401) {
        store.dispatch(clearAuthentication());
    }

    return next(action);
};

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        shoppingCart: shoppingCartReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
            .concat(unauthorizedApiErrorMiddleware)
            .concat(createStateSyncMiddleware({ whitelist: actionTypes })),
    devTools: ENABLE_REDUX_DEV_TOOLS
});

initMessageListener(store);

export default store;
