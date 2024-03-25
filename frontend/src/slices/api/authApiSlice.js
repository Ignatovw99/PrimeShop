import apiSlice from "./apiSlice";

import { ROUTES } from "../../router";

const AUTH_URL = "/api/auth";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}${ROUTES.LOGIN}`,
                method: "POST",
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}${ROUTES.REGISTER}`,
                method: "POST",
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}${ROUTES.LOGOUT}`,
                method: "POST"
            })
        })
    })
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;
