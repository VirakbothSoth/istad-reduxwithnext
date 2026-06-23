"use client";
import { useGetProductsQuery } from "@/lib/features/api/ecommerceApi";

export default function ProductPage() {
    const {data: products=[], isError, isLoading} = useGetProductsQuery();

    console.log("isLoading : ", isLoading);
    console.log("isError : ", isError);
    console.log("data : ", products);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}