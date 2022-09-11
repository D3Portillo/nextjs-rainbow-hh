import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const TO_VERIFY_NETWORKS = ["goerli"]
const VERIFY_CONTRACTS = ["GuestBook"]

const verifyABIs: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { name } = hre.network
  const deployed = await hre.deployments.all()
  if (TO_VERIFY_NETWORKS.includes(name)) {
    for (let name of VERIFY_CONTRACTS) {
      const contract = deployed[name]
      if (contract) {
        await hre.run("verify:verify", {
          address: contract.address,
        })
      } else throw `Could't find deployment for ${name}`
    }
  }
}

verifyABIs.runAtTheEnd = true
export default verifyABIs
