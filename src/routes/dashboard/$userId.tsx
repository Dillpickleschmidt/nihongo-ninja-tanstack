// routes/dashboard/$userId.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs-operations"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { DashboardDataProvider } from "@/features/dashboard/context/DashboardDataContext"
import { UserContentArea } from "@/features/dashboard/components/content/user/UserContentArea"
import type { UserDeck } from "@/data/types"
import { getInitialUserPreferencesFromCookieServerFn } from "@/features/user-settings/server/server-functions"
import { getAllDeckSources } from "@/features/dashboard/utils/allDeckSources"

export const Route = createFileRoute("/dashboard/$userId")({
  beforeLoad: ({ context }) => {
    return {
      user: context.user,
    }
  },
  loader: async ({ context, params }) => {
    const { user } = context
    const userId = params.userId
    const userPreferences = await getInitialUserPreferencesFromCookieServerFn()
    const preferences = userPreferences["service-preferences"]

    console.log("User route - user:", user)
    console.log("User route - userId param:", userId)
    console.log("User route - user.id:", user?.id)
    console.log("User route - match:", user?.id === userId)

    if (!user || user.id !== userId) {
      console.log("User route - redirecting due to failed verification")
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    const currentDeck: UserDeck = {
      id: "user-main",
      slug: "user-decks",
      title: "My Custom Decks",
      deckType: "user_deck" as const,
      learning_path_items: [],
      owner_id: user.id,
      is_public: false,
      vocabulary_keys: [],
    }

    const deckSources = getAllDeckSources(user, preferences)

    const dueFSRSCardsPromise = user
      ? getDueFSRSCardsCount(user.id)
      : Promise.resolve(null)

    const mockUserData = {
      decks: generateMockUserDecks(),
      notes: generateMockUserNotes(),
      activeDeckId: "user-deck-1",
    }

    return {
      user,
      userId,
      currentDeck,
      deckSources,
      wordHierarchyData: null,
      vocabularyItems: [],
      progressData: defer(Promise.resolve(null)),
      dueFSRSCardsCount: defer(dueFSRSCardsPromise),
      userData: mockUserData,
      totalLessonCount: 0,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  createEffect(() => {
    setActiveDeck("user", loaderData().userId, "default")
  })

  const dashboardData = {
    wordHierarchyData: loaderData().wordHierarchyData,
    vocabularyItems: loaderData().vocabularyItems,
    progressData: loaderData().progressData,
    dueFSRSCardsCount: loaderData().dueFSRSCardsCount,
    currentDeck: loaderData().currentDeck,
    deckSources: loaderData().deckSources,
    totalLessonCount: loaderData().totalLessonCount,
  }

  return (
    <DashboardDataProvider data={dashboardData}>
      <DashboardLayout user={loaderData().user}>
        <UserContentArea
          userId={loaderData().userId}
          userData={loaderData().userData}
        />
      </DashboardLayout>
    </DashboardDataProvider>
  )
}

function generateMockUserDecks() {
  return [
    {
      id: "user-deck-1",
      name: "JLPT N5 Prep",
      cardCount: 150,
      lastStudied: "2 hours ago",
    },
    {
      id: "user-deck-2",
      name: "Business Japanese",
      cardCount: 75,
      lastStudied: "1 day ago",
    },
    {
      id: "user-deck-3",
      name: "Travel Phrases",
      cardCount: 50,
      lastStudied: "3 days ago",
    },
    {
      id: "user-deck-4",
      name: "Cooking Terms",
      cardCount: 30,
      lastStudied: "1 week ago",
    },
  ]
}

function generateMockUserNotes() {
  return [
    {
      id: "note-1",
      title: "Grammar Patterns",
      content:
        "Remember: て-form + います = ongoing action. Used for both present continuous and habits.",
      color: "blue",
      createdAt: "2024-01-15",
    },
    {
      id: "note-2",
      title: "Kanji Practice",
      content:
        "今日 (きょう) - today\n明日 (あした) - tomorrow\n昨日 (きのう) - yesterday",
      color: "yellow",
      createdAt: "2024-01-14",
    },
    {
      id: "note-3",
      title: "Cultural Notes",
      content:
        "When entering someone's home, always say お邪魔します (ojamashimasu) - 'excuse me for disturbing you'",
      color: "green",
      createdAt: "2024-01-13",
    },
    {
      id: "note-4",
      title: "Vocabulary Review",
      content:
        "食べる (taberu) - to eat\n飲む (nomu) - to drink\n見る (miru) - to see/watch\n聞く (kiku) - to listen/hear",
      color: "purple",
      createdAt: "2024-01-12",
    },
    {
      id: "note-5",
      title: "Particle Practice",
      content:
        "は - topic marker\nが - subject marker\nを - direct object marker\nに - direction/time\nで - location of action",
      color: "pink",
      createdAt: "2024-01-11",
    },
  ]
}
