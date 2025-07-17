// routes/settings.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { GeneralSettings } from "@/features/settings-page/components/GeneralSettings"
import { ServiceIntegrationsSection } from "@/features/settings-page/components/ServiceIntegrationsSection"

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="min-h-screen">
      <div class="mx-auto max-w-7xl p-6">
        {/* Mobile Layout: Stacked */}
        <SSRMediaQuery hideFrom="lg">
          <div class="space-y-6">
            <GeneralSettings />
            <ServiceIntegrationsSection />
          </div>
        </SSRMediaQuery>

        {/* Desktop Layout */}
        <SSRMediaQuery showFrom="lg">
          <div class="mt-12 grid grid-cols-[1fr_2fr] gap-8">
            {/* Left Column: General Settings */}
            <GeneralSettings />

            {/* Right Column: Service Integrations */}
            <div class="mt-4">
              <ServiceIntegrationsSection />
            </div>
          </div>
        </SSRMediaQuery>
      </div>
    </div>
  )
}
