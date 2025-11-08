import { createMemo } from "solid-js"
import {
  validateDeckComplete,
  validateFolderComplete,
} from "@/features/vocab-page/validation"

interface UseEditValidationProps {
  name: () => string
  item: UserDeck | DeckFolder | null
  selectedFolderId: () => string
  folders: DeckFolder[]
  decks: UserDeck[]
}

function extractDeckData(
  item: UserDeck | DeckFolder | null,
): { id: string; name: string; folderId: number | null } | null {
  if (!item || !("deck_id" in item)) return null
  const deck = item as UserDeck
  return {
    id: deck.deck_id,
    name: deck.deck_name,
    folderId: deck.folder_id,
  }
}

function extractFolderData(
  item: UserDeck | DeckFolder | null,
): { id: number; name: string; parentId: number | null } | null {
  if (!item || !("folder_id" in item)) return null
  const folder = item as DeckFolder
  return {
    id: folder.folder_id,
    name: folder.folder_name,
    parentId: folder.parent_folder_id,
  }
}

export function useEditValidation(props: UseEditValidationProps) {
  const nameValidation = createMemo(() => {
    if (!props.item) return { isValid: true }

    const deckData = extractDeckData(props.item)
    if (deckData) {
      const targetFolderId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())

      return validateDeckComplete(
        props.name(),
        targetFolderId,
        props.decks,
        deckData.id,
      )
    }

    const folderData = extractFolderData(props.item)
    if (folderData) {
      const targetParentId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())

      return validateFolderComplete(
        props.name(),
        targetParentId,
        folderData.id,
        props.folders,
        folderData.id,
      )
    }

    return { isValid: true }
  })

  const hasChanges = createMemo(() => {
    const currentName = props.name()
    const currentFolderId = props.selectedFolderId()
    const currentItem = props.item

    if (!currentItem) return false

    const deckData = extractDeckData(currentItem)
    if (deckData) {
      const targetFolderId =
        currentFolderId === "root" ? null : parseInt(currentFolderId)
      const nameChanged = currentName !== deckData.name
      const locationChanged = targetFolderId !== deckData.folderId
      return nameChanged || locationChanged
    }

    const folderData = extractFolderData(currentItem)
    if (folderData) {
      const targetParentId =
        currentFolderId === "root" ? null : parseInt(currentFolderId)
      const nameChanged = currentName !== folderData.name
      const locationChanged = targetParentId !== folderData.parentId
      return nameChanged || locationChanged
    }

    return false
  })

  const canSave = createMemo(() => nameValidation().isValid && hasChanges())

  return {
    nameValidation,
    hasChanges,
    canSave,
  }
}
