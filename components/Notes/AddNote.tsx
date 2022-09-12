import { useAccount, useDeprecatedContractWrite } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { SiSpinrilla } from "react-icons/si"
import { FaArrowRight } from "react-icons/fa"

import RainbowButton from "@/components/RainbowButton"
import getContract from "@/lib/getContract"
import { noOp } from "@/lib/helpers"

const GuestBook = getContract("GuestBook")

type Props = {
  onItemCreation(): void
  onItemValidation(): void
}

function AddNote({ onItemCreation, onItemValidation }: Props) {
  const { openConnectModal = noOp } = useConnectModal()
  const { address } = useAccount()
  const { isLoading, writeAsync } = useDeprecatedContractWrite({
    addressOrName: GuestBook.address,
    contractInterface: GuestBook.abi,
    functionName: "addNote",
  })

  const addNote = (note: string) => writeAsync({ args: [note] })
  function handleAddItem() {
    if (!address) {
      return openConnectModal()
    }
    const note = prompt("Leave a note DApp creator 😊")
    if (note) {
      onItemCreation()
      addNote(note)
        .then((tx) => tx.wait())
        .catch(noOp)
        .finally(onItemValidation)
    }
  }

  return (
    <RainbowButton
      onClick={handleAddItem}
      isPlain
      className="group bg-black flex items-center space-x-2 focus:ring-2 ring-blue-600"
    >
      <span className="text-xl text-white font-bold">
        {isLoading ? "Working" : "New"}
      </span>
      {isLoading ? (
        <SiSpinrilla className="animate-spin text-white text-lg" />
      ) : (
        <FaArrowRight className="group-hover:translate-x-px text-white" />
      )}
    </RainbowButton>
  )
}

export default AddNote
