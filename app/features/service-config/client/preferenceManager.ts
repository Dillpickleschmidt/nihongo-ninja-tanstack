// features/service-config/client/preferenceManager.ts

import type {
  ServiceType,
  ServicePreference,
  AllServicePreferences,
} from "../types"

const PREFERENCE_COOKIE_NAME = "nn-service-preferences"

const defaultPreference: ServicePreference = {
  mode: "disabled",
  data_imported: false,
}

/**
 * Parse cookie string into key-value pairs
 */
function parseCookieString(
  cookieString: string,
): Array<{ name: string; value: string }> {
  if (!cookieString) return []

  return cookieString
    .split(";")
    .map((cookie) => {
      const [name, ...valueParts] = cookie.trim().split("=")
      return { name: name.trim(), value: valueParts.join("=") }
    })
    .filter((cookie) => cookie.name && cookie.value)
}

/**
 * Get specific cookie value
 */
function getCookieValue(name: string): string | null {
  const cookies = parseCookieString(document.cookie)
  const cookie = cookies.find((c) => c.name === name)
  return cookie?.value || null
}

/**
 * Set cookie value
 */
function setCookieValue(name: string, value: string, maxAge?: number): void {
  let cookieString = `${name}=${value}; path=/`
  if (maxAge !== undefined) cookieString += `; max-age=${maxAge}`
  document.cookie = cookieString
}

/**
 * Get all service preferences from cookie
 */
export function getAllServicePreferences(): AllServicePreferences {
  try {
    const cookieValue = getCookieValue(PREFERENCE_COOKIE_NAME)
    let parsedPreferences: AllServicePreferences = {}

    if (cookieValue) {
      try {
        // Try parsing as plain JSON first, then try URI decoding
        parsedPreferences = JSON.parse(cookieValue)
      } catch {
        parsedPreferences = JSON.parse(decodeURIComponent(cookieValue))
      }
    }

    // Ensure all service types are present with default values
    return {
      jpdb: { ...defaultPreference, ...(parsedPreferences.jpdb || {}) },
      wanikani: { ...defaultPreference, ...(parsedPreferences.wanikani || {}) },
      anki: { ...defaultPreference, ...(parsedPreferences.anki || {}) },
    }
  } catch (e) {
    console.error("Failed to parse service preferences:", e)
    return {
      jpdb: { ...defaultPreference },
      wanikani: { ...defaultPreference },
      anki: { ...defaultPreference },
    }
  }
}

/**
 * Get preference for a specific service
 */
export function getServicePreference(service: ServiceType): ServicePreference {
  const allPreferences = getAllServicePreferences()
  return allPreferences[service] || defaultPreference
}

/**
 * Update preference for a specific service
 */
export function setServicePreference(
  service: ServiceType,
  preference: Partial<ServicePreference>,
): void {
  const currentPreferences = getAllServicePreferences()
  const updatedPreferences = {
    ...currentPreferences,
    [service]: {
      ...defaultPreference,
      ...(currentPreferences[service] || {}),
      ...preference,
    },
  }

  setCookieValue(
    PREFERENCE_COOKIE_NAME,
    JSON.stringify(updatedPreferences),
    60 * 60 * 24 * 365, // 1 year
  )
}

/**
 * Remove preference for a specific service
 */
export function removeServicePreference(service: ServiceType): void {
  const currentPreferences = getAllServicePreferences()
  const { [service]: _, ...remainingPreferences } = currentPreferences

  setCookieValue(
    PREFERENCE_COOKIE_NAME,
    JSON.stringify(remainingPreferences),
    60 * 60 * 24 * 365, // 1 year
  )
}

/**
 * Clear all service preferences
 */
export function clearAllServicePreferences(): void {
  setCookieValue(PREFERENCE_COOKIE_NAME, "", 0) // Expire immediately
}
