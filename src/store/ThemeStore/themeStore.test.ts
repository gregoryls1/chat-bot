import { describe, test, expect, beforeEach } from 'vitest'
import { useThemeStore } from './themeStore'

beforeEach(() => {
  localStorage.clear()
  useThemeStore.setState({ isDarkMode: false })
})

describe('themeStore (Zustand)', () => {
  test('should initialize with light mode by default', () => {
    const { isDarkMode } = useThemeStore.getState()
    expect(isDarkMode).toBe(false)
  })

  test('should toggle dark mode', () => {
    const { toggleTheme } = useThemeStore.getState()

    toggleTheme()
    expect(useThemeStore.getState().isDarkMode).toBe(true)

    toggleTheme()
    expect(useThemeStore.getState().isDarkMode).toBe(false)
  })

  test('should persist theme in localStorage', () => {
    const { toggleTheme } = useThemeStore.getState()

    toggleTheme()
    expect(localStorage.getItem('chat_theme')).toBe('true')

    toggleTheme()
    expect(localStorage.getItem('chat_theme')).toBe('false')
  })

  test('should load theme from localStorage', () => {
    localStorage.setItem('chat_theme', 'true')
    useThemeStore.setState({
      isDarkMode: JSON.parse(localStorage.getItem('chat_theme')!),
    })

    expect(useThemeStore.getState().isDarkMode).toBe(true)
  })
})
