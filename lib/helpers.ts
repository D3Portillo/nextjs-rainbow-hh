import { chain } from "wagmi"

export const classnames = (...classList: any[]) =>
  classList.filter(Boolean).join(" ")
export const noOp = () => {}
export const beautifyAddress = (addr: string) =>
  `${addr.substr(0, 4)}...${addr.substr(-3, 3)}`
export const getGoerliTxURL = (tx: string) =>
  `${chain.goerli.blockExplorers?.default.url}/tx/${tx}`
export const getGoerliAddressURL = (address: string) =>
  `${chain.goerli.blockExplorers?.default.url}/address/${address}`
