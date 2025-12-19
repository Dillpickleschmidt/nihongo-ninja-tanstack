import { queryOptions } from '@tanstack/solid-query'
import { fetchAuth } from '@/lib/server'
import { queryKeys } from './query-keys'
import { parseDeviceSettingsCookie } from './model/device-settings'
import type { BackgroundSettings, BackgroundColor } from '~/components/TextbookChapterBackgrounds'

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

const defaultBackgroundColor: BackgroundColor = {
  hex: "#ffffff",
  isDark: false,
}

export const backgroundColorQueryOptions = () => {
  return queryOptions({
    queryKey: queryKeys.backgroundColor(),
    queryFn: async () => defaultBackgroundColor,
    initialData: defaultBackgroundColor,
    staleTime: Infinity,
    gcTime: Infinity,
  })
}

