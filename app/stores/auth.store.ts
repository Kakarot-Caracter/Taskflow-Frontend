import { create } from "zustand";

type AuthState = {
  register: (email: string, password: string, name: string) => Promise<boolean>;
  login: (email: string, password: string) => any;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  register: async (name, email, password) => {
    const res = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 👈 necesario para recibir la cookie
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (res.ok) {
      return true;
    }

    return false;
  },

  login: async (email, password) => {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!res.ok) {
      return false;
    }

    return true;
  },

  logout: async () => {
    await fetch("http://localhost:3001/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  },
}));
