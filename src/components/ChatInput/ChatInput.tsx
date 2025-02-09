import { useState } from 'react'
import { Send } from 'lucide-react'

type ChatInputProps = {
  onSendMessage: (message: string) => void
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() !== '') {
      onSendMessage(input)
      setInput('')
    }
  }

  return (
    <div className="p-4 border-t border-gray-300 dark:border-gray-600 flex items-center">
      <input
        data-testid="chat-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma mensagem..."
        className="flex-grow p-2 border rounded-md dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  )
}

export default ChatInput
