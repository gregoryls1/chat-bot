type MessageBubbleProps = {
  message: {
    text: string
    sender: 'user' | 'bot'
  }
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user'

  return (
    <div
      className={`p-3 rounded-lg max-w-xs break-words ${
        isUser
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-300 text-black self-start'
      }`}
      data-testid="message-bubble"
    >
      {message.text}
    </div>
  )
}

export default MessageBubble
