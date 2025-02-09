import ChatHeader from '@/components/ChatHeader'
import ChatMessages from '@/components/ChatMessages'
import ChatInput from '@/components/ChatInput'
import { useChatStore } from '@/store/ChatStore/chatStore'

const Chat = () => {
  const { messages, addMessage } = useChatStore()

  return (
    <div className="flex justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={(text) => addMessage(text, 'user')} />
      </div>
    </div>
  )
}

export default Chat
