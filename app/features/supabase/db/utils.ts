// app/features/supabase/db/utils.ts
import { createSupabaseClient } from "@/features/supabase/createSupabaseClient"
import { createServerFn } from "@tanstack/solid-start"
import { getUser } from "../getUser"
import type { Card, ReviewLog } from "ts-fsrs"
import type { PracticeMode } from "@/features/vocab-practice/types"

// Type for the returned FSRS card data
export type FSRSCardData = {
  practice_item_key: string
  fsrs_card: any
  mode: PracticeMode
  fsrs_logs?: ReviewLog[] | null
}

// Get FSRS cards for specific practice items for a user
export async function getFSRSCardsByKeys(
  userId: string,
  practiceItemKeys: string[],
): Promise<FSRSCardData[]> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("practice_item_user_completions")
    .select("practice_item_key, fsrs_card, mode, fsrs_logs")
    .eq("user_id", userId)
    .in("practice_item_key", practiceItemKeys)

  if (error) {
    throw error
  }

  return (data as FSRSCardData[]) || []
}

// Get all cards that are due now or in the past for a user
export async function getDueFSRSCards(userId: string): Promise<FSRSCardData[]> {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from("practice_item_user_completions")
    .select("practice_item_key, fsrs_card, mode, fsrs_logs")
    .eq("user_id", userId)
    .lte("due_at", new Date().toISOString())

  if (error) {
    throw error
  }

  return (data as FSRSCardData[]) || []
}

type UpsertFSRSCardArgs = {
  practice_item_key: string
  fsrs_card: Card
  mode: PracticeMode
  lesson_id?: string | null
  fsrs_logs?: ReviewLog[] | null
}

export const upsertFSRSCardForUser = createServerFn({ method: "POST" })
  .validator((data: UpsertFSRSCardArgs) => data)
  .handler(async ({ data }) => {
    const supabase = createSupabaseClient()
    const response = await getUser()

    if (!response.user) return

    // 1. Serialize Date fields in the main card
    const fsrsCardJson = {
      ...data.fsrs_card,
      due: data.fsrs_card.due.toISOString(),
      last_review: data.fsrs_card.last_review
        ? data.fsrs_card.last_review.toISOString()
        : null,
    }

    // 2. Serialize Date fields within the logs array
    const fsrsLogsJson =
      data.fsrs_logs?.map((log) => ({
        ...log,
        due: log.due.toISOString(),
        review: log.review.toISOString(),
      })) ?? null

    const { error } = await supabase
      .from("practice_item_user_completions")
      .upsert(
        [
          {
            user_id: response.user.id,
            practice_item_key: data.practice_item_key,
            lesson_id: data.lesson_id ?? null,
            fsrs_card: fsrsCardJson,
            mode: data.mode,
            fsrs_logs: fsrsLogsJson,
            due_at: fsrsCardJson.due,
            stability: fsrsCardJson.stability,
          },
        ],
        { onConflict: "user_id,practice_item_key" },
      )

    if (error) throw error
  })
