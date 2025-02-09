import { create } from 'zustand'

const THEME_STORAGE_KEY = 'chat_theme'

type ThemeStore = {
  isDarkMode: boolean
  toggleTheme: () => void
}

const getInitialTheme = (): boolean => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    return storedTheme ? JSON.parse(storedTheme) : false
  }
  return false
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: getInitialTheme(),
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
