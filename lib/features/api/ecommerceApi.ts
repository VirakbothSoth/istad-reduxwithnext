import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/lib/types/product";

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () =>
                "/api/v1/products"
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/api/v1/products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = ecommerceApi;