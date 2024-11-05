import { useContext } from "react";
import { ThemeContext } from "../data/ThemeProvider";

export default function TesteTheme(){
    const theme = useContext(ThemeContext)

    return (
        <button onClick={theme.toggle}>{theme.value}</button>
    )
}