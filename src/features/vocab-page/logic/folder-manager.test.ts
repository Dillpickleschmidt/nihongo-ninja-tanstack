// vocab-page/logic/folder-manager.test.ts
import { describe, it, expect, beforeEach } from "vitest"
import {
  createFolder,
  updateFolder,
  deleteFolder,
  findFolder,
  getFolderChildren,
  findFolderByName,
  getAllDescendantIds,
  countDecksInFolder,
  validateFolderMove,
  getFolderPath,
  resetFolderIdCounter,
} from "./folder-manager"

// Mock data helpers
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

const createMockDeck = (
  id: number,
  name: string,
  folderId: number | null,
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

describe("folder-manager", () => {
  beforeEach(() => {
    resetFolderIdCounter(1000)
  })

  describe("createFolder", () => {
    it("creates a new folder at root level", () => {
      const folders: DeckFolder[] = []
      const result = createFolder(folders, "Test Folder", null, "test-user")

      expect(result.folders).toHaveLength(1)
      expect(result.newFolder.folder_name).toBe("Test Folder")
      expect(result.newFolder.parent_folder_id).toBe(null)
      expect(result.newFolder.folder_id).toBe(1000)
      expect(result.newFolder.user_id).toBe("test-user")
    })

    it("creates a new folder as child of existing folder", () => {
      const parentFolder = createMockFolder(1, "Parent", null)
      const folders = [parentFolder]

      const result = createFolder(folders, "Child Folder", 1, "test-user")

      expect(result.folders).toHaveLength(2)
      expect(result.newFolder.folder_name).toBe("Child Folder")
      expect(result.newFolder.parent_folder_id).toBe(1)
    })

    it("increments folder IDs correctly", () => {
      const folders: DeckFolder[] = []

      const result1 = createFolder(folders, "Folder 1", null)
      const result2 = createFolder(result1.folders, "Folder 2", null)

      expect(result1.newFolder.folder_id).toBe(1000)
      expect(result2.newFolder.folder_id).toBe(1001)
    })
  })

  describe("updateFolder", () => {
    it("updates folder name", () => {
      const folders = [createMockFolder(1, "Old Name", null)]

      const result = updateFolder(folders, 1, { folder_name: "New Name" })

      expect(result).toHaveLength(1)
      expect(result[0].folder_name).toBe("New Name")
      expect(result[0].folder_id).toBe(1)
    })

    it("updates folder parent", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child", null),
      ]

      const result = updateFolder(folders, 2, { parent_folder_id: 1 })

      expect(result[1].parent_folder_id).toBe(1)
    })

    it("does not modify other folders", () => {
      const folders = [
        createMockFolder(1, "Folder 1", null),
        createMockFolder(2, "Folder 2", null),
      ]

      const result = updateFolder(folders, 1, { folder_name: "Updated" })

      expect(result[0].folder_name).toBe("Updated")
      expect(result[1].folder_name).toBe("Folder 2")
    })
  })

  describe("deleteFolder", () => {
    it("deletes a single folder", () => {
      const folders = [createMockFolder(1, "To Delete", null)]

      const result = deleteFolder(folders, 1)

      expect(result).toHaveLength(0)
    })

    it("deletes folder and all descendants", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
        createMockFolder(4, "Other", null),
      ]

      const result = deleteFolder(folders, 1)

      expect(result).toHaveLength(1)
      expect(result[0].folder_id).toBe(4)
    })
  })

  describe("findFolder", () => {
    it("finds existing folder", () => {
      const folders = [
        createMockFolder(1, "Folder 1", null),
        createMockFolder(2, "Folder 2", null),
      ]

      const result = findFolder(folders, 2)

      expect(result?.folder_name).toBe("Folder 2")
    })

    it("returns null for non-existent folder", () => {
      const folders = [createMockFolder(1, "Folder 1", null)]

      const result = findFolder(folders, 999)

      expect(result).toBe(null)
    })
  })

  describe("getFolderChildren", () => {
    it("gets root level folders", () => {
      const folders = [
        createMockFolder(1, "Root 1", null),
        createMockFolder(2, "Root 2", null),
        createMockFolder(3, "Child of 1", 1),
      ]

      const result = getFolderChildren(folders, null)

      expect(result).toHaveLength(2)
      expect(result.map((f) => f.folder_name)).toEqual(["Root 1", "Root 2"])
    })

    it("gets children of specific folder", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child 1", 1),
        createMockFolder(3, "Child 2", 1),
        createMockFolder(4, "Other", null),
      ]

      const result = getFolderChildren(folders, 1)

      expect(result).toHaveLength(2)
      expect(result.map((f) => f.folder_name)).toEqual(["Child 1", "Child 2"])
    })
  })

  describe("findFolderByName", () => {
    it("finds folder by name in root", () => {
      const folders = [
        createMockFolder(1, "Unique Name", null),
        createMockFolder(2, "Unique Name", 1),
      ]

      const result = findFolderByName(folders, "Unique Name", null)

      expect(result?.folder_id).toBe(1)
    })

    it("finds folder by name in specific parent", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Unique Name", null),
        createMockFolder(3, "Unique Name", 1),
      ]

      const result = findFolderByName(folders, "Unique Name", 1)

      expect(result?.folder_id).toBe(3)
    })

    it("returns null when not found", () => {
      const folders = [createMockFolder(1, "Folder", null)]

      const result = findFolderByName(folders, "Not Found", null)

      expect(result).toBe(null)
    })
  })

  describe("getAllDescendantIds", () => {
    it("gets all descendants in deep hierarchy", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child 1", 1),
        createMockFolder(3, "Child 2", 1),
        createMockFolder(4, "Grandchild", 2),
        createMockFolder(5, "Other Root", null),
      ]

      const result = getAllDescendantIds(folders, 1)

      expect(result.size).toBe(3)
      expect(result.has(2)).toBe(true)
      expect(result.has(3)).toBe(true)
      expect(result.has(4)).toBe(true)
      expect(result.has(5)).toBe(false)
    })

    it("returns empty set for leaf folder", () => {
      const folders = [createMockFolder(1, "Leaf", null)]

      const result = getAllDescendantIds(folders, 1)

      expect(result.size).toBe(0)
    })
  })

  describe("countDecksInFolder", () => {
    it("counts decks in root level", () => {
      const folders: DeckFolder[] = []
      const decks = [
        createMockDeck(1, "Deck 1", null),
        createMockDeck(2, "Deck 2", null),
        createMockDeck(3, "Deck 3", 1),
      ]

      const result = countDecksInFolder(folders, decks, null)

      expect(result).toBe(2)
    })

    it("counts decks recursively in subfolders", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child", 1),
      ]
      const decks = [
        createMockDeck(1, "Deck in Parent", 1),
        createMockDeck(2, "Deck in Child", 2),
        createMockDeck(3, "Deck in Root", null),
      ]

      const result = countDecksInFolder(folders, decks, 1)

      expect(result).toBe(2) // 1 in parent + 1 in child
    })
  })

  describe("validateFolderMove", () => {
    it("allows move to root", () => {
      const folders = [createMockFolder(1, "Folder", null)]

      const result = validateFolderMove(folders, 1, null)

      expect(result).toBe(true)
    })

    it("prevents folder from being parent of itself", () => {
      const folders = [createMockFolder(1, "Folder", null)]

      const result = validateFolderMove(folders, 1, 1)

      expect(result).toBe(false)
    })

    it("prevents circular reference", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
      ]

      const result = validateFolderMove(folders, 1, 3)

      expect(result).toBe(false)
    })

    it("allows valid move", () => {
      const folders = [
        createMockFolder(1, "Folder A", null),
        createMockFolder(2, "Folder B", null),
      ]

      const result = validateFolderMove(folders, 1, 2)

      expect(result).toBe(true)
    })
  })

  describe("getFolderPath", () => {
    it("returns empty array for root", () => {
      const folders: DeckFolder[] = []

      const result = getFolderPath(folders, null)

      expect(result).toEqual([])
    })

    it("returns path for nested folder", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
      ]

      const result = getFolderPath(folders, 3)

      expect(result).toEqual([1, 2, 3])
    })

    it("returns single item for root-level folder", () => {
      const folders = [createMockFolder(1, "Root Folder", null)]

      const result = getFolderPath(folders, 1)

      expect(result).toEqual([1])
    })
  })

  describe("resetFolderIdCounter", () => {
    it("resets counter to specified value", () => {
      resetFolderIdCounter(2000)

      const folders: DeckFolder[] = []
      const result = createFolder(folders, "Test", null)

      expect(result.newFolder.folder_id).toBe(2000)
    })
  })
})

