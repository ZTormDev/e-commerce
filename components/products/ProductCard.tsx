import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";
import { Star, TrendingUp, AlertCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
      <Link href={`/products/${product.slug}`} prefetch={true}>
        <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
          />

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.featured && (
              <div className="badge bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg flex items-center gap-1">
                <TrendingUp size={12} />
                Featured
              </div>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <div className="badge bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg flex items-center gap-1">
                <AlertCircle size={12} />
                {product.stock} left
              </div>
            )}
            {product.stock === 0 && (
              <div className="badge bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                Out of Stock
              </div>
            )}
          </div>

          {/* Quick view hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Quick View
            </span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${product.slug}`} prefetch={true}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold gradient-text">
              ${product.price.toFixed(2)}
            </span>
            {product.category && (
              <Link
                href={`/categories/${product.category.slug}`}
                prefetch={true}
                className="text-xs text-gray-500 hover:text-primary-600 transition-colors font-medium mt-1"
              >
                {product.category.name}
              </Link>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 bg-gradient-to-r from-amber-50 to-amber-100 px-3 py-1.5 rounded-full">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-amber-700">4.8</span>
          </div>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
