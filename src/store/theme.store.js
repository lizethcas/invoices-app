import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
    persist((set) => ({
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches,
        toggleTheme: () => set((state) => ({ theme: !state.theme })),
    }), {
        name: 'theme',
     
    })
)
