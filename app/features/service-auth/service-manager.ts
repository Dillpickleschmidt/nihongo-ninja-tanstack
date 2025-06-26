// features/service-auth/service-manager.ts

import { getCookie, createSetCookieHeader } from "@/utils/cookie-utils"
import { setResponseHeader } from "@tanstack/solid-start/server"
import type {
  ServiceCredentials,
  ServiceSettings,
  ServiceType,
  ServiceState,
  AllServicesState,
  OperationResult,
  ServiceConfig,
  ServiceMode,
} from "./types"

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

const COOKIE_NAME = "nn-service-credentials"

const defaultServiceSettings: ServiceSettings = {
  mode: "disabled",
  api_key: "",
  is_api_key_valid: false,
  data_imported: false,
}

// === Cookie Operations ===

/**
 * Get the complete service credentials object from cookie
 */
export function getServiceCredentials(): ServiceCredentials {
  const cookieValue = getCookie(COOKIE_NAME)
  let parsedCredentials: ServiceCredentials = {}
  if (cookieValue) {
    try {
      parsedCredentials = JSON.parse(cookieValue)
    } catch (e) {
      console.error("Failed to parse service credentials cookie:", e)
    }
  }

  // Ensure all service types are present with default values if not in cookie
  return {
    jpdb: { ...defaultServiceSettings, ...(parsedCredentials.jpdb || {}) },
    wanikani: {
      ...defaultServiceSettings,
      ...(parsedCredentials.wanikani || {}),
    },
    anki: { ...defaultServiceSettings, ...(parsedCredentials.anki || {}) },
  }
}

/**
 * Save the complete service credentials object to cookie
 */
export function setServiceCredentials(credentials: ServiceCredentials): void {
  const cookieHeader = createSetCookieHeader(
    COOKIE_NAME,
    JSON.stringify(credentials),
    { httpOnly: true, maxAge: 60 * 60 * 24 * 365 }, // 1 year
  )
  setResponseHeader("Set-Cookie", cookieHeader)
}

/**
 * Update settings for a specific service without affecting others
 */
export function updateServiceSettings(
  service: ServiceType,
  settings: Partial<ServiceSettings>,
): void {
  const currentCredentials = getServiceCredentials()
  const currentServiceSettings =
    currentCredentials[service] || defaultServiceSettings

  const updatedCredentials = {
    ...currentCredentials,
    [service]: { ...currentServiceSettings, ...settings },
  }

  setServiceCredentials(updatedCredentials)
}

/**
 * Remove a specific service from credentials
 */
export function removeService(service: ServiceType): void {
  const currentCredentials = getServiceCredentials()
  const { [service]: removed, ...remainingCredentials } = currentCredentials
  setServiceCredentials(remainingCredentials)
}

/**
 * Clear all service credentials
 */
export function clearAllServices(): void {
  const cookieHeader = createSetCookieHeader(COOKIE_NAME, "", {
    httpOnly: true,
    maxAge: 0,
  })
  setResponseHeader("Set-Cookie", cookieHeader)
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

    const validationResult = await validateAnkiApiKey(conversionResult.api_key!) // Use converted API key for validation
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

// === Service State Resolution ===

function getServiceState(service: ServiceType): ServiceState {
  const credentials = getServiceCredentials()
  const serviceSettings = {
    ...defaultServiceSettings,
    ...(credentials[service] || {}),
  }

  return {
    status: serviceSettings.is_api_key_valid ? "connected" : "disconnected",
    mode: serviceSettings.mode,
    has_api_key: !!serviceSettings.api_key,
    is_api_key_valid: serviceSettings.is_api_key_valid,
    data_imported: serviceSettings.data_imported,
  }
}

export function getAllServicesState(): AllServicesState {
  return {
    jpdb: getServiceState("jpdb"),
    wanikani: getServiceState("wanikani"),
    anki: getServiceState("anki"),
  }
}

/**
 * Test stored credentials against external APIs to detect expired state
 */
export async function validateAllStoredCredentials(): Promise<AllServicesState> {
  const credentials = getServiceCredentials()
  const state = getAllServicesState()

  // Test each connected service
  for (const service of Object.keys(credentials) as ServiceType[]) {
    const serviceCredentials = credentials[service]
    if (serviceCredentials?.api_key) {
      const validationResult = await validateServiceCredentials(service, {
        api_key: serviceCredentials.api_key,
      })

      // Update the is_api_key_valid flag based on validation result
      updateServiceSettings(service, {
        is_api_key_valid: validationResult.success,
      })

      state[service] = {
        ...state[service],
        status: validationResult.success ? "connected" : "expired",
        is_api_key_valid: validationResult.success, // Ensure this is updated in the returned state
      }
    }
  }

  return state
}

export function getServiceConfig(service: ServiceType): ServiceConfig {
  return SERVICE_CONFIGS[service]
}

export function getAllServiceConfigs(): Record<ServiceType, ServiceConfig> {
  return SERVICE_CONFIGS
}
