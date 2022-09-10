import type { NextPage } from "next"
import Head from "next/head"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import ExternalLink from "@/components/ExternalLink"
import Notes from "@/components/Notes"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col px-4 max-w-lg mx-auto">
      <Head>
        <title>Guest Book</title>
      </Head>
      <nav className="mt-4 pb-4 border-zinc-100 flex justify-end border-b">
        <ConnectButton />
      </nav>
      <Notes />
      <footer className="p-4 flex justify-center">
        <ExternalLink isPrimitive href="https://twitter.com/d3portillo">
          Made with ❤️ by YOU
        </ExternalLink>
      </footer>
    </div>
  )
}

export default Home
