import { getCookie, setCookie } from "@/features/cookies"
import type { QueryClient } from "@tanstack/solid-query"
import { queryKeys } from "../query-keys"

export const DEVICE_COOKIE = "device_settings"

export type DeviceSettings = {
  "device-type": "mobile" | "desktop" | null
}

export function parseDeviceSettingsCookie(): DeviceSettings {
  const raw = getCookie(DEVICE_COOKIE) as string | null
  if (!raw) return { "device-type": null }
  try {
    return JSON.parse(raw)
  } catch {
    return { "device-type": null }
  }
}

export function updateDeviceSettingsCookie(
  queryClient: QueryClient,
  updates: Partial<DeviceSettings>,
) {
  const current = queryClient.getQueryData<DeviceSettings>(
    queryKeys.deviceSettings(),
  ) ?? {
    "device-type": null,
  }
  const updated = { ...current, ...updates }
  setCookie(DEVICE_COOKIE, JSON.stringify(updated))
  queryClient.setQueryData(queryKeys.deviceSettings(), updated)
}
