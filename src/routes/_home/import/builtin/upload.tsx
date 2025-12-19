import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { onMount } from "solid-js"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { UploadHistorySection } from "@/features/import/upload/UploadHistorySection"

export const Route = createFileRoute("/_home/import/builtin/upload")({
  component: UploadHistoryPage,
})

function UploadHistoryPage() {
  const queryClient = useQueryClient()

  onMount(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ImportPageHeader
          title="Upload Your History"
          subtitle="Import your review data from external sources"
          backTo="/import/builtin"
          backLabel="Back"
        />
        <UploadHistorySection />
      </div>
    </div>
  )
}
