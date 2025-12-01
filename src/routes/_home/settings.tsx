import { createFileRoute } from "@tanstack/solid-router"
import { GeneralSettings } from "@/features/settings-page/components/GeneralSettings"
import { ServiceIntegrationsSection } from "@/features/settings-page/components/ServiceIntegrationsSection"
import { ServiceManagementProvider } from "@/features/settings-page/context/ServiceManagementContext"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/settings")({
  loader: ({ context }) => {
    // Set background settings for settings page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ServiceManagementProvider>
      <div class="min-h-screen pb-24 md:pb-32 pt-8">
        <div class="mx-auto max-w-5xl p-4 md:p-6 space-y-12">
          <div class="text-center">
            <h1 class="text-4xl font-extrabold text-white mb-2">Settings</h1>
            <p class="text-muted-foreground text-lg">
              Manage your account, integrations, and preferences.
            </p>
          </div>

          <div class="grid gap-12">
            <GeneralSettings />
            <ServiceIntegrationsSection />
          </div>
        </div>
      </div>
    </ServiceManagementProvider>
  )
}
