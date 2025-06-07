// app/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import { loadModuleData } from "@/data/utils/vocab"
import VocabPractice from "@/features/vocab-practice/VocabPractice"
import {
  type FSRSCardData,
  getDueFSRSCards,
  getFSRSCardsByKeys,
} from "@/features/supabase/db/utils"

export const Route = createFileRoute("/practice/$practiceID")({
  loader: ({ context, location }) => {
    try {
      const localData = loadModuleData(location.pathname)
      // get FSRS cards for current module (don't await and resolve later)
      let moduleFSRSCards: Promise<FSRSCardData[]> | null
      let dueFSRSCards: Promise<FSRSCardData[]> | null
      if (context.user) {
        moduleFSRSCards = getFSRSCardsByKeys(
          context.user.id,
          localData.vocabulary.map((vocab) => vocab.word),
        )
        dueFSRSCards = getDueFSRSCards(context.user.id)
      } else {
        moduleFSRSCards = null
        dueFSRSCards = null
      }
      return {
        module: localData.module,
        newVocabulary: localData.vocabulary,
        moduleFSRSCards,
        dueFSRSCards,
        user: context.user,
      }
    } catch (error) {
      throw notFound()
    }
  },
  component: RouteComponent,
  notFoundComponent: () => <div>404 Not found</div>,
})

function RouteComponent() {
  const data = Route.useLoaderData()

  return (
    <>
      <VocabPractice
        newVocabulary={data().newVocabulary}
        moduleFSRSCards={data().moduleFSRSCards}
        dueFSRSCards={data().dueFSRSCards}
        deckName={data().module.title}
        mode="readings"
      />
    </>
  )
}
