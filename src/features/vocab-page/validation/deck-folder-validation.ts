import { z } from "zod"
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  DECK_NAME_MAX_LENGTH,
  DESCRIPTION_MAX_LENGTH,
} from "./constants"

// Basic name format validation (used for real-time field feedback)
export const DeckNameSchema = z
  .string()
  .min(NAME_MIN_LENGTH, "Name is required")
  .max(
    DECK_NAME_MAX_LENGTH,
    `Name must be ${DECK_NAME_MAX_LENGTH} characters or less`,
  )

export const FolderNameSchema = z
  .string()
  .min(NAME_MIN_LENGTH, "Name is required")
  .max(NAME_MAX_LENGTH, `Name must be ${NAME_MAX_LENGTH} characters or less`)

export const DescriptionSchema = z
  .string()
  .max(
    DESCRIPTION_MAX_LENGTH,
    `Description must be ${DESCRIPTION_MAX_LENGTH} characters or less`,
  )
  .optional()

// Full deck metadata for form submission
export const DeckMetadataSchema = z.object({
  deckName: DeckNameSchema,
  deckDescription: DescriptionSchema,
  folderId: z.string().optional(),
})

export type DeckMetadata = z.infer<typeof DeckMetadataSchema>

// Uniqueness validation (requires existing data context)
export function validateDeckNameUnique(
  name: string,
  existingDecks: { id: string; deckName: string }[],
  excludeDeckId?: string,
): { isValid: boolean; error?: string } {
  const duplicate = existingDecks.find(
    (d) =>
      d.deckName.toLowerCase() === name.toLowerCase() && d.id !== excludeDeckId,
  )
  return duplicate
    ? { isValid: false, error: "A deck with this name already exists" }
    : { isValid: true }
}

export function validateFolderNameUnique(
  name: string,
  existingFolders: {
    id: string
    folderName: string
    parentFolderId?: string
  }[],
  parentFolderId?: string,
  excludeFolderId?: string,
): { isValid: boolean; error?: string } {
  const duplicate = existingFolders.find(
    (f) =>
      f.folderName.toLowerCase() === name.toLowerCase() &&
      f.parentFolderId === parentFolderId &&
      f.id !== excludeFolderId,
  )
  return duplicate
    ? { isValid: false, error: "A folder with this name already exists here" }
    : { isValid: true }
}

// Circular reference prevention for folder moves
export function validateNoCircularReference(
  folderId: string,
  targetParentId: string,
  folders: { id: string; parentFolderId?: string }[],
): { isValid: boolean; error?: string } {
  // Can't move folder into itself
  if (folderId === targetParentId) {
    return { isValid: false, error: "Cannot move folder into itself" }
  }

  // Check if target is a descendant of the folder being moved
  let currentId: string | undefined = targetParentId
  while (currentId) {
    if (currentId === folderId) {
      return {
        isValid: false,
        error: "Cannot move folder into its own subfolder",
      }
    }
    const parent = folders.find((f) => f.id === currentId)
    currentId = parent?.parentFolderId
  }

  return { isValid: true }
}
