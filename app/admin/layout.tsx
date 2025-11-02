"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  ShoppingCart,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-8">Admin CMS</h1>
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="absolute bottom-0 w-64 p-6 border-t border-gray-800">
            <button className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white transition-colors">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white shadow-sm">
            <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  {navigation.find((item) => item.href === pathname)?.name ||
                    "Admin Panel"}
                </h2>
                <div className="flex items-center gap-4">
                  <Link
                    href="/"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    View Store
                  </Link>
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
