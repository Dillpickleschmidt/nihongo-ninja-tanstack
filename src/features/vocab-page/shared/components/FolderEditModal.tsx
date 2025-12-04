// vocab-page/components/FolderEditModal.tsx
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
import {
  VALIDATION_RULES,
  validateFolderComplete,
} from "@/features/vocab-page/validation"
import {
  buildFolderPath,
  getCurrentFolderId,
} from "@/features/vocab-page/logic/folder-utils"
import { useFolderTree } from "@/features/vocab-page/hooks/useFolderTree"
import { LocationSelector } from "./LocationSelector"
import { DeleteConfirmation } from "./DeleteConfirmation"

interface FolderEditModalProps {
  folder: DeckFolder | null
  isOpen: boolean
  folders: DeckFolder[]
  decks: UserDeck[]
  onClose: () => void
  onSave: (transaction: EditTransaction) => void
  onDelete: (transaction: EditTransaction) => void
}

export function FolderEditModal(props: FolderEditModalProps) {
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
  const [showValidation, setShowValidation] = createSignal(false)

  // Initialize form when folder changes
  const initializeForm = () => {
    if (!props.folder) return

    const folder = props.folder
    setName(folder.folder_name)
    setSelectedFolderId(folder.parent_folder_id?.toString() || "root")
    setShowDeleteConfirm(false)
    setIsEditingName(false)
    setShowValidation(false)
  }

  // Initialize when modal opens (only track isOpen and folder, not other signals)
  createEffect(
    on(
      () => [props.isOpen, props.folder],
      ([isOpen, folder]) => {
        if (isOpen && folder) {
          initializeForm()
        }
      },
    ),
  )

  // Validation - only computed when needed
  const nameValidation = createMemo(() => {
    if (!props.folder) return { isValid: true, error: "" }

    const targetParentId =
      selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
    return validateFolderComplete(
      name(),
      targetParentId,
      props.folder.folder_id,
      props.folders,
      props.folder.folder_id,
    )
  })

  // Stable validation state that only changes on blur/submit
  const stableValidationState = createMemo(() => {
    if (!showValidation()) return "valid"
    return nameValidation().isValid ? "valid" : "invalid"
  })

  // Check if there are changes
  const hasChanges = createMemo(() => {
    if (!props.folder) return false

    const folder = props.folder
    const targetParentId =
      selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
    const nameChanged = name() !== folder.folder_name
    const locationChanged = targetParentId !== folder.parent_folder_id
    return nameChanged || locationChanged
  })

  const canSave = () => {
    return nameValidation().isValid && hasChanges()
  }

  // Folder tree and contents
  const folderData = createMemo(() => {
    if (!props.folder)
      return { folderTreeNodes: [], folderContents: { decks: 0, folders: 0 } }

    const folderTree = useFolderTree({
      folders: props.folders,
      decks: props.decks,
      item: props.folder,
    })

    return {
      folderTreeNodes: folderTree.folderTreeNodes(),
      folderContents: folderTree.folderContents(),
    }
  })

  // Current and selected location paths
  const currentLocationPath = createMemo(() => {
    if (!props.folder) return []
    return buildFolderPath(getCurrentFolderId(props.folder), props.folders)
  })

  const selectedLocationPath = createMemo(() => {
    return buildFolderPath(selectedFolderId(), props.folders)
  })

  // Get selected folder display name
  const selectedFolderName = () => {
    const id = selectedFolderId()
    if (id === "root") return "Root"
    const folder = props.folders.find((f) => f.folder_id.toString() === id)
    return folder?.folder_name || "Unknown"
  }

  // Event handlers
  const handleSave = () => {
    // Check for unsaved name changes
    if (isEditingName()) {
      const shouldApply = window.confirm(
        "You have unsaved name changes! Would you like to apply them?",
      )
      if (!shouldApply) {
        return // Cancel save operation
      }
      setIsEditingName(false) // Apply name changes
    }

    setShowValidation(true)

    if (!canSave() || !props.folder) return

    const transaction = new EditTransaction()
    const folder = props.folder
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

    props.onSave(transaction)
    props.onClose()
  }

  const handleDelete = () => {
    if (!props.folder) return

    const transaction = new EditTransaction()
    const folder = props.folder

    transaction.add({
      type: "delete-folder",
      folderId: folder.folder_id,
      strategy: deleteStrategy(),
    })

    props.onDelete(transaction)
    props.onClose()
  }

  const getTitle = () => {
    if (!props.folder) return "Edit Folder"
    return `Edit ${props.folder.folder_name}`
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
            <TextField validationState={stableValidationState()}>
              <TextFieldLabel>Name</TextFieldLabel>
              <div class="relative">
                <TextFieldInput
                  ref={nameInputRef}
                  value={name()}
                  onInput={(e) => setName(e.currentTarget.value)}
                  onBlur={() => setShowValidation(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && isEditingName()) {
                      setIsEditingName(false)
                    }
                  }}
                  placeholder="Folder name"
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
                      class="h-6 w-6 p-0 hover:text-green-500 focus-visible:text-green-500"
                      onClick={() => setIsEditingName(false)}
                    >
                      <Check class="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      class="h-6 w-6 p-0 hover:text-red-500 focus-visible:text-red-500"
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
              <Show when={showValidation() && !nameValidation().isValid}>
                <p class="text-sm text-red-500">{nameValidation().error}</p>
              </Show>
            </TextField>

            {/* Location Field */}
            <div class="space-y-3">
              <label class="text-foreground text-sm font-medium">
                Location
              </label>

              <div class="bg-muted/20 border-card-foreground/70 space-y-3 rounded-lg border p-3 backdrop-blur-sm">
                <LocationSelector
                  selectedFolderId={selectedFolderId()}
                  selectedFolderName={selectedFolderName()}
                  folderTreeNodes={folderData().folderTreeNodes}
                  editingType="folder"
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
                      Delete Folder
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
                  class="w-full hover:cursor-pointer"
                >
                  Delete Folder
                </Button>
              </div>
            </div>
          </div>
        </Show>

        {/* Delete Confirmation */}
        <Show when={showDeleteConfirm() && props.folder}>
          <DeleteConfirmation
            item={props.folder!}
            itemType="folder"
            folderContents={folderData().folderContents}
            deleteStrategy={deleteStrategy()}
            onStrategyChange={setDeleteStrategy}
            onCancel={() => setShowDeleteConfirm(false)}
            onConfirm={handleDelete}
          />
        </Show>

        <Show when={!showDeleteConfirm()}>
          <DialogFooter class="gap-3">
            <Button
              variant="outline"
              onClick={props.onClose}
              class="flex-1 hover:cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!canSave()}
              class="flex-1 hover:cursor-pointer"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </Show>
      </DialogContent>
    </Dialog>
  )
}
