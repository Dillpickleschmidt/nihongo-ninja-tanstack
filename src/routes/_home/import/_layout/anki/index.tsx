// src/routes/_home/import/_layout/anki/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"
import { MethodSelection } from "@/features/import-page/components/MethodSelection"

export const Route = createFileRoute("/_home/import/_layout/anki/")({
  staticData: {
    headerConfig: {
      title: "Anki Integration",
      backLabel: "Back to Tools",
      backTo: "/import",
    },
  },
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  component: AnkiToolsPage,
})

function AnkiToolsPage() {
  return (
    <div class="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden pt-16 pb-24 xl:pt-0 xl:pb-18">
      <div class="relative container flex flex-col items-center">
        <div class="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          <MethodSelection tool="anki" />
        </div>
      </div>
    </div>
  )
}
