import ChatHeader from '@/components/ChatHeader'
import ChatMessages from '@/components/ChatMessages'
import ChatInput from '@/components/ChatInput'
import { Message } from '@/types/chat'
import { useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, newMessage])
  }
  return (
    <div className="flex justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}

export default Chat
