import { createFileRoute } from "@tanstack/solid-router"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
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

    context.queryClient.prefetchQuery(
      convexQuery(api.api.sentencePractice.getQuestionsBySetId, {
        setId: params.id,
      }),
    )

    return {
      setId: params.id,
      modulePath: `sentence-practice-${params.id}`,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  const questionsQuery = useConvexQuery(
    api.api.sentencePractice.getQuestionsBySetId,
    () => ({ setId: loaderData().setId }),
  )

  return (
    <div>
      <PracticeProvider modulePath={loaderData().modulePath}>
        <PracticeContainer questions={questionsQuery.data()} />
      </PracticeProvider>
    </div>
  )
}
