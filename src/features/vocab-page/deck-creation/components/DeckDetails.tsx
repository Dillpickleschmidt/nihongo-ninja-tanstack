import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldDescription,
} from "@/components/ui/text-field"
import { Label } from "@/components/ui/label"
import { LocationSelector } from "@/features/vocab-page/components/LocationSelector"
import { useFolderTree } from "@/features/vocab-page/hooks/useFolderTree"
import { useDeckCreationStore } from "../hooks/useDeckCreationStore"
import { useDeckValidation } from "../hooks/useDeckValidation"

interface DeckDetailsProps {
  folders: DeckFolder[]
  decks: UserDeck[]
}

export function DeckDetails(props: DeckDetailsProps) {
  const { store, actions } = useDeckCreationStore()
  const deckValidation = useDeckValidation({
    store: () => store,
    existingDecks: props.decks,
  })

  // Folder tree for LocationSelector
  const folderTree = useFolderTree({
    folders: props.folders,
    decks: props.decks,
    item: null, // No item being edited, so all folders are selectable
  })

  const handleFolderSelect = (folderId: string) => {
    if (folderId === "root") {
      actions.updateDeckFolder("root", "Root")
    } else {
      const folder = props.folders.find(
        (f) => f.folder_id.toString() === folderId,
      )
      actions.updateDeckFolder(folderId, folder?.folder_name || "Root")
    }
  }

  // Show name validation error
  const nameError = () => {
    const hasAttemptedSubmit = store.validation.hasAttemptedSubmit

    // Only show errors after submit attempt
    if (hasAttemptedSubmit) {
      if (!deckValidation.deckNameValidation().isValid) {
        return deckValidation.deckNameValidation().error
      }
      if (store.deck.name.trim().length === 0) {
        return "Deck name is required"
      }
    }

    return undefined
  }

  // Show required indicator (gray text for preview)
  const showRequiredIndicator = () => {
    const hasAttemptedSubmit = store.validation.hasAttemptedSubmit
    const nameIsEmpty = store.deck.name.trim().length === 0

    // Show gray "Required" text as preview when field is empty and haven't attempted submit
    if (!hasAttemptedSubmit && nameIsEmpty) {
      return <span>Required</span>
    }

    // Show red error after submit attempt
    if (hasAttemptedSubmit && nameError()) {
      return (
        <span class="text-destructive text-xs font-medium">{nameError()}</span>
      )
    }

    return null
  }

  return (
    <section>
      <div class="mb-4">
        <h2 class="text-lg font-semibold">Deck Details</h2>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <TextField
          value={store.deck.name}
          onChange={actions.updateDeckName}
          class="relative"
        >
          <TextFieldLabel>Deck Name</TextFieldLabel>
          <TextFieldInput placeholder="My Vocabulary Deck" />
          <div class="text-muted-foreground/70 pointer-events-none absolute top-7.5 right-4 text-xs font-medium italic">
            {showRequiredIndicator()}
          </div>
        </TextField>

        <div>
          <div class="mb-1 flex items-center justify-between">
            <Label>Folder</Label>
          </div>
          <LocationSelector
            selectedFolderId={store.deck.selectedFolderId}
            selectedFolderName={store.deck.selectedFolderName}
            folderTreeNodes={folderTree.folderTreeNodes()}
            editingType="deck"
            onSelect={handleFolderSelect}
          />
        </div>
      </div>

      <div class="mt-4">
        <TextField
          value={store.deck.description}
          onChange={actions.updateDeckDescription}
        >
          <TextFieldLabel>
            Description{" "}
            <span class="text-muted-foreground text-xs">(Optional)</span>
          </TextFieldLabel>
          <TextFieldInput placeholder="Describe your deck..." />
        </TextField>
      </div>
    </section>
  )
}

