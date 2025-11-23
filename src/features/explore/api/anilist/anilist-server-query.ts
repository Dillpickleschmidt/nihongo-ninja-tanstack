import { createServerFn } from "@tanstack/solid-start"
import { print } from "graphql"
import { getServiceCredentials } from "@/features/main-cookies/functions/service-credentials"

/**
 * Server-only function to make authenticated AniList GraphQL queries
 * Token stays in HttpOnly cookie, never exposed to client
 */
export const queryAniListAuthenticated = createServerFn({ method: "POST" })
  .inputValidator((data: { query: any; variables: any }) => data)
  .handler(async ({ data: { query, variables } }) => {
    const credentials = await getServiceCredentials()
    const token = credentials.anilist?.accessToken

    if (!token) {
      return { data: null, error: "No AniList token available" }
    }

    try {
      // Convert DocumentNode to string
      const queryString = print(query)

      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: queryString, variables }),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error("[AniList Auth] API error:", {
          status: response.status,
          result,
        })
      }

      return result
    } catch (error) {
      console.error("[AniList Auth] Fetch error:", error)
      const errorMsg = error instanceof Error ? error.message : "Unknown error"
      return { data: null, error: errorMsg }
    }
  })
