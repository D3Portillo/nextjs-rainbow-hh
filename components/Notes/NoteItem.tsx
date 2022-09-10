import {
  beautifyAddress,
  getGoerliAddressURL,
  getGoerliTxURL,
} from "@/lib/helpers"

import ExternalLink from "@/components/ExternalLink"

function NoteItem({ persona, contenido, transactionHash }: Note) {
  return (
    <div className="border border-zinc-100 rounded-lg p-2">
      <div className="flex items-start justify-between">
        <span>
          <ExternalLink href={getGoerliAddressURL(persona)}>
            <strong>{beautifyAddress(persona)}</strong>
          </ExternalLink>
        </span>
        <ExternalLink href={getGoerliTxURL(transactionHash)}>Tx</ExternalLink>
      </div>
      <p className="p-2">{contenido}</p>
    </div>
  )
}
export default NoteItem
