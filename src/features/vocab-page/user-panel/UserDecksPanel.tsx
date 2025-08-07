// features/vocab-page/user-panel/UserDecksPanel.tsx
import { For, Show, onMount } from "solid-js"
import { BookMarked } from "lucide-solid"
import { UserDeckCard } from "./UserDeckCard"
import { FolderCard } from "./FolderCard"
import { FolderBreadcrumb } from "../shared/FolderBreadcrumb"
import { cn } from "@/utils"

interface UserDecksPanelProps {
  userDecks: UserDeck[]
  folders: DeckFolder[]
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
  panelRef?: HTMLDivElement
}

export function UserDecksPanel(props: UserDecksPanelProps) {
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
                    deck.deck_id.toString(),
                  )}
                  isSelected={props.selectedUserDeck?.deck_id === deck.deck_id}
                  onSelect={props.onSelectDeck}
                  onEdit={props.onEditDeck}
                  class="deck-card"
                />
              )}
            </For>
          </div>
        </Show>
      </div>
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
    </>
  )
}
