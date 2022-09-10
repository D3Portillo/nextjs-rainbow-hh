import useNotesList from "@/lib/hooks/useNotesList"
import NoteItem from "./NoteItem"
import AddNote from "./AddNote"

function Notes() {
  const list = useNotesList()
  return (
    <main className="flex-grow">
      <div className="bg-white sticky top-0 flex items-center justify-between py-4">
        <h2 className="text-xl font-bold">📒 Notes</h2>
        <AddNote />
      </div>
      <div className="flex flex-col space-y-2">
        {list.length ? (
          list.map((note) => (
            <NoteItem {...note} key={`note-item-${note.transactionHash}`} />
          ))
        ) : (
          <EmptyState />
        )}
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
