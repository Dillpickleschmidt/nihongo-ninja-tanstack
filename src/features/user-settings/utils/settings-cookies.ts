// feature/user-settings/utils/settings-cookies.ts
import { getCookie, createSetCookieHeader } from "@/utils/cookie-utils"
import { serverOnly } from "@tanstack/solid-start"
import {
  UserPreferencesSchema,
  type UserPreferencesCookieData,
} from "../schemas/user-preferences"
import {
  DeviceUISettingsSchema,
  type DeviceUISettingsCookieData,
} from "../schemas/device-ui-settings"
import { USER_PREFERENCES_COOKIE, DEVICE_UI_SETTINGS_COOKIE } from "../types"

// Cross-Device Settings (HttpOnly cookie, server-managed)
export const getUserPreferencesCookie = serverOnly(
  (): UserPreferencesCookieData | null => {
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

export const createUserPreferencesCookieHeader = serverOnly(
  (data: UserPreferencesCookieData): string => {
    const cookieValue = JSON.stringify(data)
    return createSetCookieHeader(USER_PREFERENCES_COOKIE, cookieValue, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
  },
)

// Device UI Settings (client-accessible cookie)
export function getDeviceUISettingsCookie(): DeviceUISettingsCookieData {
  const cookieValue = getCookie(DEVICE_UI_SETTINGS_COOKIE)
  if (!cookieValue) {
    // Return defaults if no cookie exists
    const result = DeviceUISettingsSchema.safeParse({})
    return result.success ? result.data : DeviceUISettingsSchema.parse({})
  }

  try {
    const parsed = JSON.parse(cookieValue)
    const result = DeviceUISettingsSchema.safeParse(parsed)
    return result.success ? result.data : DeviceUISettingsSchema.parse({})
  } catch {
    // Return defaults if parsing fails
    const result = DeviceUISettingsSchema.safeParse({})
    return result.success ? result.data : DeviceUISettingsSchema.parse({})
  }
}

export function setDeviceUISettingsCookie(
  data: DeviceUISettingsCookieData,
): void {
  const cookieValue = JSON.stringify(data)
  const maxAge = 60 * 60 * 24 * 365 // 1 year
  document.cookie = `${DEVICE_UI_SETTINGS_COOKIE}=${cookieValue}; Path=/; Max-Age=${maxAge}; Secure; SameSite=lax`
}
