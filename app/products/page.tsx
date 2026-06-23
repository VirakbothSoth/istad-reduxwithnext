/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetProductsQuery } from "@/lib/features/api/ecommerceApi";

export default function ProductPage() {
  const { data: products = [], isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4 p-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-white/5 overflow-hidden animate-pulse">
            <div className="aspect-square bg-white/5" />
            <div className="p-4 space-y-2">
              <div className="h-3 bg-white/5 rounded w-3/4" />
              <div className="h-3 bg-white/5 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-white/20">
        <p className="text-4xl mb-3">⚠️</p>
        <p className="text-sm">Failed to load products.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1117] p-6">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-xl border border-white/5 overflow-hidden bg-white/3
                       hover:border-blue-500/30 hover:bg-white/6 transition-all duration-150"
          >
            {/* Image */}
            <div className="aspect-square bg-white/5 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-sm font-medium text-white/90 leading-snug line-clamp-1 mb-1">
                {product.title}
              </h2>
              <p className="text-xs text-white/30 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}