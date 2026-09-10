import React, { createContext, useContext, useState, useEffect } from "react";
import { User, Role } from "../types/auth";
import { api } from "../services/api";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("foodflow_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("foodflow_token"));

  const login = async (email: string, pass: string) => {
    try {
      const res = await api.post("/auth/login", { email, password: pass });
      const { user, token } = res.data.data;
      setUser(user);
      setToken(token);
      localStorage.setItem("foodflow_user", JSON.stringify(user));
      localStorage.setItem("foodflow_token", token);
    } catch (err: any) {
      // Deterministic fallback for demo mode if backend is not started
      const demoRoles: Record<string, { role: Role; name: string }> = {
        "admin@foodflow.org": { role: "ADMIN", name: "System Admin" },
        "kitchen@foodflow.org": { role: "KITCHEN", name: "Royal Feast Kitchen" },
        "ngo@foodflow.org": { role: "NGO", name: "FeedHope Foundation" },
        "driver@foodflow.org": { role: "DRIVER", name: "Ramesh Kumar (Van)" },
        "user@foodflow.org": { role: "USER", name: "Public Citizen" }
      };

      if (demoRoles[email]) {
        const fallbackUser: User = {
          id: "demo-" + demoRoles[email].role.toLowerCase(),
          name: demoRoles[email].name,
          email,
          role: demoRoles[email].role,
          organizationName: demoRoles[email].name
        };
        const demoToken = "demo-jwt-token-" + demoRoles[email].role;
        setUser(fallbackUser);
        setToken(demoToken);
        localStorage.setItem("foodflow_user", JSON.stringify(fallbackUser));
        localStorage.setItem("foodflow_token", demoToken);
      } else {
        throw new Error(err.response?.data?.error?.message || "Login failed");
      }
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("foodflow_user");
    localStorage.removeItem("foodflow_token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
