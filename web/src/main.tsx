import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { TravelProvider } from './hooks/travel'
import { Routes } from './routes'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <TravelProvider>
          <Routes />
        </TravelProvider>
    </ThemeProvider>
  </StrictMode>,
)
