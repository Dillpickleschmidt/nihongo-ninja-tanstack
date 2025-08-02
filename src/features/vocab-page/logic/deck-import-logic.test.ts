// vocab-page/logic/deck-import-logic.test.ts
import { describe, it, expect } from "vitest"
import {
  extractTextbookInfo,
  createFolderHierarchyForDeck,
  generateDeckTitle,
  createUserDeckFromBuiltIn,
  importDeckWithFolders,
  isDeckAlreadyImported,
  getImportedDeck,
  importMultipleDecks,
  suggestFolderName,
  getFolderPathString,
  validateImport,
} from "./deck-import-logic"
import type { VocabBuiltInDeck, VocabTextbook, Chapter } from "../types"

// Mock data helpers
const createMockTextbook = (
  id: string,
  name: string,
  shortName: string,
): VocabTextbook => ({
  id,
  name,
  short_name: shortName,
  chapters: [],
})

const createMockChapter = (
  id: string,
  number: number,
  title: string,
  decks: VocabBuiltInDeck[],
): Chapter => ({
  id,
  number,
  title,
  decks,
})

const createMockBuiltInDeck = (
  id: string,
  title: string,
): VocabBuiltInDeck => ({
  id,
  slug: `slug-${id}`,
  title,
  learning_path_items: [],
  isImported: false,
})

const createMockFolder = (
  id: number,
  name: string,
  parentId: number | null,
): DeckFolder => ({
  folder_id: id,
  folder_name: name,
  parent_folder_id: parentId,
  user_id: "test-user",
  created_at: new Date().toISOString(),
})

const createMockUserDeck = (
  id: number,
  name: string,
  originalId: string | null,
  folderId: number | null,
): UserDeck => ({
  deck_id: id,
  deck_name: name,
  deck_description: null,
  original_deck_id: originalId,
  folder_id: folderId,
  source: "built-in",
  user_id: "test-user",
  created_at: new Date().toISOString(),
})

