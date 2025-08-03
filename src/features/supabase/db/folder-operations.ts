// src/features/supabase/db/folder-operations.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "../getUser"
import type { VocabBuiltInDeck } from "@/features/vocab-page/types"
import { generateDeckTitle } from "@/features/vocab-page/logic/deck-import-logic"
import type { EditOperation } from "@/features/vocab-page/logic/deck-edit-operations"

export type FoldersAndDecksData = {
  folders: DeckFolder[]
  decks: UserDeck[]
}

/**
 * Fetches all folders and decks for a user in a single query
 */
export async function getUserFoldersAndDecks(
  userId: string,
): Promise<FoldersAndDecksData> {
  const supabase = createSupabaseClient()

  // Fetch folders and decks in parallel
  const [foldersResult, decksResult] = await Promise.all([
    supabase
      .from("deck_folders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),

    supabase
      .from("user_decks")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true }),
  ])

  if (foldersResult.error) throw foldersResult.error
  if (decksResult.error) throw decksResult.error

  return {
    folders: foldersResult.data || [],
    decks: decksResult.data || [],
  }
}

/**
 * Creates a new folder for the current user
 */
export const createFolderServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: { folder_name: string; parent_folder_id: number | null }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const insertData: DeckFolderInsert = {
      folder_name: data.folder_name,
      parent_folder_id: data.parent_folder_id,
      user_id: response.user.id,
    }

    const { data: folder, error } = await supabase
      .from("deck_folders")
      .insert([insertData])
      .select()
      .single()

    if (error) throw error
    return folder as DeckFolder
  })

/**
 * Updates an existing folder for the current user
 */
export const updateFolderServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      folder_id: number
      folder_name?: string
      parent_folder_id?: number | null
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const updateData: DeckFolderUpdate = {}
    if (data.folder_name !== undefined)
      updateData.folder_name = data.folder_name
    if (data.parent_folder_id !== undefined)
      updateData.parent_folder_id = data.parent_folder_id

    const { data: folder, error } = await supabase
      .from("deck_folders")
      .update(updateData)
      .eq("folder_id", data.folder_id)
      .eq("user_id", response.user.id) // Ensure user owns the folder
      .select()
      .single()

    if (error) throw error
    return folder as DeckFolder
  })

/**
 * Deletes a folder and all its descendants for the current user
 */
export const deleteFolderServerFn = createServerFn({ method: "POST" })
  .validator((data: { folder_id: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    // Note: This will cascade delete due to foreign key constraints
    // First, we should move any decks in this folder to parent or root
    await supabase
      .from("user_decks")
      .update({ folder_id: null })
      .eq("folder_id", data.folder_id)
      .eq("user_id", response.user.id)

    // Delete the folder (will cascade to child folders)
    const { error } = await supabase
      .from("deck_folders")
      .delete()
      .eq("folder_id", data.folder_id)
      .eq("user_id", response.user.id)

    if (error) throw error
  })

/**
 * Creates a new user deck for the current user
 */
export const createUserDeckServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      deck_name: string
      deck_description?: string | null
      folder_id?: number | null
      original_deck_id?: string | null
      source: string
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const insertData: UserDeckInsert = {
      deck_name: data.deck_name,
      deck_description: data.deck_description || null,
      folder_id: data.folder_id || null,
      original_deck_id: data.original_deck_id || null,
      source: data.source,
      user_id: response.user.id,
    }

    const { data: deck, error } = await supabase
      .from("user_decks")
      .insert([insertData])
      .select()
      .single()

    if (error) throw error
    return deck as UserDeck
  })

/**
 * Updates an existing user deck for the current user
 */
export const updateUserDeckServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      deck_id: number
      deck_name?: string
      deck_description?: string | null
      folder_id?: number | null
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const updateData: UserDeckUpdate = {}
    if (data.deck_name !== undefined) updateData.deck_name = data.deck_name
    if (data.deck_description !== undefined)
      updateData.deck_description = data.deck_description
    if (data.folder_id !== undefined) updateData.folder_id = data.folder_id

    const { data: deck, error } = await supabase
      .from("user_decks")
      .update(updateData)
      .eq("deck_id", data.deck_id)
      .eq("user_id", response.user.id) // Ensure user owns the deck
      .select()
      .single()

    if (error) throw error
    return deck as UserDeck
  })

