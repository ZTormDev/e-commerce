"use client";

import Link from "next/link";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, User, Menu, Search, Home } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary-600 hover:text-primary-700"
          >
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2"
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/admin"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Admin
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/search"
              className="text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search size={22} />
            </Link>

            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Account"
            >
              <User size={22} />
            </Link>

            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/admin"
                className="text-gray-700 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
