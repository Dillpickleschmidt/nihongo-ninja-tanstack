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

export function useEditValidation(props: UseEditValidationProps) {
  const isDeck = () => props.item && "deck_id" in props.item
  const isFolder = () => props.item && "folder_id" in props.item

  const nameValidation = createMemo(() => {
    if (!props.item) return { isValid: true }

    if (isDeck()) {
      const deck = props.item as UserDeck
      const targetFolderId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())

      return validateDeckComplete(
        props.name(),
        targetFolderId,
        props.decks,
        deck.deck_id,
      )
    } else {
      const folder = props.item as DeckFolder
      const targetParentId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())

      return validateFolderComplete(
        props.name(),
        targetParentId,
        folder.folder_id,
        props.folders,
        folder.folder_id,
      )
    }
  })

  const hasChanges = createMemo(() => {
    // Force reactivity by accessing all dependencies at the top
    const currentName = props.name()
    const currentFolderId = props.selectedFolderId()
    const currentItem = props.item

    if (!currentItem) return false

    if (isDeck()) {
      const deck = currentItem as UserDeck
      const targetFolderId =
        currentFolderId === "root" ? null : parseInt(currentFolderId)
      const nameChanged = currentName !== deck.deck_name
      const locationChanged = targetFolderId !== deck.folder_id
      return nameChanged || locationChanged
    } else {
      const folder = currentItem as DeckFolder
      const targetParentId =
        currentFolderId === "root" ? null : parseInt(currentFolderId)
      const nameChanged = currentName !== folder.folder_name
      const locationChanged = targetParentId !== folder.parent_folder_id
      return nameChanged || locationChanged
    }
  })

  const canSave = createMemo(() => nameValidation().isValid && hasChanges())

  return {
    nameValidation,
    hasChanges,
    canSave,
  }
}
