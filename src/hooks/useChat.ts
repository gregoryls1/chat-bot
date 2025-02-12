import { useChatStore } from '@/store/ChatStore/chatStore'

export const useChat = () => {
  const { messages, addMessage, isBotTyping, clearChat } = useChatStore()

  return { messages, addMessage, isBotTyping, clearChat }
}
