"use client";

import Link from "next/link";
import {
  mockProducts,
  mockOrders,
  mockUsers,
  mockCategories,
} from "@/lib/data/mockData";
import { TrendingUp, Package, ShoppingCart, Users } from "lucide-react";

export default function AdminDashboard() {
  const totalProducts = mockProducts.length;
  const totalOrders = mockOrders.length;
  const totalCustomers = mockUsers.filter((u) => u.role === "CUSTOMER").length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const lowStockProducts = mockProducts.filter(
    (p) => p.stock < 10 && p.stock > 0
  );
  const outOfStockProducts = mockProducts.filter((p) => p.stock === 0);
  const recentOrders = mockOrders.slice(0, 5);

  const stats = [
    {
      name: "Total Revenue",
      value: `$${totalRevenue.toFixed(2)}`,
      icon: TrendingUp,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      name: "Total Products",
      value: totalProducts,
      icon: Package,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Total Orders",
      value: totalOrders,
      icon: ShoppingCart,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Total Customers",
      value: totalCustomers,
      icon: Users,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const statusColors = {
    PENDING: "bg-yellow-100 text-yellow-800",
    PROCESSING: "bg-blue-100 text-blue-800",
    SHIPPED: "bg-purple-100 text-purple-800",
    DELIVERED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
  };

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.name}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon size={24} className={stat.iconColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Recent Orders</h3>
            <Link
              href="/admin/orders"
              className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b pb-4 last:border-b-0"
              >
                <div>
                  <p className="font-semibold">{order.orderNumber}</p>
                  <p className="text-sm text-gray-600">{order.user?.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${order.total.toFixed(2)}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Inventory Alerts</h3>
            <Link
              href="/admin/products"
              className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
            >
              Manage Stock
            </Link>
          </div>
          <div className="space-y-4">
            {outOfStockProducts.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-semibold text-red-800 mb-2">
                  Out of Stock ({outOfStockProducts.length})
                </p>
                <ul className="space-y-1">
                  {outOfStockProducts.slice(0, 3).map((product) => (
                    <li key={product.id} className="text-sm text-red-700">
                      • {product.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {lowStockProducts.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="font-semibold text-orange-800 mb-2">
                  Low Stock ({lowStockProducts.length})
                </p>
                <ul className="space-y-1">
                  {lowStockProducts.slice(0, 3).map((product) => (
                    <li key={product.id} className="text-sm text-orange-700">
                      • {product.name} ({product.stock} left)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-6">Products by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {mockCategories.map((category) => {
            const count = mockProducts.filter(
              (p) => p.categoryId === category.id
            ).length;
            return (
              <div
                key={category.id}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <p className="text-3xl font-bold text-primary-600">{count}</p>
                <p className="text-sm text-gray-600 mt-1">{category.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
