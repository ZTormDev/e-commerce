import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ShoppingCart,
  Heart,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="text-white" size={20} />
              </div>
              <h3 className="text-white text-2xl font-bold">ShopHub</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your premium destination for quality products at amazing prices.
              Shop with confidence and style.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook
                  size={18}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter
                  size={18}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={18}
                  className="text-gray-400 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  → Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <Heart size={20} className="text-accent-500" />
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Subscribe to get special offers, free giveaways, and exclusive
              updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm border border-white/10 placeholder:text-gray-500"
              />
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-3 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 <span className="text-white font-semibold">ShopHub</span>.
            Created by ZTormDev.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
