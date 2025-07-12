// routes/dashboard/$userId.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { setActiveDeck } from "@/data/utils/core"
import { UserContentArea } from "@/features/dashboard/components/content/user/UserContentArea"

export const Route = createFileRoute("/dashboard/$userId")({
  loader: async ({ context, params }) => {
    const { user } = context
    const userId = params.userId

    // For now, just verify user access
    if (!user || user.id !== userId) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Mock user data for now
    const mockUserData = {
      decks: generateMockUserDecks(),
      notes: generateMockUserNotes(),
      activeDeckId: "user-deck-1", // Hardcoded active deck
    }

    return {
      user,
      userId,
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
    <UserContentArea
      userId={loaderData().userId}
      userData={loaderData().userData}
    />
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
