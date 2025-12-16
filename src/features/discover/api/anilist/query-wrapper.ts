import { queryAniListPublic } from './graphql-client'
import { queryAniListAuthenticated } from './server-query'

/**
 * Determines if a GraphQL query requires authentication
 */
function requiresAuthentication(query: any): boolean {
  if (!query.definitions) return false

  const authQueries = ['Viewer', 'UserLists']
  return query.definitions.some((def: any) =>
    authQueries.includes(def.name?.value),
  )
}

/**
 * Routes authenticated queries (Viewer, UserLists) through server function
 * to keep tokens server-side. Public queries use client-side fetch.
 */
export async function queryAniList(query: any, variables: any = {}) {
  const needsAuth = requiresAuthentication(query)

  if (needsAuth) {
    return queryAniListAuthenticated({ data: { query, variables } })
  }

  return queryAniListPublic(query, variables)
}
