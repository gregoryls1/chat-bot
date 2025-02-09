import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ChatMessages from './ChatMessages'
import { sampleMessages } from '@/types/chat'

describe('ChatMessages', () => {
  test('should render the chat messages container with no messages', () => {
    render(<ChatMessages messages={[]} />)

    const chatContainer = screen.getByTestId('chat-messages')
    expect(chatContainer).toBeInTheDocument()
    expect(chatContainer).toHaveAttribute('role', 'log')
    expect(chatContainer).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByText('Nenhuma mensagem ainda...')).toBeInTheDocument()
  })

  test('should render chat messages when provided', () => {
    render(<ChatMessages messages={sampleMessages} />)

    sampleMessages.forEach((msg) => {
      expect(screen.getByText(msg.text)).toBeInTheDocument()
    })
  })

  test('should scroll to the last message when a new one is added', () => {
    const { rerender } = render(<ChatMessages messages={[]} />)
    const chatContainer = screen.getByTestId('chat-messages')

    expect(chatContainer).toBeInTheDocument()

    // Simula a adição de mensagens
    rerender(<ChatMessages messages={sampleMessages} />)

    const lastMessage = sampleMessages[sampleMessages.length - 1]
    expect(screen.getByText(lastMessage.text)).toBeInTheDocument()
  })
})
