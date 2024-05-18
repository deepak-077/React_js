import { useState } from 'react'

import './index.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  // setting default value to light

  const [themeMode,setThemeMode] = useState('light')

  // creating function of as what they will do is not defined

  const lightTheme = () =>{
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')
  }

  // acual change in theme 

  useEffect (() =>{
    // we are removing so we can add, we don't know whats alredy the value is so removing whatever the value is 

    document.querySelector('html').classList.remove('light','dark')

    document.querySelector('html').classList.add(themeMode)

  },[themeMode]
)

  

  return (
    <ThemeProvider value =({themeMode, lightTheme,darkTheme})>
   
     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* Theme Button */}
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* card */}
                       
                    </div>
                </div>
            </div>

  </ThemeProvider>

  )
}

export default App
