import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { onMount } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { ManualMarkingSection } from "@/features/import/manual/ManualMarkingSection"
import { JLPT_SETS } from "@/features/import/manual/consts"

export const Route = createFileRoute("/_home/import/builtin/manual")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(
      convexQuery(api.api.vocabulary.getBySets, { setIds: [...JLPT_SETS] }),
    )
  },
  component: ManualMarkingPage,
})

function ManualMarkingPage() {
  const queryClient = useQueryClient()

  onMount(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 16,
      opacityOffset: -0.25,
      showGradient: false,
    })
  })

  return (
    <div class="mx-auto max-w-4xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ImportPageHeader
          title="Mark What You Know"
          subtitle="Select items you've already learned"
          backTo="/import/builtin"
          backLabel="Back"
        />
        <ManualMarkingSection />
      </div>
    </div>
  )
}
