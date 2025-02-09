import { render, screen } from '@testing-library/react'
import { describe, test, expect, beforeEach, vi } from 'vitest'
import ChatMessages from './ChatMessages'
import { Message } from '@/types/chat'

describe('ChatMessages', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  test('should render the chat messages container with no messages', () => {
    render(<ChatMessages messages={[]} />)
    expect(screen.getByText('Nenhuma mensagem ainda...')).toBeInTheDocument()
  })

  test('should render chat messages when provided', () => {
    const sampleMessages: Message[] = [
      { id: '1', text: 'Olá!', sender: 'user', timestamp: Date.now() },
      {
        id: '2',
        text: 'Oi! Como posso ajudar?',
        sender: 'bot',
        timestamp: Date.now(),
      },
    ]

    render(<ChatMessages messages={sampleMessages} />)

    expect(screen.getByText('Olá!')).toBeInTheDocument()
    expect(screen.getByText('Oi! Como posso ajudar?')).toBeInTheDocument()
  })

  test('should scroll to the last message when a new one is added', () => {
    const sampleMessages: Message[] = [
      { id: '1', text: 'Olá!', sender: 'user', timestamp: Date.now() },
      {
        id: '2',
        text: 'Oi! Como posso ajudar?',
        sender: 'bot',
        timestamp: Date.now(),
      },
    ]

    render(<ChatMessages messages={sampleMessages} />)

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
