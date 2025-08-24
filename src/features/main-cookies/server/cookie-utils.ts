// Internal cookie utilities - extracted for organization
import { getCookie, setCookie } from "@/utils/cookie-utils"
import { serverOnly } from "@tanstack/solid-start"
import { UserPreferencesSchema } from "@/features/main-cookies/schemas/user-preferences"
import type { UserPreferences } from "../schemas/user-preferences"
import {
  DeviceUISettingsSchema,
  type DeviceUISettingsCookieData,
} from "../schemas/device-ui-settings"
import { USER_PREFERENCES_COOKIE, DEVICE_UI_SETTINGS_COOKIE } from "../types"

// User preferences cookie helpers (HttpOnly)
export const _getUserPreferencesCookie = serverOnly(
  (): UserPreferences | null => {
    const cookieValue = getCookie(USER_PREFERENCES_COOKIE)
    if (!cookieValue) return null

    try {
      const parsed = JSON.parse(cookieValue)
      const result = UserPreferencesSchema.safeParse(parsed)
      return result.success ? result.data : null
    } catch {
      return null
    }
  },
)

export const _setUserPreferencesCookie = serverOnly(
  (data: UserPreferences, response?: Response): void => {
    setCookie(USER_PREFERENCES_COOKIE, JSON.stringify(data), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      response,
    })
  },
)

// Device UI settings cookie helpers (client-accessible)
export function getDeviceUISettingsCookie(): DeviceUISettingsCookieData {
  const cookieValue = getCookie(DEVICE_UI_SETTINGS_COOKIE)
  if (!cookieValue) {
    return DeviceUISettingsSchema.parse({})
  }

  try {
    const parsed = JSON.parse(cookieValue)
    return DeviceUISettingsSchema.parse(parsed)
  } catch {
    return DeviceUISettingsSchema.parse({})
  }
}

export function setDeviceUISettingsCookie(
  data: DeviceUISettingsCookieData,
): void {
  setCookie(DEVICE_UI_SETTINGS_COOKIE, JSON.stringify(data), {
    httpOnly: false, // Client-accessible cookie
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}

// Common helpers
export const _getDefaultPreferences = () => UserPreferencesSchema.parse({})

export const _addTimestamp = (
  preferences: UserPreferences,
): UserPreferences => ({
  ...preferences,
  timestamp: Date.now(),
})
