// routes/_home/learn/index.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/learn/")({
  beforeLoad: ({ context }) => {
    const preferences = context.initialUserPreferenceData
    const activeTextbook = preferences?.["active-textbook"]
    const activeDeck = preferences?.["active-deck"]

    if (activeTextbook && activeDeck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: activeTextbook, chapterSlug: activeDeck },
      })
    }

    // Default fallback
    throw redirect({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
    })
  },
})
