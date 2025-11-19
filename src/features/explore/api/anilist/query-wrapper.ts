import type { Client } from "@urql/core"
import { createRequest } from "@urql/core"
import { queryAniListAuthenticated } from "./anilist-server-query"

/**
 * Determines if a GraphQL query requires authentication
 * Checks query definition names
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
 */
export async function queryAniList(
  urqlClient: Client,
  ssr: any,
  query: any,
  variables: any = {},
) {
  const needsAuth = requiresAuthentication(query)

  if (needsAuth) {
    // Route through server function - token stays server-side
    const result = await queryAniListAuthenticated({
      data: { query, variables },
    })

    if (result.error) {
      return { data: null, error: result.error }
    }

    // Generate cache key and inject into SSR cache
    const request = createRequest(query, variables)
    ssr.restoreData({
      [request.key]: {
        data: JSON.stringify(result.data),
      },
    })

    // Query through URQL to read from cache
    return urqlClient.query(query, variables).toPromise()
  }

  // Public queries use normal URQL
  return urqlClient.query(query, variables).toPromise()
}
