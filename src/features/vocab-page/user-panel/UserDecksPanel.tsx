// features/vocab-page/user-panel/UserDecksPanel.tsx
import { For, Show, onMount } from "solid-js"
import { BookMarked } from "lucide-solid"
import { UserDeckCard } from "./UserDeckCard"
import { FolderCard } from "./FolderCard"
import { FolderBreadcrumb } from "../shared/FolderBreadcrumb"
import type { UseFolderNavigationResult } from "../hooks/useFolderNavigation"
import { cn } from "@/utils"

interface UserDecksPanelProps {
  userDecks: UserDeck[]
  folders: DeckFolder[]
  folderNavigation: UseFolderNavigationResult
  onPlayDeck: (deck: UserDeck) => void
  newlyImportedDecks: Set<string>
  selectedUserDeck: UserDeck | null
  onSelectDeck: (deck: UserDeck) => void
  onDeselectDeck: () => void
  onEditDeck: (deck: UserDeck) => void
  onEditFolder: (folder: DeckFolder) => void
  panelRef?: HTMLDivElement
  isLoading?: boolean
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

  const currentFolderContent = () =>
    props.folderNavigation.currentFolderContent()
  const hasContent = () => {
    const content = currentFolderContent()
    return content.folders.length > 0 || content.decks.length > 0
  }

  return (
    <>
      <div class="space-y-4">
        {/* Folder breadcrumb navigation */}
        <FolderBreadcrumb
          breadcrumbPath={props.folderNavigation.breadcrumbPath()}
          canNavigateUp={props.folderNavigation.canNavigateUp()}
          onNavigateToFolder={props.folderNavigation.navigateToFolder}
          onNavigateToParent={props.folderNavigation.navigateToParent}
          onNavigateToRoot={props.folderNavigation.navigateToRoot}
        />

        <div class="mb-4">
          <p class="text-muted-foreground text-sm">
            Your imported vocabulary decks. Import from built-in collection or
            organize into folders.
          </p>
        </div>

        <Show
          when={!props.isLoading}
          fallback={
            <div class="py-12 text-center">
              <div class="text-muted-foreground mx-auto mb-4 h-12 w-12 animate-spin">
                ⏳
              </div>
              <h3 class="mb-2 text-lg font-medium">Loading your decks...</h3>
              <p class="text-muted-foreground text-sm">
                Fetching your folders and imported decks
              </p>
            </div>
          }
        >
          <Show
            when={hasContent()}
            fallback={
              <div class="py-12 text-center">
                <BookMarked class="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                <h3 class="mb-2 text-lg font-medium">
                  No decks imported yet
                </h3>
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
                  onClick={props.folderNavigation.navigateToFolder}
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
        </Show>
      </div>
      <div
        class={cn(
          "border-border absolute right-0 bottom-0 z-10 w-96 border-t px-4 py-2.5",
          "bg-card/95 backdrop-blur-sm",
        )}
      >
        <p class="text-muted-foreground text-center text-xs italic">
          Click on a deck to view it. Start practicing when you're ready.
        </p>
      </div>
    </>
  )
}
