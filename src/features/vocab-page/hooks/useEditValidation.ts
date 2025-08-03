import { createMemo } from "solid-js"
import { validateName } from "@/features/vocab-page/logic/deck-edit-operations"

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
    const validation = validateName(props.name())
    if (!validation.isValid) return validation

    // Check for duplicates
    if (!props.item) return validation

    if (isDeck()) {
      const deck = props.item as UserDeck
      const targetFolderId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())
      const duplicateDeck = props.decks.find(
        (d) =>
          d.deck_name.trim().toLowerCase() ===
            props.name().trim().toLowerCase() &&
          d.folder_id === targetFolderId &&
          d.deck_id !== deck.deck_id,
      )
      if (duplicateDeck) {
        return {
          isValid: false,
          error: "A deck with this name already exists in this folder",
        }
      }
    } else {
      const folder = props.item as DeckFolder
      const targetParentId =
        props.selectedFolderId() === "root"
          ? null
          : parseInt(props.selectedFolderId())
      const duplicateFolder = props.folders.find(
        (f) =>
          f.folder_name.trim().toLowerCase() ===
            props.name().trim().toLowerCase() &&
          f.parent_folder_id === targetParentId &&
          f.folder_id !== folder.folder_id,
      )
      if (duplicateFolder) {
        return {
          isValid: false,
          error: "A folder with this name already exists in this location",
        }
      }
    }

    return validation
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

