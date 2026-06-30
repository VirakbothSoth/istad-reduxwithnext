import { ecommerceApi } from "../api";
import { Product, CreateProduct, UpdateProduct } from "@/lib/types/product";

export type FileResponse = {
    originalname: string;
    filename: string;
    location: string;
}

export const productApi = ecommerceApi.injectEndpoints({
    endpoints: (b) => ({
        getProducts: b.query<Product[], void>({
            query: () => "/api/v1/products",
        }),

        createProduct: b.mutation<Product, CreateProduct>({
            query: (newProd) => ({
                url: "/api/v1/products",
                method: "POST",
                body: newProd
            })
        }),

        uploadFile: b.mutation<FileResponse, File>({
            query: (f) => {
                const formData = new FormData();
                formData.append("file", f);
                return {
                    url: "/api/v1/files/upload",
                    method: "POST",
                    body: formData,
                };
            }
        }),

        updateProduct: b.mutation<UpdateProduct,{id: number, updatedProduct: UpdateProduct}> ({
            query: ({id, updatedProduct}) => ({
                url: `/api/v1/products/${id}`,
                method: "PUT",
                body: updatedProduct
            })
        }),

        deleteProduct: b.mutation<any, {id:number}>({
            query: ({id}) => ({
                url: `/api/v1/products/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useGetProductsQuery, useCreateProductMutation, useUploadFileMutation, useUpdateProductMutation} = productApi;