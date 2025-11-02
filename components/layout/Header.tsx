"use client";

import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import { useCart } from "@/lib/context/CartContext";
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  Home,
  LogOut,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { getCartCount } = useCart();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const cartCount = getCartCount();

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    router.push("/");
  };

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <ShoppingCart className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold gradient-text hidden sm:block">
              ShopHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 flex items-center gap-2 font-medium"
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              href="/products"
              className="px-4 py-2 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="px-4 py-2 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium"
            >
              Categories
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 flex items-center gap-2 font-medium shadow-md"
              >
                <Shield size={18} />
                Admin
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Link
              href="/search"
              className="p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200"
              aria-label="Search"
            >
              <Search size={22} />
            </Link>

            {/* User Menu */}
            <div className="relative">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden lg:block font-semibold text-gray-700">
                      {user?.name}
                    </span>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-3 w-64 card animate-scale-in overflow-hidden">
                      <div className="px-4 py-4 bg-gradient-to-br from-primary-50 to-secondary-50 border-b border-primary-100">
                        <p className="font-bold text-gray-900">{user?.name}</p>
                        <p className="text-sm text-gray-600">{user?.email}</p>
                        {isAdmin && (
                          <span className="inline-block mt-2 badge bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                            <Shield size={12} className="mr-1" />
                            Admin
                          </span>
                        )}
                      </div>
                      <Link
                        href="/orders"
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 transition-colors font-medium"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        My Orders
                      </Link>
                      {isAdmin && (
                        <Link
                          href="/admin"
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 transition-colors font-medium"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium border-t"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 font-semibold shadow-md flex items-center gap-2"
                >
                  <User size={18} />
                  <span className="hidden sm:inline">Login</span>
                </Link>
              )}
            </div>

            <Link
              href="/cart"
              className="relative p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200/50 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {isAuthenticated && (
                <div className="pb-4 mb-2 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{user?.name}</p>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                  </div>
                </div>
              )}
              <Link
                href="/"
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center gap-2 font-semibold shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Shield size={18} />
                  Admin Panel
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-md flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={18} />
                  Login / Register
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
