import { useEffect, useRef, useState } from 'react'
import MessageBubble from '@/components/MessageBubble'
import { Message } from '@/types/chat'
import { useChat } from '@/hooks/useChat'

type ChatMessagesProps = {
  messages: Message[]
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { isBotTyping } = useChat()
  const [isUserScrolling, setIsUserScrolling] = useState(false)

  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current

    const isAtBottom = scrollHeight - scrollTop <= clientHeight + 10
    setIsUserScrolling(!isAtBottom)
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div
      data-testid="chat-messages"
      className="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto"
      ref={containerRef}
      onScroll={handleScroll} // Detecta rolagem manual do usuário
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

      {/* Elemento para rolagem automática */}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessages
