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
import { Trash2, SquarePen, Check, X } from "lucide-solid"
import {
  FolderNameSchema,
  validateFolderNameUnique,
  validateNoCircularReference,
} from "../../validation/deck-folder-validation"
import { NAME_MAX_LENGTH } from "../../validation/constants"
import { useFolderTree } from "../../hooks/useFolderTree"
import { LocationSelector } from "./LocationSelector"
import { DeleteConfirmation } from "./DeleteConfirmation"
import { useVocab } from "../../context/VocabContext"

export function FolderEditModal() {
  const ctx = useVocab()

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

  // Derived state
  const folder = () => ctx.editingFolder()
  const isOpen = () => !!folder()

  // Initialize form when folder changes
  const initializeForm = () => {
    const f = folder()
    if (!f) return

    setName(f.folderName)
    setSelectedFolderId(f.parentFolderId || "root")
    setShowDeleteConfirm(false)
    setIsEditingName(false)
    setShowValidation(false)
  }

  // Initialize when modal opens
  createEffect(
    on(folder, (f) => {
      if (f) {
        initializeForm()
      }
    }),
  )

  // Get user folders only for validation
  const userFolders = createMemo(() =>
    ctx.folders().filter((f) => f.source === "user"),
  )

  // Validation
  const nameValidation = createMemo(() => {
    const f = folder()
    if (!f) return { isValid: true, error: "" }

    // Check Zod schema first
    const schemaResult = FolderNameSchema.safeParse(name())
    if (!schemaResult.success) {
      return { isValid: false, error: schemaResult.error.issues[0].message }
    }

    // Check uniqueness within the target parent folder
    const targetParentId =
      selectedFolderId() === "root" ? undefined : selectedFolderId()

    const uniqueResult = validateFolderNameUnique(
      name(),
      userFolders(),
      targetParentId,
      f.id,
    )
    if (!uniqueResult.isValid) {
      return uniqueResult
    }

    // Check for circular reference when moving
    if (targetParentId && targetParentId !== f.parentFolderId) {
      const circularResult = validateNoCircularReference(
        f.id,
        targetParentId,
        userFolders(),
      )
      if (!circularResult.isValid) {
        return circularResult
      }
    }

    return { isValid: true, error: "" }
  })

  // Stable validation state that only changes on blur/submit
  const stableValidationState = createMemo(() => {
    if (!showValidation()) return "valid"
    return nameValidation().isValid ? "valid" : "invalid"
  })

  // Check if there are changes
  const hasChanges = createMemo(() => {
    const f = folder()
    if (!f) return false

    const targetParentId =
      selectedFolderId() === "root" ? undefined : selectedFolderId()
    const nameChanged = name() !== f.folderName
    const locationChanged = targetParentId !== f.parentFolderId
    return nameChanged || locationChanged
  })

  const canSave = () => nameValidation().isValid && hasChanges()

  // Folder tree and contents
  const folderTree = createMemo(() => {
    const f = folder()
    if (!f)
      return { folderTreeNodes: [], folderContents: { decks: 0, folders: 0 } }

    const tree = useFolderTree({
      folders: ctx.folders(),
      decks: ctx.decks(),
      item: f,
    })

    return {
      folderTreeNodes: tree.folderTreeNodes(),
      folderContents: tree.folderContents(),
    }
  })

  // Get selected folder display name
  const selectedFolderName = () => {
    const id = selectedFolderId()
    if (id === "root") return "Root"
    const f = ctx.folders().find((f) => f.id === id)
    return f?.folderName || "Unknown"
  }

  // Event handlers
  const handleClose = () => {
    ctx.setEditingFolder(null)
  }

  const handleSave = async () => {
    // Check for unsaved name changes
    if (isEditingName()) {
      const shouldApply = window.confirm(
        "You have unsaved name changes! Would you like to apply them?",
      )
      if (!shouldApply) {
        return
      }
      setIsEditingName(false)
    }

    setShowValidation(true)

    const f = folder()
    if (!canSave() || !f) return

    const updates: { folderName?: string; parentFolderId?: string | null } = {}

    if (name() !== f.folderName) {
      updates.folderName = name().trim()
    }

    const targetParentId =
      selectedFolderId() === "root" ? null : selectedFolderId()
    if (targetParentId !== (f.parentFolderId || null)) {
      updates.parentFolderId = targetParentId
    }

    await ctx.updateFolder(f.id, updates)
    handleClose()
  }

  const handleDelete = async () => {
    const f = folder()
    if (!f) return

    await ctx.deleteFolder(f.id, deleteStrategy())
    handleClose()
  }

  const getTitle = () => {
    const f = folder()
    if (!f) return "Edit Folder"
    return `Edit ${f.folderName}`
  }

  return (
    <Dialog open={isOpen()} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>

        <Show when={!showDeleteConfirm()}>
          <div class="space-y-6">
            {/* Name Field */}
            <TextField
              validationState={stableValidationState() as "valid" | "invalid"}
            >
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
                  maxLength={NAME_MAX_LENGTH}
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
                        setTimeout(() => nameInputRef?.focus(), 0)
                      }}
                    >
                      <SquarePen class="h-3 w-3" />
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
                        initializeForm()
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
                  folderTreeNodes={folderTree().folderTreeNodes}
                  editingType="folder"
                  onSelect={setSelectedFolderId}
                />
              </div>
            </div>

            {/* Delete Section */}
            <div class="border-card-foreground/70 border-t pt-6">
              <div class="border-destructive/30 bg-destructive/10 rounded-lg border p-4 backdrop-blur-xs">
                <div class="mb-3 flex items-center gap-3">
                  <div class="shrink-0">
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
        <Show when={showDeleteConfirm() && folder()}>
          <DeleteConfirmation
            item={folder()!}
            itemType="folder"
            folderContents={folderTree().folderContents}
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
              onClick={handleClose}
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
