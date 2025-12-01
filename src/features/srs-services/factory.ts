// features/srs-services/factory.ts
import { getActiveService } from "./utils"
import { LocalFSRSAdapter } from "./adapters/local-fsrs-adapter"
import { AnkiAdapter } from "./adapters/anki-adapter"
import type { AllSRSServicePreferences } from "@/features/main-cookies/schemas/user-settings"
import type { SRSServiceAdapter } from "./types"

/**
 * Create an SRS adapter based on the active service
 * Falls back to local FSRS if no service is active
 */
export function createSRSAdapter(
  userId: string | null,
  preferences: AllSRSServicePreferences,
): SRSServiceAdapter {
  const activeService = getActiveService(preferences)

  // If no user ID, always use local FSRS (but it won't work without userId)
  if (!userId) {
    return new LocalFSRSAdapter(userId || "")
  }

  // If no active service, use local FSRS
  if (!activeService) {
    return new LocalFSRSAdapter(userId)
  }

  // Return appropriate adapter based on active service
  switch (activeService) {
    case "anki":
      return new AnkiAdapter()

    default:
      return new LocalFSRSAdapter(userId)
  }
}
