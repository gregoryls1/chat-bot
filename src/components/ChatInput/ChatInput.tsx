import { useState } from 'react'
import { Send } from 'lucide-react'
import { useChat } from '@/hooks/useChat'

type ChatInputProps = {
  onSendMessage: (message: string) => void
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('')
  const { isBotTyping } = useChat()

  const handleSend = () => {
    if (input.trim() !== '') {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyEnter = (event: any) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="p-4 border-t border-gray-300 dark:border-gray-600 flex items-center">
      <input
        data-testid="chat-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyEnter}
        placeholder="Digite uma mensagem..."
        className="flex-grow p-2 border rounded-md dark:bg-gray-800 dark:text-white"
        disabled={isBotTyping}
      />
      <button
        data-testid="send-button"
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-500 dark:bg-black text-white rounded-md transition"
        disabled={isBotTyping}
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  )
}

export default ChatInput
