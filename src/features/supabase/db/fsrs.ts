// features/supabase/db/fsrs.ts
import { createServerFn } from "@tanstack/solid-start"
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { getUser } from "@/features/supabase/getUser"
import { Card, type ReviewLog } from "ts-fsrs"
import type { Json } from "@/features/supabase/db/database.types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import type { ProcessedCard } from "@/features/fsrs-import/shared/types/fsrs-types"

export interface FSRSCardData {
  user_id: string
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: Card
  fsrs_logs: ReviewLog[]
  mode: "meanings" | "spellings"
}

/**
 * Get all FSRS cards for a user filtered by mode
 */
export async function getAllFSRSCardsForUser(
  userId: string,
  mode: PracticeMode,
): Promise<FSRSCardData[]> {
  const supabase = createSupabaseClient()

  const query = supabase
    .from("user_fsrs_cards")
    .select("*")
    .eq("user_id", userId)
    .eq("mode", mode)

  const { data: cards, error } = await query

  if (error) {
    console.error("[getAllFSRSCardsForUser] Query error:", error)
    return []
  }

  return cards.map((card) => {
    const fsrsCard = card.fsrs_card as unknown as Card
    return {
      user_id: card.user_id,
      practice_item_key: card.practice_item_key,
      type: card.type as DBPracticeItemType,
      fsrs_card: {
        ...fsrsCard,
        due: new Date(fsrsCard.due as unknown as string),
        last_review: fsrsCard.last_review ? new Date(fsrsCard.last_review as unknown as string) : null,
      } as Card,
      fsrs_logs: card.fsrs_logs as ReviewLog[],
      mode: card.mode as "meanings" | "spellings",
    }
  })
}

/**
 * Get FSRS cards by practice item keys for a user
 * Filters by practice mode and type
 */
export async function getFSRSCards(
  userId: string,
  keys: string[],
  mode: PracticeMode,
  type: DBPracticeItemType,
): Promise<FSRSCardData[]> {
  if (!keys?.length) return []

  const supabase = createSupabaseClient()

  const query = supabase
    .from("user_fsrs_cards")
    .select("*")
    .eq("user_id", userId)
    .in("practice_item_key", keys)
    .eq("mode", mode)
    .eq("type", type)

  const { data: cards, error } = await query

  if (error) {
    console.error("[getFSRSCards] Query error:", error)
    return []
  }

  return cards.map((card) => {
    const fsrsCard = card.fsrs_card as unknown as Card
    return {
      user_id: card.user_id,
      practice_item_key: card.practice_item_key,
      type: card.type as DBPracticeItemType,
      fsrs_card: {
        ...fsrsCard,
        due: new Date(fsrsCard.due as unknown as string),
        last_review: fsrsCard.last_review ? new Date(fsrsCard.last_review as unknown as string) : null,
      } as Card,
      fsrs_logs: card.fsrs_logs as ReviewLog[],
      mode: card.mode as "meanings" | "spellings",
    }
  })
}

/**
 * Get user progress data for vocabulary items
 */
export async function getUserProgress(
  userId: string,
  slugs: string[],
): Promise<Record<string, FSRSCardData> | null> {
  if (!userId || !slugs || slugs.length === 0) {
    return null
  }

  const fsrsData = await getFSRSCards(userId, slugs, "meanings", "vocabulary")

  // Return a plain object for server JSON serialization
  const progressRecord: Record<string, FSRSCardData> = {}
  fsrsData.forEach((card) => {
    progressRecord[`${card.type}:${card.practice_item_key}`] = card
  })

  return progressRecord
}

export interface DueCountsByMode {
  total: number
  meanings: {
    vocab: number
    kanji: number
  }
  spellings: number
}

/**
 * Get count of due FSRS cards by mode and type for a user
 * Uses a single optimized query selecting only mode and type
 */
