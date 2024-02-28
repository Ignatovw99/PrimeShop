import { configureStore } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";

import apiSlice from "./slices/api/apiSlice";
import shoppingCartReducer, { actionTypes } from "./slices/shoppingCartSlice";
import authReducer from "./slices/authSlice";

import { ENABLE_REDUX_DEV_TOOLS } from "./config";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        shoppingCart: shoppingCartReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
            .concat(createStateSyncMiddleware({ whitelist: actionTypes})),
    devTools: ENABLE_REDUX_DEV_TOOLS
});

initMessageListener(store);

export default store;
