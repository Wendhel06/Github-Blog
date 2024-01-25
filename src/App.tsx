import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { GithubContextProvider } from './contexts/GithubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubContextProvider>
        <Router />
      </GithubContextProvider>
    </ThemeProvider>
  )
}
