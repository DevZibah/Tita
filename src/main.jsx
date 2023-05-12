import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import NavbarContextProvider from './contexts/NavbarContext'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { celoAlfajores, celo } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains(
  [celoAlfajores, celo],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: 'https://celo-alfajores.infura.io/v3/e40f343258fd4527b4be8e58a49b8964',
      }),
    }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'TITA',
  projectId: 'projectId',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NavbarContextProvider>
          <App />
        </NavbarContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
