import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { GeneralSettings } from "@/features/settings-page/components/GeneralSettings"
import { ServiceIntegrationsSection } from "@/features/settings-page/components/ServiceIntegrationsSection"
import { ServiceManagementProvider } from "@/features/settings-page/context/ServiceManagementContext"
import { Route as RootRoute } from "@/routes/__root"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"

export const Route = createFileRoute("/_home/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )
  return (
    <ServiceManagementProvider>
      <TextbookChapterBackgrounds
        textbook={settingsQuery.data["active-learning-path"]}
        chapter={settingsQuery.data["active-chapter"]}
        showGradient={false}
        blur="32px"
      />

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
