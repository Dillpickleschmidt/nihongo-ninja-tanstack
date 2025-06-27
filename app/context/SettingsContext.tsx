import {
  createContext,
  useContext,
  createSignal,
  onMount,
  Component,
  ParentProps,
} from "solid-js"
import {
  AllServiceAuthData,
  AllServicePreferences,
  ServiceAuthData,
  ServicePreference,
  ServiceType,
} from "@/features/service-config/types"
import { updateServiceAuthServerFn } from "@/features/service-config/server/server-functions"
import {
  getAllServicePreferences,
  setServicePreference,
} from "@/features/service-config/client/preferenceManager"

// --- Context Definition ---

interface SettingsContextType {
  authData: () => AllServiceAuthData
  preferences: () => AllServicePreferences
  updateServiceAuth: (
    service: ServiceType,
    authData: Partial<ServiceAuthData>,
  ) => Promise<void>
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

const defaultAuthData: ServiceAuthData = {
  api_key: "",
  is_api_key_valid: false,
}

const defaultPreference: ServicePreference = {
  mode: "disabled",
  data_imported: false,
}

const SettingsContext = createContext<SettingsContextType>()

// --- Provider Component ---

interface SettingsProviderProps extends ParentProps {
  initialAuthData?: AllServiceAuthData
  initialPreferences?: AllServicePreferences
}

export const SettingsProvider: Component<SettingsProviderProps> = (props) => {
  const [authData, setAuthData] = createSignal<AllServiceAuthData>(
    props.initialAuthData || {
      jpdb: defaultAuthData,
      wanikani: defaultAuthData,
      anki: defaultAuthData,
    },
  )

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

  const updateServiceAuth = async (
    service: ServiceType,
    newAuthData: Partial<ServiceAuthData>,
  ) => {
    // Update local state immediately for reactivity
    setAuthData((prevAuthData) => ({
      ...prevAuthData,
      [service]: {
        ...defaultAuthData,
        ...(prevAuthData[service] || {}),
        ...newAuthData,
      },
    }))

    // Update server-side auth cookie
    await updateServiceAuthServerFn({
      data: { service, authData: newAuthData },
    })
  }

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
    authData,
    preferences,
    updateServiceAuth,
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
