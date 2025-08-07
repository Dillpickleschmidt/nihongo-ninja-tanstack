// vocab-page/components/EditModal.tsx
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
import { Trash2, Edit, Check, X } from "lucide-solid"
import { EditTransaction } from "@/features/vocab-page/logic/edit-transaction"
import { VALIDATION_RULES } from "@/features/vocab-page/validation"
import {
  buildFolderPath,
  getCurrentFolderId,
} from "@/features/vocab-page/utils/folderUtils"
import { useEditValidation } from "@/features/vocab-page/hooks/useEditValidation"
import { useFolderTree } from "@/features/vocab-page/hooks/useFolderTree"
import { LocationBreadcrumb } from "./LocationBreadcrumb"
import { LocationSelector } from "./LocationSelector"
import { DeleteConfirmation } from "./DeleteConfirmation"

interface EditModalProps {
  item: UserDeck | DeckFolder | null
  isOpen: boolean
  folders: DeckFolder[]
  decks: UserDeck[]
  onClose: () => void
  onSave: (transaction: EditTransaction) => void
  onDelete: (transaction: EditTransaction) => void
}

export function EditModal(props: EditModalProps) {
  const isDeck = () => props.item && "deck_id" in props.item
  const isFolder = () => props.item && "folder_id" in props.item

  // Ref for input focus
  let nameInputRef!: HTMLInputElement

  // Form state
  const [name, setName] = createSignal("")
  const [selectedFolderId, setSelectedFolderId] = createSignal<string>("")
  const [deleteStrategy, setDeleteStrategy] = createSignal<
    "move-up" | "delete-all"
  >("move-up")
  const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false)
  const [isEditingName, setIsEditingName] = createSignal(false)

  // Initialize form when item changes
  const initializeForm = () => {
    if (!props.item) return

    if (isDeck()) {
      const deck = props.item as UserDeck
      setName(deck.deck_name)
      setSelectedFolderId(deck.folder_id?.toString() || "root")
    } else {
      const folder = props.item as DeckFolder
      setName(folder.folder_name)
      setSelectedFolderId(folder.parent_folder_id?.toString() || "root")
    }
    setShowDeleteConfirm(false)
    setIsEditingName(false)
  }

  // Initialize when modal opens (only track isOpen and item, not other signals)
  createEffect(
    on(
      () => [props.isOpen, props.item],
      ([isOpen, item]) => {
        if (isOpen && item) {
          initializeForm()
        }
      },
    ),
  )

  // Current location breadcrumb
  const currentLocationPath = createMemo(() => {
    if (!props.item) return []
    return buildFolderPath(getCurrentFolderId(props.item), props.folders)
  })

  // Selected location breadcrumb
  const selectedLocationPath = createMemo(() => {
    return buildFolderPath(selectedFolderId(), props.folders)
  })

  // Only compute when modal is open and we have data
  const modalData = createMemo(() => {
    if (!props.isOpen || !props.item || props.folders.length === 0) {
      return {
        nameValidation: { isValid: true, error: "" },
        hasChanges: false,
        canSave: false,
        folderTreeNodes: [],
        folderContents: { decks: 0, folders: 0 },
      }
    }

    // Call hooks once and destructure all needed values
    const validation = useEditValidation({
      name,
      item: props.item,
      selectedFolderId,
      folders: props.folders,
      decks: props.decks,
    })

    const folderTree = useFolderTree({
      folders: props.folders,
      decks: props.decks,
      item: props.item,
    })

    return {
      nameValidation: validation.nameValidation(),
      hasChanges: validation.hasChanges(),
      canSave: validation.canSave(),
      folderTreeNodes: folderTree.folderTreeNodes(),
      folderContents: folderTree.folderContents(),
    }
  })

  // Simple accessor functions
  const nameValidation = () => modalData().nameValidation
  const hasChanges = () => modalData().hasChanges
  const canSave = () => modalData().canSave
  const folderTreeNodes = () => modalData().folderTreeNodes
  const folderContents = () => modalData().folderContents

  // Get selected folder display name
  const selectedFolderName = createMemo(() => {
    const id = selectedFolderId()
    if (id === "root") return "Root"
    const folder = props.folders.find((f) => f.folder_id.toString() === id)
    return folder?.folder_name || "Unknown"
  })

  // Event handlers
  const handleSave = () => {
    if (!canSave() || !props.item) return

    const transaction = new EditTransaction()

    if (isDeck()) {
      const deck = props.item as UserDeck
      const updates: { name?: string; folderId?: number | null } = {}

      if (name() !== deck.deck_name) {
        updates.name = name().trim()
      }

      const targetFolderId =
        selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      if (targetFolderId !== deck.folder_id) {
        updates.folderId = targetFolderId
      }

      transaction.add({
        type: "update-deck",
        deckId: deck.deck_id,
        updates,
      })
    } else {
      const folder = props.item as DeckFolder
      const updates: { name?: string; parentId?: number | null } = {}

      if (name() !== folder.folder_name) {
        updates.name = name().trim()
      }

      const targetParentId =
        selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      if (targetParentId !== folder.parent_folder_id) {
        updates.parentId = targetParentId
      }

      transaction.add({
        type: "update-folder",
        folderId: folder.folder_id,
        updates,
      })
    }

    props.onSave(transaction)
    props.onClose()
  }

  const handleDelete = () => {
    if (!props.item) return

    const transaction = new EditTransaction()

    if (isDeck()) {
      const deck = props.item as UserDeck
      transaction.add({
        type: "delete-deck",
        deckId: deck.deck_id,
      })
    } else {
      const folder = props.item as DeckFolder
      transaction.add({
        type: "delete-folder",
        folderId: folder.folder_id,
        strategy: deleteStrategy(),
      })
    }

    props.onDelete(transaction)
    props.onClose()
  }

  const getTitle = () => {
    if (!props.item) return "Edit"
    if (isDeck()) return `Edit ${(props.item as UserDeck).deck_name}`
    return `Edit ${(props.item as DeckFolder).folder_name}`
  }

  return (
    <Dialog
      open={props.isOpen}
      onOpenChange={(open) => !open && props.onClose()}
    >
      <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>

        <Show when={!showDeleteConfirm()}>
          <div class="space-y-6">
            {/* Name Field */}
            <TextField
              validationState={nameValidation().isValid ? "valid" : "invalid"}
            >
              <TextFieldLabel>Name</TextFieldLabel>
              <div class="relative">
                <TextFieldInput
                  ref={nameInputRef}
                  value={name()}
                  onInput={(e) => setName(e.currentTarget.value)}
                  placeholder={`${isDeck() ? "Deck" : "Folder"} name`}
                  maxLength={VALIDATION_RULES.NAME_MAX_LENGTH}
                  disabled={!isEditingName()}
                  class={`pr-12 focus-visible:ring focus-visible:ring-amber-500 ${!isEditingName() ? "bg-muted/50 cursor-default" : ""}`}
                />
                <div class="absolute top-1/2 right-2 flex -translate-y-1/2 gap-1">
                  <Show when={!isEditingName()}>
                    <Button
                      size="sm"
                      variant="ghost"
                      class="hover:bg-accent h-6 w-6 p-0 hover:cursor-pointer"
                      onClick={() => {
                        setIsEditingName(true)
                        // Focus the input after it becomes enabled
                        setTimeout(() => nameInputRef?.focus(), 0)
                      }}
                    >
                      <Edit class="h-3 w-3" />
                    </Button>
                  </Show>
                  <Show when={isEditingName()}>
                    <Button
                      size="sm"
                      variant="ghost"
                      class="h-6 w-6 p-0 hover:text-green-500"
                      onClick={() => setIsEditingName(false)}
                    >
                      <Check class="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      class="h-6 w-6 p-0 hover:text-red-500"
                      onClick={() => {
                        initializeForm() // Reset to original value
                        setIsEditingName(false)
                      }}
                    >
                      <X class="h-3 w-3" />
                    </Button>
                  </Show>
                </div>
              </div>
              <Show when={!nameValidation().isValid}>
                <p class="text-sm text-red-500">{nameValidation().error}</p>
              </Show>
            </TextField>

            {/* Location Field */}
            <div class="space-y-3">
              <label class="text-foreground text-sm font-medium">
                Location
              </label>

              <div class="bg-muted/20 border-card-foreground/70 space-y-3 rounded-lg border p-3 backdrop-blur-sm">
                <LocationBreadcrumb
                  currentPath={currentLocationPath()}
                  selectedPath={selectedLocationPath()}
                  hasChanges={hasChanges()}
                />

                <LocationSelector
                  selectedFolderId={selectedFolderId()}
                  selectedFolderName={selectedFolderName()}
                  folderTreeNodes={folderTreeNodes()}
                  editingType={isDeck() ? "deck" : "folder"}
                  onSelect={setSelectedFolderId}
                />
              </div>
            </div>

            {/* Delete Section */}
            <div class="border-card-foreground/70 border-t pt-6">
              <div class="border-destructive/30 bg-destructive/10 rounded-lg border p-4 backdrop-blur-xs">
                <div class="mb-3 flex items-center gap-3">
                  <div class="flex-shrink-0">
                    <Trash2 class="text-destructive h-5 w-5" />
                  </div>
                  <div>
                    <h4 class="text-foreground text-sm font-medium">
                      Delete {isDeck() ? "Deck" : "Folder"}
                    </h4>
                    <p class="text-muted-foreground mt-1 text-xs">
                      This action cannot be undone
                    </p>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setShowDeleteConfirm(true)}
                  class="w-full"
                >
                  Delete {isDeck() ? "Deck" : "Folder"}
                </Button>
              </div>
            </div>
          </div>
        </Show>

        {/* Delete Confirmation */}
        <Show when={showDeleteConfirm() && props.item}>
          <DeleteConfirmation
            item={props.item!}
            itemType={isDeck() ? "deck" : "folder"}
            folderContents={isFolder() ? folderContents() : undefined}
            deleteStrategy={deleteStrategy()}
            onStrategyChange={setDeleteStrategy}
            onCancel={() => setShowDeleteConfirm(false)}
            onConfirm={handleDelete}
          />
        </Show>

        <Show when={!showDeleteConfirm()}>
          <DialogFooter class="gap-3">
            <Button variant="outline" onClick={props.onClose} class="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!canSave()} class="flex-1">
              Save Changes
            </Button>
          </DialogFooter>
        </Show>
      </DialogContent>
    </Dialog>
  )
}
