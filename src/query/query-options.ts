import { queryOptions } from '@tanstack/solid-query'
import { fetchAuth } from '@/lib/server'
import { queryKeys } from './query-keys'
import { parseDeviceSettingsCookie } from './model/device-settings'
import type { BackgroundSettings } from '~/components/TextbookChapterBackgrounds'
import { queryAniList } from '~/features/discover/api/anilist/query-wrapper'
import type { VariablesOf } from 'gql.tada'

// ============================================================================
// Auth Query Options
// ============================================================================

export const authQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.auth(),
    queryFn: async () => {
      const auth = await fetchAuth()
      const expiresAt = auth.session?.session.expiresAt
      const staleTime = expiresAt
        ? Math.max(0, new Date(expiresAt).getTime() - Date.now())
        : Infinity
      return { ...auth, staleTime }
    },
    staleTime: (query) => query.state.data?.staleTime ?? 0,
  })

// ============================================================================
// Device Settings Query Options
// ============================================================================

export const deviceSettingsQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.deviceSettings(),
    queryFn: async () => parseDeviceSettingsCookie(),
    initialData: parseDeviceSettingsCookie(),
    staleTime: Infinity,
    gcTime: Infinity,
  })

// ============================================================================
// Background Settings Query Options
// ============================================================================

const defaultBackgroundSettings: BackgroundSettings = {
  blur: undefined,
  opacityOffset: 0,
  showGradient: true,
}

export const backgroundSettingsQueryOptions = () => {
  return queryOptions({
    queryKey: queryKeys.backgroundSettings(),
    queryFn: async () => defaultBackgroundSettings,
    initialData: defaultBackgroundSettings,
    staleTime: Infinity,  // Background settings never go stale
    gcTime: Infinity,     // Keep in cache forever
  })
}

// ============================================================================
// AniList Query Options (Personalized Sections Only)
// ============================================================================

/**
 * Create TanStack Query options for AniList GraphQL queries
 *
 * NOTE: This is kept for personalized sections (Continue Watching, Planning to Watch, etc.)
 * which use user-specific queries that cannot be cached globally in Convex.
 * Generic sections (Popular, Trending, etc.) use Convex queries instead.
 */
export function anilistQueryOptions<T extends { definitions: readonly any[] }>(
  query: T,
  variables: VariablesOf<T> = {} as VariablesOf<T>,
) {
  const queryName = query.definitions?.[0]?.name?.value ?? 'unknown'

  return queryOptions({
    queryKey: ['anilist', queryName, variables],
    queryFn: () => queryAniList(query, variables),
    staleTime: Infinity,
  })
}

