// routes/dashboard/$serviceId.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { getDueFSRSCardsCount } from "@/features/supabase/db/utils"
import { textbooks } from "@/data/textbooks"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { ServiceContentArea } from "@/features/dashboard/components/content/service/ServiceContentArea"
import { fetchServiceDataWithAuth } from "@/features/service-config/jpdb/api"
import { getServicePreferencesFromCookie } from "@/features/service-config/server/service-manager"
import { isLiveOptionEnabled } from "@/features/dashboard/utils/serviceSourceHelper"
import type { ServiceType } from "@/features/service-config/types"
import type { DeckSource, UserDeck } from "@/data/types"

const VALID_SERVICES = ["anki", "wanikani", "jpdb"] as const

const SERVICE_CONFIG = {
  anki: {
    mockDecks: [
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
    mockStats: {
      totalDueCards: 40,
      studiedToday: 25,
      currentStreak: 12,
      accuracy: 85,
    },
  },
  wanikani: {
    mockDecks: [
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
    mockStats: {
      totalDueCards: 33,
      studiedToday: 18,
      currentStreak: 8,
      accuracy: 92,
    },
  },
  jpdb: {
    mockDecks: [],
    mockStats: {
      totalDueCards: 0,
      studiedToday: 0,
      currentStreak: 0,
      accuracy: 0,
    },
  },
} as const

const createEmptyServiceData = () => ({
  decks: [],
  stats: { totalDueCards: 0, studiedToday: 0, currentStreak: 0, accuracy: 0 },
  activeDeckId: "",
})

const createServiceDataFromDecks = (allDecks: any[]) => ({
  decks: allDecks,
  stats: calculateJPDBStats(allDecks),
  activeDeckId: allDecks.filter((d) => d.type === "user")[0]?.id || "",
})

const createCurrentDeckFromDecks = (
  allDecks: any[],
  serviceId: string,
  userId: string,
  title: string,
): UserDeck => {
  const userDecks = allDecks.filter((d) => d.type === "user")
  const activeDeck = userDecks[0]

  return activeDeck
    ? {
        id: activeDeck.id,
        slug: `jpdb-${activeDeck.id}`,
        title: title,
        deckType: "user_deck" as const,
        learning_path_items: [],
        owner_id: userId,
        is_public: false,
        vocabulary_keys: [],
      }
    : createDefaultDeck(serviceId, userId, title)
}

const createDefaultDeck = (
  serviceId: ServiceType,
  ownerId: string,
  title: string,
): UserDeck => ({
  id: `${serviceId}-main`,
  slug: serviceId,
  title: title,
  deckType: "user_deck" as const,
  learning_path_items: [],
  owner_id: ownerId,
  is_public: false,
  vocabulary_keys: [],
})

const filterAndTransformDecks = (
  jpdbDecks: any[],
  type: "user" | "special",
) => {
  const decksToProcess = type === "special" ? jpdbDecks.slice(1) : jpdbDecks

  return decksToProcess.map((deckArray) => {
    const name = deckArray[1] || "Untitled Deck"
    const totalCards = deckArray[2] || 0
    const knownCoverage = deckArray[3] || 0

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

const calculateJPDBStats = (decks: any[]) => {
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

export const Route = createFileRoute("/dashboard/$serviceId")({
  beforeLoad: ({ context, params }) => {
    const fullServiceId = params.serviceId
    const baseService = fullServiceId.split("-")[0] as ServiceType

    if (!VALID_SERVICES.includes(baseService)) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }
    return { user: context.user }
  },
  loader: async ({ context, params }) => {
    const { user } = context
    const fullServiceId = params.serviceId

    // Helper to parse the full service ID, e.g., "jpdb-live" or "wanikani-imported"
    const parseServiceId = (fullId: string) => {
      const parts = fullId.split("-")
      const baseService = parts[0] as ServiceType
      const variant = parts.length > 1 ? parts.slice(1).join("-") : "live"
      const displayName = baseService.toUpperCase()
      const variantName = variant.charAt(0).toUpperCase() + variant.slice(1)
      const title = `${displayName}-${variantName}`
      return { baseService, variant, title }
    }

    const { baseService, variant, title } = parseServiceId(fullServiceId)

    if (!VALID_SERVICES.includes(baseService)) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

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
      ? getDueFSRSCardsCount(user.id)
      : Promise.resolve(null)

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
      serviceData = createEmptyServiceData()
      currentDeck = createDefaultDeck(baseService, "", title)
    } else if (baseService === "jpdb") {
      const preferences = getServicePreferencesFromCookie()

      if (variant === "live" && !isLiveOptionEnabled("jpdb", preferences)) {
        serviceData = createEmptyServiceData()
        currentDeck = createDefaultDeck(baseService, user.id, title)
      } else {
        try {
          const { userDecks, specialDecks } = await fetchServiceDataWithAuth({
            data: "jpdb",
          })
          const allDecks = [
            ...filterAndTransformDecks(specialDecks.decks, "special"),
            ...filterAndTransformDecks(userDecks.decks, "user"),
          ]

          serviceData = createServiceDataFromDecks(allDecks)
          currentDeck = createCurrentDeckFromDecks(
            allDecks,
            baseService,
            user.id,
            title,
          )
        } catch (error) {
          console.error("Error fetching JPDB data:", error)
          serviceData = createEmptyServiceData()
          currentDeck = createDefaultDeck(baseService, user.id, title)
        }
      }
    } else {
      const preferences = getServicePreferencesFromCookie()

      if (variant === "live" && !isLiveOptionEnabled(baseService, preferences)) {
        serviceData = createEmptyServiceData()
        currentDeck = createDefaultDeck(baseService, user.id, title)
      } else {
        try {
          const config = SERVICE_CONFIG[baseService]
          const decksWithType = config.mockDecks.map((deck) => ({
            ...deck,
            type: "user" as const,
          }))

          serviceData = {
            decks: decksWithType,
            stats: config.mockStats,
            activeDeckId: decksWithType[0]?.id || `${baseService}-deck-1`,
          }
          currentDeck = createDefaultDeck(baseService, user.id, title)
        } catch (error) {
          serviceData = createEmptyServiceData()
          currentDeck = createDefaultDeck(baseService, user.id, title)
        }
      }
    }

    return {
      user,
      serviceId: fullServiceId,
      currentDeck,
      deckSources,
      wordHierarchyData: null,
      vocabularyItems: [],
      progressData: defer(Promise.resolve(null)),
      dueFSRSCardsCount: defer(dueFSRSCardsPromise),
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
      dueFSRSCardsCount={loaderData().dueFSRSCardsCount}
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
  const getServiceName = (serviceId: ServiceType) => {
    const names = {
      anki: "Anki",
      wanikani: "WaniKani",
      jpdb: "jpdb",
    }
    return (
      names[serviceId] || serviceId.charAt(0).toUpperCase() + serviceId.slice(1)
    )
  }
  const serviceName = getServiceName(props.serviceId)
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
