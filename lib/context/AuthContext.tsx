"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: "CUSTOMER" | "ADMIN";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser && savedUser.trim() !== "") {
        const parsed = JSON.parse(savedUser);
        if (parsed && typeof parsed === "object" && parsed.id) {
          setUser(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading user:", error);
      localStorage.removeItem("user");
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  }, [user, isClient]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Demo users
    if (email === "admin@store.com" && password === "admin123") {
      setUser({
        id: "1",
        email: "admin@store.com",
        name: "Admin User",
        role: "ADMIN",
      });
      return true;
    } else if (email === "customer@example.com" && password === "password123") {
      setUser({
        id: "2",
        email: "customer@example.com",
        name: "John Doe",
        role: "CUSTOMER",
      });
      return true;
    } else if (email && password) {
      // Any other email/password combination
      setUser({
        id: "3",
        email: email,
        name: email.split("@")[0],
        role: "CUSTOMER",
      });
      return true;
    }

    return false;
  };

  const register = async (
    email: string,
    password: string,
    name: string
  ): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email && password && name) {
      setUser({
        id: Date.now().toString(),
        email: email,
        name: name,
        role: "CUSTOMER",
      });
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  };

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "ADMIN";

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
