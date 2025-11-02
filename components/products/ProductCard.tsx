import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-gray-200">
          <Image
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Only {product.stock} left
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
          {product.category && (
            <Link
              href={`/categories/${product.category.slug}`}
              className="text-xs text-gray-500 hover:text-primary-600 transition-colors"
            >
              {product.category.name}
            </Link>
          )}
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
