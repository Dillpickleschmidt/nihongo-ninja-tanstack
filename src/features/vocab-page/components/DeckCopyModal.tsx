// features/vocab-page/components/DeckCopyModal.tsx
import { createSignal, createMemo, createEffect, on, Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { Copy } from "lucide-solid"
import { validateDeckComplete } from "@/features/vocab-page/validation"
import { useFolderTree } from "@/features/vocab-page/hooks/useFolderTree"
import { LocationSelector } from "./LocationSelector"

interface DeckCopyModalProps {
  deck: UserDeck | null
  isOpen: boolean
  folders: DeckFolder[]
  decks: UserDeck[]
  onClose: () => void
  onCopy: (deck: UserDeck, newName: string, targetFolderId: string) => void
}

export function DeckCopyModal(props: DeckCopyModalProps) {
  // Form state
  const [name, setName] = createSignal("")
  const [selectedFolderId, setSelectedFolderId] = createSignal<string>("")
  const [showValidation, setShowValidation] = createSignal(false)

  // Initialize form when deck changes
  const initializeForm = () => {
    if (!props.deck) return

    const deck = props.deck
    setName(`${deck.deck_name} (Copy)`)
    setSelectedFolderId(deck.folder_id?.toString() || "root")
    setShowValidation(false)
  }

  // Initialize when modal opens
  createEffect(
    on(
      () => [props.isOpen, props.deck],
      ([isOpen, deck]) => {
        if (isOpen && deck) {
          initializeForm()
        }
      },
    ),
  )

  // Validation - only computed when needed
  const nameValidation = createMemo(() => {
    const targetFolderId =
      selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
    return validateDeckComplete(name(), targetFolderId, props.decks)
  })

  // Stable validation state that only changes on blur/submit
  const stableValidationState = createMemo(() => {
    if (!showValidation()) return "valid"
    return nameValidation().isValid ? "valid" : "invalid"
  })

  const canCopy = () => {
    return nameValidation().isValid && name().trim().length > 0
  }

  // Only compute expensive operations when needed
  const folderTreeNodes = () => {
    if (!props.deck) return []

    const folderTree = useFolderTree({
      folders: props.folders,
      decks: props.decks,
      item: props.deck,
    })

    return folderTree.folderTreeNodes()
  }

  const selectedFolderName = () => {
    const id = selectedFolderId()
    if (id === "root") return "Root"
    const folder = props.folders.find((f) => f.folder_id.toString() === id)
    return folder?.folder_name || "Unknown"
  }

  // Event handlers
  const handleCopy = () => {
    setShowValidation(true)

    if (!canCopy() || !props.deck) return

    props.onCopy(props.deck, name().trim(), selectedFolderId())
    props.onClose()
  }

  const handleCancel = () => {
    props.onClose()
  }

  const getTitle = () => {
    if (!props.deck) return "Copy Deck"
    return `Copy "${props.deck.deck_name}"`
  }

  return (
    <Dialog
      open={props.isOpen}
      onOpenChange={(open) => !open && props.onClose()}
    >
      <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
        <DialogHeader>
          <DialogTitle class="flex items-center gap-2">
            <Copy class="h-5 w-5" />
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <div class="space-y-6">
          {/* Name Field */}
          <TextField validationState={stableValidationState()}>
            <TextFieldLabel>Deck Name</TextFieldLabel>
            <TextFieldInput
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
              placeholder="Enter deck name"
              onBlur={() => setShowValidation(true)}
            />
            <Show when={showValidation() && !nameValidation().isValid}>
              <p class="text-sm text-red-500">{nameValidation().error}</p>
            </Show>
          </TextField>

          {/* Location Field */}
          <div class="space-y-3">
            <label class="text-foreground text-sm font-medium">
              Destination Folder
            </label>

            <div class="bg-muted/20 border-card-foreground/70 space-y-3 rounded-lg border p-3 backdrop-blur-sm">
              <div class="text-sm">
                <span class="text-muted-foreground">Copy to: </span>
                <span class="font-medium">
                  {selectedFolderId() === "root"
                    ? "Root"
                    : selectedFolderName()}
                </span>
              </div>

              <LocationSelector
                selectedFolderId={selectedFolderId()}
                selectedFolderName={selectedFolderName()}
                folderTreeNodes={folderTreeNodes()}
                editingType="deck"
                onSelect={setSelectedFolderId}
              />
            </div>
          </div>

          {/* Info Section */}
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800/30 dark:bg-blue-950/20">
            <div class="flex items-start gap-3">
              <Copy class="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 class="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Copy Deck
                </h4>
                <p class="mt-1 text-xs text-blue-600 dark:text-blue-300">
                  {props.deck?.source === "built-in"
                    ? "This will create a new editable deck with all vocabulary from the built-in deck."
                    : "This will create a new deck with all vocabulary from the original deck."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter class="gap-3">
          <Button variant="outline" onClick={handleCancel} class="flex-1">
            Cancel
          </Button>
          <Button onClick={handleCopy} disabled={!canCopy()} class="flex-1">
            <Copy class="mr-2 h-4 w-4" />
            Create Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
