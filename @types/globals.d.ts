declare namespace NodeJS {
  export interface ProcessEnv {
    ETHERSCAN_API_KEY: string
    /** @see https://docs.alchemy.com/docs/alchemy-quickstart-guide#1key-create-an-alchemy-key */
    NEXT_PUBLIC_ALCHEMY_API_KEY: string
    /** Your EOA Private Key */
    PRIVATE_KEY: string
    /**
     * Force to set Goerli read only provider for #getContract
     * @see https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
     */
    NEXT_PUBLIC_FORCE_GOERLI_PROVIDER: string
  }
}
