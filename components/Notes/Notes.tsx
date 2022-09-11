import { useMemo } from "react"

import useOnOffMachine from "@/lib/hooks/useOnOffMachine"
import useNotesList from "@/lib/hooks/useNotesList"
import NoteItem from "./NoteItem"
import AddNote from "./AddNote"

function Notes() {
  const list = useNotesList()
  const skeleton = useOnOffMachine()
  const $renderList = useMemo(() => {
    const items = list.map((note) => (
      <NoteItem {...note} key={`note-item-${note.transactionHash}`} />
    ))
    if (skeleton.isOn) {
      items.push(
        <div
          key="mock-render-item"
          className="bg-zinc-50 rounded-lg h-4 animate-pulse"
        />
      )
    }
    return items
  }, [list.length, skeleton.isOn])

  return (
    <main className="flex-grow">
      <div className="bg-white sticky top-0 flex items-center justify-between py-4">
        <h2 className="text-xl font-bold">📒 Notes</h2>
        <AddNote
          onItemCreation={skeleton.turnOn}
          onItemValidation={skeleton.turnOff}
        />
      </div>
      <div className="flex flex-col space-y-2">
        {$renderList.length ? $renderList : <EmptyState />}
      </div>
    </main>
  )
}

function EmptyState() {
  return (
    <div className="bg-zinc-50 p-8 text-center rounded-lg">
      <strong className="text-zinc-700">No notes to show :{"("}</strong>
    </div>
  )
}

export default Notes
