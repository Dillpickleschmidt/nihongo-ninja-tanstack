import { createFileRoute } from "@tanstack/solid-router"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { dynamic_modules } from "@/data/dynamic_modules"
import { KanaQuiz } from "@/features/kana-quiz/KanaQuiz"

const MODULE_ID = "hiragana-quiz"

export const Route = createFileRoute("/_home/vocab/test/hiragana-quiz")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.vocabulary.getBySets, {
        setIds: dynamic_modules[MODULE_ID].vocab_set_ids,
      }),
    )
  },
  component: () => <KanaQuiz moduleId={MODULE_ID} />,
})
