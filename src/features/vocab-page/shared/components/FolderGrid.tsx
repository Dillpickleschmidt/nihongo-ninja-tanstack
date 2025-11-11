import { For } from "solid-js"
import { DeckCard } from "../../right-panel/DeckCard"
import { FolderCard } from "./FolderCard"
import { GridContainer } from "./GridContainer"
import type { EditTransaction } from "../../logic/edit-transaction"

interface FolderGridProps {
  folders: DeckFolder[]
  decks: UserDeck[]
  userId?: string
  onFolderClick?: (folderId: number) => void
  onSelectDeck?: (deck: UserDeck) => void
  onEditFolder?: (folder: DeckFolder) => void
  onDeleteFolder?: (transaction: EditTransaction) => void
  onShareStatusChange?: () => void
}

/**
 * Grid component for displaying both folders and decks
 * Reuses FolderCard and DeckCard components in a unified grid layout
 */
export function FolderGrid(props: FolderGridProps) {
  const combinedItems = () => [...props.folders, ...props.decks]

  return (
    <GridContainer
      items={combinedItems}
      emptyMessage="No folders or decks yet"
    >
      {/* Render folders */}
      <For each={props.folders}>
        {(folder) => (
          <FolderCard
            title={folder.folder_name}
            onClick={() => props.onFolderClick?.(folder.folder_id)}
            folderData={folder}
          />
        )}
      </For>

      {/* Render decks */}
      <For each={props.decks}>
        {(deck) => (
          <DeckCard
            deck={deck}
            userId={props.userId}
            onSelect={props.onSelectDeck}
            onShareStatusChange={props.onShareStatusChange}
          />
        )}
      </For>
    </GridContainer>
  )
}
