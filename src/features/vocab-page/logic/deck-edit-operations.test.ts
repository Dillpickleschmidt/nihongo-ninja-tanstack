// vocab-page/logic/deck-edit-operations.test.ts
import { describe, it, expect } from "vitest"
import {
  getFolderDescendants,
  getDecksInFolderTree,
  applyUpdateDeck,
  applyUpdateFolder,
  applyDeleteDeck,
  applyDeleteFolder,
  applyEditOperation,
  type UpdateDeckOperation,
  type UpdateFolderOperation,
  type DeleteDeckOperation,
  type DeleteFolderOperation,
} from "./deck-edit-operations"
import {
  VALIDATION_RULES,
  validateName,
  validateDeckNameUnique,
  validateFolderNameUnique,
  validateNoCircularReference,
} from "../validation"

// Mock data helpers
const createMockDeck = (
  id: number,
  name: string,
  folderId: number | null = null,
): UserDeck => ({
  deck_id: id,
  deck_name: name,
  deck_description: null,
  original_deck_id: null,
  folder_id: folderId,
  source: "built-in",
  user_id: "test-user",
  created_at: new Date().toISOString(),
})

const createMockFolder = (
  id: number,
  name: string,
  parentId: number | null = null,
): DeckFolder => ({
  folder_id: id,
  folder_name: name,
  parent_folder_id: parentId,
  user_id: "test-user",
  created_at: new Date().toISOString(),
})

describe("deck-edit-operations", () => {
  describe("validateName", () => {
    it("accepts valid names", () => {
      const result = validateName("Valid Name")
      expect(result.isValid).toBe(true)
      expect(result.error).toBeUndefined()
    })

    it("rejects empty names", () => {
      const result = validateName("")
      expect(result.isValid).toBe(false)
      expect(result.error).toBe("Name cannot be empty")
    })

    it("rejects whitespace-only names", () => {
      const result = validateName("   ")
      expect(result.isValid).toBe(false)
      expect(result.error).toBe("Name cannot be empty")
    })

    it("rejects names that are too long", () => {
      const longName = "a".repeat(VALIDATION_RULES.NAME_MAX_LENGTH + 1)
      const result = validateName(longName)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe(
        `Name cannot exceed ${VALIDATION_RULES.NAME_MAX_LENGTH} characters`,
      )
    })

    it("accepts names at the maximum length", () => {
      const maxName = "a".repeat(VALIDATION_RULES.NAME_MAX_LENGTH)
      const result = validateName(maxName)
      expect(result.isValid).toBe(true)
    })
  })

  describe("validateDeckNameUnique", () => {
    const decks = [
      createMockDeck(1, "Deck One", null),
      createMockDeck(2, "Deck Two", 1),
      createMockDeck(3, "Deck Three", 1),
      createMockDeck(4, "Deck Four", 2),
    ]

    it("allows unique names in same folder", () => {
      const result = validateDeckNameUnique("New Deck", 1, decks)
      expect(result.isValid).toBe(true)
    })

    it("allows same name in different folders", () => {
      const result = validateDeckNameUnique("Deck Two", 2, decks)
      expect(result.isValid).toBe(true)
    })

    it("rejects duplicate names in same folder", () => {
      const result = validateDeckNameUnique("Deck Two", 1, decks)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe(
        "A deck with this name already exists in this folder",
      )
    })

    it("allows renaming deck to same name (excludes self)", () => {
      const result = validateDeckNameUnique("Deck Two", 1, decks, 2)
      expect(result.isValid).toBe(true)
    })

    it("handles case insensitive comparison", () => {
      const result = validateDeckNameUnique("DECK TWO", 1, decks)
      expect(result.isValid).toBe(false)
    })

    it("handles whitespace in comparison", () => {
      const result = validateDeckNameUnique("  Deck Two  ", 1, decks)
      expect(result.isValid).toBe(false)
    })
  })

  describe("validateFolderNameUnique", () => {
    const folders = [
      createMockFolder(1, "Folder One", null),
      createMockFolder(2, "Folder Two", 1),
      createMockFolder(3, "Folder Three", 1),
      createMockFolder(4, "Folder Four", 2),
    ]

    it("allows unique names in same parent", () => {
      const result = validateFolderNameUnique("New Folder", 1, folders)
      expect(result.isValid).toBe(true)
    })

    it("allows same name in different parents", () => {
      const result = validateFolderNameUnique("Folder Two", 2, folders)
      expect(result.isValid).toBe(true)
    })

    it("rejects duplicate names in same parent", () => {
      const result = validateFolderNameUnique("Folder Two", 1, folders)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe(
        "A folder with this name already exists in this location",
      )
    })

    it("allows renaming folder to same name (excludes self)", () => {
      const result = validateFolderNameUnique("Folder Two", 1, folders, 2)
      expect(result.isValid).toBe(true)
    })
  })

  describe("validateNoCircularReference", () => {
    const folders = [
      createMockFolder(1, "Root", null),
      createMockFolder(2, "Child", 1),
      createMockFolder(3, "Grandchild", 2),
    ]

    it("allows moving to root", () => {
      const result = validateNoCircularReference(2, null, folders)
      expect(result.isValid).toBe(true)
    })

    it("allows moving to valid parent", () => {
      const result = validateNoCircularReference(3, 1, folders)
      expect(result.isValid).toBe(true)
    })

    it("prevents moving folder into itself", () => {
      const result = validateNoCircularReference(2, 2, folders)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe("Cannot move folder into itself")
    })

    it("prevents moving folder into its descendant", () => {
      const result = validateNoCircularReference(1, 2, folders)
      expect(result.isValid).toBe(false)
      expect(result.error).toBe("Cannot move folder into its own descendant")
    })
  })

  describe("getFolderDescendants", () => {
    const folders = [
      createMockFolder(1, "Root", null),
      createMockFolder(2, "Child1", 1),
      createMockFolder(3, "Child2", 1),
      createMockFolder(4, "Grandchild1", 2),
      createMockFolder(5, "Grandchild2", 2),
      createMockFolder(6, "Other", null),
    ]

    it("returns all descendants", () => {
      const descendants = getFolderDescendants(1, folders)
      const descendantIds = descendants.map((f) => f.folder_id).sort()
      expect(descendantIds).toEqual([2, 3, 4, 5])
    })

    it("returns empty array for leaf folder", () => {
      const descendants = getFolderDescendants(6, folders)
      expect(descendants).toEqual([])
    })

    it("returns direct children only for single level", () => {
      const descendants = getFolderDescendants(3, folders)
      expect(descendants).toEqual([])
    })
  })

  describe("getDecksInFolderTree", () => {
    const folders = [
      createMockFolder(1, "Root", null),
      createMockFolder(2, "Child", 1),
    ]

    const decks = [
      createMockDeck(1, "Deck 1", null),
      createMockDeck(2, "Deck 2", 1),
      createMockDeck(3, "Deck 3", 1),
      createMockDeck(4, "Deck 4", 2),
    ]

    it("returns decks in folder and descendants", () => {
      const result = getDecksInFolderTree(1, folders, decks)
      const deckIds = result.map((d) => d.deck_id).sort()
      expect(deckIds).toEqual([2, 3, 4])
    })

    it("returns only decks in specific folder when no descendants", () => {
      const result = getDecksInFolderTree(2, folders, decks)
      const deckIds = result.map((d) => d.deck_id)
      expect(deckIds).toEqual([4])
    })
  })

  describe("applyUpdateDeck", () => {
    const folders = [createMockFolder(1, "Folder", null)]
    const decks = [
      createMockDeck(1, "Deck One", null),
      createMockDeck(2, "Deck Two", 1),
    ]

    it("updates deck name successfully", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(true)
      expect(
        result.newState!.decks.find((d) => d.deck_id === 1)!.deck_name,
      ).toBe("New Name")
    })

    it("updates deck folder successfully", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { folderId: 1 },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(true)
      expect(
        result.newState!.decks.find((d) => d.deck_id === 1)!.folder_id,
      ).toBe(1)
    })

    it("updates both name and folder", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name", folderId: 1 },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(true)
      const updatedDeck = result.newState!.decks.find((d) => d.deck_id === 1)!
      expect(updatedDeck.deck_name).toBe("New Name")
      expect(updatedDeck.folder_id).toBe(1)
    })

    it("fails for nonexistent deck", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 999,
        updates: { name: "New Name" },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Deck not found")
    })

    it("fails for invalid name", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "" },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Name cannot be empty")
    })

    it("fails for duplicate name in same folder", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "Deck Two", folderId: 1 },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe(
        "A deck with this name already exists in this folder",
      )
    })

    it("fails for nonexistent target folder", () => {
      const operation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { folderId: 999 },
      }

      const result = applyUpdateDeck(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Target folder not found")
    })
  })

  describe("applyUpdateFolder", () => {
    const folders = [
      createMockFolder(1, "Root", null),
      createMockFolder(2, "Child", 1),
    ]
    const decks: UserDeck[] = []

    it("updates folder name successfully", () => {
      const operation: UpdateFolderOperation = {
        type: "update-folder",
        folderId: 2,
        updates: { name: "New Name" },
      }

      const result = applyUpdateFolder(folders, decks, operation)
      expect(result.success).toBe(true)
      expect(
        result.newState!.folders.find((f) => f.folder_id === 2)!.folder_name,
      ).toBe("New Name")
    })

    it("updates folder parent successfully", () => {
      const operation: UpdateFolderOperation = {
        type: "update-folder",
        folderId: 2,
        updates: { parentId: null },
      }

      const result = applyUpdateFolder(folders, decks, operation)
      expect(result.success).toBe(true)
      expect(
        result.newState!.folders.find((f) => f.folder_id === 2)!
          .parent_folder_id,
      ).toBe(null)
    })

    it("fails for circular reference", () => {
      const operation: UpdateFolderOperation = {
        type: "update-folder",
        folderId: 1,
        updates: { parentId: 2 },
      }

      const result = applyUpdateFolder(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Cannot move folder into its own descendant")
    })
  })

  describe("applyDeleteDeck", () => {
    const folders: DeckFolder[] = []
    const decks = [
      createMockDeck(1, "Deck One", null),
      createMockDeck(2, "Deck Two", null),
    ]

    it("deletes deck successfully", () => {
      const operation: DeleteDeckOperation = {
        type: "delete-deck",
        deckId: 1,
      }

      const result = applyDeleteDeck(folders, decks, operation)
      expect(result.success).toBe(true)
      expect(result.newState!.decks).toHaveLength(1)
      expect(
        result.newState!.decks.find((d) => d.deck_id === 1),
      ).toBeUndefined()
    })
  })

  describe("applyDeleteFolder", () => {
    const folders = [
      createMockFolder(1, "Root", null),
      createMockFolder(2, "Child", 1),
      createMockFolder(3, "Grandchild", 2),
    ]
    const decks = [
      createMockDeck(1, "Deck 1", 1),
      createMockDeck(2, "Deck 2", 2),
      createMockDeck(3, "Deck 3", 3),
      createMockDeck(4, "Deck 4", null),
    ]

    it("deletes folder with move-up strategy", () => {
      const operation: DeleteFolderOperation = {
        type: "delete-folder",
        folderId: 2,
        strategy: "move-up",
      }

      const result = applyDeleteFolder(folders, decks, operation)
      expect(result.success).toBe(true)

      // Folder 2 and 3 should be deleted
      expect(result.newState!.folders).toHaveLength(1)
      expect(result.newState!.folders[0].folder_id).toBe(1)

      // Decks should be moved to parent (folder 1)
      const deck2 = result.newState!.decks.find((d) => d.deck_id === 2)!
      const deck3 = result.newState!.decks.find((d) => d.deck_id === 3)!
      expect(deck2.folder_id).toBe(1) // Moved from folder 2 to its parent (1)
      expect(deck3.folder_id).toBe(1) // Moved from folder 3 to root's parent (1)
    })

    it("deletes folder with delete-all strategy", () => {
      const operation: DeleteFolderOperation = {
        type: "delete-folder",
        folderId: 2,
        strategy: "delete-all",
      }

      const result = applyDeleteFolder(folders, decks, operation)
      expect(result.success).toBe(true)

      // Folder 2 and 3 should be deleted
      expect(result.newState!.folders).toHaveLength(1)

      // Only decks not in deleted folders should remain
      expect(result.newState!.decks).toHaveLength(2)
      const remainingDeckIds = result
        .newState!.decks.map((d) => d.deck_id)
        .sort()
      expect(remainingDeckIds).toEqual([1, 4]) // Deck 1 (in folder 1) and Deck 4 (no folder)
    })

    it("fails for nonexistent folder", () => {
      const operation: DeleteFolderOperation = {
        type: "delete-folder",
        folderId: 999,
        strategy: "move-up",
      }

      const result = applyDeleteFolder(folders, decks, operation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Folder not found")
    })
  })

  describe("applyEditOperation", () => {
    const folders = [createMockFolder(1, "Folder", null)]
    const decks = [createMockDeck(1, "Deck", null)]

    it("delegates to correct operation handler", () => {
      const updateOperation: UpdateDeckOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      }

      const result = applyEditOperation(folders, decks, updateOperation)
      expect(result.success).toBe(true)
      expect(result.newState!.decks[0].deck_name).toBe("New Name")
    })

    it("handles unknown operation type", () => {
      const invalidOperation = {
        type: "invalid-operation",
      } as any

      const result = applyEditOperation(folders, decks, invalidOperation)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Unknown operation type")
    })
  })
})
