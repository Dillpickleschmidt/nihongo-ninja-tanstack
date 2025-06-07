// app/routes/practice/$practiceID.tsx
import { createFileRoute, notFound } from "@tanstack/solid-router"
import { loadModuleData } from "@/data/utils/vocab"
import VocabPractice from "@/features/vocab-practice/VocabPractice"

export const Route = createFileRoute("/practice/$practiceID")({
  loader: ({ location }) => {
    try {
      const data = loadModuleData(location.pathname)
      return { module: data.module, vocabulary: data.vocabulary }
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
        data={data().vocabulary}
        deckName={data().module.title}
        mode="readings"
      />
    </>
  )
}
