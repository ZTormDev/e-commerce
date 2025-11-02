"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { mockProducts, mockCategories } from "@/lib/data/mockData";
import ProductGrid from "@/components/products/ProductGrid";
import { ArrowLeft } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = mockCategories.find((c) => c.slug === slug);
  const products = mockProducts.filter((p) => p.categoryId === category?.id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <Link href="/categories" className="text-primary-600 hover:underline">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 text-lg">{category.description}</p>
        </div>

        {products.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">
              No products found in this category.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{products.length}</span>{" "}
                products
              </p>
            </div>
            <ProductGrid products={products} />
          </>
        )}
      </div>
    </div>
  );
}
