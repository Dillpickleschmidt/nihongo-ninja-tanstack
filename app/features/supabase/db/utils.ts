// app/features/supabase/db/utils.ts
import { createBackendClient } from "@/features/supabase/backendClient"
import { createServerFn, serverOnly } from "@tanstack/solid-start"
import type { Card } from "ts-fsrs"
import { getUser } from "../getUser"

// Type for the returned FSRS card data
export type FSRSCardData = {
  practice_item_key: string
  fsrs_card: any
}

// Get FSRS cards for specific practice items for a user
export const getFSRSCardsByKeys = serverOnly(
  async (
    userId: string,
    practiceItemKeys: string[],
  ): Promise<FSRSCardData[]> => {
    const supabase = createBackendClient()

    const { data, error } = await supabase
      .from("practice_item_user_completions")
      .select("practice_item_key, fsrs_card")
      .eq("user_id", userId)
      .in("practice_item_key", practiceItemKeys)

    if (error) {
      throw error
    }

    return data || []
  },
)

// Get all cards that are due now or in the past for a user
export const getDueFSRSCards = serverOnly(
  async (userId: string): Promise<FSRSCardData[]> => {
    const supabase = createBackendClient()

    const { data, error } = await supabase
      .from("practice_item_user_completions")
      .select("practice_item_key, fsrs_card")
      .eq("user_id", userId)
      .lte("due_at", new Date().toISOString())

    if (error) {
      throw error
    }

    return data || []
  },
)

type UpsertFSRSCardArgs = {
  practice_item_key: string
  fsrs_card: Card
  lesson_id?: string | null
  fsrs_log?: any[] | null
}

export const upsertFSRSCardForUser = createServerFn({ method: "POST" })
  .validator((data: UpsertFSRSCardArgs) => data)
  .handler(async ({ data }) => {
    const supabase = createBackendClient()
    const response = await getUser()

    if (!response.user) return

    // serialize Date fields
    const fsrsCardJson = {
      ...data.fsrs_card,
      due: data.fsrs_card.due.toISOString(),
      last_review: data.fsrs_card.last_review
        ? data.fsrs_card.last_review.toISOString()
        : null,
    }

    const { error } = await supabase
      .from("practice_item_user_completions")
      .upsert(
        [
          {
            user_id: response.user.id,
            practice_item_key: data.practice_item_key,
            lesson_id: data.lesson_id ?? null,
            fsrs_card: fsrsCardJson,
            fsrs_log: data.fsrs_log ?? null,
            due_at: fsrsCardJson.due,
            stability: fsrsCardJson.stability,
          },
        ],
        { onConflict: "user_id,practice_item_key" },
      )

    if (error) throw error
  })
