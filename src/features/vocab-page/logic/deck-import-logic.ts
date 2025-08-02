// vocab-page/logic/deck-import-logic.ts

/**
 * Smart deck import logic with automatic folder creation.
 * Handles importing decks from built-in sources and organizing them into appropriate folder hierarchies.
 */

import { findOrCreateFolderPath } from "./folder-hierarchy"
import type { VocabBuiltInDeck, VocabTextbook } from "../types"

/**
 * Result of importing a deck with folder organization
 */
export interface ImportResult {
  folders: DeckFolder[]
  decks: UserDeck[]
  importedDeck: UserDeck
  targetFolderId: number
}

/**
 * Information extracted from textbook structure for folder creation
 */
export interface TextbookInfo {
  textbookName: string
  chapterName: string
  deckTitle: string
}

/**
 * Extracts textbook information from built-in deck by searching through textbook data
 */
export function extractTextbookInfo(
  builtInDeck: VocabBuiltInDeck,
  textbooks: [string, VocabTextbook][],
): TextbookInfo | null {
  for (const [textbookId, textbook] of textbooks) {
    for (const chapter of textbook.chapters) {
      const deck = chapter.decks.find((d) => d.id === builtInDeck.id)
      if (deck) {
        return {
          textbookName: textbook.short_name || textbook.name,
          chapterName: `Chapter ${chapter.number}`,
          deckTitle: deck.title,
        }
      }
    }
  }
  return null
}

/**
 * Creates the appropriate folder hierarchy for a textbook deck
 */
export function createFolderHierarchyForDeck(
  folders: DeckFolder[],
  textbookInfo: TextbookInfo,
  userId: string = "temp-user-id",
): { folders: DeckFolder[]; targetFolderId: number } {
  const pathNames = [textbookInfo.textbookName, textbookInfo.chapterName]
  return findOrCreateFolderPath(folders, pathNames, userId)
}

/**
 * Generates a full deck title including textbook context
 */
export function generateDeckTitle(textbookInfo: TextbookInfo): string {
  const shortChapter = textbookInfo.chapterName.replace("Chapter ", "Ch.")
  return `${textbookInfo.textbookName} ${shortChapter} ${textbookInfo.deckTitle}`
}


/**
 * Creates a new UserDeck from a built-in deck with proper folder assignment
 */
export function createUserDeckFromBuiltIn(
  builtInDeck: VocabBuiltInDeck,
  folderId: number | null,
  deckTitle: string,
  userId: string = "temp-user-id",
): UserDeck {
  return {
    deck_id: -Date.now(), // Negative temporary ID to avoid conflicts with positive database IDs
    deck_name: deckTitle,
    deck_description: null,
    original_deck_id: builtInDeck.id, // Store original built-in deck ID for vocabulary lookup
    folder_id: folderId,
    source: "built-in",
    user_id: userId,
    created_at: new Date().toISOString(),
  }
}

/**
 * Main import function that handles the complete deck import with folder organization
 */
export function importDeckWithFolders(
  folders: DeckFolder[],
  decks: UserDeck[],
  builtInDeck: VocabBuiltInDeck,
  textbooks: [string, VocabTextbook][],
  userId: string = "temp-user-id",
): ImportResult {
  // Extract textbook information
  const textbookInfo = extractTextbookInfo(builtInDeck, textbooks)

  if (!textbookInfo) {
    // If we can't determine textbook info, import to root level
    const deckTitle = builtInDeck.title
    const importedDeck = createUserDeckFromBuiltIn(
      builtInDeck,
      null,
      deckTitle,
      userId,
    )

    return {
      folders,
      decks: [...decks, importedDeck],
      importedDeck,
      targetFolderId: null,
    }
  }

  // Create folder hierarchy
  const { folders: updatedFolders, targetFolderId } =
    createFolderHierarchyForDeck(folders, textbookInfo, userId)

  // Generate full deck title
  const deckTitle = generateDeckTitle(textbookInfo)

  // Create the user deck
  const importedDeck = createUserDeckFromBuiltIn(
    builtInDeck,
    targetFolderId,
    deckTitle,
    userId,
  )

  return {
    folders: updatedFolders,
    decks: [...decks, importedDeck],
    importedDeck,
    targetFolderId,
  }
}

/**
 * Checks if a built-in deck has already been imported by checking original_deck_id
 */
export function isDeckAlreadyImported(
  decks: UserDeck[],
  builtInDeckId: string,
): boolean {
  return decks.some((deck) => deck.original_deck_id === builtInDeckId)
}

/**
 * Gets the imported deck instance for a built-in deck
 */
export function getImportedDeck(
  decks: UserDeck[],
  builtInDeckId: string,
): UserDeck | null {
  return decks.find((deck) => deck.original_deck_id === builtInDeckId) || null
}

/**
 * Imports multiple decks at once with batch folder creation
 */
export function importMultipleDecks(
  folders: DeckFolder[],
  decks: UserDeck[],
  builtInDecks: VocabBuiltInDeck[],
  textbooks: [string, VocabTextbook][],
  userId: string = "temp-user-id",
): ImportResult[] {
  let currentFolders = [...folders]
  let currentDecks = [...decks]
  const results: ImportResult[] = []

  for (const builtInDeck of builtInDecks) {
    // Skip if already imported
    if (isDeckAlreadyImported(currentDecks, builtInDeck.id)) {
      continue
    }

    const result = importDeckWithFolders(
      currentFolders,
      currentDecks,
      builtInDeck,
      textbooks,
      userId,
    )

    currentFolders = result.folders
    currentDecks = result.decks
    results.push(result)
  }

  return results
}

/**
 * Suggests folder names based on deck content or metadata
 */
export function suggestFolderName(
  builtInDeck: VocabBuiltInDeck,
  textbooks: [string, VocabTextbook][],
): string {
  const textbookInfo = extractTextbookInfo(builtInDeck, textbooks)

  if (textbookInfo) {
    return textbookInfo.chapterName
  }

  // Fallback to deck title or default
  return builtInDeck.title || "Custom Folder"
}

/**
 * Gets folder path as string for display purposes
 */
export function getFolderPathString(
  folders: DeckFolder[],
  folderId: number | null,
  separator: string = " > ",
): string {
  if (folderId === null) return "Root"

  const path: string[] = []
  let currentId: number | null = folderId

  while (currentId !== null) {
    const folder = folders.find((f) => f.folder_id === currentId)
    if (!folder) break

    path.unshift(folder.folder_name)
    currentId = folder.parent_folder_id
  }

  return path.length > 0 ? path.join(separator) : "Root"
}

/**
 * Validates import operation before execution
 */
export interface ImportValidation {
  isValid: boolean
  warnings: string[]
  errors: string[]
}

export function validateImport(
  decks: UserDeck[],
  builtInDeck: VocabBuiltInDeck,
): ImportValidation {
  const warnings: string[] = []
  const errors: string[] = []

  // Check if already imported
  if (isDeckAlreadyImported(decks, builtInDeck.id)) {
    warnings.push("This deck has already been imported")
  }

  // Check for potential naming conflicts
  const existingNames = decks.map((d) => d.deck_name)
  if (existingNames.includes(builtInDeck.title)) {
    warnings.push("A deck with this name already exists")
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors,
  }
}
