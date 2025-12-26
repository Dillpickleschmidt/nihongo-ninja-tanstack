import { createMemo } from "solid-js"
import type { TreeNode } from "@/components/ui/tree-view"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

interface UseFolderTreeProps {
  folders: Folder[]
  decks: Deck[]
  item: Deck | Folder | null
}

export function useFolderTree(props: UseFolderTreeProps) {
  const isFolder = () => props.item && "folderName" in props.item

  const folderTreeNodes = createMemo((): TreeNode[] => {
    if (props.folders.length === 0) return []

    // Filter to only user folders (built-in folders can't be used as destinations)
    let availableFolders = props.folders.filter((f) => f.source === "user")

    if (props.item && !("deckName" in props.item)) {
      const folderId = props.item.id
      const excludeIds = new Set([folderId])

      const addDescendants = (id: string) => {
        availableFolders.forEach((f) => {
          if (f.parentFolderId === id && !excludeIds.has(f.id)) {
            excludeIds.add(f.id)
            addDescendants(f.id)
          }
        })
      }
      addDescendants(folderId)

      availableFolders = availableFolders.filter((f) => !excludeIds.has(f.id))
    }

    const buildTreeNodes = (parentId: string | undefined): TreeNode[] => {
      return availableFolders
        .filter((f) => f.parentFolderId === parentId)
        .sort((a, b) => a.folderName.localeCompare(b.folderName))
        .map((folder) => ({
          id: folder.id,
          label: folder.folderName,
          data: folder,
          children: buildTreeNodes(folder.id),
        }))
    }

    return buildTreeNodes(undefined)
  })

  const folderContents = createMemo(() => {
    if (!isFolder() || !props.item) return { decks: 0, folders: 0 }

    // Type assertion needed because SolidJS reactive context doesn't narrow types
    const folderId = (props.item as Folder).id
    const descendants = new Set([folderId])

    const addDescendants = (id: string) => {
      props.folders.forEach((f) => {
        if (f.parentFolderId === id && !descendants.has(f.id)) {
          descendants.add(f.id)
          addDescendants(f.id)
        }
      })
    }
    addDescendants(folderId)

    const decks = props.decks.filter(
      (d) => d.folderId && descendants.has(d.folderId),
    ).length
    const folders = descendants.size - 1 // Exclude the folder itself

    return { decks, folders }
  })

  return {
    folderTreeNodes,
    folderContents,
  }
}
