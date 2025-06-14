// app/routes/practice/review.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
} from "@/features/supabase/db/utils"

export const Route = createFileRoute("/practice/review")({
  loader: ({ context }) => {
    try {
      let dueFSRSCards: Promise<FSRSCardData[]> | null
      if (context.user) {
        dueFSRSCards = getDueFSRSCards(context.user.id)
      } else {
        dueFSRSCards = null
      }

      return {
        dueFSRSCards,
        user: context.user,
      }
    } catch (error) {
      // In case of an unexpected error, show a not found page.
      console.error("Failed to load review session data:", error)
      throw notFound()
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <>
      <VocabPractice
        newVocabulary={null}
        moduleFSRSCards={null}
        dueFSRSCards={data().dueFSRSCards}
        deckName="Review Session"
        mode="review-only"
      />
    </>
  )
}
