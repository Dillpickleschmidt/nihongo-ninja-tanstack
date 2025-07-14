// routes/dashboard/$serviceId.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { getDueFSRSCards } from "@/features/supabase/db/utils"
import { textbooks } from "@/data/textbooks"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { ServiceContentArea } from "@/features/dashboard/components/content/service/ServiceContentArea"
import {
  fetchJPDBUserDecks,
  fetchJPDBSpecialDecks,
} from "@/features/service-config/jpdb/api"
import {
  getServiceAuthDataFromCookie,
  getServicePreferencesFromCookie,
} from "@/features/service-config/server/service-manager"
import { isLiveOptionEnabled } from "@/features/dashboard/utils/serviceSourceHelper"
import type { ServiceType } from "@/features/service-config/types"
import type { DeckSource, UserDeck } from "@/data/types"

const VALID_SERVICES = ["anki", "wanikani", "jpdb"] as const

// Mock data constants
const MOCK_SERVICE_DECKS: Record<ServiceType, any[]> = {
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
  jpdb: [],
}

const MOCK_SERVICE_STATS: Record<ServiceType, any> = {
  anki: {
    totalDueCards: 40,
    studiedToday: 25,
    currentStreak: 12,
    accuracy: 85,
  },
  wanikani: {
    totalDueCards: 33,
    studiedToday: 18,
    currentStreak: 8,
    accuracy: 92,
  },
  jpdb: { totalDueCards: 0, studiedToday: 0, currentStreak: 0, accuracy: 0 },
}

