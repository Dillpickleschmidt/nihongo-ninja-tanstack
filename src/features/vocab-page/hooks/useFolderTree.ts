import { createMemo } from "solid-js"
import type { TreeNode } from "@/components/ui/tree-view"

interface UseFolderTreeProps {
  folders: DeckFolder[]
  decks: UserDeck[]
  item: UserDeck | DeckFolder | null
}

export function useFolderTree(props: UseFolderTreeProps) {
  const isFolder = () => props.item && "folder_id" in props.item

  const folderTreeNodes = createMemo((): TreeNode[] => {
    if (props.folders.length === 0) return []

    let availableFolders = props.folders

    // For folder editing, exclude self and descendants
    // Only apply exclusion for folders, not decks
    if (props.item && !("deck_id" in props.item)) {
      const folderId = props.item.folder_id
      const excludeIds = new Set([folderId])

      // Add all descendants
      const addDescendants = (id: number) => {
        props.folders.forEach((f) => {
          if (f.parent_folder_id === id && !excludeIds.has(f.folder_id)) {
            excludeIds.add(f.folder_id)
            addDescendants(f.folder_id)
          }
        })
      }
      addDescendants(folderId)

      availableFolders = props.folders.filter(
        (f) => !excludeIds.has(f.folder_id),
      )
    }

    const buildTreeNodes = (parentId: number | null): TreeNode[] => {
      return availableFolders
        .filter((f) => f.parent_folder_id === parentId)
        .sort((a, b) => a.folder_name.localeCompare(b.folder_name))
        .map((folder) => ({
          id: folder.folder_id.toString(),
          label: folder.folder_name,
          data: folder,
          children: buildTreeNodes(folder.folder_id),
        }))
    }

    return buildTreeNodes(null)
  })

  // Get folder contents for delete confirmation
  const folderContents = createMemo(() => {
    if (!isFolder() || !props.item) return { decks: 0, folders: 0 }

    const folderId = (props.item as DeckFolder).folder_id
    const descendants = new Set([folderId])

    // Add all descendants
    const addDescendants = (id: number) => {
      props.folders.forEach((f) => {
        if (f.parent_folder_id === id && !descendants.has(f.folder_id)) {
          descendants.add(f.folder_id)
          addDescendants(f.folder_id)
        }
      })
    }
    addDescendants(folderId)

    const decks = props.decks.filter(
      (d) => d.folder_id && descendants.has(d.folder_id),
    ).length
    const folders = descendants.size - 1 // Exclude the folder itself

    return { decks, folders }
  })

  return {
    folderTreeNodes,
    folderContents,
  }
}
