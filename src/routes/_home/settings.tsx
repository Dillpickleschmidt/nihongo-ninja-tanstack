import { createFileRoute } from "@tanstack/solid-router"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { GeneralSettings } from "@/features/settings-page/components/GeneralSettings"
import { ServiceIntegrationsSection } from "@/features/settings-page/components/ServiceIntegrationsSection"
import { ServiceManagementProvider } from "@/features/settings-page/context/ServiceManagementContext"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/settings")({
  loader: ({ context }) => {
    // Set background settings for settings page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 32,
      backgroundOpacityOffset: 0,
      showGradient: false,
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ServiceManagementProvider>
      <div class="min-h-screen pb-16">
        <div class="mx-auto max-w-7xl p-6">
          <h1 class="mt-6 text-center text-4xl font-bold">Settings</h1>
          {/* Mobile Layout: Stacked */}
          <SSRMediaQuery hideFrom="lg">
            <GeneralSettings />
            <ServiceIntegrationsSection />
          </SSRMediaQuery>

          {/* Desktop Layout */}
          <SSRMediaQuery showFrom="lg">
            <div class="mt-10 grid grid-cols-[1fr_2fr] gap-8">
              {/* Left Column: General Settings */}
              <GeneralSettings />

              {/* Right Column */}
              <div>
                <ServiceIntegrationsSection />
              </div>
            </div>
          </SSRMediaQuery>
        </div>
      </div>
    </ServiceManagementProvider>
  )
}