export const Route = createFileRoute("/dashboard/$serviceId")({
  beforeLoad: ({ context, params }) => {
    if (!VALID_SERVICES.includes(params.serviceId as ServiceType)) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }
    return { user: context.user }
  },
  loader: async ({ context, params }) => {
    const { user } = context
    const serviceId = params.serviceId as ServiceType

    // Generate standard deck sources
    const textbookSources = Object.values(textbooks).map((tb) => ({
      id: tb.id,
      name: tb.short_name || tb.name,
      type: "textbook" as const,
      decks: tb.chapters,
      disabled: false,
    }))

    const userSources: DeckSource[] = user
      ? [
          {
            id: user.id,
            name: "My Decks",
            type: "user" as const,
            decks: [
              {
                id: "user-decks",
                slug: "default",
                title: "My Custom Decks",
                deckType: "user_deck" as const,
                learning_path_items: [],
                owner_id: user.id,
                is_public: false,
                vocabulary_keys: [],
              },
            ],
            disabled: false,
          },
        ]
      : []

    const deckSources = [...textbookSources, ...userSources]
    const dueFSRSCardsPromise = user
      ? getDueFSRSCards(user.id)
      : Promise.resolve(null)

    // Generate service data
    let serviceData: {
      decks: Array<{
        id: string
        name: string
        dueCards: number
        totalCards: number
        type: "user" | "special"
      }>
      stats: {
        totalDueCards: number
        studiedToday: number
        currentStreak: number
        accuracy: number
      }
      activeDeckId: string
    }

    let currentDeck: UserDeck

    if (!user) {
      serviceData = {
        decks: [],
        stats: {
          totalDueCards: 0,
          studiedToday: 0,
          currentStreak: 0,
          accuracy: 0,
        },
        activeDeckId: "",
      }
      currentDeck = createDefaultDeck(serviceId, "")
    } else if (serviceId === "jpdb") {
      // Get both auth data (for API key) and preferences (for validity status)
      const authData = getServiceAuthDataFromCookie()
      const preferences = getServicePreferencesFromCookie()

      console.log("JPDB route - authData:", authData)
      console.log("JPDB route - preferences:", preferences)

      // Check if live option is enabled using preferences
      if (!isLiveOptionEnabled("jpdb", preferences)) {
        console.log("JPDB live option not enabled")
        serviceData = {
          decks: [],
          stats: {
            totalDueCards: 0,
            studiedToday: 0,
            currentStreak: 0,
            accuracy: 0,
          },
          activeDeckId: "",
        }
        currentDeck = createDefaultDeck(serviceId, user.id)
      } else if (!authData?.jpdb?.api_key) {
        console.log("JPDB API key not available")
        serviceData = {
          decks: [],
          stats: {
            totalDueCards: 0,
            studiedToday: 0,
            currentStreak: 0,
            accuracy: 0,
          },
          activeDeckId: "",
        }
        currentDeck = createDefaultDeck(serviceId, user.id)
      } else {
        console.log("JPDB live enabled and API key available, fetching decks")
        try {
          const [jpdbUserData, jpdbSpecialData] = await Promise.all([
            fetchJPDBUserDecks({ data: { apiKey: authData.jpdb.api_key } }),
            fetchJPDBSpecialDecks({ data: { apiKey: authData.jpdb.api_key } }),
          ])

          const specialDecks = filterAndTransformDecks(
            jpdbSpecialData.decks,
            "special",
          )
          const userDecks = filterAndTransformDecks(jpdbUserData.decks, "user")
          const allDecks = [...specialDecks, ...userDecks]

          serviceData = {
            decks: allDecks,
            stats: calculateJPDBStats(allDecks),
            activeDeckId: userDecks[0]?.id || "", // First user deck is active
          }

          const activeDeck = userDecks[0]
          currentDeck = activeDeck
            ? {
                id: activeDeck.id,
                slug: `jpdb-${activeDeck.id}`,
                title: activeDeck.name,
                deckType: "user_deck" as const,
                learning_path_items: [],
                owner_id: user.id,
                is_public: false,
                vocabulary_keys: [],
              }
            : createDefaultDeck(serviceId, user.id)
        } catch (error) {
          console.error("Error fetching JPDB data:", error)
          serviceData = {
            decks: [],
            stats: {
              totalDueCards: 0,
              studiedToday: 0,
              currentStreak: 0,
              accuracy: 0,
            },
            activeDeckId: "",
          }
          currentDeck = createDefaultDeck(serviceId, user.id)
        }
      }
    } else {
      const mockDecks = MOCK_SERVICE_DECKS[serviceId] || []
      const decksWithType = mockDecks.map((deck) => ({
        ...deck,
        type: "user" as const,
      }))

      serviceData = {
        decks: decksWithType,
        stats: MOCK_SERVICE_STATS[serviceId] || MOCK_SERVICE_STATS.anki,
        activeDeckId: decksWithType[0]?.id || `${serviceId}-deck-1`,
      }
      currentDeck = createDefaultDeck(serviceId, user.id)
    }

    return {
      user,
      serviceId,
      currentDeck,
      deckSources,
      wordHierarchyData: null,
      vocabularyItems: [],
      progressData: defer(Promise.resolve(null)),
      dueFSRSCards: defer(dueFSRSCardsPromise),
      serviceData,
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
    <DashboardLayout
      user={loaderData().user}
      dueFSRSCardsPromise={loaderData().dueFSRSCards}
      currentDeck={loaderData().currentDeck}
      deckSources={loaderData().deckSources}
      wordHierarchyData={loaderData().wordHierarchyData}
      vocabularyItems={loaderData().vocabularyItems}
      progressData={loaderData().progressData}
    >
      {!loaderData().user ? (
        <ServiceSignInMessage serviceId={loaderData().serviceId} />
      ) : (
        <ServiceContentArea
          serviceId={loaderData().serviceId}
          serviceData={loaderData().serviceData}
        />
      )}
    </DashboardLayout>
  )
}

function ServiceSignInMessage(props: { serviceId: ServiceType }) {
  const serviceName =
    props.serviceId.charAt(0).toUpperCase() + props.serviceId.slice(1)

  return (
    <div class="flex h-full flex-col items-center justify-center p-8 text-center">
      <h2 class="mb-4 text-2xl font-bold">
        Sign in to see your {serviceName} decks
      </h2>
      <p class="text-muted-foreground mb-6 max-w-md">
        Connect your account to view and study your {serviceName} content.
      </p>
      <button class="bg-primary text-primary-foreground rounded-lg px-6 py-3 transition-opacity hover:opacity-90">
        Sign In
      </button>
    </div>
  )
}

function createDefaultDeck(serviceId: ServiceType, ownerId: string): UserDeck {
  return {
    id: `${serviceId}-main`,
    slug: serviceId,
    title: serviceId.charAt(0).toUpperCase() + serviceId.slice(1),
    deckType: "user_deck" as const,
    learning_path_items: [],
    owner_id: ownerId,
    is_public: false,
    vocabulary_keys: [],
  }
}

function filterAndTransformDecks(jpdbDecks: any[], type: "user" | "special") {
  // For special decks, skip the first entry (which is "All Vocabulary")
  const decksToProcess = type === "special" ? jpdbDecks.slice(1) : jpdbDecks

  return decksToProcess.map((deckArray) => {
    const name = deckArray[1] || "Untitled Deck"
    const totalCards = deckArray[2] || 0
    const knownCoverage = deckArray[3] || 0

    // "Blacklisted Vocabulary" has no completion count
    const dueCards =
      name === "Blacklisted Vocabulary"
        ? 0
        : Math.max(
            0,
            totalCards - Math.floor(totalCards * (knownCoverage / 100)),
          )

    return {
      id: `jpdb-${type}-${deckArray[0]}`,
      name,
      dueCards,
      totalCards,
      type,
    }
  })
}

function calculateJPDBStats(decks: any[]) {
  const totalDueCards = decks.reduce((sum, deck) => sum + deck.dueCards, 0)
  const totalCards = decks.reduce((sum, deck) => sum + deck.totalCards, 0)

  return {
    totalDueCards,
    studiedToday: 0,
    currentStreak: 0,
    accuracy:
      totalCards > 0
        ? Math.round(((totalCards - totalDueCards) / totalCards) * 100)
        : 0,
  }
}
