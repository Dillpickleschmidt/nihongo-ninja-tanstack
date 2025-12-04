// features/srs-services/utils.ts
import type {
  SRSServiceType,
  AllSRSServicePreferences,
} from "@/features/main-cookies/schemas/user-settings"

/**
 * Get the active service from preferences
 * Returns null if no service is enabled with valid API key
 */
export function getActiveService(
  preferences: AllSRSServicePreferences,
): SRSServiceType | null {
  for (const [service, pref] of Object.entries(preferences)) {
    if (pref.mode === "enabled" && pref.is_api_key_valid) {
      return service as SRSServiceType
    }
  }
  return null
}
