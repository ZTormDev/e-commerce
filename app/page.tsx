import Link from "next/link";
import ProductGrid from "@/components/products/ProductGrid";
import { mockProducts } from "@/lib/data/mockData";
import {
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Home() {
  const featuredProducts = mockProducts.filter((p) => p.featured).slice(0, 4);
  const allProducts = mockProducts.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white py-24 lg:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-secondary-400 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">
                New Collection Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Discover Your Perfect
              <span className="block bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
                Style Today
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-10 text-primary-100 max-w-2xl mx-auto animate-slide-up">
              Shop premium products with confidence. Enjoy secure checkout, fast
              shipping, and unbeatable prices.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                href="/products"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Shop Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/categories"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Browse Categories
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-200 text-sm lg:text-base">
                  Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">10k+</div>
                <div className="text-primary-200 text-sm lg:text-base">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">4.9</div>
                <div className="text-primary-200 text-sm lg:text-base flex items-center justify-center gap-1">
                  <Star size={16} fill="currentColor" />
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4 font-semibold">
              <Sparkles size={16} />
              Featured Collection
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Handpicked For You
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of premium products that
              combine quality, style, and value
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="card p-8 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure Checkout</h3>
              <p className="text-gray-600 leading-relaxed">
                Your payments are protected with bank-level encryption and
                secure processing
              </p>
            </div>

            <div className="card p-8 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick delivery to your doorstep with real-time tracking and
                updates
              </p>
            </div>

            <div className="card p-8 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Best Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with regular deals and exclusive member
                discounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text">
                Latest Arrivals
              </h2>
              <p className="text-gray-600 mt-2">
                Fresh products added this week
              </p>
            </div>
            <Link
              href="/products"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              View All Products
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <ProductGrid products={allProducts} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing products
            today
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Explore Collection
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
