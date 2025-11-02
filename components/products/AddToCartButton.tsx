"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addToCart(product, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isOutOfStock}
      className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 ${
        isOutOfStock
          ? "bg-gray-200 text-gray-500 cursor-not-allowed hover:scale-100"
          : isAdded
          ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
          : "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-md hover:shadow-xl"
      }`}
    >
      {isAdded ? (
        <>
          <Check size={20} />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart size={20} />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </>
      )}
    </button>
  );
}
