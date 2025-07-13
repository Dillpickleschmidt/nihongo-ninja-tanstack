// features/dashboard/utils/serviceSourceHelper.ts
import type {
  AllServiceAuthData,
  AllServicePreferences,
  ServiceType,
} from "@/features/service-config/types"
import type { DeckSource, Deck } from "@/data/types"

const SERVICE_DISPLAY_NAMES: Record<ServiceType, string> = {
  anki: "Anki",
  wanikani: "WaniKani",
  jpdb: "JPDB",
}

export function isServiceEnabled(
  service: ServiceType,
  preferences: AllServicePreferences,
): boolean {
  const servicePrefs = preferences[service]
  return servicePrefs?.mode !== "disabled"
}

export function isLiveOptionEnabled(
  service: ServiceType,
  authData: AllServiceAuthData,
): boolean {
  const serviceAuth = authData[service]
  return serviceAuth?.is_api_key_valid === true
}

export function isImportedOptionEnabled(
  service: ServiceType,
  preferences: AllServicePreferences,
): boolean {
  const servicePrefs = preferences[service]
  return servicePrefs?.data_imported === true
}

function createServiceDeck(
  serviceId: string,
  optionType: "live" | "imported",
): Deck {
  const displayName = SERVICE_DISPLAY_NAMES[serviceId as ServiceType]
  const suffix = optionType === "imported" ? "-Imported" : "-Live"

  return {
    id: `${serviceId}-${optionType}`,
    slug: optionType === "imported" ? `${serviceId}-imported` : serviceId,
    title: `${displayName}${suffix}`,
    // Add other required Deck properties with dummy values
    deckType: "user_deck" as const,
    learning_path_items: [],
  }
}

function getServiceDecks(serviceId: string): Deck[] {
  // Return dummy decks for now - this will be replaced with real deck loading later
  return [
    {
      id: `${serviceId}-deck-1`,
      slug: `${serviceId}-deck-1`,
      title: `${SERVICE_DISPLAY_NAMES[serviceId as ServiceType]} Deck 1`,
      deckType: "user_deck" as const,
      learning_path_items: [],
    },
    {
      id: `${serviceId}-deck-2`,
      slug: `${serviceId}-deck-2`,
      title: `${SERVICE_DISPLAY_NAMES[serviceId as ServiceType]} Deck 2`,
      deckType: "user_deck" as const,
      learning_path_items: [],
    },
  ]
}

export function generateServiceSources(
  authData: AllServiceAuthData,
  preferences: AllServicePreferences,
): DeckSource[] {
  const services: ServiceType[] = ["anki", "wanikani", "jpdb"]
  const serviceSources: DeckSource[] = []

  services.forEach((service) => {
    const serviceEnabled = isServiceEnabled(service, preferences)

    if (!serviceEnabled) {
      // Show disabled services with no decks
      serviceSources.push({
        id: service,
        name: SERVICE_DISPLAY_NAMES[service],
        type: "service" as const,
        decks: [],
        disabled: true,
      })
      return
    }

    const decks: Deck[] = []
    const liveEnabled = isLiveOptionEnabled(service, authData)
    const importedEnabled = isImportedOptionEnabled(service, preferences)

    // Add live option
    const liveDeck = createServiceDeck(service, "live")
    liveDeck.disabled = !liveEnabled
    decks.push(liveDeck)

    // Add imported option
    const importedDeck = createServiceDeck(service, "imported")
    importedDeck.disabled = !importedEnabled
    decks.push(importedDeck)

    serviceSources.push({
      id: service,
      name: SERVICE_DISPLAY_NAMES[service],
      type: "service" as const,
      decks,
      disabled: false,
    })
  })

  return serviceSources
}
