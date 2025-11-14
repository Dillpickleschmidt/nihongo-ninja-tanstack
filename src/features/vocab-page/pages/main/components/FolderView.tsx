import { For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { ViewContainer } from "../../../shared/components/ViewContainer"
import { GridContainer } from "../../../shared/components/GridContainer"
import { FolderCard } from "../../../shared/components/FolderCard"
import { DeckCard } from "../../../right-panel/DeckCard"
import { getFolderContents, findFolder } from "../../../logic/folder-utils"
import { buildFolderBreadcrumbs } from "../../../utils/folderTreeUtils"

interface FolderViewProps {
  folderId: number | null // null for root level
  folders: DeckFolder[]
  decks: UserDeck[]
  onSelectDeck: (deck: UserDeck) => void
}

/**
 * View component for displaying folder contents
 * Shows all subfolders and decks at the current folder level
 */
export function FolderView(props: FolderViewProps) {
  const navigate = useNavigate()

  const folderContents = () =>
    getFolderContents(props.folders, props.decks, props.folderId)

  const breadcrumbs = () =>
    buildFolderBreadcrumbs(props.folders, props.folderId)

  const currentFolderName = () => {
    if (props.folderId === null) return "Vocabulary"
    const folder = findFolder(props.folders, props.folderId)
    return folder?.folder_name || "Folder"
  }

  const handleFolderClick = (folderId: number) => {
    navigate({ to: `/vocab/${folderId}` })
  }

  const combinedItems = () => [
    ...folderContents().folders,
    ...folderContents().decks,
  ]

  return (
    <ViewContainer breadcrumbs={breadcrumbs()} title={currentFolderName()}>
      <GridContainer
        items={combinedItems}
        emptyMessage="No folders or decks yet"
      >
        {/* Render folders */}
        <For each={folderContents().folders}>
          {(folder) => (
            <FolderCard
              title={folder.folder_name}
              onClick={() => handleFolderClick(folder.folder_id)}
              folderData={folder}
            />
          )}
        </For>

        {/* Render decks */}
        <For each={folderContents().decks}>
          {(deck) => <DeckCard deck={deck} onSelect={props.onSelectDeck} />}
        </For>
      </GridContainer>
    </ViewContainer>
  )
}
