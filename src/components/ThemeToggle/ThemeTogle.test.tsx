import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  test('should render the theme switch', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('should toggle the state when clicked', () => {
    render(<ThemeToggle />)
    const toggle = screen.getByRole('checkbox')

    expect(toggle).not.toBeChecked()

    fireEvent.click(toggle)
    expect(toggle).toBeChecked()

    fireEvent.click(toggle)
    expect(toggle).not.toBeChecked()
  })

  test('should switch icons correctly', () => {
    render(<ThemeToggle />)
    const toggle = screen.getByRole('checkbox')

    expect(screen.getByTestId('icon-moon')).toBeInTheDocument()
    expect(screen.queryByTestId('icon-sun')).toBeNull()

    fireEvent.click(toggle)

    expect(screen.getByTestId('icon-sun')).toBeInTheDocument()
    expect(screen.queryByTestId('icon-moon')).toBeNull()
  })
})
