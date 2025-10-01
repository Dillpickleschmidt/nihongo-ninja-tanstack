// src/features/supabase/db/deck.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import type { VocabBuiltInDeck } from "@/features/vocab-page/types"
import { generateDeckTitle } from "@/features/vocab-page/logic/deck-import-logic"
import { VocabularyItem } from "@/data/types"
import {
  dbItemToVocabularyItem,
  formDataToDBInsert,
  builtInVocabItemsToDBInserts,
  type VocabItemFormData,
} from "@/features/vocab-page/types/vocabulary-types"
import { ensureFolderHierarchy, getUserFoldersAndDecks } from "./folder"
import { extractTextbookInfo } from "@/features/vocab-page/logic/deck-import-logic"
import { getVocabularyForSet } from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"

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
      deck_id: number
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
 * Server function that imports a built-in deck with automatic folder creation
 */
export const importBuiltInDeckServerFn = createServerFn({ method: "POST" })
  .inputValidator(
    (data: { builtInDeck: VocabBuiltInDeck; textbooks: [string, any][] }) =>
      data,
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
    const { targetFolderId } = await ensureFolderHierarchy(
      currentData.folders,
      folderPath,
      response.user.id,
    )

    // Get module configuration for practice modes
    const module = dynamic_modules[builtInDeck.id]
    const allowedPracticeModes = module?.allowed_practice_modes || [
      "meanings",
      "spellings",
    ]

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
      allowed_practice_modes: allowedPracticeModes,
    }

    const { data: newDeck, error } = await supabase
      .from("user_decks")
      .insert([insertData])
      .select()
      .single()

    if (error) throw error

    // Import vocabulary items from the built-in deck
    if (module?.vocab_set_ids) {
      try {
        const vocabularyItems = await getVocabularyForSet(module.vocab_set_ids)
        if (vocabularyItems.length > 0) {
          await insertVocabularyItems(vocabularyItems, newDeck.deck_id)
        }
      } catch (vocabError) {
        console.error("[Import] Vocabulary import failed:", vocabError)
        // If vocabulary import fails, we should rollback the deck creation
        await supabase
          .from("user_decks")
          .delete()
          .eq("deck_id", newDeck.deck_id)

        throw new Error(
          `Failed to import vocabulary: ${vocabError instanceof Error ? vocabError.message : "Unknown error"}`,
        )
      }
    }

    return {
      importedDeck: newDeck as UserDeck,
      targetFolderId,
    }
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
  deck_id: number,
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
  .inputValidator((data: { deck_id: number }) => data)
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
  deckId: number,
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
