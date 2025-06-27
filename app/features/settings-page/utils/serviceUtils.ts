import type { ServiceMode } from "@/features/service-config/types"

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
        title: "Disabled",
        description:
          "This integration is currently disabled and will not be used.",
      }
    case "live":
      return {
        icon: "⚡",
        title: "Live Access",
        description:
          "Connects directly to the service for real-time data and features.",
      }
    case "imported":
      return {
        icon: "📥",
        title: "Imported Data",
        description:
          "Uses data previously imported from the service. No live connection.",
      }
    default:
      return {
        icon: "❓",
        title: "Unknown Mode",
        description: "This mode is not recognized.",
      }
  }
}
