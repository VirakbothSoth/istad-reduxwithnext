import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    tagTypes: ["Product", "Category"],
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: () => ({})
})