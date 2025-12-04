import { isServer } from "solid-js/web"
import type { Client } from "@urql/core"
import { createRequest } from "@urql/core"
import { queryAniListAuthenticated } from "./anilist-server-query"

/**
 * Determines if a GraphQL query requires authentication
 */
function requiresAuthentication(query: any): boolean {
  if (!query.definitions) return false

  const authQueries = ["Viewer", "UserLists"]
  return query.definitions.some((def: any) =>
    authQueries.includes(def.name?.value),
  )
}

/**
 * Routes authenticated queries (Viewer, UserLists) through server function
 * to keep tokens server-side. Public queries use normal URQL client.
 *
 * On client: Checks URQL cache first before making authenticated requests
 * On server: Always routes through server function and injects into SSR cache
 */
export async function queryAniList(
  urqlClient: Client,
  urqlSSR: any,
  query: any,
  variables: any = {},
) {
  const needsAuth = requiresAuthentication(query)

  if (needsAuth) {
    // On client: Check cache first to avoid unnecessary server calls
    if (!isServer) {
      const cachedResult = urqlClient.readQuery(query, variables)
      if (cachedResult !== null) {
        return { data: cachedResult, error: undefined }
      }
    }

    // Route through server function - token stays server-side
    const result = await queryAniListAuthenticated({
      data: { query, variables },
    })

    if (result.error) {
      return { data: null, error: result.error }
    }

    // Generate cache key and inject into SSR cache (server-side only)
    if (!isServer) {
      // On client: URQL will automatically cache this result
      return { data: result.data, error: undefined }
    }

    // On server: Inject into SSR cache for dehydration
    const request = createRequest(query, variables)
    urqlSSR.restoreData({
      [request.key]: {
        data: JSON.stringify(result.data),
      },
    })

    return { data: result.data, error: undefined }
  }

  // Public queries use normal URQL
  return urqlClient.query(query, variables).toPromise()
}
