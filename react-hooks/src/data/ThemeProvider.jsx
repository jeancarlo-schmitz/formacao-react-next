import { createContext, useState } from "react"

export const themes = {
    light: 'light',
    dark: 'dark'
}

export const ThemeContext = createContext(themes.light);

export default function ThemeProvider(props){
    const [theme, setTheme] = useState(themes.light);

    function toggle(){
        setTheme(theme === themes.light ? themes.dark : themes.light);
    }

    return (
        <ThemeContext.Provider value={{value: theme, toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}