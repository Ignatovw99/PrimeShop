import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./slices/api/apiSlice";

import { ENABLE_REDUX_DEV_TOOLS } from "./config";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware),
    devTools: ENABLE_REDUX_DEV_TOOLS
});

export default store;
