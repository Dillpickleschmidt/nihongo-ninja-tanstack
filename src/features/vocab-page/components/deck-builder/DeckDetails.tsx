import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"

interface DeckDetailsProps {
  deckName: () => string
  setDeckName: (name: string) => void
  deckDesc: () => string
  setDeckDesc: (desc: string) => void
  folderName: () => string
  setFolderName: (folder: string) => void
}

export function DeckDetails(props: DeckDetailsProps) {
  return (
    <section class="border-border rounded-xl border p-4 sm:p-5">
      <h2 class="mb-3 text-lg font-semibold">Deck Details</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <TextField value={props.deckName()} onChange={props.setDeckName}>
          <TextFieldLabel>Deck Name</TextFieldLabel>
          <TextFieldInput placeholder="e.g. JLPT N5 Core Vocabulary" />
        </TextField>

        <TextField value={props.folderName()} onChange={props.setFolderName}>
          <TextFieldLabel>Folder</TextFieldLabel>
          <TextFieldInput placeholder="Optional folder" />
        </TextField>

        <TextField
          class="md:col-span-2"
          value={props.deckDesc()}
          onChange={props.setDeckDesc}
        >
          <TextFieldLabel>Description</TextFieldLabel>
          <TextFieldInput placeholder="Describe the focus of this deck…" />
        </TextField>
      </div>
    </section>
  )
}
