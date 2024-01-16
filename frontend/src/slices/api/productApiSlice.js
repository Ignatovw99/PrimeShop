import apiSlice from "./apiSlice";

import { PRODUCTS_URL, CACHE_UNUSED_API_DATA_SECONDS } from "../../constants";

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({ url: PRODUCTS_URL }),
            keepUnusedDataFor: CACHE_UNUSED_API_DATA_SECONDS
        }),
        getProductDetails: builder.query({
            query: (productId) => ({ url: `${PRODUCTS_URL}/${productId}` }),
            keepUnusedDataFor: CACHE_UNUSED_API_DATA_SECONDS
        })
    })
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApiSlice;
