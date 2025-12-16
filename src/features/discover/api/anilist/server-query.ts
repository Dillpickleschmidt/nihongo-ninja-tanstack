import { createServerFn } from '@tanstack/solid-start'
import { print } from 'graphql'
import { fetchQuery } from '~/lib/auth-server'
import { api } from '../../../../../convex/_generated/api'

/**
 * Server-only function to make authenticated AniList GraphQL queries
 * Token stays server-side in Convex, never exposed to client
 */
export const queryAniListAuthenticated = createServerFn({ method: 'POST' })
  .inputValidator((data: { query: any; variables: any }) => data)
  .handler(async ({ data }) => {
    const { query, variables } = data

    // Get AniList token from Convex
    const token = await fetchQuery(api.api.profiles.getServiceToken, {
      service: 'anilist',
    })

    if (!token?.accessToken) {
      return { data: null, error: 'No AniList token available' }
    }

    try {
      // Convert DocumentNode to string
      const queryString = print(query)

      const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify({ query: queryString, variables }),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('[AniList Auth] API error:', {
          status: response.status,
          result,
        })
      }

      return result
    } catch (error) {
      console.error('[AniList Auth] Fetch error:', error)
      return {
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  },
  )
