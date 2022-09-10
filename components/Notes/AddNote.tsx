import { useDeprecatedContractWrite } from "wagmi"
import { SiSpinrilla } from "react-icons/si"
import { FaArrowRight } from "react-icons/fa"

import RainbowButton from "@/components/RainbowButton"
import getContract from "@/lib/getContract"

const GuestBook = getContract("GuestBook")

function AddNote() {
  const { isLoading, write } = useDeprecatedContractWrite({
    addressOrName: GuestBook.address,
    contractInterface: GuestBook.abi,
    functionName: "addNote",
  })

  const addNote = (note: string) => write({ args: [note] })

  function handleAddItem() {
    const note = prompt("Leave a note DApp creator 😊")
    if (note) {
      addNote(note)
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
