import { useState, useEffect } from 'react'
import darkMode from '../../assets/img/darkMode.png'
import lightMode from '../../assets/img/lightMode.png'

export default function ThemeButton() {
  const changeTheme = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
  }

   const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])


  return (
    <button
      onClick={changeTheme}
      className="text-black dark:text-white rounded-full transition hover:bg-purple-600/40 hover:cursor-pointer"
    >
        <img
          src={isDark ? darkMode : lightMode }
          alt={isDark ? "Light mode" : "Dark mode"}
          style={{ width: 28, height: 28 }}
        />
    </button>
  )
}