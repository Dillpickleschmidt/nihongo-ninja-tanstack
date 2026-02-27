import { createFileRoute } from "@tanstack/solid-router"
import { createResource, Suspense } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "@/query/query-keys"
import {
  PracticeProvider,
  PracticeContainer,
} from "@/features/sentence-practice"
import { Sidebar } from "~/features/sidebar/Sidebar"

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
    return { questionsPromise }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  const [questions] = createResource(() => loaderData().questionsPromise)

  return (
    <div>
      <div class="grid grid-cols-[auto_1fr] md:grid-cols-[18rem_1fr_24rem]">
        {/* Left: Sidebar */}
        <div class="sticky top-0 self-start">
          <Sidebar animated={false} />
        </div>

        {/* Center: Nav + Content */}
        <div class="relative w-full">
          <div class="flex flex-col pb-16">
            <div class="px-8">
              <Suspense
                fallback={
                  <div class="text-muted-foreground py-12 text-center">
                    Loading...
                  </div>
                }
              >
                <PracticeProvider>
                  <PracticeContainer questions={questions()!} />
                </PracticeProvider>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
