import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, extendTheme, theme, ThemeProvider, withDefaultColorScheme} from '@chakra-ui/react'

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'red',
    components: ['Button', 'Badge'],
  }),
  withDefaultColorScheme({
    colorScheme: 'blue',
    components: ['Alert', 'Table'],
  }),
)
        



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
