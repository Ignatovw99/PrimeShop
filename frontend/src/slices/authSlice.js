import { createSlice } from "@reduxjs/toolkit";

import { AUTH_SLICE_NAME } from "../constants";

const initialState = {
    userProfile: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        setAuthetnication: (state, action) => {
            state.userProfile = action.payload;
            state.isAuthenticated = true;
        },
        clearAuthentication: (state, action) => {
            state.userProfile = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setAuthetnication, clearAuthentication } = authSlice.actions;

export default authSlice.reducer;