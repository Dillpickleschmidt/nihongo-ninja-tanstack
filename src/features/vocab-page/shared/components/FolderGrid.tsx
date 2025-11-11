import { For, Show } from "solid-js"
import { DeckCard } from "../../right-panel/DeckCard"
import { FolderCard } from "./FolderCard"
import type { EditTransaction } from "../../logic/edit-transaction"

interface FolderGridProps {
  folders: DeckFolder[]
  decks: UserDeck[]
  userId?: string
  onFolderClick?: (folderId: number) => void
  onSelectDeck?: (deck: UserDeck) => void
  onEditDeck?: (deck: UserDeck) => void
  onEditFolder?: (folder: DeckFolder) => void
  onMoveDeck?: (deck: UserDeck, targetFolderId: string) => void
  onRenameDeck?: (deck: UserDeck, newName: string) => void
  onCopyDeck?: (deck: UserDeck) => void
  onDeleteDeck?: (deck: UserDeck) => void
  onDeleteFolder?: (transaction: EditTransaction) => void
  onShareStatusChange?: () => void
  onPlayDeck?: (deck: UserDeck) => void
  class?: string
}

/**
 * Grid component for displaying both folders and decks
 * Reuses FolderCard and DeckCard components in a unified grid layout
 */
export function FolderGrid(props: FolderGridProps) {
  return (
    <Show
      when={props.folders.length > 0 || props.decks.length > 0}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">No folders or decks yet</p>
        </div>
      }
    >
      <div class={props.class || "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
        {/* Render folders */}
        <For each={props.folders}>
          {(folder) => (
            <FolderCard
              title={folder.folder_name}
              onClick={() => props.onFolderClick?.(folder.folder_id)}
              onEdit={
                props.onEditFolder
                  ? () => props.onEditFolder?.(folder)
                  : undefined
              }
              onDelete={
                props.onDeleteFolder
                  ? (transaction) => props.onDeleteFolder?.(transaction)
                  : undefined
              }
              folderData={folder}
              allFolders={props.folders}
              allDecks={props.decks}
            />
          )}
        </For>

        {/* Render decks */}
        <For each={props.decks}>
          {(deck) => (
            <DeckCard
              deck={deck}
              folders={props.folders}
              userId={props.userId}
              onSelect={props.onSelectDeck}
              onEdit={props.onEditDeck}
              onMove={props.onMoveDeck}
              onRename={props.onRenameDeck}
              onCopy={props.onCopyDeck}
              onDelete={props.onDeleteDeck}
              onShareStatusChange={props.onShareStatusChange}
              onPlay={props.onPlayDeck}
            />
          )}
        </For>
      </div>
    </Show>
  )
}
