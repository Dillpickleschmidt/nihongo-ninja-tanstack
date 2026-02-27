import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/query-keys"
import { AnimeServicesSection } from "@/features/settings/AnimeServicesSection"
import { SrsServiceSection } from "@/features/settings/SrsServiceSection"

export const Route = createFileRoute("/_home/settings")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32">
      <h1 class="mb-8 text-2xl font-bold text-white">Settings</h1>

      <div class="space-y-10">
        <AnimeServicesSection />
        <SrsServiceSection />
      </div>
    </div>
  )
}
