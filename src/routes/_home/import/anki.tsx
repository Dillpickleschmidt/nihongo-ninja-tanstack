import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { AnkiConnectSection } from "@/features/import/anki/AnkiConnectSection"

export const Route = createFileRoute("/_home/import/anki")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: AnkiConnectPage,
})

function AnkiConnectPage() {
  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32">
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <ImportPageHeader
          title="Connect to Anki"
          subtitle="Sync your review progress with Anki"
          backTo="/import"
          backLabel="Back"
        />
        <AnkiConnectSection />
      </div>
    </div>
  )
}
