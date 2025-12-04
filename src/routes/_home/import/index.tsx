// src/routes/_home/import/index.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"
import { ToolSelection } from "@/features/import-page/components/ToolSelection"

export const Route = createFileRoute("/_home/import/")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  component: ToolSelectionPage,
})

function ToolSelectionPage() {
  return (
    <div class="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden pt-12 pb-24 md:py-24">
      <div class="relative container flex flex-col items-center">
        <div class="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ToolSelection />
        </div>
      </div>
    </div>
  )
}
