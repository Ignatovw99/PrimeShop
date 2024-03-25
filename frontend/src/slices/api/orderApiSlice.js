import apiSlice from "./apiSlice";

const ORDERS_URL = "/api/orders";

const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: "POST",
                body: { ...order }
            })
        })
    })
});

export const { useCreateOrderMutation } = orderApiSlice;
