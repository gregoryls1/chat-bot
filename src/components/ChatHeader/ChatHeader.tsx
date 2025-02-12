import ThemeToggle from '@/components/ThemeToggle'

const ChatHeader = () => {
  return (
    <header
      data-testid="chat-header"
      className="bg-blue-500 dark:bg-black text-white p-4 shadow-md flex justify-between items-center"
    >
      <h1 className="text-lg font-bold">Chat Bot</h1>
      <ThemeToggle />
    </header>
  )
}

export default ChatHeader
