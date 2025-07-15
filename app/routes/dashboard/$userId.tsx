// routes/dashboard/$userId.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { getDueFSRSCardsCount } from "@/features/supabase/db/utils"
import { textbooks } from "@/data/textbooks"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { UserContentArea } from "@/features/dashboard/components/content/user/UserContentArea"
import type { DeckSource, UserDeck } from "@/data/types"

export const Route = createFileRoute("/dashboard/$userId")({
  beforeLoad: ({ context }) => {
    return {
      user: context.user,
    }
  },
  loader: async ({ context, params }) => {
    const { user } = context
    const userId = params.userId

    console.log("User route - user:", user)
    console.log("User route - userId param:", userId)
    console.log("User route - user.id:", user?.id)
    console.log("User route - match:", user?.id === userId)

    // For now, just verify user access
    if (!user || user.id !== userId) {
      console.log("User route - redirecting due to failed verification")
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Create a mock current deck for the user
    const currentDeck: UserDeck = {
      id: "user-main",
      slug: "user-decks",
      title: "My Decks",
      deckType: "user_deck" as const,
      learning_path_items: [],
      owner_id: user.id,
      is_public: false,
      vocabulary_keys: [],
    }

    // Generate deck sources (textbook sources + user sources)
    const textbookSources = Object.values(textbooks).map((tb) => ({
      id: tb.id,
      name: tb.short_name || tb.name,
      type: "textbook" as const,
      decks: tb.chapters,
      disabled: false,
    }))

    const userSources: DeckSource[] = [
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

    const deckSources = [...textbookSources, ...userSources]

    // Get due cards for the user (same as textbook route)
    const dueFSRSCardsPromise = user
      ? getDueFSRSCardsCount(user.id)
      : Promise.resolve(null)

    // Mock user data for UserContentArea
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
      wordHierarchyData: null, // TODO: use active deck data
      vocabularyItems: [],
      progressData: defer(Promise.resolve(null)),
      dueFSRSCardsCount: defer(dueFSRSCardsPromise),
      userData: mockUserData,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  createEffect(() => {
    setActiveDeck("user", loaderData().userId, "default")
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
      <UserContentArea
        userId={loaderData().userId}
        userData={loaderData().userData}
      />
    </DashboardLayout>
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
