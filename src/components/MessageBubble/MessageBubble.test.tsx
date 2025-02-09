import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import MessageBubble from './MessageBubble'

describe('MessageBubble', () => {
  const mockTimestamp = new Date('2025-02-09T12:30:00').getTime()

  test('should render a user message correctly', () => {
    render(
      <MessageBubble
        message={{ text: 'Olá!', sender: 'user', timestamp: mockTimestamp }}
      />
    )
    const bubble = screen.getByTestId('message-bubble')

    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('Olá!')
    expect(bubble).toHaveTextContent('12:30')
    expect(bubble).toHaveClass('bg-blue-500')
  })

  test('should render a bot message correctly', () => {
    render(
      <MessageBubble
        message={{
          text: 'Oi! Como posso te ajudar?',
          sender: 'bot',
          timestamp: mockTimestamp,
        }}
      />
    )
    const bubble = screen.getByTestId('message-bubble')

    expect(bubble).toBeInTheDocument()
    expect(bubble).toHaveTextContent('Oi! Como posso te ajudar?')
    expect(bubble).toHaveTextContent('12:30')
    expect(bubble).toHaveClass('bg-gray-300')
  })
})
