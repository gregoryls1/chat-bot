import { create } from 'zustand'

const THEME_STORAGE_KEY = 'chat_theme'

type ThemeStore = {
  isDarkMode: boolean
  toggleTheme: () => void
  initializeTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,

  initializeTheme: () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    const isDark = storedTheme ? JSON.parse(storedTheme) : false

    set({ isDarkMode: isDark })

    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDarkMode
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newTheme))

      if (newTheme) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      return { isDarkMode: newTheme }
    }),
}))

if (typeof window !== 'undefined') {
  ;(window as any).useThemeStore = useThemeStore
}
