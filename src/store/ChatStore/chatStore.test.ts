import { describe, test, expect, beforeEach } from 'vitest'
import { act } from 'react-dom/test-utils'
import { useChatStore } from './chatStore'

describe('chatStore (Zustand)', () => {
  beforeEach(() => {
    useChatStore.setState({ messages: [] })
  })

  test('should initialize with an empty message list', () => {
    const { messages } = useChatStore.getState()
    expect(messages).toEqual([])
  })

  test('should add a user message to the store', () => {
    act(() => {
      useChatStore.getState().addMessage('Olá, mundo!', 'user')
    })

    const { messages } = useChatStore.getState()
    expect(messages).toHaveLength(1)
    expect(messages[0]).toMatchObject({
      text: 'Olá, mundo!',
      sender: 'user',
    })
  })

  test('should add a bot message to the store', () => {
    act(() => {
      useChatStore.getState().addMessage('Oi! Como posso ajudar?', 'bot')
    })

    const { messages } = useChatStore.getState()
    expect(messages).toHaveLength(1)
    expect(messages[0]).toMatchObject({
      text: 'Oi! Como posso ajudar?',
      sender: 'bot',
    })
  })
})
