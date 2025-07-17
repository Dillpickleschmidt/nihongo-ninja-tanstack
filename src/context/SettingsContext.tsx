// src/context/SettingsContext.tsx
import {
  createContext,
  useContext,
  createSignal,
  onMount,
  Component,
  ParentProps,
} from "solid-js"
import {
  AllServicePreferences,
  ServicePreference,
  ServiceType,
} from "@/features/service-config/types"
import {
  getAllServicePreferences,
  setServicePreference,
} from "@/features/service-config/client/preferenceManager"

// --- Context Definition ---

interface SettingsContextType {
  preferences: () => AllServicePreferences
  updateServicePreference: (
    service: ServiceType,
    preference: Partial<ServicePreference>,
  ) => void
  isInitialized: () => boolean
  errors: () => Record<ServiceType, string>
  isProcessing: () => boolean
  setError: (service: ServiceType, error: string) => void
  clearError: (service: ServiceType) => void
  setIsProcessing: (processing: boolean) => void
}

const defaultPreference: ServicePreference = {
  mode: "disabled",
  data_imported: false,
  is_api_key_valid: false,
}

const SettingsContext = createContext<SettingsContextType>()

// --- Provider Component ---

interface SettingsProviderProps extends ParentProps {
  initialPreferences?: AllServicePreferences
}

export const SettingsProvider: Component<SettingsProviderProps> = (props) => {
  const [preferences, setPreferences] = createSignal<AllServicePreferences>(
    props.initialPreferences || {
      jpdb: defaultPreference,
      wanikani: defaultPreference,
      anki: defaultPreference,
    },
  )

  const [isInitialized, setIsInitialized] = createSignal(false)

  const [errors, setErrors] = createSignal<Record<ServiceType, string>>({
    jpdb: "",
    wanikani: "",
    anki: "",
  })

  const [isProcessing, setIsProcessing] = createSignal(false)

  onMount(() => {
    // Load preferences from client-side if not provided by server
    if (!props.initialPreferences) {
      const clientPreferences = getAllServicePreferences()
      setPreferences(clientPreferences)
    }
    setIsInitialized(true)
  })

  const updateServicePreference = (
    service: ServiceType,
    newPreference: Partial<ServicePreference>,
  ) => {
    // Update client-side preference cookie via preference manager
    setServicePreference(service, newPreference)

    // Update local state for reactivity
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [service]: {
        ...defaultPreference,
        ...(prevPreferences[service] || {}),
        ...newPreference,
      },
    }))
  }

  const setError = (service: ServiceType, error: string) => {
    setErrors((prev) => ({ ...prev, [service]: error }))
  }

  const clearError = (service: ServiceType) => {
    setErrors((prev) => ({ ...prev, [service]: "" }))
  }

  const value = {
    preferences,
    updateServicePreference,
    isInitialized,
    errors,
    isProcessing,
    setError,
    clearError,
    setIsProcessing,
  }

  return (
    <SettingsContext.Provider value={value}>
      {props.children}
    </SettingsContext.Provider>
  )
}

// --- Hook for easy consumption ---

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}
