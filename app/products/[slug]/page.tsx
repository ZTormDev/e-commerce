"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/lib/data/mockData";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = mockProducts.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-96 bg-gray-200 rounded-lg mb-4">
                <Image
                  src={product.images[selectedImage] || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 bg-gray-200 rounded-lg overflow-hidden ${
                        selectedImage === index ? "ring-2 ring-primary-600" : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              {product.featured && (
                <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
              )}

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {product.category && (
                <Link
                  href={`/categories/${product.category.slug}`}
                  className="text-gray-600 hover:text-primary-600 mb-4 inline-block"
                >
                  Category: {product.category.name}
                </Link>
              )}

              <div className="text-4xl font-bold text-primary-600 mb-6">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-2 rounded-lg font-semibold ${
                    product.stock > 10
                      ? "bg-green-100 text-green-700"
                      : product.stock > 0
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stock > 10
                    ? "In Stock"
                    : product.stock > 0
                    ? `Only ${product.stock} left`
                    : "Out of Stock"}
                </span>
              </div>

              {product.stock > 0 && (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={decrementQuantity}
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="text-xl font-semibold w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={incrementQuantity}
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                        disabled={quantity >= product.stock}
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(
                (p) =>
                  p.categoryId === product.categoryId && p.id !== product.id
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary-600 font-bold">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
