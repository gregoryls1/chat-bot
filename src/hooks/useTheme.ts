import { useThemeStore } from '@/store/ThemeStore/themeStore'
import { useEffect } from 'react'

export const useTheme = () => {
  const { isDarkMode, toggleTheme, initializeTheme } = useThemeStore()

  useEffect(() => {
    initializeTheme()
  }, [initializeTheme])

  return { isDarkMode, toggleTheme }
}
