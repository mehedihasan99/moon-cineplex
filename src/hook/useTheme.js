import { useContext } from 'react'
import { ThemeContext } from '../context'

function useTheme() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  return { darkMode, setDarkMode }
}
export default useTheme
