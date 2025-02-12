import { formatTime } from '@/utils/formatTime'

type MessageBubbleProps = {
  message: {
    text: string
    sender: 'user' | 'bot'
    timestamp: number
  }
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user'

  return (
    <div
      className={`p-3 rounded-lg max-w-xs break-words flex flex-col ${
        isUser
          ? 'bg-blue-500 dark:bg-gray-700 text-white self-end'
          : 'bg-gray-300 text-black self-start'
      }`}
      data-testid="message-bubble"
    >
      <p>{message.text}</p>
      <span className="text-xs text-gray-400 dark:text-gray-300 self-end mt-1">
        {formatTime(message.timestamp)}
      </span>
    </div>
  )
}

export default MessageBubble