describe("deck-import-logic", () => {
  const genkiIDeck = createMockBuiltInDeck("genki_1_ch1_vocab", "Vocabulary")
  const genkiITextbook = createMockTextbook(
    "genki_1",
    "Genki I: An Integrated Course",
    "Genki I",
  )
  const chapter1 = createMockChapter("ch1", 1, "Chapter 1", [genkiIDeck])
  genkiITextbook.chapters = [chapter1]

  const textbooks: [string, VocabTextbook][] = [["genki_1", genkiITextbook]]

  describe("extractTextbookInfo", () => {
    it("extracts textbook info for known deck", () => {
      const result = extractTextbookInfo(genkiIDeck, textbooks)

      expect(result).not.toBe(null)
      expect(result!.textbookName).toBe("Genki I")
      expect(result!.chapterName).toBe("Chapter 1")
      expect(result!.deckTitle).toBe("Vocabulary")
    })

    it("returns null for unknown deck", () => {
      const unknownDeck = createMockBuiltInDeck("unknown_deck", "Unknown")

      const result = extractTextbookInfo(unknownDeck, textbooks)

      expect(result).toBe(null)
    })

    it("uses full name when short_name is empty", () => {
      const textbookWithoutShortName = createMockTextbook(
        "test",
        "Full Textbook Name",
        "",
      )
      const deck = createMockBuiltInDeck("test_deck", "Test Deck")
      const chapter = createMockChapter("ch1", 1, "Chapter 1", [deck])
      textbookWithoutShortName.chapters = [chapter]

      const result = extractTextbookInfo(deck, [
        ["test", textbookWithoutShortName],
      ])

      expect(result!.textbookName).toBe("Full Textbook Name")
    })
  })

  describe("createFolderHierarchyForDeck", () => {
    it("creates new folder hierarchy", () => {
      const folders: DeckFolder[] = []
      const textbookInfo = {
        textbookName: "Genki I",
        chapterName: "Chapter 1",
        deckTitle: "Vocabulary",
      }

      const result = createFolderHierarchyForDeck(
        folders,
        textbookInfo,
        "test-user",
      )

      expect(result.folders).toHaveLength(2)
      expect(result.folders[0].folder_name).toBe("Genki I")
      expect(result.folders[0].parent_folder_id).toBe(null)
      expect(result.folders[1].folder_name).toBe("Chapter 1")
      expect(result.folders[1].parent_folder_id).toBe(
        result.folders[0].folder_id,
      )
      expect(result.targetFolderId).toBe(result.folders[1].folder_id)
    })

    it("reuses existing folders", () => {
      const existingGenki = createMockFolder(1, "Genki I", null)
      const folders = [existingGenki]
      const textbookInfo = {
        textbookName: "Genki I",
        chapterName: "Chapter 1",
        deckTitle: "Vocabulary",
      }

      const result = createFolderHierarchyForDeck(
        folders,
        textbookInfo,
        "test-user",
      )

      expect(result.folders).toHaveLength(2)
      expect(result.folders[0]).toBe(existingGenki) // Reused existing
      expect(result.folders[1].folder_name).toBe("Chapter 1")
      expect(result.folders[1].parent_folder_id).toBe(1)
    })
  })

  describe("generateDeckTitle", () => {
    it("generates full deck title", () => {
      const textbookInfo = {
        textbookName: "Genki I",
        chapterName: "Chapter 1",
        deckTitle: "Vocabulary",
      }

      const result = generateDeckTitle(textbookInfo)

      expect(result).toBe("Genki I Ch.1 Vocabulary")
    })
  })

  describe("createUserDeckFromBuiltIn", () => {
    it("creates user deck with correct properties", () => {
      const builtInDeck = createMockBuiltInDeck("test_deck", "Test Deck")

      const result = createUserDeckFromBuiltIn(
        builtInDeck,
        5,
        "Full Title",
        "test-user",
      )

      expect(result.deck_name).toBe("Full Title")
      expect(result.original_deck_id).toBe("test_deck")
      expect(result.folder_id).toBe(5)
      expect(result.source).toBe("built-in")
      expect(result.user_id).toBe("test-user")
      expect(result.deck_description).toBe(null)
    })

    it("handles null folder ID", () => {
      const builtInDeck = createMockBuiltInDeck("test_deck", "Test Deck")

      const result = createUserDeckFromBuiltIn(
        builtInDeck,
        null,
        "Title",
        "test-user",
      )

      expect(result.folder_id).toBe(null)
    })
  })

  describe("importDeckWithFolders", () => {
    it("imports deck with folder creation", () => {
      const folders: DeckFolder[] = []
      const decks: UserDeck[] = []

      const result = importDeckWithFolders(
        folders,
        decks,
        genkiIDeck,
        textbooks,
        "test-user",
      )

      expect(result.folders).toHaveLength(2)
      expect(result.decks).toHaveLength(1)
      expect(result.importedDeck.deck_name).toBe("Genki I Ch.1 Vocabulary")
      expect(result.importedDeck.original_deck_id).toBe("genki_1_ch1_vocab")
      expect(result.targetFolderId).toBe(result.folders[1].folder_id)
    })

    it("imports unknown deck to root level", () => {
      const unknownDeck = createMockBuiltInDeck("unknown", "Unknown Deck")
      const folders: DeckFolder[] = []
      const decks: UserDeck[] = []

      const result = importDeckWithFolders(
        folders,
        decks,
        unknownDeck,
        textbooks,
        "test-user",
      )

      expect(result.folders).toHaveLength(0) // No folders created
      expect(result.decks).toHaveLength(1)
      expect(result.importedDeck.deck_name).toBe("Unknown Deck")
      expect(result.importedDeck.folder_id).toBe(null)
      expect(result.targetFolderId).toBe(null)
    })

    it("preserves existing decks and folders", () => {
      const existingFolder = createMockFolder(1, "Existing", null)
      const existingDeck = createMockUserDeck(1, "Existing Deck", null, null)
      const folders = [existingFolder]
      const decks = [existingDeck]

      const result = importDeckWithFolders(
        folders,
        decks,
        genkiIDeck,
        textbooks,
        "test-user",
      )

      expect(result.folders).toHaveLength(3) // 1 existing + 2 new
      expect(result.decks).toHaveLength(2) // 1 existing + 1 new
      expect(result.folders[0]).toBe(existingFolder)
      expect(result.decks[0]).toBe(existingDeck)
    })
  })

  describe("isDeckAlreadyImported", () => {
    it("detects already imported deck", () => {
      const decks = [
        createMockUserDeck(1, "Deck 1", "imported_deck", null),
        createMockUserDeck(2, "Deck 2", "other_deck", null),
      ]

      expect(isDeckAlreadyImported(decks, "imported_deck")).toBe(true)
      expect(isDeckAlreadyImported(decks, "not_imported")).toBe(false)
    })

    it("handles empty deck list", () => {
      expect(isDeckAlreadyImported([], "any_deck")).toBe(false)
    })
  })

  describe("getImportedDeck", () => {
    it("finds imported deck", () => {
      const targetDeck = createMockUserDeck(1, "Target", "target_id", null)
      const decks = [
        targetDeck,
        createMockUserDeck(2, "Other", "other_id", null),
      ]

      const result = getImportedDeck(decks, "target_id")

      expect(result).toBe(targetDeck)
    })

    it("returns null when not found", () => {
      const decks = [createMockUserDeck(1, "Deck", "deck_id", null)]

      const result = getImportedDeck(decks, "not_found")

      expect(result).toBe(null)
    })
  })

  describe("importMultipleDecks", () => {
    it("imports multiple decks with shared folders", () => {
      const vocab = createMockBuiltInDeck("genki_1_ch1_vocab", "Vocabulary")
      const kanji = createMockBuiltInDeck("genki_1_ch1_kanji", "Kanji")
      const chapter = createMockChapter("ch1", 1, "Chapter 1", [vocab, kanji])
      const textbook = createMockTextbook("genki_1", "Genki I", "Genki I")
      textbook.chapters = [chapter]

      const folders: DeckFolder[] = []
      const decks: UserDeck[] = []
      const builtInDecks = [vocab, kanji]
      const textbooks: [string, VocabTextbook][] = [["genki_1", textbook]]

      const results = importMultipleDecks(
        folders,
        decks,
        builtInDecks,
        textbooks,
        "test-user",
      )

      expect(results).toHaveLength(2)
      expect(results[0].folders).toHaveLength(2) // Genki I + Chapter 1
      expect(results[1].folders).toHaveLength(2) // Same folders reused
      expect(results[0].folders[0]).toBe(results[1].folders[0]) // Same Genki I folder
    })

    it("skips already imported decks", () => {
      const deck1 = createMockBuiltInDeck("deck1", "Deck 1")
      const deck2 = createMockBuiltInDeck("deck2", "Deck 2")
      const existingDeck = createMockUserDeck(1, "Existing", "deck1", null)

      const results = importMultipleDecks(
        [],
        [existingDeck],
        [deck1, deck2],
        textbooks,
        "test-user",
      )

      expect(results).toHaveLength(1) // Only deck2 imported
      expect(results[0].importedDeck.original_deck_id).toBe("deck2")
    })
  })

  describe("suggestFolderName", () => {
    it("suggests chapter name for known deck", () => {
      const result = suggestFolderName(genkiIDeck, textbooks)

      expect(result).toBe("Chapter 1")
    })

    it("falls back to deck title for unknown deck", () => {
      const unknownDeck = createMockBuiltInDeck("unknown", "Custom Deck")

      const result = suggestFolderName(unknownDeck, textbooks)

      expect(result).toBe("Custom Deck")
    })

    it("uses default for deck without title", () => {
      const deckWithoutTitle = createMockBuiltInDeck("no_title", "")

      const result = suggestFolderName(deckWithoutTitle, textbooks)

      expect(result).toBe("Custom Folder")
    })
  })

  describe("getFolderPathString", () => {
    it("returns 'Root' for root", () => {
      const result = getFolderPathString([], null)

      expect(result).toBe("Root")
    })

    it("builds path string for nested folder", () => {
      const folders = [
        createMockFolder(1, "Genki I", null),
        createMockFolder(2, "Chapter 1", 1),
        createMockFolder(3, "Vocabulary", 2),
      ]

      const result = getFolderPathString(folders, 3)

      expect(result).toBe("Genki I > Chapter 1 > Vocabulary")
    })

    it("uses custom separator", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child", 1),
      ]

      const result = getFolderPathString(folders, 2, " / ")

      expect(result).toBe("Root / Child")
    })

    it("handles broken folder path", () => {
      const folders = [createMockFolder(2, "Child", 999)] // Parent doesn't exist

      const result = getFolderPathString(folders, 2)

      expect(result).toBe("Child")
    })
  })

  describe("validateImport", () => {
    it("validates fresh import", () => {
      const decks: UserDeck[] = []
      const builtInDeck = createMockBuiltInDeck("new_deck", "New Deck")

      const result = validateImport(decks, builtInDeck)

      expect(result.isValid).toBe(true)
      expect(result.errors).toHaveLength(0)
      expect(result.warnings).toHaveLength(0)
    })

    it("warns about already imported deck", () => {
      const decks = [createMockUserDeck(1, "Existing", "existing_id", null)]
      const builtInDeck = createMockBuiltInDeck("existing_id", "Existing Deck")

      const result = validateImport(decks, builtInDeck)

      expect(result.isValid).toBe(true)
      expect(result.warnings).toContain("This deck has already been imported")
    })

    it("warns about name conflicts", () => {
      const decks = [
        createMockUserDeck(1, "Conflicting Name", "other_id", null),
      ]
      const builtInDeck = createMockBuiltInDeck("new_id", "Conflicting Name")

      const result = validateImport(decks, builtInDeck)

      expect(result.isValid).toBe(true)
      expect(result.warnings).toContain("A deck with this name already exists")
    })
  })
})