/**
 * Helper function that ensures a folder hierarchy exists, creating folders as needed
 * Used during deck import to automatically create folder structure
 */
export async function ensureFolderHierarchy(
  folders: DeckFolder[],
  pathNames: string[],
  userId: string,
): Promise<{ folders: DeckFolder[]; targetFolderId: number | null }> {
  if (pathNames.length === 0) {
    return { folders, targetFolderId: null }
  }

  const supabase = createSupabaseClient()
  let currentFolders = [...folders]
  let currentParentId: number | null = null

  for (const folderName of pathNames) {
    // Check if folder already exists at this level
    let existingFolder = currentFolders.find(
      (f) =>
        f.folder_name === folderName && f.parent_folder_id === currentParentId,
    )

    if (!existingFolder) {
      // Create the folder
      const insertData: DeckFolderInsert = {
        folder_name: folderName,
        parent_folder_id: currentParentId,
        user_id: userId,
      }

      const { data: newFolder, error } = await supabase
        .from("deck_folders")
        .insert([insertData])
        .select()
        .single()

      if (error) throw error
      existingFolder = newFolder as DeckFolder
      currentFolders.push(existingFolder)
    }

    currentParentId = existingFolder.folder_id
  }

  return {
    folders: currentFolders,
    targetFolderId: currentParentId,
  }
}

/**
 * Server function that imports a built-in deck with automatic folder creation
 * This replaces the local import logic with database persistence
 */
export const importBuiltInDeckServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      builtInDeck: VocabBuiltInDeck
      textbooks: [string, any][] // Type will be refined later
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { builtInDeck, textbooks } = data

    // Get current user folders and decks
    const currentData = await getUserFoldersAndDecks(response.user.id)

    // Check if deck already imported
    const existingDeck = currentData.decks.find(
      (deck) => deck.original_deck_id === builtInDeck.id,
    )
    if (existingDeck) {
      throw new Error("Deck already imported")
    }

    // Extract textbook info from deck
    const textbookInfo = extractTextbookInfo(builtInDeck, textbooks)

    // Create folder hierarchy if needed
    const folderPath = textbookInfo
      ? [textbookInfo.textbookName, textbookInfo.chapterName]
      : []
    const { folders: updatedFolders, targetFolderId } =
      await ensureFolderHierarchy(
        currentData.folders,
        folderPath,
        response.user.id,
      )

    // Create the user deck
    const insertData: UserDeckInsert = {
      deck_name: textbookInfo
        ? generateDeckTitle(textbookInfo)
        : builtInDeck.title,
      deck_description: builtInDeck.description || null,
      folder_id: targetFolderId,
      original_deck_id: builtInDeck.id,
      source: "built-in",
      user_id: response.user.id,
    }

    const { data: newDeck, error } = await supabase
      .from("user_decks")
      .insert([insertData])
      .select()
      .single()

    if (error) throw error

    return {
      importedDeck: newDeck as UserDeck,
      targetFolderId,
    }
  })

/**
 * Helper function to extract textbook information from deck
 * (Following the same logic as deck-import-logic.ts)
 */
function extractTextbookInfo(
  builtInDeck: VocabBuiltInDeck,
  textbooks: [string, any][],
): { textbookName: string; chapterName: string; deckTitle: string } | null {
  for (const [textbookId, textbook] of textbooks) {
    for (const chapter of textbook.chapters) {
      const deck = chapter.decks.find((d: any) => d.id === builtInDeck.id)
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
 * Server function that executes multiple edit operations as an atomic transaction
 */
export const executeEditTransactionServerFn = createServerFn({ method: "POST" })
  .validator((data: { operations: EditOperation[] }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { operations } = data
    if (operations.length === 0) {
      throw new Error("Transaction is empty")
    }

    console.log("Operations to execute:", operations)

    // Execute all operations in a single database transaction
    const { error } = await supabase.rpc('execute_edit_transaction', {
      user_id: response.user.id,
      operations: operations  // Pass as JSONB array, not string
    })

    if (error) {
      throw new Error(`Transaction failed: ${error.message}`)
    }

    return { success: true }
  })
