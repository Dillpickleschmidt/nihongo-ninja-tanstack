// features/vocab-page/user-panel/UserDecksPanel.tsx
import { For, Show, onMount, createSignal } from "solid-js"
import { BookMarked, Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { UserDeckCard } from "./UserDeckCard"
import { FolderCard } from "./FolderCard"
import { FolderBreadcrumb } from "../shared/FolderBreadcrumb"
import { EditTransaction } from "../logic/edit-transaction"
import { CreateModal } from "../components/CreateModal"
import { cn } from "@/utils"
import type { NavTabId } from "../center-panel/CenterNavBar"
import { createFolderServerFn } from "@/features/supabase/db/folder-operations"
import { validateName, validateFolderNameUnique } from "../validation"

interface UserDecksPanelProps {
  userDecks: UserDeck[]
  folders: DeckFolder[]
  shareStatus: Record<number, boolean>
  onShareStatusChange: () => void
  // Folder view navigation
  currentViewFolderId: () => number | null
  viewBreadcrumbPath: () => DeckFolder[]
  currentViewContent: () => import("../types").FolderContent
  canNavigateUp: () => boolean
  setCurrentViewFolderId: (folderId: number | null) => void
  navigateToParentView: () => void

  onPlayDeck: (deck: UserDeck) => void
  newlyImportedDecks: Set<string>
  selectedUserDeck: UserDeck | null
  onSelectDeck: (deck: UserDeck) => void
  onDeselectDeck: () => void
  onEditDeck: (deck: UserDeck) => void
  onEditFolder: (folder: DeckFolder) => void
  onDeleteFolder: (transaction: EditTransaction) => void
  onRenameDeck: (deck: UserDeck, newName: string) => void
  onMoveDeck: (deck: UserDeck, targetFolderId: string) => void
  onCopyDeck?: (deck: UserDeck) => void
  onDeleteDeck?: (deck: UserDeck) => void
  onTabChange: (tabId: NavTabId) => void
  onRefetch?: () => void
  userId?: string
  panelRef?: HTMLDivElement
}

export function UserDecksPanel(props: UserDecksPanelProps) {
  const [showCreateModal, setShowCreateModal] = createSignal(false)

  const handleCreateFolder = async () => {
    const folderName = window.prompt("Enter folder name:")
    if (!folderName?.trim()) return

    const trimmedName = folderName.trim()
    const parentFolderId = props.currentViewFolderId()

    // Validate folder name
    const nameValidation = validateName(trimmedName)
    if (!nameValidation.isValid) {
      alert(`Invalid folder name: ${nameValidation.error}`)
      return
    }

    const uniqueValidation = validateFolderNameUnique(
      trimmedName,
      parentFolderId,
      props.folders,
    )

    if (!uniqueValidation.isValid) {
      alert(`Invalid folder name: ${uniqueValidation.error}`)
      return
    }

    try {
      await createFolderServerFn({
        data: {
          folder_name: trimmedName,
          parent_folder_id: parentFolderId,
        },
      })

      // Refresh data to show new folder
      if (props.onRefetch) {
        props.onRefetch()
      }
    } catch (error) {
      console.error("Failed to create folder:", error)
      alert(
        `Failed to create folder: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  onMount(() => {
    if (props.panelRef) {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const deckCard = target.closest(".deck-card")

        if (!deckCard && props.selectedUserDeck) {
          props.onDeselectDeck()
        }
      }

      props.panelRef.addEventListener("click", handleClick)

      return () => {
        props.panelRef?.removeEventListener("click", handleClick)
      }
    }
  })

  const currentFolderContent = () => props.currentViewContent()
  const hasContent = () => {
    const content = currentFolderContent()
    return content.folders.length > 0 || content.decks.length > 0
  }

  return (
    <>
      <div class="space-y-4">
        {/* Folder breadcrumb navigation */}
        <FolderBreadcrumb
          breadcrumbPath={props.viewBreadcrumbPath()}
          canNavigateUp={props.canNavigateUp()}
          onNavigateToFolder={props.setCurrentViewFolderId}
          onNavigateToParent={props.navigateToParentView}
          onNavigateToRoot={() => props.setCurrentViewFolderId(null)}
        />

        <div class="mb-4">
          <p class="text-muted-foreground text-sm">
            Your imported vocabulary decks. Import from built-in collection or
            organize into folders.
          </p>
        </div>

        <Show
          when={hasContent()}
          fallback={
            <div class="py-12 text-center">
              <BookMarked class="text-muted-foreground mx-auto mb-4 h-12 w-12" />
              <h3 class="mb-2 text-lg font-medium">No decks imported yet</h3>
              <p class="text-muted-foreground text-sm">
                Import decks from the built-in collection to get started
              </p>
              <div class="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCreateModal(true)}
                  class="gap-2"
                >
                  <Plus class="h-4 w-4" />
                  Create New
                </Button>
              </div>
            </div>
          }
        >
          <div class="space-y-3 pb-16">
            {/* Show folders first */}
            <For each={currentFolderContent().folders}>
              {(folder) => (
                <FolderCard
                  folder={folder}
                  allFolders={props.folders}
                  allDecks={props.userDecks}
                  onClick={props.setCurrentViewFolderId}
                  onEdit={props.onEditFolder}
                  onDelete={props.onDeleteFolder}
                />
              )}
            </For>

            {/* Show decks in current folder */}
            <For each={currentFolderContent().decks}>
              {(deck) => (
                <UserDeckCard
                  deck={deck}
                  onPlay={props.onPlayDeck}
                  isNewlyImported={props.newlyImportedDecks.has(
                    deck.original_deck_id || deck.deck_id.toString(),
                  )}
                  isSelected={props.selectedUserDeck?.deck_id === deck.deck_id}
                  onSelect={props.onSelectDeck}
                  onEdit={props.onEditDeck}
                  folders={props.folders}
                  onRename={props.onRenameDeck}
                  onMove={props.onMoveDeck}
                  onCopy={props.onCopyDeck}
                  onDelete={props.onDeleteDeck}
                  userId={props.userId}
                  isShared={!!props.shareStatus[deck.deck_id]}
                  onShareStatusChange={props.onShareStatusChange}
                  class="deck-card"
                />
              )}
            </For>
          </div>
        </Show>
      </div>

      {/* Fixed Create New Button - positioned above instruction bar */}
      <Show when={hasContent()}>
        <div class="absolute right-4 bottom-12 z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCreateModal(true)}
            class="bg-background/80 border-card-foreground/70 text-primary/90 gap-2 shadow-lg backdrop-blur-md"
          >
            <Plus class="h-4 w-4" />
            Create New
          </Button>
        </div>
      </Show>

      <div
        class={cn(
          "absolute right-0 bottom-0 z-10 w-96 px-4 py-2.5",
          "bg-background/60 border-card-foreground/70 border-t backdrop-blur-md",
        )}
      >
        <p class="text-muted-foreground text-center text-xs italic">
          Click on a deck to view it. Start practicing when you're ready.
        </p>
      </div>

      {/* Create Modal */}
      <CreateModal
        isOpen={showCreateModal()}
        onOpenChange={setShowCreateModal}
        onCreateDeck={() => {
          setShowCreateModal(false)
          props.onTabChange("deck-builder")
        }}
        onCreateFolder={() => {
          setShowCreateModal(false)
          handleCreateFolder()
        }}
      />
    </>
  )
}
