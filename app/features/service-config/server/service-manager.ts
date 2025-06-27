// service-config/server/service-manager.ts

import { getCookie, createSetCookieHeader } from "@/utils/cookie-utils"
import { setResponseHeader } from "@tanstack/solid-start/server"
import type {
  ServiceType,
  OperationResult,
  ServiceConfig,
  ServiceAuthData,
  AllServiceAuthData,
  ServicePreference,
  AllServicePreferences,
} from "../types"

// Service configuration
const SERVICE_CONFIGS: Record<ServiceType, ServiceConfig> = {
  jpdb: { name: "jpdb", display_name: "jpdb", requires_conversion: false },
  wanikani: {
    name: "wanikani",
    display_name: "WaniKani",
    requires_conversion: false,
  },
  anki: { name: "anki", display_name: "Anki", requires_conversion: true },
}

const AUTH_COOKIE_NAME = "nn-service-credentials"
const PREFERENCE_COOKIE_NAME = "nn-service-preferences"

const defaultAuthData: ServiceAuthData = {
  api_key: "",
  is_api_key_valid: false,
}

const defaultPreference: ServicePreference = {
  mode: "disabled",
  data_imported: false,
}

// === Cookie Operations ===

/**
 * Get the complete service authentication data object from the secure cookie.
 */
export function getAuthDataFromCookie(): AllServiceAuthData {
  const cookieValue = getCookie(AUTH_COOKIE_NAME)
  let parsedAuthData: AllServiceAuthData = {}
  if (cookieValue) {
    try {
      parsedAuthData = JSON.parse(cookieValue)
    } catch (e) {
      console.error("Failed to parse auth data cookie:", e)
    }
  }

  // Ensure all service types are present with default values if not in cookie
  return {
    jpdb: { ...defaultAuthData, ...(parsedAuthData.jpdb || {}) },
    wanikani: { ...defaultAuthData, ...(parsedAuthData.wanikani || {}) },
    anki: { ...defaultAuthData, ...(parsedAuthData.anki || {}) },
  }
}

/**
 * Save the complete service authentication data object to the secure cookie.
 */
export function setAuthDataToCookie(authData: AllServiceAuthData): void {
  const cookieHeader = createSetCookieHeader(
    AUTH_COOKIE_NAME,
    JSON.stringify(authData),
    { httpOnly: true, maxAge: 60 * 60 * 24 * 365 }, // 1 year
  )
  setResponseHeader("Set-Cookie", cookieHeader)
}

/**
 * Get the complete service preference data object from the cookie (READ-ONLY for SSR).
 * Server can read preferences but never writes them - they're managed client-side.
 */
export function getPreferencesFromCookie(): AllServicePreferences {
  const cookieValue = getCookie(PREFERENCE_COOKIE_NAME)
  let parsedPreferences: AllServicePreferences = {}
  if (cookieValue) {
    try {
      // Try parsing as plain JSON first, then try URI decoding (for migration)
      try {
        parsedPreferences = JSON.parse(cookieValue)
      } catch {
        parsedPreferences = JSON.parse(decodeURIComponent(cookieValue))
      }
    } catch (e) {
      console.error("Failed to parse preferences cookie:", e)
    }
  }

  // Ensure all service types are present with default values if not in cookie
  return {
    jpdb: { ...defaultPreference, ...(parsedPreferences.jpdb || {}) },
    wanikani: { ...defaultPreference, ...(parsedPreferences.wanikani || {}) },
    anki: { ...defaultPreference, ...(parsedPreferences.anki || {}) },
  }
}

/**
 * Update authentication data for a specific service without affecting others.
 */
export function updateServiceAuth(
  service: ServiceType,
  authData: Partial<ServiceAuthData>,
): void {
  const currentAuthData = getAuthDataFromCookie()
  const updatedAuthData: AllServiceAuthData = {
    ...currentAuthData,
    [service]: {
      ...defaultAuthData,
      ...(currentAuthData[service] || {}),
      ...authData,
    },
  }
  setAuthDataToCookie(updatedAuthData)
}

/**
 * Remove a specific service from authentication data.
 */
export function removeServiceAuth(service: ServiceType): void {
  const currentAuthData = getAuthDataFromCookie()
  const { [service]: _, ...remainingAuth } = currentAuthData
  setAuthDataToCookie(remainingAuth)
}

