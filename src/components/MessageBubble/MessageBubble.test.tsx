import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import MessageBubble from './MessageBubble'

describe('MessageBubble', () => {
  test('should render a user message correctly', () => {
    render(<MessageBubble message={{ text: 'Ola!', sender: 'user' }} />)
    const bubble = screen.getByTestId('message-bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('Ola!')
    expect(bubble).toHaveClass('bg-blue-500')
  })

  test('should render a bot message correctly', () => {
    render(
      <MessageBubble
        message={{ text: 'Ola... Como posso te ajudar?', sender: 'bot' }}
      />
    )
    const bubble = screen.getByTestId('message-bubble')
    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('Ola... Como posso te ajudar?')
    expect(bubble).toHaveClass('bg-gray-300')
  })
})
