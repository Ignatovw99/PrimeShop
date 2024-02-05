import apiSlice from "./apiSlice";

import { CACHE_UNUSED_API_DATA_SECONDS } from "../../constants";

const USERS_URL = "/api/users";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query({
            query: () => ({ url: `${USERS_URL}/profile` }),
            keepUnusedDataFor: CACHE_UNUSED_API_DATA_SECONDS
        })
    })
});

export const { useGetUserProfileQuery } = userApiSlice;
