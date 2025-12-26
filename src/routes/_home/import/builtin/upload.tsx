import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { createSignal, onMount, Show } from "solid-js"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { UploadHistorySection } from "@/features/import/upload/UploadHistorySection"
import { JpdbResultsView } from "@/features/import/upload/JpdbResultsView"
import type { JpdbProcessResult } from "@/features/import/upload/jpdb/jpdb-processor"

export const Route = createFileRoute("/_home/import/builtin/upload")({
  component: UploadHistoryPage,
})

type Step = "upload" | "review"

function UploadHistoryPage() {
  const queryClient = useQueryClient()
  const [step, setStep] = createSignal<Step>("upload")
  const [processedResult, setProcessedResult] =
    createSignal<JpdbProcessResult | null>(null)

  onMount(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  const handleProcessed = (result: JpdbProcessResult) => {
    setProcessedResult(result)
    setStep("review")
  }

  const handleBack = () => {
    setStep("upload")
    setProcessedResult(null)
  }

  return (
    <div class="mx-auto max-w-4xl px-4 pt-24 pb-32 md:pb-16">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Show when={step() === "upload"}>
          <ImportPageHeader
            title="Upload Your History"
            subtitle="Import your review data from external sources"
            backTo="/import/builtin"
            backLabel="Back"
          />
          <UploadHistorySection onProcessed={handleProcessed} />
        </Show>

        <Show when={step() === "review" && processedResult()}>
          {(result) => (
            <>
              <ImportPageHeader
                title="Review Import"
                subtitle="Select items to import"
                backTo="/import/builtin/upload"
                backLabel="Back"
                onBackClick={(e) => {
                  e.preventDefault()
                  handleBack()
                }}
              />
              <JpdbResultsView result={result()} onBack={handleBack} />
            </>
          )}
        </Show>
      </div>
    </div>
  )
}
