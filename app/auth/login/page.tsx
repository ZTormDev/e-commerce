"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, User } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/lib/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      if (!formData.email || !formData.password) {
        toast.error("Please fill in all fields");
        return;
      }

      const success = await login(formData.email, formData.password);
      if (success) {
        // Check if admin to redirect appropriately
        if (formData.email === "admin@store.com") {
          toast.success("Welcome back, Admin!");
          setTimeout(() => router.push("/admin"), 1000);
        } else {
          toast.success("Login successful!");
          setTimeout(() => router.push("/"), 1000);
        }
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      // Register
      if (!formData.email || !formData.password || !formData.name) {
        toast.error("Please fill in all fields");
        return;
      }

      const success = await register(
        formData.email,
        formData.password,
        formData.name
      );
      if (success) {
        toast.success("Account created successfully!");
        setTimeout(() => {
          setIsLogin(true);
          setFormData({ email: formData.email, password: "", name: "" });
        }, 1000);
      } else {
        toast.error("Email already exists");
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-xl">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <span className="text-4xl font-bold gradient-text">ShopHub</span>
          </Link>
          <p className="mt-4 text-gray-600 text-lg">
            {isLogin ? "Welcome back! 👋" : "Join our community! 🎉"}
          </p>
        </div>

        <div className="card p-8 shadow-2xl animate-slide-up">
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl font-bold transition-all duration-200 ${
                isLogin
                  ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl font-bold transition-all duration-200 ${
                !isLogin
                  ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="animate-slide-up">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="input-modern pl-12"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="input-modern pl-12"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="input-modern pl-12"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 font-medium">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="w-full btn-primary py-4 text-lg">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-600 hover:text-primary-700 font-bold"
              >
                {isLogin ? "Register now" : "Login here"}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100">
              <p className="text-sm text-blue-900 font-bold mb-3 flex items-center gap-2">
                <Lock size={16} />
                Demo Credentials
              </p>
              <div className="space-y-2">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-xs text-gray-600 font-semibold">
                    Admin Access:
                  </p>
                  <p className="text-sm text-blue-900 font-mono">
                    admin@store.com / admin123
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-xs text-gray-600 font-semibold">
                    Customer:
                  </p>
                  <p className="text-sm text-blue-900 font-mono">
                    customer@example.com / password123
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/50 transition-all"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
