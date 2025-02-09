import Chat from '@/pages/Chat'
import { useThemeStore } from './store/ThemeStore/themeStore'

const App = () => {
  const { isDarkMode } = useThemeStore()

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Chat />
    </div>
  )
}

export default App
