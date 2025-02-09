import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useThemeStore } from '@/store/ThemeStore/themeStore'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
      <div className="relative w-16 h-10">
        <input
          id="theme-toggle"
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleTheme}
        />

        <div className="block w-16 h-10 bg-gray-300 rounded-full transition-all"></div>

        <div
          className={`absolute left-1 top-1 w-8 h-8 flex items-center justify-center rounded-full transition-all ${
            isDarkMode ? 'translate-x-6 bg-gray-100' : 'bg-gray-900'
          }`}
        >
          {isDarkMode ? (
            <Sun data-testid="icon-sun" className="w-5 h-5 text-gray-900" />
          ) : (
            <Moon data-testid="icon-moon" className="w-5 h-5 text-gray-100" />
          )}
        </div>
      </div>
    </label>
  )
}

export default ThemeToggle
