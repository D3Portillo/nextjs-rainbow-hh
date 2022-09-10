import { useEffect, useState } from "react"
import { useContractEvent } from "wagmi"

import getContract from "@/lib/getContract"
import { noOp } from "@/lib/helpers"

const GuestBook = getContract("GuestBook")
function useNotesList() {
  const [list, setList] = useState([] as Note[])

  useContractEvent({
    addressOrName: GuestBook.address,
    contractInterface: GuestBook.abi,
    eventName: "NewNote",
    listener: ({
      2: {
        args: [persona, contenido],
        transactionHash,
      },
    }) => setList((list) => [...list, { persona, contenido, transactionHash }]),
  })

  useEffect(() => {
    GuestBook.queryFilter(GuestBook.filters.NewNote())
      .then((list) =>
        list
          .slice(0, -1)
          .map(({ args: { persona, contenido }, transactionHash }) => ({
            transactionHash,
            persona,
            contenido,
          }))
      )
      .then(setList)
      .catch(noOp)
  }, [])

  return list
}

export default useNotesList
