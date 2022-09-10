declare namespace NodeJS {
  export interface ProcessEnv {
    ETHERSCAN_API_KEY: string
    ALCHEMY_API_KEY: string
    /** Your EOA Private Key */
    PRIVATE_KEY: string
    /** Force to get Goerli read only provider */
    FORCE_GOERLI_RO_PROVIDER: string
  }
}
