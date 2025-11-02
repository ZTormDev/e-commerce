import Link from "next/link";
import { mockCategories, mockProducts } from "@/lib/data/mockData";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shop by Category</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCategories.map((category) => {
            const productCount = mockProducts.filter(
              (p) => p.categoryId === category.id
            ).length;

            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <svg
                      className="w-10 h-10 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <p className="text-sm text-primary-600 font-semibold">
                    {productCount} Products
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
