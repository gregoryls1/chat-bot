import { useEffect, useRef } from 'react'
import MessageBubble from '@/components/MessageBubble'
import { Message } from '@/types/chat'
import { useChatStore } from '@/store/ChatStore/chatStore'

type ChatMessagesProps = {
  messages: Message[]
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const isBotTyping = useChatStore((state) => state.isBotTyping)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isBotTyping])

  return (
    <div
      data-testid="chat-messages"
      className="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto justify-end"
    >
      {messages.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Nenhuma mensagem ainda...
        </p>
      ) : (
        messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
      )}

      {isBotTyping && (
        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-150">.</span>
          <span className="animate-bounce delay-300">.</span>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessages
