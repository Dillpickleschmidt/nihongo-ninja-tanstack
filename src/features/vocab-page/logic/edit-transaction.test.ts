// vocab-page/logic/edit-transaction.test.ts
import { describe, it, expect } from "vitest"
import {
  EditTransaction,
  createSingleTransaction,
  createDeckUpdateTransaction,
  createFolderUpdateTransaction,
  createDeckDeletionTransaction,
  createFolderDeletionTransaction,
  createDeckMoveTransaction,
  createFolderMoveTransaction,
  type AppState,
} from "./edit-transaction"
import type { EditOperation } from "./deck-edit-operations"

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

const createMockState = (): AppState => ({
  folders: [
    createMockFolder(1, "Folder One", null),
    createMockFolder(2, "Folder Two", 1),
  ],
  decks: [
    createMockDeck(1, "Deck One", null),
    createMockDeck(2, "Deck Two", 1),
  ],
})

describe("EditTransaction", () => {
  describe("basic operations", () => {
    it("starts empty", () => {
      const transaction = new EditTransaction()
      expect(transaction.isEmpty()).toBe(true)
      expect(transaction.size()).toBe(0)
      expect(transaction.getOperations()).toEqual([])
    })

    it("adds operations", () => {
      const transaction = new EditTransaction()
      const operation: EditOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      }

      transaction.add(operation)
      expect(transaction.isEmpty()).toBe(false)
      expect(transaction.size()).toBe(1)
      expect(transaction.getOperations()).toEqual([operation])
    })

    it("adds multiple operations", () => {
      const transaction = new EditTransaction()
      const op1: EditOperation = {
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      }
      const op2: EditOperation = {
        type: "update-folder",
        folderId: 1,
        updates: { name: "New Folder Name" },
      }

      transaction.add(op1)
      transaction.add(op2)
      expect(transaction.size()).toBe(2)
      expect(transaction.getOperations()).toEqual([op1, op2])
    })

    it("clears operations", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      })

      transaction.clear()
      expect(transaction.isEmpty()).toBe(true)
      expect(transaction.size()).toBe(0)
    })
  })

  describe("validation", () => {
    it("rejects empty transaction", () => {
      const transaction = new EditTransaction()
      const state = createMockState()

      const result = transaction.validate(state)
      expect(result.success).toBe(false)
      expect(result.error).toBe("Transaction is empty")
    })

    it("validates single operation successfully", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(true)
      expect(
        result.newState!.decks.find((d) => d.deck_id === 1)!.deck_name,
      ).toBe("New Name")
    })

    it("validates multiple operations successfully", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Deck Name" },
      })
      transaction.add({
        type: "update-folder",
        folderId: 1,
        updates: { name: "New Folder Name" },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(true)
      expect(
        result.newState!.decks.find((d) => d.deck_id === 1)!.deck_name,
      ).toBe("New Deck Name")
      expect(
        result.newState!.folders.find((f) => f.folder_id === 1)!.folder_name,
      ).toBe("New Folder Name")
    })

    it("fails on first invalid operation", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 999, // Non-existent deck
        updates: { name: "New Name" },
      })
      transaction.add({
        type: "update-folder",
        folderId: 1,
        updates: { name: "New Folder Name" },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(false)
      expect(result.error).toContain("Operation 1 failed")
      expect(result.error).toContain("update deck 999")
      expect(result.error).toContain("Deck not found")
    })

    it("fails on second operation that creates conflict with first", () => {
      const transaction = new EditTransaction()
      // First operation: move deck 1 to folder 1
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { folderId: 1 },
      })
      // Second operation: try to rename deck 1 to same name as deck 2 (which is already in folder 1)
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "Deck Two" },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(false)
      expect(result.error).toContain("Operation 2 failed")
      expect(result.error).toContain("already exists")
    })

    it("applies operations sequentially", () => {
      const transaction = new EditTransaction()
      // Move deck 1 to folder 1, then rename it
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { folderId: 1 },
      })
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "Moved and Renamed" },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(true)
      const updatedDeck = result.newState!.decks.find((d) => d.deck_id === 1)!
      expect(updatedDeck.folder_id).toBe(1)
      expect(updatedDeck.deck_name).toBe("Moved and Renamed")
    })
  })

  describe("preview", () => {
    it("returns same result as validate", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 1,
        updates: { name: "New Name" },
      })

      const state = createMockState()
      const validateResult = transaction.validate(state)
      const previewResult = transaction.preview(state)

      expect(previewResult).toEqual(validateResult)
    })
  })

  describe("helper functions", () => {
    describe("createSingleTransaction", () => {
      it("creates transaction with single operation", () => {
        const operation: EditOperation = {
          type: "update-deck",
          deckId: 1,
          updates: { name: "New Name" },
        }

        const transaction = createSingleTransaction(operation)
        expect(transaction.size()).toBe(1)
        expect(transaction.getOperations()[0]).toEqual(operation)
      })
    })

    describe("createDeckUpdateTransaction", () => {
      it("creates deck update transaction", () => {
        const transaction = createDeckUpdateTransaction(1, {
          name: "New Name",
          folderId: 2,
        })

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-deck")
        expect((operation as any).deckId).toBe(1)
        expect((operation as any).updates).toEqual({
          name: "New Name",
          folderId: 2,
        })
      })
    })

    describe("createFolderUpdateTransaction", () => {
      it("creates folder update transaction", () => {
        const transaction = createFolderUpdateTransaction(1, {
          name: "New Name",
          parentId: 2,
        })

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-folder")
        expect((operation as any).folderId).toBe(1)
        expect((operation as any).updates).toEqual({
          name: "New Name",
          parentId: 2,
        })
      })
    })

    describe("createDeckDeletionTransaction", () => {
      it("creates deck deletion transaction", () => {
        const transaction = createDeckDeletionTransaction(1)

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("delete-deck")
        expect((operation as any).deckId).toBe(1)
      })
    })

    describe("createFolderDeletionTransaction", () => {
      it("creates folder deletion transaction", () => {
        const transaction = createFolderDeletionTransaction(1, "move-up")

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("delete-folder")
        expect((operation as any).folderId).toBe(1)
        expect((operation as any).strategy).toBe("move-up")
      })
    })

    describe("createDeckMoveTransaction", () => {
      it("creates deck move transaction without rename", () => {
        const transaction = createDeckMoveTransaction(1, 2)

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-deck")
        expect((operation as any).deckId).toBe(1)
        expect((operation as any).updates).toEqual({ folderId: 2 })
      })

      it("creates deck move transaction with rename", () => {
        const transaction = createDeckMoveTransaction(1, 2, "New Name")

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-deck")
        expect((operation as any).deckId).toBe(1)
        expect((operation as any).updates).toEqual({
          folderId: 2,
          name: "New Name",
        })
      })
    })

    describe("createFolderMoveTransaction", () => {
      it("creates folder move transaction without rename", () => {
        const transaction = createFolderMoveTransaction(1, 2)

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-folder")
        expect((operation as any).folderId).toBe(1)
        expect((operation as any).updates).toEqual({ parentId: 2 })
      })

      it("creates folder move transaction with rename", () => {
        const transaction = createFolderMoveTransaction(1, 2, "New Name")

        expect(transaction.size()).toBe(1)
        const operation = transaction.getOperations()[0]
        expect(operation.type).toBe("update-folder")
        expect((operation as any).folderId).toBe(1)
        expect((operation as any).updates).toEqual({
          parentId: 2,
          name: "New Name",
        })
      })
    })
  })

  describe("error messages", () => {
    it("includes operation description in error messages", () => {
      const transaction = new EditTransaction()
      transaction.add({
        type: "update-deck",
        deckId: 999,
        updates: { name: "New Name", folderId: 1 },
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.success).toBe(false)
      expect(result.error).toContain("Operation 1 failed")
      expect(result.error).toContain("update deck 999 (name, folder)")
      expect(result.error).toContain("Deck not found")
    })

    it("describes different operation types correctly", () => {
      const transaction = new EditTransaction()

      // Add an operation that will fail
      transaction.add({
        type: "delete-folder",
        folderId: 999,
        strategy: "move-up",
      })

      const state = createMockState()
      const result = transaction.validate(state)

      expect(result.error).toContain("delete folder 999 (move-up)")
    })
  })
})