/**
 * Clear all service authentication data.
 */
export function clearAllServiceAuth(): void {
  const authCookieHeader = createSetCookieHeader(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    maxAge: 0,
  })
  setResponseHeader("Set-Cookie", authCookieHeader)
}

// === Credential Validation ===

async function validateJpdbApiKey(apiKey: string): Promise<OperationResult> {
  try {
    const response = await fetch("https://jpdb.io/api/v1/ping", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      return { success: true }
    } else {
      return { success: false, error: "Invalid jpdb API key" }
    }
  } catch (error) {
    return { success: false, error: "Network error connecting to jpdb" }
  }
}

async function validateWaniKaniApiKey(
  apiKey: string,
): Promise<OperationResult> {
  try {
    const response = await fetch("https://api.wanikani.com/v2/user", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (response.ok) {
      return { success: true }
    } else {
      return { success: false, error: "Invalid WaniKani API key" }
    }
  } catch (error) {
    return { success: false, error: "Network error connecting to WaniKani" }
  }
}

/**
 * Convert Anki username/password to API key
 */
async function convertAnkiCredentials(
  username: string,
  password: string,
): Promise<OperationResult & { api_key?: string }> {
  try {
    // TODO: Implement AnkiWeb authentication flow
    // This would typically involve:
    // 1. POST to AnkiWeb login endpoint with username/password
    // 2. Extract session token/API key from response
    // 3. Return the API key for storage

    // Placeholder implementation
    return { success: false, error: "Anki authentication not yet implemented" }
  } catch (error) {
    return { success: false, error: "Network error connecting to AnkiWeb" }
  }
}

async function validateAnkiApiKey(apiKey: string): Promise<OperationResult> {
  try {
    // TODO: Implement AnkiWeb API key validation
    // This would test the API key against AnkiWeb endpoints

    // Placeholder implementation
    return { success: false, error: "Anki validation not yet implemented" }
  } catch (error) {
    return { success: false, error: "Network error connecting to AnkiWeb" }
  }
}

/**
 * Validate credentials for any service type
 */
export async function validateServiceCredentials(
  service: ServiceType,
  credentials: { api_key?: string; username?: string; password?: string },
): Promise<OperationResult & { api_key?: string }> {
  const config = SERVICE_CONFIGS[service]

  if (config.requires_conversion) {
    // Anki: convert username/password to API key
    if (!credentials.username || !credentials.password) {
      return {
        success: false,
        error: "Username and password required for Anki",
      }
    }

    const conversionResult = await convertAnkiCredentials(
      credentials.username,
      credentials.password,
    )
    if (!conversionResult.success) {
      return conversionResult
    }

    const validationResult = await validateAnkiApiKey(conversionResult.api_key!)
    return {
      ...validationResult,
      api_key: conversionResult.api_key,
    }
  } else {
    // jpdb/WaniKani: validate API key directly
    if (!credentials.api_key) {
      return { success: false, error: "API key required" }
    }

    let validationResult: OperationResult
    switch (service) {
      case "jpdb":
        validationResult = await validateJpdbApiKey(credentials.api_key)
        break
      case "wanikani":
        validationResult = await validateWaniKaniApiKey(credentials.api_key)
        break
      default:
        return { success: false, error: "Unknown service type" }
    }

    return {
      ...validationResult,
      api_key: credentials.api_key,
    }
  }
}

/**
 * Test stored credentials against external APIs to detect expired state.
 * Updates the auth cookies with validation results.
 */
export async function validateAllStoredCredentials(): Promise<void> {
  const authData = getAuthDataFromCookie()

  // Test each connected service
  for (const service of Object.keys(authData) as ServiceType[]) {
    const serviceAuthData = authData[service]
    if (serviceAuthData?.api_key) {
      const validationResult = await validateServiceCredentials(service, {
        api_key: serviceAuthData.api_key,
      })

      // Update the is_api_key_valid flag based on validation result
      updateServiceAuth(service, {
        api_key: serviceAuthData.api_key,
        is_api_key_valid: validationResult.success,
      })
    }
  }
}

export function getServiceConfig(service: ServiceType): ServiceConfig {
  return SERVICE_CONFIGS[service]
}

export function getAllServiceConfigs(): Record<ServiceType, ServiceConfig> {
  return SERVICE_CONFIGS
}
