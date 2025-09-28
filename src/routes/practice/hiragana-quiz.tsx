// src/routes/practice/hiragana-quiz.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { KanaQuiz } from "@/features/kana-quiz/KanaQuiz"
import {
  getVocabularyForModule,
  getModuleTitleFromPath,
  vocabularyToKana,
} from "@/data/utils/vocab"

export const Route = createFileRoute("/practice/hiragana-quiz")({
  loader: async ({ location }) => {
    const segments = location.pathname.split("/")
    const moduleId = segments[segments.length - 1] || ""

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
      nextLesson="/learn/dakuten-handakuten"
      title={title ?? ""}
    />
  )
}
