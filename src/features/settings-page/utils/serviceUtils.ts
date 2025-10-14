// features/settings-page/utils/serviceUtils.ts
import type { ServiceMode } from "@/features/main-cookies/schemas/user-settings"

export const getModeDisplayName = (mode: ServiceMode): string => {
  switch (mode) {
    case "disabled":
      return "Disabled"
    case "live":
      return "Live Access"
    case "imported":
      return "Imported Data"
    default:
      return "Unknown"
  }
}

export const getModeDescription = (mode: ServiceMode) => {
  switch (mode) {
    case "disabled":
      return {
        icon: "🚫",
        title: "Service Disabled",
        description:
          "This service integration is currently disabled. Select a mode above to get started.",
      }
    case "live":
      return {
        icon: "📡",
        title: "Live Access Mode",
        description:
          "Connect to your account and access decks in real-time. Do reviews or browse from Nihongo Ninja while keeping your data on the external service.",
      }
    case "imported":
      return {
        icon: "📦",
        title: "Import Data Mode",
        description:
          "Import your data once to switch to our SRS system. Your data becomes detached from other services. If you've practiced the same terms in both places, their reviews will be combined (nothing is deleted). Cards with the same review timestamp are deduplicated, so you can re-import as many times as you want without fear of duplicates. ;)",
      }
    default:
      return {
        icon: "❓",
        title: "Unknown Mode",
        description: "This mode is not recognized.",
      }
  }
}
