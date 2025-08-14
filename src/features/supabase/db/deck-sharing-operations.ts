// src/features/supabase/db/deck-sharing-operations.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "../getUser"
import { insertVocabularyItems, getVocabForDeck } from "./deck-operations"
import {
  ensureFolderHierarchy,
  getUserFoldersAndDecks,
} from "./folder-operations"

/**
 * Creates a public share for a user's deck
 */
export const createDeckShareServerFn = createServerFn({ method: "POST" })
  .validator((data: { deck_id: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    // Verify user owns the deck
    const { data: deck, error: deckError } = await supabase
      .from("user_decks")
      .select("deck_id, deck_name")
      .eq("deck_id", data.deck_id)
      .eq("user_id", response.user.id)
      .single()

    if (deckError) throw deckError
    if (!deck) throw new Error("Deck not found or not owned by user")

    // Create the share
    const insertData: PublicDeckShareInsert = {
      deck_id: data.deck_id,
      shared_by: response.user.id,
    }

    const { data: share, error } = await supabase
      .from("public_deck_shares")
      .insert([insertData])
      .select()
      .single()

    if (error) {
      // Handle case where share already exists
      if (error.code === "23505") {
        throw new Error("Deck is already shared publicly")
      }
      throw error
    }

    return share as PublicDeckShare
  })

/**
 * Removes public sharing for a user's deck
 */
export const removeDeckShareServerFn = createServerFn({ method: "POST" })
  .validator((data: { deck_id: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { error } = await supabase
      .from("public_deck_shares")
      .delete()
      .eq("deck_id", data.deck_id)
      .eq("shared_by", response.user.id)

    if (error) throw error
    return { success: true }
  })

/**
 * Checks if a user's deck is currently shared
 */
export const getDeckShareStatusServerFn = createServerFn({ method: "POST" })
  .validator((data: { deck_id: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { data: share, error } = await supabase
      .from("public_deck_shares")
      .select("shared_at")
      .eq("deck_id", data.deck_id)
      .eq("shared_by", response.user.id)
      .maybeSingle()

    if (error) throw error

    return {
      isShared: !!share,
      sharedAt: share?.shared_at || null,
    }
  })

/**
 * Gets all publicly shared decks for browsing with pagination
 */
export const getSharedDecksServerFn = createServerFn({ method: "GET" })
  .validator((data: { offset?: number; limit?: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const { offset = 0, limit = 20 } = data

    const { data: decks, error } = await supabase
      .from("public_deck_shares")
      .select(
        `
        deck_id,
        shared_at,
        shared_by,
        import_count,
        user_decks (
          deck_name,
          deck_description,
          source,
          created_at
        )
      `,
      )
      .order("shared_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) throw error

    return decks || []
  })

/**
 * Gets detailed information about a shared deck for preview before import
 */
export const getSharedDeckInfoServerFn = createServerFn({ method: "POST" })
  .validator((data: { deck_id: number }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()

    // Get share info with deck details
    const { data: shareInfo, error: shareError } = await supabase
      .from("public_deck_shares")
      .select(
        `
        deck_id,
        shared_at,
        shared_by,
        user_decks (
          deck_name,
          deck_description,
          source,
          created_at
        )
      `,
      )
      .eq("deck_id", data.deck_id)
      .maybeSingle()

    if (shareError) throw shareError
    if (!shareInfo) throw new Error("Shared deck not found")

    // Get vocabulary count
    const { count, error: countError } = await supabase
      .from("vocabulary_items")
      .select("*", { count: "exact", head: true })
      .eq("deck_id", data.deck_id)

    if (countError) throw countError

    return {
      ...shareInfo,
      vocabularyCount: count || 0,
    }
  })

/**
 * Imports a shared deck into the current user's account
 */
export const importSharedDeckServerFn = createServerFn({ method: "POST" })
  .validator(
    (data: {
      deck_id: number
      target_folder_id?: number | null
      custom_deck_name?: string
    }) => data,
  )
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    // First verify the deck is publicly shared
    const { data: shareInfo, error: shareError } = await supabase
      .from("public_deck_shares")
      .select(
        `
        deck_id,
        shared_by,
        user_decks (
          deck_name,
          deck_description,
          source,
          original_deck_id
        )
      `,
      )
      .eq("deck_id", data.deck_id)
      .maybeSingle()

    if (shareError) throw shareError
    if (!shareInfo) throw new Error("Shared deck not found")

    // Check if user is trying to import their own deck
    if (shareInfo.shared_by === response.user.id) {
      throw new Error("Cannot import your own shared deck")
    }

    const originalDeck = shareInfo.user_decks as UserDeck

    // Check if user already imported this deck
    const currentData = await getUserFoldersAndDecks(response.user.id)
    const existingImport = currentData.decks.find(
      (deck) =>
        deck.source === "shared" &&
        deck.original_deck_id === data.deck_id.toString(),
    )

    if (existingImport) {
      throw new Error("You have already imported this shared deck")
    }

    // Get vocabulary from the shared deck using service client for elevated access
    const vocabularyItems = await getVocabForDeck(data.deck_id)
    if (vocabularyItems.length === 0) {
      throw new Error("Shared deck contains no vocabulary items")
    }

    // Create the imported deck
    const deckName =
      data.custom_deck_name || `${originalDeck.deck_name} (Shared)`
    const insertData: UserDeckInsert = {
      deck_name: deckName,
      deck_description: originalDeck.deck_description,
      folder_id: data.target_folder_id,
      source: "shared",
      original_deck_id: data.deck_id.toString(), // Track the original shared deck
      user_id: response.user.id,
    }

    const { data: newDeck, error: insertError } = await supabase
      .from("user_decks")
      .insert([insertData])
      .select()
      .single()

    if (insertError) throw insertError

    // Import all vocabulary items
    try {
      await insertVocabularyItems(vocabularyItems, newDeck.deck_id)
    } catch (vocabError) {
      // Rollback deck creation if vocabulary import fails
      await supabase.from("user_decks").delete().eq("deck_id", newDeck.deck_id)

      throw new Error(
        `Failed to import vocabulary: ${vocabError instanceof Error ? vocabError.message : "Unknown error"}`,
      )
    }

    return {
      importedDeck: newDeck as UserDeck,
      originalDeckName: originalDeck.deck_name,
      vocabularyCount: vocabularyItems.length,
    }
  })
