// src/routes/practice/review.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
} from "@/features/supabase/db/fsrs-operations"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"

export const Route = createFileRoute("/practice/review")({
  loader: ({ context }) => {
    try {
      let dueFSRSCards: Promise<FSRSCardData[]> | null
      if (context.user) {
        dueFSRSCards = getDueFSRSCards(context.user.id)
      } else {
        dueFSRSCards = null
      }

      const hierarchy: VocabHierarchy = {
        vocabulary: [],
        kanji: [],
        radicals: [],
      }

      // In review-only mode, there are no "module" cards to load.
      const moduleFSRSCards: Promise<FSRSCardData[]> = Promise.resolve([])

      return {
        dueFSRSCards,
        moduleFSRSCards, // Pass the empty moduleFSRSCards promise
        hierarchy, // Pass the empty hierarchy
        user: context.user,
      }
    } catch (error) {
      console.error("Failed to load review session data:", error)
      throw notFound()
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <VocabPractice
      hierarchy={data().hierarchy}
      moduleFSRSCards={data().moduleFSRSCards}
      dueFSRSCards={data().dueFSRSCards}
      deckName="Review Session"
      mode="review-only"
    />
  )
}
