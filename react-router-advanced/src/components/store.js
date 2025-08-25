import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: (username) => set({ user: { name: username } }),
  logout: () => set({ user: null }),
}));
