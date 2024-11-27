import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { TravelProvider } from './hooks/travel'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <TravelProvider>
          <Routes />
        </TravelProvider>
    </ThemeProvider>
  </StrictMode>,
)
