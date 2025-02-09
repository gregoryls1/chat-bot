import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, beforeEach, vi } from 'vitest'
import Chat from './Chat'

describe('Chat Page', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()

    render(<Chat />)
  })

  test('should render the ChatHeader component inside the page', () => {
    expect(screen.getByTestId('chat-header')).toBeInTheDocument()
  })

  test('should render the ChatMessages component inside the page', () => {
    expect(screen.getByTestId('chat-messages')).toBeInTheDocument()
  })

  test('should render the ChatInput component inside the page', () => {
    expect(
      screen.getByPlaceholderText('Digite uma mensagem...')
    ).toBeInTheDocument()
  })

  test('should send and display a new user message', () => {
    const input = screen.getByPlaceholderText('Digite uma mensagem...')
    const sendButton = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'Olá, mundo!' } })
    fireEvent.click(sendButton)

    expect(screen.getByText('Olá, mundo!')).toBeInTheDocument()
  })
})
