import { useLayoutEffect, useRef } from 'react'
import MessageBubble from '@/components/MessageBubble'
import { Message } from '@/types/chat'

type ChatMessagesProps = {
  messages: Message[]
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (messagesEndRef.current && 'scrollIntoView' in messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div
      data-testid="chat-messages"
      role="log"
      aria-live="polite"
      className="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto justify-end"
    >
      {messages.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Nenhuma mensagem ainda...
        </p>
      ) : (
        messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
      )}
      <div ref={messagesEndRef} data-testid="scroll-anchor" />
    </div>
  )
}

export default ChatMessages
