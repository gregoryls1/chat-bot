import ChatHeader from '@/components/ChatHeader'
import './App.css'

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ChatHeader />
      <h1 className="text-xl font-bold text-blue-500">
        TailwindCSS Configurado! 🚀
      </h1>
    </div>
  )
}

export default App
