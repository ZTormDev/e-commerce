"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock === 0;

  return (
    <button
      onClick={() => addToCart(product, quantity)}
      disabled={isOutOfStock}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
        isOutOfStock
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-primary-600 text-white hover:bg-primary-700"
      }`}
    >
      <ShoppingCart size={18} />
      {isOutOfStock ? "Out of Stock" : "Add to Cart"}
    </button>
  );
}
