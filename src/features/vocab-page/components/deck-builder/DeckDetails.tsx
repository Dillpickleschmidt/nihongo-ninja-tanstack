import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { Label } from "@/components/ui/label"
import { LocationSelector } from "../LocationSelector"
import type { TreeNode } from "@/components/ui/tree-view"

interface DeckDetailsProps {
  deckName: () => string
  setDeckName: (name: string) => void
  deckDesc: () => string
  setDeckDesc: (desc: string) => void
  selectedFolderId: () => string
  selectedFolderName: () => string
  folderTreeNodes: TreeNode[]
  onFolderSelect: (folderId: string) => void
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

        <div>
          <Label class="mb-1 block">Folder</Label>
          <LocationSelector
            selectedFolderId={props.selectedFolderId()}
            selectedFolderName={props.selectedFolderName()}
            folderTreeNodes={props.folderTreeNodes}
            editingType="deck"
            onSelect={props.onFolderSelect}
          />
        </div>

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