export async function getDueFSRSCountsByMode(
  userId: string,
): Promise<DueCountsByMode> {
  const supabase = createSupabaseClient()

  const now = new Date()
  const { data, error } = await supabase
    .from("user_fsrs_cards")
    .select("mode, type")
    .eq("user_id", userId)
    .lte("due_at", now.toISOString())

  if (error) {
    console.error("Error counting due FSRS cards by mode:", error)
    return {
      total: 0,
      meanings: { vocab: 0, kanji: 0 },
      spellings: 0,
    }
  }

  const meaningsBreakdown = { vocab: 0, kanji: 0 }
  let spellingsCount = 0

  for (const card of data) {
    const mode = card.mode as "meanings" | "spellings"
    const type = card.type as "vocabulary" | "kanji" | "radical"

    if (mode === "meanings") {
      if (type === "vocabulary") {
        meaningsBreakdown.vocab++
      } else if (type === "kanji" || type === "radical") {
        meaningsBreakdown.kanji++
      }
    } else if (mode === "spellings") {
      if (type === "vocabulary") {
        spellingsCount++
      }
    }
  }

  const total =
    meaningsBreakdown.vocab + meaningsBreakdown.kanji + spellingsCount

  return {
    total,
    meanings: meaningsBreakdown,
    spellings: spellingsCount,
  }
}

export interface VocabularyStats {
  vocab_total: number
  kanji_total: number
  vocab_week: number
  kanji_week: number
}

/**
 * Get FSRS vocabulary and kanji statistics
 * Uses optimized SQL COUNT(DISTINCT) via RPC function
 */
export async function getFSRSVocabularyStats(
  userId: string,
): Promise<VocabularyStats> {
  const supabase = createSupabaseClient()

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  const { data, error } = await supabase.rpc("get_vocabulary_stats", {
    user_id_param: userId,
    week_ago_param: weekAgo.toISOString(),
  })

  if (error) throw error

  return data as VocabularyStats
}

/**
 * Upsert FSRS card data for a user
 */
export async function upsertFSRSCardForUser(
  data: ProcessedCard,
): Promise<void> {
  const supabase = createSupabaseClient()
  const response = await getUser()
  if (!response.user) return

  const upsertData = {
    user_id: response.user.id,
    practice_item_key: data.practice_item_key,
    type: data.type,
    fsrs_card: data.fsrs_card as unknown as Json,
    mode: data.mode,
    fsrs_logs: (data.fsrs_logs ?? null) as unknown as Json[] | null,
    due_at: data.fsrs_card.due as unknown as string,
    stability: data.fsrs_card.stability,
  }

  const { error } = await supabase
    .from("user_fsrs_cards")
    .upsert([upsertData], {
      onConflict: "user_id,practice_item_key,type,mode",
    })

  if (error) throw error
}

/**
 * Batch upsert FSRS cards for a user
 */
export async function batchUpsertFSRSCardsForUser(
  data: ProcessedCard[]
): Promise<void> {
  if (data.length === 0) return

  const supabase = createSupabaseClient()
  const response = await getUser()
  if (!response.user) return

  const upsertDataArray = data.map((item) => ({
    user_id: response.user!.id,
    practice_item_key: item.practice_item_key,
    type: item.type,
    fsrs_card: item.fsrs_card as unknown as Json,
    mode: item.mode,
    fsrs_logs: (item.fsrs_logs ?? null) as unknown as Json[] | null,
    due_at: item.fsrs_card.due as unknown as string,
    stability: item.fsrs_card.stability,
  }))

  const { error } = await supabase
    .from("user_fsrs_cards")
    .upsert(upsertDataArray, {
      onConflict: "user_id,practice_item_key,type,mode",
    })

  if (error) throw error
}

/**
 * Get due FSRS cards for a user
 * Returns up to 200 most overdue cards to optimize query performance
 */
export const getDueFSRSCards = createServerFn({ method: "GET" })
  .inputValidator((userId: string) => userId)
  .handler(async ({ data: userId }): Promise<FSRSCardData[]> => {
    const supabase = createSupabaseClient()

    const now = new Date()
    const { data: cards, error } = await supabase
      .from("user_fsrs_cards")
      .select("*")
      .eq("user_id", userId)
      .lte("due_at", now.toISOString())
      .order("due_at", { ascending: true })
      .limit(200)

    if (error) {
      console.error("Error fetching due FSRS cards:", error)
      return []
    }

    return cards.map((card) => ({
      user_id: card.user_id,
      practice_item_key: card.practice_item_key,
      type: card.type as DBPracticeItemType,
      fsrs_card: card.fsrs_card as unknown as Card,
      fsrs_logs: card.fsrs_logs as unknown as ReviewLog[],
      mode: card.mode as "meanings" | "spellings",
    }))
  })
