// app/routes/_learn/dashboard.tsx
import { createFileRoute, redirect, defer, Await } from "@tanstack/solid-router"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { createEffect } from "solid-js"
import { z } from "zod"
import { zodValidator } from "@tanstack/zod-adapter"
import {
  getActiveDeckInfo,
  getExternalResources,
  getLessons,
  getDeckBySlug,
  setActiveDeck,
} from "@/data/utils/core"
import { textbooks } from "@/data/textbooks"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/dashboard/components/Background"
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { ContentSection } from "@/features/dashboard/components/ContentSection"
import { LessonsSection } from "@/features/dashboard/components/LessonsSection"
import { StrugglesSection } from "@/features/dashboard/components/StrugglesSection"
import { HistorySection } from "@/features/dashboard/components/HistorySection"
import { WordHierarchy } from "@/features/dashboard/components/WordHierarchy"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getDueFSRSCards } from "@/features/supabase/db/utils"
import { getWKVocabularyHierarchy } from "@/data/wanikani/utils"
import { getModuleVocabulary } from "@/data/utils/vocab"
import type {
  Deck,
  DeckSource,
  DynamicModule,
  ExternalResource,
  StaticModule,
  TextbookIDEnum,
} from "@/data/types"

// Zod schema for search params
const dashboardSearchSchema = z
  .object({
    textbook: z.string(),
    deck: z.string(),
    user: z.undefined().optional(),
  })
  .or(
    z.object({
      user: z.string(),
      deck: z.string(),
      textbook: z.undefined().optional(),
    }),
  )

