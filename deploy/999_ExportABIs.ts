import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { resolve } from "path"
import fs from "fs"

const exportABIs: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { network, run } = hre
  const name = network.name.replace("hardhat", "localhost")
  const EXPORT_PATH = resolve(__dirname, `../lib/abis/${name}.json`)
  // Execute task::export - https://github.com/wighawag/hardhat-deploy#exporting-deployments
  await run("export", { export: EXPORT_PATH })
  const exportedAbis = JSON.parse(await fs.readFileSync(EXPORT_PATH, "utf-8"))
  // Re-write uglyfied/trimmed version for current EXPORT_PATH file
  await fs.writeFileSync(EXPORT_PATH, JSON.stringify(exportedAbis))
}

exportABIs.runAtTheEnd = true
export default exportABIs
