import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ChatHeader from './ChatHeader'

describe('ChatHeader', () => {
  test('should render the chat title', () => {
    render(<ChatHeader />)
    expect(screen.getByText('Chat Bot')).toBeInTheDocument()
  })

  test('should render the theme toggle button', () => {
    render(<ChatHeader />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
