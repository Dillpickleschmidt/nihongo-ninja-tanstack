import type {
  ServiceType,
  ServiceMode,
  AllServicesState,
  ServiceStatus,
} from "./serviceTypes"

export const getServiceMode = (
  service: ServiceType,
  servicesState: AllServicesState,
  selectedModes: Record<ServiceType, ServiceMode>,
): ServiceMode => {
  const state = servicesState[service]
  const selected = selectedModes[service]

  // If user has selected a mode, use that
  if (selected !== "disabled") {
    return selected
  }

  // Otherwise, use actual service state
  if (!state.enabled || !state.has_api_key) return "disabled"
  return state.use_imported_data ? "imported" : "live"
}

export const getServiceUIState = (
  service: ServiceType,
  servicesState: AllServicesState,
  selectedModes: Record<ServiceType, ServiceMode>,
  errors: Record<ServiceType, string>,
) => ({
  status: servicesState[service].status,
  mode: getServiceMode(service, servicesState, selectedModes),
  errorMessage: errors[service],
})

export const getModeDisplayName = (mode: ServiceMode): string => {
  switch (mode) {
    case "disabled":
      return "Disabled"
    case "live":
      return "Live Access"
    case "imported":
      return "Import Data"
    default:
      return "Select mode"
  }
}

export const getModeDescription = (mode: ServiceMode) => {
  switch (mode) {
    case "live":
      return {
        icon: "📡",
        title: "Live Access Mode",
        description:
          "Connect to your account and access decks in real-time. Continue using your external SRS while browsing content here.",
      }
    case "imported":
      return {
        icon: "📦",
        title: "Import Data Mode",
        description:
          "Import your data once to switch to our SRS system. Your data becomes local and always available offline.",
      }
    case "disabled":
      return {
        icon: "⏸️",
        title: "Service Disabled",
        description:
          "This service integration is currently disabled. Select a mode above to get started.",
      }
  }
}

// Helper function to check if service is effectively connected
export const isServiceConnected = (status: ServiceStatus): boolean => {
  return status === "connected"
}

// Helper function to get display status for UI
export const getDisplayStatus = (
  status: ServiceStatus,
): "connected" | "disconnected" => {
  return status === "connected" ? "connected" : "disconnected"
}
