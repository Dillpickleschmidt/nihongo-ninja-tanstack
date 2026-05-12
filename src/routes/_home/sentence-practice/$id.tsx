import { createFileRoute } from "@tanstack/solid-router"
import { createResource, Suspense } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "@/query/query-keys"
import {
  PracticeProvider,
  PracticeContainer,
} from "@/features/sentence-practice"

export const Route = createFileRoute("/_home/sentence-practice/$id")({
  loader: ({ context, params, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 2,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }

    const questionsPromise = context.queryClient.fetchQuery(
      convexQuery(api.api.sentencePractice.getQuestionsBySetId, {
        setId: params.id,
      }),
    )
    return {
      questionsPromise,
      modulePath: `sentence-practice-${params.id}`,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  const [questions] = createResource(() => loaderData().questionsPromise)

  return (
    <div>
      <Suspense
        fallback={
          <div class="py-12 text-center text-muted-foreground dark:text-white/40">Loading...</div>
        }
      >
        <PracticeProvider modulePath={loaderData().modulePath}>
          <PracticeContainer questions={questions()!} />
        </PracticeProvider>
      </Suspense>
    </div>
  )
}
