// src/features/supabase/db/deck.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import { VocabularyItem } from "@/data/types"
import {
  dbItemToVocabularyItem,
  formDataToDBInsert,
  builtInVocabItemsToDBInserts,
  type VocabItemFormData,
} from "@/features/vocab-page/types/vocabulary"

/**
 * Creates a new user deck for the current user
 */
export const createUserDeckServerFn = createServerFn({ method: "POST" })
  .inputValidator(
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
      allowed_practice_modes: ["meanings", "spellings"],
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
  .inputValidator(
    (data: {
      deck_id: string
      deck_name?: string
      deck_description?: string | null
      folder_id?: number | null
      allowed_practice_modes?: PracticeModeEnum[]
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
    if (data.allowed_practice_modes !== undefined)
      updateData.allowed_practice_modes = data.allowed_practice_modes

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
 * Creates a custom deck with vocabulary items in a single transaction
 */
export const createCustomDeckServerFn = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      deck_name: string
      deck_description?: string | null
      folder_id?: number | null
      vocabulary_items: VocabItemFormData[]
      allowed_practice_modes?: PracticeModeEnum[]
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
      source: "user",
      user_id: response.user.id,
      allowed_practice_modes: data.allowed_practice_modes || [
        "meanings",
        "spellings",
      ],
    }

    const { data: deck, error } = await supabase
      .from("user_decks")
      .insert([insertData])
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to create deck: ${error.message}`)
    }

    if (!deck) {
      throw new Error("Deck creation succeeded but no deck was returned")
    }

    // Add vocabulary items
    if (data.vocabulary_items.length > 0) {
      const vocabularyInserts = data.vocabulary_items
        .map((item) => formDataToDBInsert(item, deck.deck_id))
        .filter((item): item is NonNullable<typeof item> => item !== null)

      const { error: vocabError } = await supabase
        .from("vocabulary_items")
        .insert(vocabularyInserts)

      if (vocabError) {
        throw new Error(
          `Failed to create vocabulary items: ${vocabError.message}`,
        )
      }
    }

    return deck as UserDeck
  })

/**
 * Gets the real deck_id for a built-in deck by original_deck_id
 */
export const getDeckIdByOriginalIdServerFn = createServerFn({ method: "POST" })
  .inputValidator((data: { original_deck_id: string }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { data: deck, error } = await supabase
      .from("user_decks")
      .select("deck_id")
      .eq("user_id", response.user.id)
      .eq("original_deck_id", data.original_deck_id)
      .single()

    if (error) throw error
    return deck.deck_id
  })

export async function getVocabForDeck(
  deck_id: string,
): Promise<VocabularyItem[]> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("vocabulary_items")
    .select("*")
    .eq("deck_id", deck_id)

  if (error) throw error

  return (data || []).map(dbItemToVocabularyItem)
}

/**
 * Gets deck information by deck_id for practice sessions
 */
export const getDeckInfoServerFn = createServerFn({ method: "POST" })
  .inputValidator((data: { deck_id: string }) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) throw new Error("User not authenticated")

    const { data: deck, error } = await supabase
      .from("user_decks")
      .select("deck_name, deck_description, source, original_deck_id")
      .eq("deck_id", data.deck_id)
      .eq("user_id", response.user.id) // Ensure user owns the deck
      .single()

    if (error) throw error
    if (!deck) throw new Error("Deck not found")

    return {
      deck_name: deck.deck_name,
      deck_description: deck.deck_description,
      source: deck.source,
      original_deck_id: deck.original_deck_id,
    }
  })

/**
 * Batch insert vocabulary items for a deck
 */
export async function insertVocabularyItems(
  vocabularyItems: VocabularyItem[],
  deckId: string,
): Promise<void> {
  if (vocabularyItems.length === 0) return

  const supabase = createSupabaseClient()
  const vocabularyInserts = builtInVocabItemsToDBInserts(
    vocabularyItems,
    deckId,
  )

  const { error } = await supabase
    .from("vocabulary_items")
    .insert(vocabularyInserts)

  if (error) {
    throw new Error(`Failed to insert vocabulary items: ${error.message}`)
  }
}
