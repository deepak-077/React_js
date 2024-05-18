import {createContext, useContext} from 'react';

//we are passing a default value as we want the default theme to be light

// we can pass variable as well as methods in createContext arguments

export const ThemeContext =createContext({
    themeMode:'light',
    darkTheme:() => {},
    lightTheme:() => {},
})

// theme provider is wrapping 
export const ThemeProvider = ThemeContext.Provider


// useTheme will give access to everything inside ThemeContext
export default function useTheme(){
    return useContext(ThemeContext)
}