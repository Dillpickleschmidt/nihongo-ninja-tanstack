import { queryOptions, type QueryClient } from '@tanstack/solid-query'
import { getCookie, setCookie } from '@/features/cookies'

export const DEVICE_COOKIE = 'device_settings'

export type DeviceSettings = {
  'device-type': 'mobile' | 'desktop' | null
}

function parseDeviceSettingsCookie(): DeviceSettings {
  const raw = getCookie(DEVICE_COOKIE) as string | null
  if (!raw) return { 'device-type': null }
  try {
    return JSON.parse(raw)
  } catch {
    return { 'device-type': null }
  }
}

export const deviceSettingsQueryOptions = () =>
  queryOptions({
    queryKey: ['device-settings'],
    queryFn: async () => parseDeviceSettingsCookie(),
    initialData: parseDeviceSettingsCookie(),
    staleTime: Infinity,
    gcTime: Infinity,
  })

export function updateDeviceSettingsCookie(
  queryClient: QueryClient,
  updates: Partial<DeviceSettings>,
) {
  const current =
    queryClient.getQueryData<DeviceSettings>(['device-settings']) ?? {
      'device-type': null,
    }
  const updated = { ...current, ...updates }
  setCookie(DEVICE_COOKIE, JSON.stringify(updated))
  queryClient.setQueryData(['device-settings'], updated)
}
