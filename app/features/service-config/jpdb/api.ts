// features/service-config/jpdb/api.ts
import { createServerFn } from "@tanstack/solid-start"
import { z } from "zod"
import { getUserSSR } from "@/features/supabase/getUserSSR"
import { getServiceAuthDataFromCookie } from "../server/service-manager"

const serviceSchema = z.enum(["anki", "wanikani", "jpdb"])
const apiKeySchema = z.object({
  apiKey: z.string(),
})

export const fetchServiceDataWithAuth = createServerFn()
  .validator(serviceSchema)
  .handler(async ({ data: service }) => {
    const authData = getServiceAuthDataFromCookie()
    const apiKey = authData?.[service]?.api_key

    if (!apiKey) {
      throw new Error(`${service} API key not available`)
    }

    switch (service) {
      case "jpdb": {
        const [userDecks, specialDecks] = await Promise.all([
          fetchJPDBUserDecks({ data: { apiKey } }),
          fetchJPDBSpecialDecks({ data: { apiKey } }),
        ])
        return { userDecks, specialDecks }
      }

      case "anki": {
        // Add your Anki fetching logic here when ready
        throw new Error("Anki data fetching not implemented yet")
      }

      case "wanikani": {
        // Add your WaniKani fetching logic here when ready
        throw new Error("WaniKani data fetching not implemented yet")
      }

      default:
        throw new Error(`Unsupported service: ${service}`)
    }
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
