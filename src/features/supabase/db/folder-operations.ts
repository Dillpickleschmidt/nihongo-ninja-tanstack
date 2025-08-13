// src/features/supabase/db/folder-operations.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "../getUser"

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
 * Server function that executes multiple edit operations as an atomic transaction
 */
export const executeEditTransactionServerFn = createServerFn({ method: "POST" })
  .validator((data: { operations: any[] }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { operations } = data
    if (operations.length === 0) {
      throw new Error("Transaction is empty")
    }

    // Execute all operations in a single database transaction
    const { error } = await supabase.rpc("execute_edit_transaction", {
      user_id: response.user.id,
      operations: operations,
    })

    if (error) {
      throw new Error(`Transaction failed: ${error.message}`)
    }

    return { success: true }
  })
