import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { Label } from "@/components/ui/label"
import {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
} from "@/components/ui/checkbox"
import { LocationSelector } from "@/features/vocab-page/shared/components/LocationSelector"
import { useFolderTree } from "@/features/vocab-page/hooks/useFolderTree"
import { useDeckCreationStore } from "../context/DeckCreationStoreContext"
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

  const handlePracticeModeChange = (
    mode: PracticeModeEnum,
    enabled: boolean,
  ) => {
    const currentModes = store.deck.allowedPracticeModes
    if (enabled) {
      // Add mode if not already present
      if (!currentModes.includes(mode)) {
        actions.updateAllowedPracticeModes([...currentModes, mode])
      }
    } else {
      // Remove mode, but ensure at least one remains
      const newModes = currentModes.filter((m) => m !== mode)
      if (newModes.length > 0) {
        actions.updateAllowedPracticeModes(newModes)
      }
    }
  }

  const practiceModeError = () => {
    const hasAttemptedSubmit = store.validation.hasAttemptedSubmit
    if (hasAttemptedSubmit && store.deck.allowedPracticeModes.length === 0) {
      return "At least one practice mode must be enabled"
    }
    return undefined
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
          <TextFieldInput
            placeholder="My Vocabulary Deck"
            class="dark:bg-primary/10 border-primary dark:border-primary-foreground/40 backdrop-blur-sm"
          />
          <div class="text-muted-foreground/70 pointer-events-none absolute top-7.5 right-4 text-xs font-medium italic">
            {showRequiredIndicator()}
          </div>
        </TextField>

        <div class="flex items-center justify-between gap-3">
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
            {/* Show original path when different from current in edit mode */}
            {store.original &&
              store.original.folderId !== store.deck.selectedFolderId && (
                <div class="text-muted-foreground mt-1 text-xs">
                  Original location: {store.original.folderName}
                </div>
              )}
          </div>

          <div class="flex flex-col gap-1 pt-4">
            <Checkbox
              class="flex items-center justify-end space-x-2"
              title="Choose which modes are presented when you click to practice this deck. At least one must be enabled."
              checked={store.deck.allowedPracticeModes.includes("meanings")}
              onChange={(enabled) =>
                handlePracticeModeChange("meanings", enabled)
              }
              disabled={
                store.deck.allowedPracticeModes.length === 1 &&
                store.deck.allowedPracticeModes.includes("meanings")
              }
            >
              <CheckboxLabel class="text-muted-foreground text-xs">
                Allow Meanings
              </CheckboxLabel>
              <CheckboxInput
                size={3.5}
                class="data-[checked]:bg-primary/60 border-primary/30 hover:cursor-pointer"
              />
            </Checkbox>
            <Checkbox
              class="flex items-center justify-end space-x-2"
              title="Choose which modes are presented when you click to practice this deck. At least one must be enabled."
              checked={store.deck.allowedPracticeModes.includes("spellings")}
              onChange={(enabled) =>
                handlePracticeModeChange("spellings", enabled)
              }
              disabled={
                store.deck.allowedPracticeModes.length === 1 &&
                store.deck.allowedPracticeModes.includes("spellings")
              }
            >
              <CheckboxLabel class="text-muted-foreground text-xs">
                Allow Spellings
              </CheckboxLabel>
              <CheckboxInput
                size={3.5}
                class="data-[checked]:bg-primary/60 border-primary/30 hover:cursor-pointer"
              />
            </Checkbox>
            {practiceModeError() && (
              <div class="text-destructive text-xs font-medium">
                {practiceModeError()}
              </div>
            )}
          </div>
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
          <TextFieldInput
            placeholder="Describe your deck..."
            class="dark:bg-primary/10 border-primary dark:border-primary-foreground/40 backdrop-blur-sm"
          />
        </TextField>
      </div>
    </section>
  )
}
