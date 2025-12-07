import { createMediaQuery } from '@solid-primitives/media'
import { useQueryClient } from '@tanstack/solid-query'
import { isServer } from 'solid-js/web'
import { type DeviceSettings } from '@/query/device-settings'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

type Breakpoints = {
  sm: () => boolean
  md: () => boolean
  lg: () => boolean
  xl: () => boolean
  '2xl': () => boolean
}

export function useBreakpoints(): Breakpoints {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<DeviceSettings>(['device-settings'])
  const type = data?.['device-type'] ?? 'mobile'
  const serverWidth = type === 'desktop' ? 1280 : 640

  // Compute server fallbacks based on cookie
  const serverFallbacks = {
    sm: serverWidth >= breakpoints.sm,
    md: serverWidth >= breakpoints.md,
    lg: serverWidth >= breakpoints.lg,
    xl: serverWidth >= breakpoints.xl,
    '2xl': serverWidth >= breakpoints['2xl'],
  }

  // On server: return static values
  // On client: createMediaQuery uses serverFallback for first render, then real values
  if (isServer) {
    return {
      sm: () => serverFallbacks.sm,
      md: () => serverFallbacks.md,
      lg: () => serverFallbacks.lg,
      xl: () => serverFallbacks.xl,
      '2xl': () => serverFallbacks['2xl'],
    }
  }

  return {
    sm: createMediaQuery(`(min-width: ${breakpoints.sm}px)`, serverFallbacks.sm),
    md: createMediaQuery(`(min-width: ${breakpoints.md}px)`, serverFallbacks.md),
    lg: createMediaQuery(`(min-width: ${breakpoints.lg}px)`, serverFallbacks.lg),
    xl: createMediaQuery(`(min-width: ${breakpoints.xl}px)`, serverFallbacks.xl),
    '2xl': createMediaQuery(`(min-width: ${breakpoints['2xl']}px)`, serverFallbacks['2xl']),
  }
}
