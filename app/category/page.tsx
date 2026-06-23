"use client";
import { useGetProductByIdQuery } from "@/lib/features/api/ecommerceApi";

export default function CategoryPage() {
    const { data, isLoading } = useGetProductByIdQuery(12);
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <div key={data?.id}>{data?.title}</div>
}