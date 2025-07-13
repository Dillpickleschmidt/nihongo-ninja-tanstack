// features/service-config/jpdb/api.ts
import { createServerFn } from "@tanstack/solid-start"
import { z } from "zod"
import { getUserSSR } from "@/features/supabase/getUserSSR"

const apiKeySchema = z.object({
  apiKey: z.string(),
})

export const fetchJPDBUserDecks = createServerFn()
  .validator(apiKeySchema)
  .handler(async ({ data }) => {
    const { user } = await getUserSSR()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const response = await fetch("https://jpdb.io/api/v1/list-user-decks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: ["id", "name", "vocabulary_count", "vocabulary_known_coverage"],
      }),
    })

    if (!response.ok) {
      throw new Error(`JPDB API error: ${response.status}`)
    }

    return response.json()
  })

export const fetchJPDBSpecialDecks = createServerFn()
  .validator(apiKeySchema)
  .handler(async ({ data }) => {
    const { user } = await getUserSSR()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const response = await fetch("https://jpdb.io/api/v1/list-special-decks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: ["id", "name", "vocabulary_count", "vocabulary_known_coverage"],
      }),
    })

    if (!response.ok) {
      throw new Error(`JPDB API error: ${response.status}`)
    }

    return response.json()
  })