export const Route = createFileRoute("/dashboard")({
  validateSearch: zodValidator(dashboardSearchSchema),
  beforeLoad: ({ search, context }) => {
    // If URL has valid search params, pass them to the loader.
    if (search.textbook && search.deck) {
      return {
        user: context.user,
        sourceType: "textbook",
        sourceId: search.textbook as TextbookIDEnum,
        deckSlug: search.deck,
      }
    }
    if (search.user && search.deck) {
      // Future-proofing for user decks
      return {
        user: context.user,
        sourceType: "user",
        sourceId: search.user,
        deckSlug: search.deck,
      }
    }

    // If no search params, check for a cookie to redirect the user.
    const cookieHeader = isServer
      ? getRequestHeader("Cookie") || undefined
      : undefined
    const activeDeckInfo = getActiveDeckInfo(cookieHeader)

    if (activeDeckInfo) {
      const { sourceType, sourceId, deckSlug } = activeDeckInfo
      const searchParams =
        sourceType === "textbook"
          ? { textbook: sourceId, deck: deckSlug }
          : { user: sourceId, deck: deckSlug }

      throw redirect({
        to: "/dashboard",
        search: searchParams,
      })
    }

    // If no params and no cookie, redirect to a hardcoded default deck.
    const defaultTextbookId = "genki_1"
    const defaultDeckSlug = textbooks[defaultTextbookId].chapters[0].slug
    throw redirect({
      to: "/dashboard",
      search: { textbook: defaultTextbookId, deck: defaultDeckSlug },
    })
  },
  loader: async ({ context }) => {
    const { user, sourceType, sourceId, deckSlug } = context

    let deck: Deck | undefined

    if (sourceType === "textbook") {
      deck = getDeckBySlug(sourceId as TextbookIDEnum, deckSlug)
    } else if (sourceType === "user") {
      // Future implementation
    }

    if (!deck) {
      throw redirect({
        to: "/dashboard",
        search: { textbook: "genki_1", deck: "chapter-0" },
      })
    }

    let lessons: (StaticModule | DynamicModule)[] = []
    let externalResources: ExternalResource[] = []
    let vocabForHierarchy: string[] = []

    switch (deck.deckType) {
      case "textbook_chapter":
        lessons = getLessons(deck)
        externalResources = getExternalResources(deck)

        // Find the vocab module ID from the learning path
        const vocabModuleId = deck.learning_path_items.find((item) =>
          item.id.endsWith("_vocab-list"),
        )?.id

        // If found, get its vocabulary and extract the words
        if (vocabModuleId) {
          const vocabItems = getModuleVocabulary(vocabModuleId)
          vocabForHierarchy = vocabItems.map((item) => item.word)
        }
        break
      case "user_deck":
        // Future implementation for user decks
        break
    }

    // Prepare the list of all available deck sources for the UI
    const deckSources: DeckSource[] = Object.values(textbooks).map((tb) => ({
      id: tb.id,
      name: tb.short_name || tb.name,
      type: "textbook",
      decks: tb.chapters,
    }))

    // Use the dynamically generated list instead of a hardcoded one
    const wordHierarchyData = await getWKVocabularyHierarchy({
      data: vocabForHierarchy,
    })

    const dueFSRSCardsPromise = user
      ? getDueFSRSCards(user.id)
      : Promise.resolve(null)

    const deferredIndividualThumbnails = externalResources.map((resource) => {
      const promise = fetchThumbnailUrl(
        resource.external_url,
        resource.creator_id,
      ).then((thumbnailUrl) => ({
        resourceId: resource.id,
        thumbnailUrl,
      }))
      return defer(promise)
    })

    return {
      deck,
      lessons,
      deckSources,
      externalResources,
      wordHierarchyData,
      deferredThumbnails: deferredIndividualThumbnails,
      dueFSRSCards: defer(dueFSRSCardsPromise),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()

  // Update the cookie whenever the user navigates to a new deck
  createEffect(() => {
    const currentSearch = search()
    if (currentSearch.textbook && currentSearch.deck) {
      setActiveDeck("textbook", currentSearch.textbook, currentSearch.deck)
    } else if (currentSearch.user && currentSearch.deck) {
      setActiveDeck("user", currentSearch.user, currentSearch.deck)
    }
  })

  const struggles = [
    "～て",
    "留学生",
    "Intransat...",
    "～てしま",
    "助詞",
    "敬語",
    "カタカナ",
    "ひらがな",
    "条件形",
  ]

  const historyItems = [
    { name: "Gym", icon: "⚡", amount: -40.99, color: "bg-orange-500" },
    { name: "Coffee", icon: "☕", amount: -5.5, color: "bg-amber-600" },
    { name: "Study Books", icon: "📚", amount: -29.99, color: "bg-blue-500" },
  ]

  return (
    <div class="font-poppins">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={3}
      />
      <Background position="absolute" opacity={0.18} />

      <DashboardHeader
        currentDeck={loaderData().deck}
        deckSources={loaderData().deckSources}
        dueFSRSCardsPromise={loaderData().dueFSRSCards}
      />

      {/* Mobile Layout: Simple vertical stack */}
      <SSRMediaQuery hideFrom="xl">
        <div class="flex flex-col">
          <ContentSection
            resources={loaderData().externalResources}
            thumbnailPromises={loaderData().deferredThumbnails}
          />
          <LessonsSection
            lessons={loaderData().lessons}
            progressPercentage={75}
          />
          <div class="flex flex-col">
            <StrugglesSection struggles={struggles} variant="mobile" />
            <WordHierarchy
              data={loaderData().wordHierarchyData}
              variant="mobile"
            />
            <HistorySection items={historyItems} />
          </div>
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout: Asymmetrical 2/3 and 1/3 grid */}
      <SSRMediaQuery showFrom="xl">
        <div class="my-6 grid grid-cols-[2fr_1fr] gap-8 px-8">
          {/* Main Content Pane */}
          <div class="flex flex-col gap-8">
            <ContentSection
              resources={loaderData().externalResources}
              thumbnailPromises={loaderData().deferredThumbnails}
            />
            <LessonsSection
              lessons={loaderData().lessons}
              progressPercentage={75}
            />
          </div>

          {/* Sidebar / Status Pane */}
          <div class="flex flex-col gap-8">
            <WordHierarchy
              data={loaderData().wordHierarchyData}
              variant="desktop"
            />
            <StrugglesSection struggles={struggles} variant="desktop" />
            <HistorySection items={historyItems} />
          </div>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
