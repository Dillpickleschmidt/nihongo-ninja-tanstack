/**
 * Folder tree utilities
 * Centralizes logic for working with folder hierarchies and tree structures
 */

/**
 * Find the path of folder IDs from root to target folder
 * Returns array of folder IDs that need to be expanded to reach target
 *
 * @example
 * ```ts
 * const folders = [
 *   { folder_id: 1, parent_folder_id: null },
 *   { folder_id: 2, parent_folder_id: 1 },
 *   { folder_id: 3, parent_folder_id: 2 }
 * ]
 * getFolderPath(3, folders) // [1, 2, 3]
 * ```
 */
export function getFolderPath(
  targetId: number,
  folders: DeckFolder[],
): number[] {
  const expandPath = (
    id: number,
    foldersList: DeckFolder[],
    path: number[] = [],
  ): number[] | null => {
    for (const folder of foldersList) {
      if (folder.folder_id === id) {
        return [...path, id]
      }

      const childFolders = foldersList.filter(
        (f) => f.parent_folder_id === folder.folder_id,
      )
      if (childFolders.length > 0) {
        const found = expandPath(id, childFolders, [...path, folder.folder_id])
        if (found) return found
      }
    }
    return null
  }

  return expandPath(targetId, folders) || []
}

/**
 * Build breadcrumb path from folder structure
 * Returns array of folders from root to target, in order
 */
export function buildBreadcrumbPath(
  folders: DeckFolder[],
  targetFolderId: number,
): DeckFolder[] {
  const folderMap = new Map<number, DeckFolder>()
  folders.forEach((f) => folderMap.set(f.folder_id, f))

  const path: DeckFolder[] = []
  let currentId: number | null = targetFolderId

  while (currentId !== null) {
    const folder = folderMap.get(currentId)
    if (!folder) break

    path.unshift(folder)
    currentId = folder.parent_folder_id
  }

  return path
}
