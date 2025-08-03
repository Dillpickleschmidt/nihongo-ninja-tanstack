/**
 * Builds a folder path from a folder ID to the root
 */
export function buildFolderPath(
  folderId: string | number | null,
  folders: DeckFolder[],
): DeckFolder[] {
  const path: DeckFolder[] = []

  if (folderId === "root" || folderId === null) {
    return path
  }

  let currentId: number | null =
    typeof folderId === "string" ? parseInt(folderId) : folderId

  while (currentId !== null) {
    const folder = folders.find((f) => f.folder_id === currentId)
    if (!folder) break
    path.unshift(folder)
    currentId = folder.parent_folder_id
  }

  return path
}

/**
 * Gets the current folder ID for an item
 */
export function getCurrentFolderId(item: UserDeck | DeckFolder): number | null {
  if ("deck_id" in item) {
    return item.folder_id
  } else {
    return item.parent_folder_id
  }
}

