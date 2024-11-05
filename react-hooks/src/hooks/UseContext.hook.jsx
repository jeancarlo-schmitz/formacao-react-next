import ThemeProvider from "../data/ThemeProvider"
import TesteTheme from "../ui/TesteTheme"

function UseContext() {

  return (
    <>
        <h1>Use Context - Hook</h1>
        <ThemeProvider>
          <TesteTheme />
        </ThemeProvider>
    </>
  )
}

export default UseContext
