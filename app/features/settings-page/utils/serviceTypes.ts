export type ServiceType = "jpdb" | "wanikani" | "anki"

export type ServiceMode = "live" | "imported" | "disabled"

export type ServiceStatus = "connected" | "disconnected" | "expired"

export interface ServiceState {
  status: ServiceStatus
  enabled: boolean
  use_imported_data: boolean
  has_api_key: boolean
}

export interface AllServicesState {
  jpdb: ServiceState
  wanikani: ServiceState
  anki: ServiceState
}

export interface ServiceUIState {
  status: ServiceStatus
  mode: ServiceMode
  errorMessage: string
}

export interface ServiceCredentials {
  jpdb: { api_key: string }
  wanikani: { api_key: string }
  anki: { username: string; password: string }
}
