import { useState, useEffect } from 'react'

import Moon from './icons/Moon'
import Sun from './icons/Sun'

const Theme = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.darkMode === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.darkMode = darkMode

    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('style', 'color-scheme: dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('style', 'color-scheme: light')
    }
  }, [darkMode])

  return (
    <button
      aria-label='Toggle dark mode'
      type='button'
      className='w-10 h-10 p-2 rounded bg-indigo-200 dark:bg-gray-800'
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <Moon width={24} height={24} />
      ) : (
        <Sun width={24} height={24} />
      )}
    </button>
  )
}

export default Theme
