import {
  createContext,
  useContext,
  createSignal,
  Component,
  ParentProps,
} from "solid-js"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"

interface ServiceManagementContextType {
  errors: () => Record<ServiceType, string>
  isProcessing: () => boolean
  setError: (service: ServiceType, error: string) => void
  clearError: (service: ServiceType) => void
  setIsProcessing: (processing: boolean) => void
}

const ServiceManagementContext = createContext<ServiceManagementContextType>()

export const ServiceManagementProvider: Component<ParentProps> = (props) => {
  const [errors, setErrors] = createSignal<Record<ServiceType, string>>({
    jpdb: "",
    wanikani: "",
    anki: "",
  })

  const [isProcessing, setIsProcessing] = createSignal(false)

  const setError = (service: ServiceType, error: string) => {
    setErrors((prev) => ({ ...prev, [service]: error }))
  }

  const clearError = (service: ServiceType) => {
    setErrors((prev) => ({ ...prev, [service]: "" }))
  }

  const value = {
    errors,
    isProcessing,
    setError,
    clearError,
    setIsProcessing,
  }

  return (
    <ServiceManagementContext.Provider value={value}>
      {props.children}
    </ServiceManagementContext.Provider>
  )
}

export function useServiceManagement() {
  const context = useContext(ServiceManagementContext)
  if (context === undefined) {
    throw new Error(
      "useServiceManagement must be used within a ServiceManagementProvider",
    )
  }
  return context
}
