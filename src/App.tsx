import Chat from '@/pages/Chat'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Chat />
    </div>
  )
}

export default App
