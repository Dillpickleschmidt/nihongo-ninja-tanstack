// app/features/supabase/db/utils.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "../getUser"
import type { Card as FSRSCard, ReviewLog } from "ts-fsrs"
import type { PracticeMode } from "@/features/vocab-practice/types"
import type { Json } from "./database.types"

export type FSRSCardData = {
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: FSRSCard
  mode: PracticeMode
  fsrs_logs?: ReviewLog[] | null
}

type SupabaseFSRSCardData = {
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: Omit<FSRSCard, "due" | "last_review"> & {
    due: string
    last_review?: string
  }
  mode: PracticeMode
  fsrs_logs?: (Omit<ReviewLog, "due" | "review"> & {
    due: string
    review: string
  })[]
}

export type UpsertFSRSCardArgs = {
  practice_item_key: string
  type: DBPracticeItemType
  fsrs_card: FSRSCard
  mode: PracticeMode
  lesson_id?: string | null
  fsrs_logs?: ReviewLog[] | null
}

/**
 * Converts date strings from Supabase to Date objects after fetching.
 */
function deserializeFSRSCardData(item: SupabaseFSRSCardData): FSRSCardData {
  return {
    ...item,
    fsrs_card: {
      ...item.fsrs_card,
      due: new Date(item.fsrs_card.due),
      last_review: item.fsrs_card.last_review
        ? new Date(item.fsrs_card.last_review)
        : undefined,
    },
    fsrs_logs: item.fsrs_logs?.map((log) => ({
      ...log,
      due: new Date(log.due),
      review: new Date(log.review),
    })),
  }
}

// --- Database Access Functions ---

export async function getFSRSCardsByKeys(
  userId: string,
  practiceItemKeys: string[],
): Promise<FSRSCardData[]> {
  if (practiceItemKeys.length === 0) return []
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("practice_item_user_completions")
    .select("practice_item_key, type, fsrs_card, mode, fsrs_logs")
    .eq("user_id", userId)
    .in("practice_item_key", practiceItemKeys)

  if (error) throw error
  return (data as SupabaseFSRSCardData[]).map(deserializeFSRSCardData)
}

export async function getDueFSRSCards(userId: string): Promise<FSRSCardData[]> {
  const supabase = createSupabaseClient()
  const { data, error } = await supabase
    .from("practice_item_user_completions")
    .select("practice_item_key, type, fsrs_card, mode, fsrs_logs")
    .eq("user_id", userId)
    .lte("due_at", new Date().toISOString())

  if (error) throw error
  return (data as SupabaseFSRSCardData[]).map(deserializeFSRSCardData)
}

export const upsertFSRSCardForUser = createServerFn({ method: "POST" })
  .validator((data: UpsertFSRSCardArgs) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()
    if (!response.user) return

    const upsertData = {
      user_id: response.user.id,
      practice_item_key: data.practice_item_key,
      type: data.type,
      lesson_id: data.lesson_id ?? null,
      fsrs_card: data.fsrs_card as unknown as Json,
      mode: data.mode,
      fsrs_logs: (data.fsrs_logs ?? null) as unknown as Json[] | null,
      due_at: data.fsrs_card.due as unknown as string,
      stability: data.fsrs_card.stability,
    }

    const { error } = await supabase
      .from("practice_item_user_completions")
      .upsert([upsertData], { onConflict: "user_id,practice_item_key,type" })

    if (error) throw error
  })
