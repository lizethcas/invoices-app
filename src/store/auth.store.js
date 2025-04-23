
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
    persist((set) => ({
        user: {},
        isAuthenticated: false,
        setAuth: (auth) => set({ isAuthenticated: auth }),
        setUser: (user) => set({ user }),
        logout: () => set({ user: {}, isAuthenticated: false }),
    }),
    {
        name: 'auth'
    }
))

export default useAuthStore

