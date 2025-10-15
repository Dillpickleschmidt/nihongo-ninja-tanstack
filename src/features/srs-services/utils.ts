// features/srs-services/utils.ts
import type {
  ServiceType,
  AllServicePreferences,
  ServiceMode,
} from "@/features/main-cookies/schemas/user-settings"

/**
 * Get the active live service from preferences
 * Returns null if no service is in live mode with valid API key
 */
export function getActiveLiveService(
  preferences: AllServicePreferences,
): ServiceType | null {
  for (const [service, pref] of Object.entries(preferences)) {
    if (pref.mode === "live" && pref.is_api_key_valid) {
      return service as ServiceType
    }
  }
  return null
}

/**
 * Ensure only one service can be in live mode at a time
 * Auto-disables other services when switching one to live mode
 */
export function ensureSingleLiveService(
  targetService: ServiceType,
  newMode: ServiceMode,
  currentPreferences: AllServicePreferences,
): AllServicePreferences {
  // If not switching to live mode, no changes needed
  if (newMode !== "live") {
    return currentPreferences
  }

  // Create new preferences object with all other services disabled
  const updatedPreferences = { ...currentPreferences }

  for (const service of Object.keys(updatedPreferences) as ServiceType[]) {
    if (service !== targetService) {
      updatedPreferences[service] = {
        ...updatedPreferences[service],
        mode: "disabled",
      }
    }
  }

  return updatedPreferences
}
