import {  useEffect } from 'react'
import { useThemeStore } from '../store/theme.store'

const useTheme = () => {
   
    const { theme, toggleTheme } = useThemeStore()
    
    useEffect(() => {
      if (theme) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }, [theme])

    return [theme, toggleTheme]
  }

  export default useTheme