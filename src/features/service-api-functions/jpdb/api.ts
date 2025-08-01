// features/service-config/jpdb/api.ts
import { createServerFn } from "@tanstack/solid-start"
import { z } from "zod"
import { getUser } from "@/features/supabase/getUser"
import { getInitialUserPreferencesFromCookieServerFn } from "@/features/main-cookies/server/server-functions"

const serviceSchema = z.enum(["anki", "wanikani", "jpdb"])
const apiKeySchema = z.object({
  apiKey: z.string(),
})

export const fetchServiceDataWithAuth = createServerFn()
  .validator(serviceSchema)
  .handler(async ({ data: service }) => {
    const userPreferences = await getInitialUserPreferencesFromCookieServerFn()
    const apiKey = userPreferences["service-credentials"]?.[service]?.api_key

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
    const { user } = await getUser()
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
    const { user } = await getUser()
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

export const fetchJPDBDeckVocabulary = createServerFn()
  .validator(
    z.object({
      deckId: z.number(),
    }),
  )
  .handler(async ({ data }) => {
    const { user } = await getUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const userPreferences = await getInitialUserPreferencesFromCookieServerFn()
    const apiKey = userPreferences["service-credentials"]?.jpdb?.api_key

    if (!apiKey) {
      throw new Error("JPDB API key not available")
    }

    const response = await fetch(
      "https://jpdb.io/api/v1/deck/list-vocabulary",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data.deckId,
          fetch_occurences: false, // As per documentation, default is false
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`JPDB API error: ${response.status}`)
    }

    return response.json()
  })

export const lookupJPDBVocabulary = createServerFn()
  .validator(
    z.object({
      vocabularyList: z.array(z.array(z.number())),
    }),
  )
  .handler(async ({ data }) => {
    const { user } = await getUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const userPreferences = await getInitialUserPreferencesFromCookieServerFn()
    const apiKey = userPreferences["service-credentials"]?.jpdb?.api_key

    if (!apiKey) {
      throw new Error("JPDB API key not available")
    }

    const response = await fetch("https://jpdb.io/api/v1/lookup-vocabulary", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: data.vocabularyList,
        fields: ["spelling", "reading", "meanings"],
      }),
    })

    if (!response.ok) {
      throw new Error(`JPDB API error: ${response.status}`)
    }

    return response.json()
  })
