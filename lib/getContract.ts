import { Contract, utils } from "ethers"
import { chain } from "wagmi"

import CONTRACTS_HARDHAT from "@/lib/abis/localhost.json"
import CONTRACTS_GOERLI from "@/lib/abis/goerli.json"
import { provider } from "pages/_app"

import type { GuestBook } from "typechain-types"

const CONTRACTS_BY_CHAIN = {
  [chain.hardhat.id]: CONTRACTS_HARDHAT,
  [chain.goerli.id]: CONTRACTS_GOERLI,
}

const READ_ONLY_CHAIN = (() => {
  if (process.env.FORCE_GOERLI_RO_PROVIDER) return chain.goerli
  if (typeof window === "undefined" || process.env.NODE_ENV === "development")
    return chain.hardhat
  return chain.goerli
})()

console.debug({ READ_ONLY_CHAIN })
const CONTRACT_LIST = CONTRACTS_BY_CHAIN[READ_ONLY_CHAIN.id] as {
  contracts: any
} & typeof CONTRACTS_HARDHAT

/**
 * Define map all your contract typedefs
 * [ContractName] : [ContractTypeDef]
 */
interface ContractTypeByName {
  GuestBook: GuestBook
}
// Enum all your contract definitions
type ContractNames = keyof ContractTypeByName
type ContractWithType<T extends ContractNames> = ContractTypeByName[T] & {
  abi: []
}

export default function getContract<T extends ContractNames>(
  name: T
): ContractWithType<T> {
  const RAW_CONTRACT = CONTRACT_LIST["contracts"][name]
  if (!RAW_CONTRACT) return {} as any
  const { abi, address } = RAW_CONTRACT
  const contractInterface = new utils.Interface(abi)
  const contract = new Contract(
    address,
    contractInterface,
    provider({ chainId: READ_ONLY_CHAIN.id })
  ) as any
  contract.abi = contractInterface.format(utils.FormatTypes.minimal)
  return contract
}
