import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_BASE_URL } from "../../config";

const apiSlice = createApi({
    // reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({}),
    tagTypes: ["Product", "User", "Order"]
});

export default apiSlice;
