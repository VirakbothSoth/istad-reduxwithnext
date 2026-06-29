import { ecommerceApi } from "../api";

export type Category = {
    id: number;
    name: string;
    slug: string;
    image: string;
};

export const CategoryApi = ecommerceApi.injectEndpoints({
    endpoints: (b) => ({
        getCategories: b.query<Category[], void>({
            query: () => "/api/v1/categories",
        })
    })
})

export const { useGetCategoriesQuery } = CategoryApi;