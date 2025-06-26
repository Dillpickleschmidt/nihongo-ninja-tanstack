// features/service-auth/types.ts

// Core service types
export type ServiceType = "jpdb" | "wanikani" | "anki"

export interface ServiceSettings {
  api_key: string
  enabled: boolean
  use_imported_data: boolean
}

// (what gets stored in the cookie)
export interface ServiceCredentials {
  jpdb?: ServiceSettings
  wanikani?: ServiceSettings
  anki?: ServiceSettings
}

export type ServiceStatus = "connected" | "disconnected" | "expired"

// Service state for UI (combines settings + connection status)
export interface ServiceState {
  status: ServiceStatus
  enabled: boolean
  use_imported_data: boolean
  has_api_key: boolean
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
  settings: Partial<Pick<ServiceSettings, "enabled" | "use_imported_data">>
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
