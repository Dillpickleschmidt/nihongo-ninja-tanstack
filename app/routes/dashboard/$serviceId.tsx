// routes/dashboard/$serviceId.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { ServiceContentArea } from "@/features/dashboard/components/content/service/ServiceContentArea"
import type { ServiceType } from "@/features/service-config/types"

const VALID_SERVICES = ["anki", "wanikani", "jpdb"] as const

export const Route = createFileRoute("/dashboard/$serviceId")({
  beforeLoad: ({ params }) => {
    if (!VALID_SERVICES.includes(params.serviceId as ServiceType)) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }
  },
  loader: async ({ context, params }) => {
    const { user } = context
    const serviceId = params.serviceId as ServiceType

    // Mock service data for now
    const mockServiceData = {
      decks: generateMockServiceDecks(serviceId),
      stats: generateMockServiceStats(serviceId),
      activeDeckId: `${serviceId}-deck-1`, // Hardcoded active deck
    }

    return {
      user,
      serviceId,
      serviceData: mockServiceData,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  createEffect(() => {
    setActiveDeck("service", loaderData().serviceId, "default")
  })

  return (
    <ServiceContentArea
      serviceId={loaderData().serviceId}
      serviceData={loaderData().serviceData}
    />
  )
}

function generateMockServiceDecks(serviceId: ServiceType) {
  const decksByService = {
    anki: [
      {
        id: "anki-deck-1",
        name: "Japanese Core 2000",
        dueCards: 23,
        totalCards: 2000,
      },
      {
        id: "anki-deck-2",
        name: "Genki I Vocabulary",
        dueCards: 5,
        totalCards: 317,
      },
      {
        id: "anki-deck-3",
        name: "Kanji Recognition",
        dueCards: 12,
        totalCards: 500,
      },
      {
        id: "anki-deck-4",
        name: "Grammar Patterns",
        dueCards: 0,
        totalCards: 150,
      },
    ],
    wanikani: [
      {
        id: "wanikani-deck-1",
        name: "Level 1 Radicals",
        dueCards: 8,
        totalCards: 30,
      },
      {
        id: "wanikani-deck-2",
        name: "Level 1 Kanji",
        dueCards: 15,
        totalCards: 25,
      },
      {
        id: "wanikani-deck-3",
        name: "Level 2 Radicals",
        dueCards: 3,
        totalCards: 20,
      },
      {
        id: "wanikani-deck-4",
        name: "Level 2 Kanji",
        dueCards: 7,
        totalCards: 30,
      },
    ],
    jpdb: [
      {
        id: "jpdb-deck-1",
        name: "Most Common 1000",
        dueCards: 45,
        totalCards: 1000,
      },
      {
        id: "jpdb-deck-2",
        name: "Anime Vocabulary",
        dueCards: 12,
        totalCards: 800,
      },
      {
        id: "jpdb-deck-3",
        name: "News Articles",
        dueCards: 8,
        totalCards: 600,
      },
      {
        id: "jpdb-deck-4",
        name: "Daily Conversation",
        dueCards: 0,
        totalCards: 300,
      },
    ],
  }
  return decksByService[serviceId] || []
}

function generateMockServiceStats(serviceId: ServiceType) {
  return {
    totalDueCards: 40,
    studiedToday: 25,
    currentStreak: 12,
    accuracy: 85,
  }
}
