import { createSignal, onMount } from "solid-js"
import { getServiceState } from "@/features/service-auth/server-functions"
import type {
  AllServicesState,
  ServiceType,
  ServiceMode,
} from "../utils/serviceTypes"

export const useServiceState = () => {
  const [servicesState, setServicesState] = createSignal<AllServicesState>({
    jpdb: {
      status: "disconnected",
      enabled: false,
      use_imported_data: false,
      has_api_key: false,
    },
    wanikani: {
      status: "disconnected",
      enabled: false,
      use_imported_data: false,
      has_api_key: false,
    },
    anki: {
      status: "disconnected",
      enabled: false,
      use_imported_data: false,
      has_api_key: false,
    },
  })

  const [selectedModes, setSelectedModes] = createSignal<
    Record<ServiceType, ServiceMode>
  >({
    jpdb: "disabled",
    wanikani: "disabled",
    anki: "disabled",
  })

  const loadServiceState = async () => {
    try {
      const result = await getServiceState()
      if (result.success && result.data) {
        setServicesState(result.data)
      }
    } catch (error) {
      console.error("Failed to load service state:", error)
    }
  }

  onMount(() => {
    loadServiceState()
  })

  return {
    servicesState,
    setServicesState,
    selectedModes,
    setSelectedModes,
    loadServiceState,
  }
}
