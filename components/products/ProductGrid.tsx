"use client";

import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth transition
    setIsLoading(true);
    const timer = setTimeout(() => {
      setVisibleProducts(products);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [products]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="card overflow-hidden animate-pulse">
            <div className="h-72 bg-gray-200"></div>
            <div className="p-5">
              <div className="h-6 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-lg mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-lg mb-4 w-1/2"></div>
              <div className="flex justify-between items-center mb-4">
                <div className="h-8 bg-gray-200 rounded-lg w-24"></div>
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (visibleProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {visibleProducts.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
