import { createSignal } from "solid-js"
import {
  connectService,
  disconnectService,
  updateServiceSettingsServerFn,
} from "@/features/service-auth/server-functions"
import type {
  ServiceType,
  ServiceMode,
  ServiceCredentials,
} from "../utils/serviceTypes"

export const useServiceConnection = (
  loadServiceState: () => Promise<void>,
  setErrors: (
    fn: (prev: Record<ServiceType, string>) => Record<ServiceType, string>,
  ) => void,
) => {
  const [isProcessing, setIsProcessing] = createSignal(false)

  const connectToService = async <T extends ServiceType>(
    service: T,
    credentials: ServiceCredentials[T],
  ) => {
    setIsProcessing(true)
    setErrors((prev) => ({ ...prev, [service]: "" }))

    try {
      const result = await connectService({
        data: {
          service,
          credentials,
        },
      })

      if (result.success) {
        await loadServiceState()
        return { success: true }
      } else {
        const errorMessage = result.error || "Connection failed"
        setErrors((prev) => ({ ...prev, [service]: errorMessage }))
        return { success: false, error: errorMessage }
      }
    } catch (error) {
      const errorMessage = "Network error"
      setErrors((prev) => ({ ...prev, [service]: errorMessage }))
      return { success: false, error: errorMessage }
    } finally {
      setIsProcessing(false)
    }
  }

  const handleModeChange = async (
    service: ServiceType,
    newMode: ServiceMode | null,
    servicesState: any,
    setSelectedModes: any,
  ) => {
    if (!newMode) return

    // Update the UI state immediately
    setSelectedModes((prev: any) => ({ ...prev, [service]: newMode }))

    try {
      if (newMode === "disabled") {
        // Disconnect the service if it exists
        const result = await disconnectService({ data: { service } })
        if (result.success) {
          await loadServiceState()
        }
      } else {
        // Only update settings if the service is already connected
        const currentState = servicesState()[service]
        if (currentState.has_api_key) {
          const result = await updateServiceSettingsServerFn({
            data: {
              service,
              settings: {
                enabled: true,
                use_imported_data: newMode === "imported",
              },
            },
          })
          if (result.success) {
            await loadServiceState()
          }
        }
        // If no API key yet, the mode change is just a UI preference
      }
    } catch (error) {
      console.error(`Failed to update ${service} mode:`, error)
    }
  }

  return {
    isProcessing,
    connectToService,
    handleModeChange,
  }
}
