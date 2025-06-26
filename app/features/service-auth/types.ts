// features/service-auth/types.ts

// Core service types
export type ServiceType = "jpdb" | "wanikani" | "anki"
export type ServiceMode = "disabled" | "live" | "imported"

/**
 * Represents the settings for a single service, as stored in the cookie.
 * This is the primary source of truth for a service's configuration.
 */
export interface ServiceSettings {
  mode: ServiceMode
  api_key: string
  is_api_key_valid: boolean
  data_imported: boolean
}

/**
 * Represents the complete credentials object stored in the cookie.
 */
export interface ServiceCredentials {
  jpdb?: Partial<ServiceSettings>
  wanikani?: Partial<ServiceSettings>
  anki?: Partial<ServiceSettings>
}

export type ServiceStatus = "connected" | "disconnected" | "expired"

/**
 * Represents the resolved state of a service for the UI.
 * It's derived from the stored ServiceSettings and server-side validation.
 */
export interface ServiceState {
  status: ServiceStatus // Overall connection status
  mode: ServiceMode // The user's selected mode
  has_api_key: boolean // Does an API key exist?
  is_api_key_valid: boolean // Is the existing key valid?
  data_imported: boolean // Has data been successfully imported?
}

// Complete service state for all services
export interface AllServicesState {
  jpdb: ServiceState
  wanikani: ServiceState
  anki: ServiceState
}

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

// Service settings update input
export interface ServiceSettingsUpdate {
  service: ServiceType
  settings: Partial<ServiceSettings>
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
