// features/service-config/types.ts

// Core service types
export type ServiceType = "jpdb" | "wanikani" | "anki"
export type ServiceMode = "disabled" | "live" | "imported"

// --- Authentication Data (Server-side managed) ---

/**
 * Represents the secure, authentication-related data for a single service.
 * Stored in the httpOnly "nn-service-credentials" cookie.
 */
export interface ServiceAuthData {
  api_key?: string
}

/**
 * Represents the complete content of the secure "nn-service-credentials" cookie.
 * A map where keys are ServiceType and values are ServiceAuthData.
 */
export interface AllServiceAuthData {
  jpdb?: ServiceAuthData
  wanikani?: ServiceAuthData
  anki?: ServiceAuthData
}

// --- Preference Data (Client-side managed) ---

/**
 * Represents the user preference data for a single service.
 * Stored in the "nn-service-preferences" cookie (client-managed).
 */
export interface ServicePreference {
  mode?: ServiceMode
  data_imported?: boolean
  is_api_key_valid?: boolean
}

/**
 * Represents all service preferences.
 * A map where keys are ServiceType and values are ServicePreference.
 */
export interface AllServicePreferences {
  jpdb?: ServicePreference
  wanikani?: ServicePreference
  anki?: ServicePreference
}

// --- Shared Component Props ---

/**
 * Shared props interface for all service cards
 */
export interface ServiceCardProps {
  preference: () => Partial<ServicePreference>
  updateServicePreference: (preference: Partial<ServicePreference>) => void
}

/**
 * Extended props for JpdbServiceCard (includes import functionality)
 */
export interface JpdbServiceCardProps extends ServiceCardProps {
  onImport: (apiKey: string, file: File) => void
}

// --- Operation Types ---

// Generic operation result (used for validation, imports, etc.)
export interface OperationResult {
  success: boolean
  error?: string
  // Optional data for specific operations
  cards_imported?: number
  decks_imported?: number
}

// Service connection input (what user provides)
export interface ServiceConnectionInput {
  service: ServiceType
  credentials: {
    api_key?: string
    username?: string // for Anki
    password?: string // for Anki
  }
}

// Service update input for authentication data (server-side only)
export interface ServiceAuthUpdate {
  service: ServiceType
  authData: Partial<ServiceAuthData>
}

// Service configuration (for internal use)
export interface ServiceConfig {
  name: string
  display_name: string
  requires_conversion: boolean // true for Anki (username/password → API key)
}

// Server function response (generic for all operations)
export interface ServiceResponse<T = void> {
  success: boolean
  data?: T
  error?: string
}
