import { useState } from "react"
import { GlobalStyle } from "../styles/global"


export default function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <GlobalStyle isDarkTheme={isDarkTheme}>

      <Component {...pageProps} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
    </GlobalStyle>

  )

}
