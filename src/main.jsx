import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import NavbarContextProvider from './contexts/NavbarContext'
// import { CeloProvider } from '@celo/react-celo'
// import '@celo/react-celo/lib/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CeloProvider> */}
      <NavbarContextProvider>
        <App />
      </NavbarContextProvider>
    {/* </CeloProvider> */}
  </React.StrictMode>
)
 