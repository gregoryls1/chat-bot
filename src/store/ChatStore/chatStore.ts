import { create } from 'zustand'
import { Message } from '@/types/chat'
import { getRandomBotResponse } from '@/utils/botResponses'

const STORAGE_KEY = 'chat_history'
const USER_NAME_KEY = 'chat_user_name'

type ChatStore = {
  messages: Message[]
  isBotTyping: boolean
  addMessage: (text: string, sender: 'user' | 'bot') => void
  clearChat: () => void
}

const loadMessagesFromStorage = (): Message[] => {
  const savedMessages = localStorage.getItem(STORAGE_KEY)
  return savedMessages ? JSON.parse(savedMessages) : []
}

const getUserName = (): string | null => {
  return localStorage.getItem(USER_NAME_KEY)
}

export const useChatStore = create<ChatStore>((set, get) => {
  const storedMessages = loadMessagesFromStorage()

  return {
    messages:
      storedMessages.length > 0
        ? storedMessages
        : [
            {
              id: crypto.randomUUID(),
              text: 'Olá! Qual é o seu nome?',
              sender: 'bot',
              timestamp: Date.now(),
            },
          ],
    isBotTyping: false,

    addMessage: (text, sender) => {
      set((state) => {
        const newMessage: Message = {
          id: crypto.randomUUID(),
          text,
          sender,
          timestamp: Date.now(),
        }

        const updatedMessages = [...state.messages, newMessage]

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages))

        return { messages: updatedMessages }
      })

      const currentMessages = get().messages
      if (currentMessages.length === 2 && sender === 'user') {
        set({ isBotTyping: true })
        localStorage.setItem(USER_NAME_KEY, text)

        setTimeout(() => {
          set((state) => {
            const botMessage: Message = {
              id: crypto.randomUUID(),
              text: `Olá, ${text}, em que posso ajudar?`,
              sender: 'bot',
              timestamp: Date.now(),
            }

            const updatedMessages = [...state.messages, botMessage]
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages))

            return { messages: updatedMessages, isBotTyping: false }
          })
        }, 2000)
      } else if (sender === 'user') {
        set({ isBotTyping: true })
        const userName = getUserName()
        const botResponse = userName
          ? `${userName}, ${getRandomBotResponse()}`
          : getRandomBotResponse()

        setTimeout(() => {
          set((state) => {
            const botMessage: Message = {
              id: crypto.randomUUID(),
              text: botResponse,
              sender: 'bot',
              timestamp: Date.now(),
            }

            const updatedMessages = [...state.messages, botMessage]
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages))

            return { messages: updatedMessages, isBotTyping: false }
          })
        }, 2000)
      }
    },

    clearChat: () => {
      set({ messages: [], isBotTyping: false })
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(USER_NAME_KEY)
    },
  }
})
