import { ethers } from "hardhat"
import { expect } from "chai"
import type { GuestBook as TGuestBook } from "typechain-types"

describe("GuestBook", () => {
  let GuestBook: TGuestBook

  async function deployContract() {
    const factory = await ethers.getContractFactory("GuestBook")
    const contract = await factory.deploy()
    await contract.deployed()
    return contract
  }

  before(async () => {
    GuestBook = await deployContract()
  })

  it("emits NewNote(address, string)", async () => {
    const NOTE = "09".repeat(42)
    expect(GuestBook.addNote(NOTE)).emit(GuestBook, "NewNote").withArgs(NOTE)
    const events = await GuestBook.queryFilter(GuestBook.filters.NewNote())
    expect(events[0].args).to.include(NOTE)
  })

  it("NewNote(address, string) can be filtered", async () => {
    GuestBook = await deployContract()
    const NOTE = "VOID"
    const { from } = await GuestBook.addNote(NOTE)
    const events = await GuestBook.queryFilter(GuestBook.filters.NewNote(from))
    expect(events[0].args).to.include(NOTE)
  })
})
