// src/routes/practice/contracted-sounds-quiz.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { KanaQuiz } from "@/features/kana-quiz/KanaQuiz"
import { getVocabularyForModule } from "@/data/utils/vocabulary/queries"
import { getModuleTitleFromPath } from "@/data/utils/modules"
import { vocabularyToKana } from "@/data/utils/vocabulary/transforms"

export const Route = createFileRoute("/_home/practice/contracted-sounds-quiz")({
  loader: async ({ location }) => {
    const segments = location.pathname.split("/")
    const moduleId = segments[segments.length - 1]

    const vocabulary = await getVocabularyForModule(moduleId)
    const title = getModuleTitleFromPath(location.pathname)
    const kana = vocabularyToKana(vocabulary)
    const shuffledKana = kana.sort(() => Math.random() - 0.5)

    return {
      title,
      kana: shuffledKana,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()
  const { title, kana } = data()

  return (
    <KanaQuiz
      kana={kana}
      nextLesson="/learn/long-vowels-paused-consonants"
      title={title ?? ""}
    />
  )
}
