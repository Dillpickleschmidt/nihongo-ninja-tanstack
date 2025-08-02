// vocab-page/logic/folder-hierarchy.test.ts
import { describe, it, expect } from "vitest"
import {
  buildBreadcrumbPath,
  getFolderContents,
  findOrCreateFolderPath,
  getFolderDepth,
  getParentFolderId,
  getFoldersAtDepth,
  isFolderAncestor,
  getRootFolder,
  buildFolderTree,
  flattenFolderTree,
  searchFolders,
  getFolderStats,
} from "./folder-hierarchy"

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

describe("folder-hierarchy", () => {
  describe("buildBreadcrumbPath", () => {
    it("returns empty array for root", () => {
      const folders: DeckFolder[] = []

      const result = buildBreadcrumbPath(folders, null)

      expect(result).toEqual([])
    })

    it("returns single folder for root-level folder", () => {
      const folders = [createMockFolder(1, "Root Folder", null)]

      const result = buildBreadcrumbPath(folders, 1)

      expect(result).toHaveLength(1)
      expect(result[0].folder_name).toBe("Root Folder")
    })

    it("returns complete path for nested folder", () => {
      const folders = [
        createMockFolder(1, "Genki I", null),
        createMockFolder(2, "Chapter 1", 1),
        createMockFolder(3, "Vocabulary", 2),
      ]

      const result = buildBreadcrumbPath(folders, 3)

      expect(result).toHaveLength(3)
      expect(result.map((f) => f.folder_name)).toEqual([
        "Genki I",
        "Chapter 1",
        "Vocabulary",
      ])
    })
  })

  describe("getFolderContents", () => {
    it("returns root level contents", () => {
      const folders = [
        createMockFolder(1, "Folder 1", null),
        createMockFolder(2, "Folder 2", null),
        createMockFolder(3, "Child", 1),
      ]
      const decks = [
        createMockDeck(1, "Root Deck", null),
        createMockDeck(2, "Child Deck", 1),
      ]

      const result = getFolderContents(folders, decks, null)

      expect(result.folders).toHaveLength(2)
      expect(result.folders.map((f) => f.folder_name)).toEqual([
        "Folder 1",
        "Folder 2",
      ])
      expect(result.decks).toHaveLength(1)
      expect(result.decks[0].deck_name).toBe("Root Deck")
    })

    it("returns specific folder contents", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child 1", 1),
        createMockFolder(3, "Child 2", 1),
      ]
      const decks = [
        createMockDeck(1, "Parent Deck", 1),
        createMockDeck(2, "Root Deck", null),
      ]

      const result = getFolderContents(folders, decks, 1)

      expect(result.folders).toHaveLength(2)
      expect(result.decks).toHaveLength(1)
      expect(result.decks[0].deck_name).toBe("Parent Deck")
    })
  })

  describe("findOrCreateFolderPath", () => {
    it("creates new folder path from empty", () => {
      const folders: DeckFolder[] = []
      const pathNames = ["Genki I", "Chapter 1"]

      const result = findOrCreateFolderPath(folders, pathNames, "test-user")

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
      const existingFolder = createMockFolder(1, "Genki I", null)
      const folders = [existingFolder]
      const pathNames = ["Genki I", "Chapter 1"]

      const result = findOrCreateFolderPath(folders, pathNames, "test-user")

      expect(result.folders).toHaveLength(2)
      expect(result.folders[0]).toBe(existingFolder) // Reused existing
      expect(result.folders[1].folder_name).toBe("Chapter 1")
      expect(result.folders[1].parent_folder_id).toBe(1)
    })

    it("creates complex nested structure", () => {
      const folders: DeckFolder[] = []
      const pathNames = ["Genki I", "Chapter 1", "Vocabulary", "Lesson A"]

      const result = findOrCreateFolderPath(folders, pathNames, "test-user")

      expect(result.folders).toHaveLength(4)

      // Check hierarchy
      const genki = result.folders.find((f) => f.folder_name === "Genki I")!
      const chapter = result.folders.find((f) => f.folder_name === "Chapter 1")!
      const vocab = result.folders.find((f) => f.folder_name === "Vocabulary")!
      const lesson = result.folders.find((f) => f.folder_name === "Lesson A")!

      expect(genki.parent_folder_id).toBe(null)
      expect(chapter.parent_folder_id).toBe(genki.folder_id)
      expect(vocab.parent_folder_id).toBe(chapter.folder_id)
      expect(lesson.parent_folder_id).toBe(vocab.folder_id)
      expect(result.targetFolderId).toBe(lesson.folder_id)
    })
  })

  describe("getFolderDepth", () => {
    it("returns 0 for root", () => {
      const folders: DeckFolder[] = []

      const result = getFolderDepth(folders, null)

      expect(result).toBe(0)
    })

    it("returns correct depth for nested folders", () => {
      const folders = [
        createMockFolder(1, "Level 1", null),
        createMockFolder(2, "Level 2", 1),
        createMockFolder(3, "Level 3", 2),
      ]

      expect(getFolderDepth(folders, 1)).toBe(1)
      expect(getFolderDepth(folders, 2)).toBe(2)
      expect(getFolderDepth(folders, 3)).toBe(3)
    })
  })

  describe("getParentFolderId", () => {
    it("returns null for root", () => {
      const folders: DeckFolder[] = []

      const result = getParentFolderId(folders, null)

      expect(result).toBe(null)
    })

    it("returns parent ID for child folder", () => {
      const folders = [
        createMockFolder(1, "Parent", null),
        createMockFolder(2, "Child", 1),
      ]

      const result = getParentFolderId(folders, 2)

      expect(result).toBe(1)
    })
  })

  describe("getFoldersAtDepth", () => {
    it("gets all folders at specific depth", () => {
      const folders = [
        createMockFolder(1, "Root 1", null), // depth 1
        createMockFolder(2, "Root 2", null), // depth 1
        createMockFolder(3, "Child 1", 1), // depth 2
        createMockFolder(4, "Child 2", 2), // depth 2
        createMockFolder(5, "Grandchild", 3), // depth 3
      ]

      const depth1 = getFoldersAtDepth(folders, 1)
      const depth2 = getFoldersAtDepth(folders, 2)
      const depth3 = getFoldersAtDepth(folders, 3)

      expect(depth1).toHaveLength(2)
      expect(depth1.map((f) => f.folder_name)).toEqual(["Root 1", "Root 2"])
      expect(depth2).toHaveLength(2)
      expect(depth2.map((f) => f.folder_name)).toEqual(["Child 1", "Child 2"])
      expect(depth3).toHaveLength(1)
      expect(depth3[0].folder_name).toBe("Grandchild")
    })
  })

  describe("isFolderAncestor", () => {
    it("identifies ancestor relationships", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
        createMockFolder(4, "Other", null),
      ]

      expect(isFolderAncestor(folders, 1, 3)).toBe(true) // Root is ancestor of Grandchild
      expect(isFolderAncestor(folders, 2, 3)).toBe(true) // Child is ancestor of Grandchild
      expect(isFolderAncestor(folders, 3, 1)).toBe(false) // Grandchild is not ancestor of Root
      expect(isFolderAncestor(folders, 4, 3)).toBe(false) // Other is not ancestor of Grandchild
    })
  })

  describe("getRootFolder", () => {
    it("gets root folder of hierarchy", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
      ]

      const result = getRootFolder(folders, 3)

      expect(result?.folder_name).toBe("Root")
      expect(result?.folder_id).toBe(1)
    })

    it("returns null for non-existent folder", () => {
      const folders: DeckFolder[] = []

      const result = getRootFolder(folders, 999)

      expect(result).toBe(null)
    })
  })

  describe("buildFolderTree", () => {
    it("builds hierarchical tree structure", () => {
      const folders = [
        createMockFolder(1, "Root 1", null),
        createMockFolder(2, "Root 2", null),
        createMockFolder(3, "Child 1", 1),
        createMockFolder(4, "Child 2", 1),
        createMockFolder(5, "Grandchild", 3),
      ]

      const tree = buildFolderTree(folders)

      expect(tree).toHaveLength(2) // Two root folders
      expect(tree[0].folder.folder_name).toBe("Root 1")
      expect(tree[0].children).toHaveLength(2) // Two children
      expect(tree[0].children[0].folder.folder_name).toBe("Child 1")
      expect(tree[0].children[0].children).toHaveLength(1) // One grandchild
      expect(tree[0].children[0].children[0].folder.folder_name).toBe(
        "Grandchild",
      )
    })
  })

  describe("flattenFolderTree", () => {
    it("flattens tree with depth information", () => {
      const folders = [
        createMockFolder(1, "Root", null),
        createMockFolder(2, "Child", 1),
        createMockFolder(3, "Grandchild", 2),
      ]

      const flattened = flattenFolderTree(folders)

      expect(flattened).toHaveLength(3)
      expect(flattened[0].folder.folder_name).toBe("Root")
      expect(flattened[0].depth).toBe(0)
      expect(flattened[0].hasChildren).toBe(true)
      expect(flattened[1].folder.folder_name).toBe("Child")
      expect(flattened[1].depth).toBe(1)
      expect(flattened[2].folder.folder_name).toBe("Grandchild")
      expect(flattened[2].depth).toBe(2)
      expect(flattened[2].hasChildren).toBe(false)
    })
  })

  describe("searchFolders", () => {
    it("finds folders by partial name match", () => {
      const folders = [
        createMockFolder(1, "Genki I Chapter 1", null),
        createMockFolder(2, "Genki II Chapter 1", null),
        createMockFolder(3, "Custom Deck", null),
      ]

      const result = searchFolders(folders, "genki")

      expect(result).toHaveLength(2)
      expect(result.map((f) => f.folder_name)).toEqual([
        "Genki I Chapter 1",
        "Genki II Chapter 1",
      ])
    })

    it("returns empty array for empty search", () => {
      const folders = [createMockFolder(1, "Test", null)]

      const result = searchFolders(folders, "")

      expect(result).toEqual([])
    })

    it("handles case insensitive search", () => {
      const folders = [createMockFolder(1, "Chapter One", null)]

      const result = searchFolders(folders, "CHAPTER")

      expect(result).toHaveLength(1)
      expect(result[0].folder_name).toBe("Chapter One")
    })
  })

  describe("getFolderStats", () => {
    it("calculates folder statistics", () => {
      const folders = [
        createMockFolder(1, "Root 1", null), // depth 1
        createMockFolder(2, "Root 2", null), // depth 1
        createMockFolder(3, "Child", 1), // depth 2
        createMockFolder(4, "Grandchild", 3), // depth 3
      ]
      const decks = [
        createMockDeck(1, "Deck 1", null),
        createMockDeck(2, "Deck 2", 1),
        createMockDeck(3, "Deck 3", 3),
      ]

      const stats = getFolderStats(folders, decks)

      expect(stats.totalFolders).toBe(4)
      expect(stats.maxDepth).toBe(3)
      expect(stats.rootFolders).toBe(2)
      expect(stats.totalDecks).toBe(3)
    })

    it("handles empty collections", () => {
      const stats = getFolderStats([], [])

      expect(stats.totalFolders).toBe(0)
      expect(stats.maxDepth).toBe(0)
      expect(stats.rootFolders).toBe(0)
      expect(stats.totalDecks).toBe(0)
    })
  })
})

