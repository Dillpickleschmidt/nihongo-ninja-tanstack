// features/srs-services/factory.ts
import { getActiveLiveService } from "./utils"
import { LocalFSRSAdapter } from "./adapters/local-fsrs-adapter"
import { AnkiAdapter } from "./adapters/anki-adapter"
import { JpdbAdapter } from "./adapters/jpdb-adapter"
import { WanikaniAdapter } from "./adapters/wanikani-adapter"
import type { AllServicePreferences } from "@/features/main-cookies/schemas/user-settings"
import type { SRSServiceAdapter } from "./types"

/**
 * Create an SRS adapter based on the active live service
 * Falls back to local FSRS if no service is active
 */
export function createSRSAdapter(
  userId: string | null,
  preferences: AllServicePreferences,
): SRSServiceAdapter {
  const activeService = getActiveLiveService(preferences)

  // If no user ID, always use local FSRS (but it won't work without userId)
  if (!userId) {
    return new LocalFSRSAdapter(userId || "")
  }

  // If no active live service, use local FSRS
  if (!activeService) {
    return new LocalFSRSAdapter(userId)
  }

  // Return appropriate adapter based on active service
  switch (activeService) {
    case "anki":
      return new AnkiAdapter()

    case "jpdb":
      return new JpdbAdapter()

    case "wanikani":
      return new WanikaniAdapter()

    default:
      return new LocalFSRSAdapter(userId)
  }
}
