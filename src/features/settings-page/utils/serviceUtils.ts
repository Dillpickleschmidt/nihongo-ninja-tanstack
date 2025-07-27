// features/settings-page/utils/serviceUtils.ts
import type { ServiceMode } from "@/features/user-settings/schemas/user-preferences"

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
          "Connect to your account and access decks in real-time. Continue using your external SRS while browsing content here.",
      }
    case "imported":
      return {
        icon: "📦",
        title: "Import Data Mode",
        description:
          "Import your data once to switch to our SRS system. Your data becomes detached from other services.",
      }
    default:
      return {
        icon: "❓",
        title: "Unknown Mode",
        description: "This mode is not recognized.",
      }
  }
}
