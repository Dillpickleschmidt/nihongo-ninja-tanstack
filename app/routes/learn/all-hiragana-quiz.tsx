// app/routes/learn/all-hiragana-quiz.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { KanaQuiz } from "@/features/kana-quiz/KanaQuiz"
import { loadModuleData, vocabularyToKana } from "@/data/utils/vocab"

export const Route = createFileRoute("/learn/all-hiragana-quiz")({
  loader: ({ location }) => {
    const data = loadModuleData(location.pathname)
    const kana = vocabularyToKana(data.vocabulary)
    const shuffledKana = kana.sort(() => Math.random() - 0.5)
    return { module: data.module, kana: shuffledKana }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData()
  const { module, kana } = data()

  return (
    <KanaQuiz
      kana={kana}
      nextLesson="/learn/punctuation-misc"
      title={module.title}
    />
  )
}
