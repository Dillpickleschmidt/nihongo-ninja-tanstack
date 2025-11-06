// Deck and folder validation schemas and utilities
import { z } from "zod"
import {
  VALIDATION_RULES,
  validateName,
  validateUniqueness,
  type ValidationResult,
} from "./common"
import { VocabItemFormDataSchema } from "./vocabulary-validation"

// Deck metadata validation schema
export const DeckMetadataSchema = z.object({
  name: z
    .string()
    .min(1, "Deck name is required")
    .max(
      VALIDATION_RULES.DECK_NAME_MAX_LENGTH,
      `Deck name must be ${VALIDATION_RULES.DECK_NAME_MAX_LENGTH} characters or less`,
    ),
  description: z
    .string()
    .max(
      VALIDATION_RULES.DESCRIPTION_MAX_LENGTH,
      `Description must be ${VALIDATION_RULES.DESCRIPTION_MAX_LENGTH} characters or less`,
    ),
  selectedFolderId: z.string(),
  selectedFolderName: z.string(),
})

// Complete deck creation validation schema
export const DeckCreationSchema = z.object({
  deck: DeckMetadataSchema,
  vocabItems: z.record(z.string(), VocabItemFormDataSchema).refine((items) => {
    const validItems = Object.values(items).filter(
      (item) =>
        item.word.trim().length > 0 &&
        item.english.some((meaning) => meaning.trim().length > 0),
    )
    return validItems.length >= 1
  }, "At least one complete vocabulary item is required"),
})

// Folder validation schema
export const FolderSchema = z.object({
  name: z
    .string()
    .min(1, "Folder name is required")
    .max(
      VALIDATION_RULES.NAME_MAX_LENGTH,
      `Folder name must be ${VALIDATION_RULES.NAME_MAX_LENGTH} characters or less`,
    ),
  parentFolderId: z.string().nullable(),
})

// Deck name uniqueness validation schema
export const DeckNameValidationSchema = z
  .object({
    name: z.string().min(1, "Deck name is required"),
    folderId: z.string(),
    existingDecks: z.array(
      z.object({
        deck_name: z.string(),
        folder_id: z.number().nullable(),
        deck_id: z.string(),
      }),
    ),
    excludeId: z.string().optional(),
  })
  .refine((data) => {
    const targetFolderId =
      data.folderId === "root" ? null : parseInt(data.folderId)
    const duplicate = data.existingDecks.find(
      (deck) =>
        deck.deck_name.trim().toLowerCase() ===
          data.name.trim().toLowerCase() &&
        deck.folder_id === targetFolderId &&
        (data.excludeId ? deck.deck_id !== data.excludeId : true),
    )
    return !duplicate
  }, "A deck with this name already exists in this folder")

// Folder name uniqueness validation schema
export const FolderNameValidationSchema = z
  .object({
    name: z.string().min(1, "Folder name is required"),
    parentFolderId: z.string(),
    existingFolders: z.array(
      z.object({
        folder_name: z.string(),
        parent_folder_id: z.number().nullable(),
        folder_id: z.number(),
      }),
    ),
    excludeId: z.number().optional(),
  })
  .refine((data) => {
    const targetParentId =
      data.parentFolderId === "root" ? null : parseInt(data.parentFolderId)
    const duplicate = data.existingFolders.find(
      (folder) =>
        folder.folder_name.trim().toLowerCase() ===
          data.name.trim().toLowerCase() &&
        folder.parent_folder_id === targetParentId &&
        (data.excludeId ? folder.folder_id !== data.excludeId : true),
    )
    return !duplicate
  }, "A folder with this name already exists in this location")

// Type inference
export type DeckMetadata = z.infer<typeof DeckMetadataSchema>
export type DeckCreationData = z.infer<typeof DeckCreationSchema>
export type FolderData = z.infer<typeof FolderSchema>
export type DeckNameValidation = z.infer<typeof DeckNameValidationSchema>
export type FolderNameValidation = z.infer<typeof FolderNameValidationSchema>

// Validation functions using the unified system
export function validateDeckNameUnique(
  name: string,
  folderId: number | null,
  decks: UserDeck[],
  excludeDeckId?: string,
): ValidationResult {
  const duplicate = decks.find(
    (deck) =>
      deck.deck_name.trim().toLowerCase() === name.trim().toLowerCase() &&
      deck.folder_id === folderId &&
      deck.deck_id !== excludeDeckId,
  )

  if (duplicate) {
    return {
      isValid: false,
      error: "A deck with this name already exists in this folder",
    }
  }

  return { isValid: true }
}

export function validateFolderNameUnique(
  name: string,
  parentId: number | null,
  folders: DeckFolder[],
  excludeFolderId?: number,
): ValidationResult {
  const duplicate = folders.find(
    (folder) =>
      folder.folder_name.trim().toLowerCase() === name.trim().toLowerCase() &&
      folder.parent_folder_id === parentId &&
      folder.folder_id !== excludeFolderId,
  )

  if (duplicate) {
    return {
      isValid: false,
      error: "A folder with this name already exists in this location",
    }
  }

  return { isValid: true }
}

// Circular reference validation for folders
export function validateNoCircularReference(
  folderId: number,
  newParentId: number | null,
  folders: DeckFolder[],
): ValidationResult {
  if (newParentId === null) {
    return { isValid: true } // Moving to root is always safe
  }

  if (folderId === newParentId) {
    return { isValid: false, error: "Cannot move folder into itself" }
  }

  // Check if newParentId is a descendant of folderId
  let currentId: number | null = newParentId
  while (currentId !== null) {
    const currentFolder = folders.find((f) => f.folder_id === currentId)
    if (!currentFolder) break

    if (currentFolder.parent_folder_id === folderId) {
      return {
        isValid: false,
        error: "Cannot move folder into its own descendant",
      }
    }

    currentId = currentFolder.parent_folder_id
  }

  return { isValid: true }
}

// Comprehensive deck validation (name + uniqueness)
export function validateDeckComplete(
  name: string,
  folderId: number | null,
  decks: UserDeck[],
  excludeDeckId?: string,
): ValidationResult {
  // First validate the name format
  const nameValidation = validateName(name)
  if (!nameValidation.isValid) {
    return nameValidation
  }

  // Then check uniqueness
  return validateDeckNameUnique(name, folderId, decks, excludeDeckId)
}

// Comprehensive folder validation (name + uniqueness + circular reference)
export function validateFolderComplete(
  name: string,
  parentId: number | null,
  folderId: number,
  folders: DeckFolder[],
  excludeFolderId?: number,
): ValidationResult {
  // First validate the name format
  const nameValidation = validateName(name)
  if (!nameValidation.isValid) {
    return nameValidation
  }

  // Check uniqueness
  const uniqueValidation = validateFolderNameUnique(
    name,
    parentId,
    folders,
    excludeFolderId,
  )
  if (!uniqueValidation.isValid) {
    return uniqueValidation
  }

  // Check for circular references (only if we're changing parent)
  if (parentId !== null && folderId) {
    return validateNoCircularReference(folderId, parentId, folders)
  }

  return { isValid: true }
}
