import { useNavigate } from "@tanstack/solid-router"
import { FolderGrid } from "../../../shared/components/FolderGrid"
import { VocabBreadcrumb } from "./VocabBreadcrumb"
import {
  getFolderContents,
  buildBreadcrumbPath,
  findFolder,
} from "../../../logic/folder-utils"

interface FolderViewProps {
  folderId: number | null // null for root level
  folders: DeckFolder[]
  decks: UserDeck[]
  userId?: string
  onSelectDeck?: (deck: UserDeck) => void
  onEditDeck?: (deck: UserDeck) => void
  onMoveDeck?: (deck: UserDeck, targetFolderId: string) => void
  onRenameDeck?: (deck: UserDeck, newName: string) => void
  onCopyDeck?: (deck: UserDeck) => void
  onDeleteDeck?: (deck: UserDeck) => void
  onShareStatusChange?: () => void
}

/**
 * View component for displaying folder contents
 * Shows all subfolders and decks at the current folder level
 */
export function FolderView(props: FolderViewProps) {
  const navigate = useNavigate()

  // Get contents of current folder
  const folderContents = () => {
    return getFolderContents(props.folders, props.decks, props.folderId)
  }

  // Build breadcrumb path
  const breadcrumbs = () => {
    const path = buildBreadcrumbPath(props.folders, props.folderId)
    return [
      { label: "Vocabulary", href: "/vocab" },
      ...path.map((folder) => ({
        label: folder.folder_name,
        href: `/vocab/${folder.folder_id}`,
      })),
    ]
  }

  // Get current folder name for display
  const currentFolderName = () => {
    if (props.folderId === null) return "Vocabulary"
    const folder = findFolder(props.folders, props.folderId)
    return folder?.folder_name || "Folder"
  }

  const handleFolderClick = (folderId: number) => {
    navigate({ to: `/vocab/${folderId}` })
  }

  const handleDeckClick = (deck: UserDeck) => {
    // Navigate to deck view with full folder path
    const path = buildBreadcrumbPath(props.folders, props.folderId)
    const folderPath = path.map((f) => f.folder_id).join("/")
    const deckPath = folderPath
      ? `/vocab/${folderPath}/${deck.deck_id}`
      : `/vocab/${deck.deck_id}`
    navigate({ to: deckPath })
  }

  const handleEditDeck = (deck: UserDeck) => {
    props.onEditDeck?.(deck)
  }

  const handleMoveDeck = (deck: UserDeck, targetFolderId: string) => {
    props.onMoveDeck?.(deck, targetFolderId)
  }

  const handleRenameDeck = (deck: UserDeck, newName: string) => {
    props.onRenameDeck?.(deck, newName)
  }

  const handleCopyDeck = (deck: UserDeck) => {
    props.onCopyDeck?.(deck)
  }

  const handleDeleteDeck = (deck: UserDeck) => {
    props.onDeleteDeck?.(deck)
  }

  return (
    <div class="space-y-6">
      {/* Breadcrumb Navigation */}
      <VocabBreadcrumb items={breadcrumbs()} />

      {/* Folder Title */}
      <div>
        <h1 class="text-foreground text-2xl font-bold">
          {currentFolderName()}
        </h1>
      </div>

      {/* Folder Contents Grid */}
      <FolderGrid
        folders={folderContents().folders}
        decks={folderContents().decks}
        userId={props.userId}
        onFolderClick={handleFolderClick}
        onSelectDeck={handleDeckClick}
        onEditDeck={handleEditDeck}
        onMoveDeck={handleMoveDeck}
        onRenameDeck={handleRenameDeck}
        onCopyDeck={handleCopyDeck}
        onDeleteDeck={handleDeleteDeck}
        onShareStatusChange={props.onShareStatusChange}
      />
    </div>
  )
}
