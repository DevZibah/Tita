import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import NavbarContextProvider from './contexts/NavbarContext'

import '@rainbow-me/rainbowkit/styles.css'
// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
// import { usePublicClient } from 'wagmi'

// const publicClient = usePublicClient()

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon],
  [
    infuraProvider({
      apiKey: 'e40f343258fd4527b4be8e58a49b8964',
      stallTimeout: 1_000,
    }),
    publicProvider(),
  ]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

// const { connectors } = getDefaultWallets({
//   appName: 'My Celo App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains,
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <NavbarContextProvider>
          <App />
        </NavbarContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
