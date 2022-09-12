import type { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-deploy"
import "dotenv/config"

// Please replace with your PK. Default is Zero address
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0".repeat(64)
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },
}

export default config
