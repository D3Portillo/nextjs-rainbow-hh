import "@/assets/styles.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

export const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.goerli,
    ...(process.env.NODE_ENV === "development" ? [chain.hardhat] : []),
  ],
  [
    alchemyProvider({
      // Alchemy's default API key used if no ALCHEMY_API_KEY defined.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: process.env.ALCHEMY_API_KEY || "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Guest Book",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
