// vocab-page/components/EditModal.tsx
import { createSignal, createMemo, createEffect, on, Show, For } from "solid-js"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput, TextFieldLabel } from "@/components/ui/text-field"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { TreeView, TreeNode } from "@/components/ui/tree-view"
import { Trash2, Folder, Home, ChevronDown } from "lucide-solid"
import { EditTransaction } from "@/features/vocab-page/logic/edit-transaction"
import { validateName, VALIDATION_RULES } from "@/features/vocab-page/logic/deck-edit-operations"

interface EditModalProps {
  item: UserDeck | DeckFolder | null
  isOpen: boolean
  folders: DeckFolder[]
  decks: UserDeck[]
  onClose: () => void
  onSave: (transaction: EditTransaction) => void
  onDelete: (transaction: EditTransaction) => void
}

type ItemType = 'deck' | 'folder'

export function EditModal(props: EditModalProps) {
  // Determine item type and properties
  const itemType = createMemo((): ItemType | null => {
    if (!props.item) return null
    return 'deck_id' in props.item ? 'deck' : 'folder'
  })

  const isDeck = createMemo(() => itemType() === 'deck')
  const isFolder = createMemo(() => itemType() === 'folder')

  // Form state
  const [name, setName] = createSignal("")
  const [selectedFolderId, setSelectedFolderId] = createSignal<string>("")
  const [deleteStrategy, setDeleteStrategy] = createSignal<'move-up' | 'delete-all'>('move-up')
  const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false)
  
  // Popover state
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const [tempSelectedFolderId, setTempSelectedFolderId] = createSignal<string>("")
  const [expandedFolderIds, setExpandedFolderIds] = createSignal<Set<string>>(new Set())

  // Initialize form when item changes
  const initializeForm = () => {
    console.log("initializeForm called")
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
    setTempSelectedFolderId(selectedFolderId())
    setShowDeleteConfirm(false)
    setExpandedFolderIds(new Set())
  }

  // Initialize when modal opens (only track isOpen and item, not other signals)
  createEffect(on(
    () => [props.isOpen, props.item],
    ([isOpen, item]) => {
      if (isOpen && item) {
        initializeForm()
      }
    }
  ))

  // Current location breadcrumb
  const currentLocationPath = createMemo(() => {
    if (!props.item) return []
    
    const path: DeckFolder[] = []
    let currentId: number | null = null

    if (isDeck()) {
      currentId = (props.item as UserDeck).folder_id
    } else {
      currentId = (props.item as DeckFolder).parent_folder_id
    }

    while (currentId !== null) {
      const folder = props.folders.find(f => f.folder_id === currentId)
      if (!folder) break
      path.unshift(folder)
      currentId = folder.parent_folder_id
    }

    return path
  })

  // Selected location breadcrumb
  const selectedLocationPath = createMemo(() => {
    const path: DeckFolder[] = []
    const selectedId = selectedFolderId()
    
    if (selectedId === "root") return path
    
    let currentId: number | null = parseInt(selectedId)
    while (currentId !== null) {
      const folder = props.folders.find(f => f.folder_id === currentId)
      if (!folder) break
      path.unshift(folder)
      currentId = folder.parent_folder_id
    }

    return path
  })

  // Available folders for selection (excluding self and descendants for folders)
  const availableFolders = createMemo(() => {
    let folders = props.folders

    // For folder editing, exclude self and descendants
    if (isFolder()) {
      const folderId = (props.item as DeckFolder).folder_id
      const excludeIds = new Set([folderId])
      
      // Add all descendants
      const addDescendants = (id: number) => {
        props.folders.forEach(f => {
          if (f.parent_folder_id === id && !excludeIds.has(f.folder_id)) {
            excludeIds.add(f.folder_id)
            addDescendants(f.folder_id)
          }
        })
      }
      addDescendants(folderId)

      folders = folders.filter(f => !excludeIds.has(f.folder_id))
    }

    return folders
  })

  // Convert folders to TreeNode format
  const folderTreeNodes = createMemo((): TreeNode[] => {
    const folders = availableFolders()
    
    const buildTreeNodes = (parentId: number | null): TreeNode[] => {
      return folders
        .filter(f => f.parent_folder_id === parentId)
        .sort((a, b) => a.folder_name.localeCompare(b.folder_name))
        .map(folder => ({
          id: folder.folder_id.toString(),
          label: folder.folder_name,
          data: folder,
          children: buildTreeNodes(folder.folder_id)
        }))
    }
    
    return buildTreeNodes(null)
  })

  // Tree handlers
  const handleToggleFolder = (id: string) => {
    setExpandedFolderIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleSelectTreeNode = (id: string, node: TreeNode) => {
    console.log("Tree node selected:", id, node.label)
    setTempSelectedFolderId(id)
  }

  // Popover handlers
  const handleSelectFolder = () => {
    console.log("Select button clicked, temp:", tempSelectedFolderId(), "current:", selectedFolderId())
    setSelectedFolderId(tempSelectedFolderId())
    setIsPopoverOpen(false)
    console.log("After update, selected:", selectedFolderId())
  }

  const handleCancelSelection = () => {
    setTempSelectedFolderId(selectedFolderId())
    setIsPopoverOpen(false)
  }

  // Get selected folder display name
  const selectedFolderName = createMemo(() => {
    const id = selectedFolderId()
    if (id === "root") return "Root"
    const folder = props.folders.find(f => f.folder_id.toString() === id)
    return folder?.folder_name || "Unknown"
  })

  // Validation
  const nameValidation = createMemo(() => {
    const validation = validateName(name())
    if (!validation.isValid) return validation

    // Check for duplicates
    if (!props.item) return validation

    if (isDeck()) {
      const deck = props.item as UserDeck
      const targetFolderId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      const duplicateDeck = props.decks.find(d => 
        d.deck_name.trim().toLowerCase() === name().trim().toLowerCase() &&
        d.folder_id === targetFolderId &&
        d.deck_id !== deck.deck_id
      )
      if (duplicateDeck) {
        return { isValid: false, error: "A deck with this name already exists in this folder" }
      }
    } else {
      const folder = props.item as DeckFolder
      const targetParentId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      const duplicateFolder = props.folders.find(f => 
        f.folder_name.trim().toLowerCase() === name().trim().toLowerCase() &&
        f.parent_folder_id === targetParentId &&
        f.folder_id !== folder.folder_id
      )
      if (duplicateFolder) {
        return { isValid: false, error: "A folder with this name already exists in this location" }
      }
    }

    return validation
  })

  const hasChanges = createMemo(() => {
    if (!props.item) return false

    if (isDeck()) {
      const deck = props.item as UserDeck
      const targetFolderId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      return name() !== deck.deck_name || targetFolderId !== deck.folder_id
    } else {
      const folder = props.item as DeckFolder
      const targetParentId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      return name() !== folder.folder_name || targetParentId !== folder.parent_folder_id
    }
  })

  const canSave = createMemo(() => nameValidation().isValid && hasChanges())

  // Get folder contents for delete confirmation
  const folderContents = createMemo(() => {
    if (!isFolder() || !props.item) return { decks: 0, folders: 0 }

    const folderId = (props.item as DeckFolder).folder_id
    const descendants = new Set([folderId])
    
    // Add all descendants
    const addDescendants = (id: number) => {
      props.folders.forEach(f => {
        if (f.parent_folder_id === id && !descendants.has(f.folder_id)) {
          descendants.add(f.folder_id)
          addDescendants(f.folder_id)
        }
      })
    }
    addDescendants(folderId)

    const decks = props.decks.filter(d => d.folder_id && descendants.has(d.folder_id)).length
    const folders = descendants.size - 1 // Exclude the folder itself

    return { decks, folders }
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
      
      const targetFolderId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      if (targetFolderId !== deck.folder_id) {
        updates.folderId = targetFolderId
      }

      transaction.add({
        type: 'update-deck',
        deckId: deck.deck_id,
        updates
      })
    } else {
      const folder = props.item as DeckFolder
      const updates: { name?: string; parentId?: number | null } = {}
      
      if (name() !== folder.folder_name) {
        updates.name = name().trim()
      }
      
      const targetParentId = selectedFolderId() === "root" ? null : parseInt(selectedFolderId())
      if (targetParentId !== folder.parent_folder_id) {
        updates.parentId = targetParentId
      }

      transaction.add({
        type: 'update-folder',
        folderId: folder.folder_id,
        updates
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
        type: 'delete-deck',
        deckId: deck.deck_id
      })
    } else {
      const folder = props.item as DeckFolder
      transaction.add({
        type: 'delete-folder',
        folderId: folder.folder_id,
        strategy: deleteStrategy()
      })
    }

    props.onDelete(transaction)
    props.onClose()
  }

  const getTitle = () => {
    if (!props.item) return "Edit"
    if (isDeck()) return `Edit "${(props.item as UserDeck).deck_name}"`
    return `Edit "${(props.item as DeckFolder).folder_name}"`
  }

  return (
    <Dialog open={props.isOpen} onOpenChange={(open) => !open && props.onClose()}>
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>

        <Show when={!showDeleteConfirm()}>
          <div class="space-y-4">
            {/* Name Field */}
            <TextField validationState={nameValidation().isValid ? "valid" : "invalid"}>
              <TextFieldLabel>Name</TextFieldLabel>
              <TextFieldInput
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
                placeholder={`${isDeck() ? 'Deck' : 'Folder'} name`}
                maxLength={VALIDATION_RULES.NAME_MAX_LENGTH}
              />
              <Show when={!nameValidation().isValid}>
                <p class="text-sm text-red-500">{nameValidation().error}</p>
              </Show>
            </TextField>

            {/* Location Field */}
            <div class="space-y-2">
              <label class="text-sm font-medium leading-none">Location</label>
              
              {/* Current Location */}
              <div class="text-sm text-muted-foreground flex items-center gap-1">
                <span>Current:</span>
                <Home class="w-4 h-4" />
                <Show when={currentLocationPath().length === 0} fallback={
                  <For each={currentLocationPath()}>
                    {(folder, index) => (
                      <>
                        <span>{folder.folder_name}</span>
                        <Show when={index() < currentLocationPath().length - 1}>
                          <span>›</span>
                        </Show>
                      </>
                    )}
                  </For>
                }>
                  <span>Root</span>
                </Show>
              </div>

              {/* Debug info */}
              <div class="text-xs text-gray-500">
                Debug: selected="{selectedFolderId()}", temp="{tempSelectedFolderId()}", hasChanges={hasChanges().toString()}, canSave={canSave().toString()}
              </div>

              {/* New Location (if different) */}
              <Show when={hasChanges()}>
                <div class="text-sm text-blue-600 flex items-center gap-1">
                  <span>New:</span>
                  <Home class="w-4 h-4" />
                  <Show when={selectedLocationPath().length === 0} fallback={
                    <For each={selectedLocationPath()}>
                      {(folder, index) => (
                        <>
                          <span>{folder.folder_name}</span>
                          <Show when={index() < selectedLocationPath().length - 1}>
                            <span>›</span>
                          </Show>
                        </>
                      )}
                    </For>
                  }>
                    <span>Root</span>
                  </Show>
                </div>
              </Show>

              {/* Folder Picker Popover */}
              <Popover open={isPopoverOpen()} onOpenChange={(open) => {
                if (open) {
                  setTempSelectedFolderId(selectedFolderId())
                }
                setIsPopoverOpen(open)
              }}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    class="w-full justify-start h-10 font-normal"
                  >
                    <Show when={selectedFolderId() === "root"} fallback={
                      <>
                        <Folder class="w-4 h-4 mr-2" />
                        {selectedFolderName()}
                      </>
                    }>
                      <Home class="w-4 h-4 mr-2" />
                      Root
                    </Show>
                    <ChevronDown class="w-4 h-4 ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-80 p-0">
                  <div class="p-3 space-y-1 max-h-64 overflow-y-auto">
                    {/* Root Option */}
                    <div
                      class={`flex items-center px-2 py-1 rounded-sm cursor-pointer hover:bg-accent text-xs ${
                        tempSelectedFolderId() === "root" ? "ring-1 ring-border bg-accent" : ""
                      }`}
                      onClick={() => {
                        console.log("Root selected")
                        setTempSelectedFolderId("root")
                      }}
                    >
                      <div class="w-4 h-4 mr-1" />
                      <Home class="w-4 h-4 mr-2 flex-shrink-0" />
                      <span class="truncate">Root</span>
                    </div>
                    
                    {/* Folder Tree */}
                    <TreeView
                      nodes={folderTreeNodes()}
                      selectedId={tempSelectedFolderId()}
                      onSelect={handleSelectTreeNode}
                      expandedIds={expandedFolderIds()}
                      onToggle={handleToggleFolder}
                      renderIcon={(node) => <Folder class="w-4 h-4 mr-2 flex-shrink-0" />}
                      renderLabel={(node) => <span class="truncate flex-1">{node.label}</span>}
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div class="flex justify-end gap-2 p-3 border-t">
                    <Button variant="outline" size="sm" onClick={handleCancelSelection}>
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleSelectFolder}
                      disabled={tempSelectedFolderId() === selectedFolderId()}
                    >
                      Select
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Delete Section */}
            <div class="pt-4 border-t">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setShowDeleteConfirm(true)}
                class="w-full"
              >
                <Trash2 class="w-4 h-4 mr-2" />
                Delete {isDeck() ? 'Deck' : 'Folder'}
              </Button>
            </div>
          </div>
        </Show>

        {/* Delete Confirmation */}
        <Show when={showDeleteConfirm()}>
          <div class="space-y-4">
            <Show when={isDeck()} fallback={
              <div class="space-y-4">
                <p>Delete "{(props.item as DeckFolder)?.folder_name}"?</p>
                
                <Show when={folderContents().decks > 0 || folderContents().folders > 0}>
                  <div class="bg-muted p-3 rounded">
                    <p class="text-sm">
                      This folder contains <strong>{folderContents().decks} deck{folderContents().decks !== 1 ? 's' : ''}</strong>
                      <Show when={folderContents().folders > 0}>
                        {" "}and <strong>{folderContents().folders} subfolder{folderContents().folders !== 1 ? 's' : ''}</strong>
                      </Show>
                      . What should happen to them?
                    </p>
                    
                    <div class="mt-3 space-y-2">
                      <label class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="deleteStrategy"
                          checked={deleteStrategy() === 'move-up'}
                          onChange={() => setDeleteStrategy('move-up')}
                        />
                        <span class="text-sm">Move items to parent folder</span>
                      </label>
                      
                      <label class="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="deleteStrategy"
                          checked={deleteStrategy() === 'delete-all'}
                          onChange={() => setDeleteStrategy('delete-all')}
                        />
                        <span class="text-sm">Delete all items (cannot be undone)</span>
                      </label>
                    </div>
                  </div>
                </Show>
              </div>
            }>
              <p>Delete "{(props.item as UserDeck)?.deck_name}"? This action cannot be undone.</p>
            </Show>
          </div>
        </Show>

        <DialogFooter>
          <Show when={!showDeleteConfirm()} fallback={
            <>
              <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete {isDeck() ? 'Deck' : 'Folder'}
              </Button>
            </>
          }>
            <Button variant="outline" onClick={props.onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!canSave()}>
              Save Changes
            </Button>
          </Show>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}