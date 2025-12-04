// features/settings-page/components/ServiceIntegrationsSection.tsx
import { LiveServiceSelector } from "./LiveServiceSelector"
import { ServiceAuthSection } from "./ServiceAuthSection"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
import { useServiceSwitcher } from "../hooks/useServiceSwitcher"

export const ServiceIntegrationsSection = () => {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))

  const {
    srsErrors,
    setSRSError,
    clearSRSError,
  } = useServiceManagement()

  const { switchToService, isSwitching } = useServiceSwitcher(userId)

  // Wrapper to match LiveServiceSelector's expected type signature (Promise<void>)
  const handleServiceChange = async (service: "nihongo" | any) => {
    await switchToService(service)
  }

  return (
    <>
      {/* Section 0: Anime Service Connections */}
      <ServiceAuthSection />

      {/* Section 1: Live External Service */}
      <LiveServiceSelector
        preferences={settingsQuery.data["srs-service-preferences"]}
        onServiceChange={handleServiceChange}
        isProcessing={isSwitching()}
        errors={srsErrors()}
        setError={setSRSError}
        clearError={clearSRSError}
      />
    </>
  )
}
