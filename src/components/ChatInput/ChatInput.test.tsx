import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import ChatInput from './ChatInput'

describe('ChatInput', () => {
  test('should render the input field and send button', () => {
    render(<ChatInput onSendMessage={() => {}} />)

    expect(
      screen.getByPlaceholderText('Digite uma mensagem...')
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('should call onSendMessage when clicking the send button', () => {
    const mockSendMessage = vi.fn()
    render(<ChatInput onSendMessage={mockSendMessage} />)

    const input = screen.getByPlaceholderText('Digite uma mensagem...')
    fireEvent.change(input, { target: { value: 'Olá, tudo bem?' } })

    const sendButton = screen.getByRole('button')
    fireEvent.click(sendButton)

    expect(mockSendMessage).toHaveBeenCalledWith('Olá, tudo bem?')
    expect(input).toHaveValue('')
  })
})
