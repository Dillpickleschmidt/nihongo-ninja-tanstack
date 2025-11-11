import { useNavigate } from "@tanstack/solid-router"
import { FolderGrid } from "../../../shared/components/FolderGrid"
import { ViewContainer } from "../../../shared/components/ViewContainer"
import { getFolderContents, findFolder } from "../../../logic/folder-utils"
import { buildBreadcrumbPath } from "../../../utils/folderTreeUtils"

interface FolderViewProps {
  folderId: number | null // null for root level
  folders: DeckFolder[]
  decks: UserDeck[]
  userId?: string
  onSelectDeck?: (deck: UserDeck) => void
  onShareStatusChange?: () => void
}

/**
 * View component for displaying folder contents
 * Shows all subfolders and decks at the current folder level
 */
export function FolderView(props: FolderViewProps) {
  const navigate = useNavigate()

  const folderContents = () => getFolderContents(props.folders, props.decks, props.folderId)

  const breadcrumbs = () => {
    if (props.folderId === null) {
      return [{ label: "Vocabulary", href: "/vocab" }]
    }
    const path = buildBreadcrumbPath(props.folders, props.folderId)
    return [
      { label: "Vocabulary", href: "/vocab" },
      ...path.map((folder) => ({
        label: folder.folder_name,
        href: `/vocab/${folder.folder_id}`,
      }))
    ]
  }

  const currentFolderName = () => {
    if (props.folderId === null) return "Vocabulary"
    const folder = findFolder(props.folders, props.folderId)
    return folder?.folder_name || "Folder"
  }

  const handleFolderClick = (folderId: number) => {
    navigate({ to: `/vocab/${folderId}` })
  }

  return (
    <ViewContainer breadcrumbs={breadcrumbs()} title={currentFolderName()}>
      <FolderGrid
        folders={folderContents().folders}
        decks={folderContents().decks}
        userId={props.userId}
        onFolderClick={handleFolderClick}
        onSelectDeck={props.onSelectDeck}
        onShareStatusChange={props.onShareStatusChange}
      />
    </ViewContainer>
  )
}
