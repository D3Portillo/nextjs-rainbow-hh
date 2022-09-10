import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const fn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre
  const { deployer } = await getNamedAccounts()
  // taken from hardhat.config.ts#namedAccounts
  await deployments.deploy("GuestBook", {
    from: deployer,
  })
}

export default fn
