import React, { createContext } from 'react'

const ThemeContext = createContext({
  darkMode: false,
  toogleDarkMode: () => {}
})

export default ThemeContext