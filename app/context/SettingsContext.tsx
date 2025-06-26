import {
  createContext,
  useContext,
  createSignal,
  onMount,
  Component,
  ParentProps,
} from "solid-js"
import {
  ServiceCredentials,
  ServiceSettings,
  ServiceType,
  ServiceMode,
} from "../features/service-auth/types"

// --- Cookie Management ---

const COOKIE_NAME = "nn-service-credentials"

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number = 365) {
  if (typeof document === "undefined") return
  let expires = ""
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie =
    name + "=" + (value || "") + expires + "; path=/; SameSite=Lax"
}

// --- Context Definition ---

interface SettingsContextType {
  serviceSettings: () => ServiceCredentials
  updateServiceSetting: (
    service: ServiceType,
    settings: Partial<ServiceSettings>,
  ) => void
  isInitialized: () => boolean
}

const defaultSettings: ServiceCredentials = {
  jpdb: {
    mode: "disabled",
    api_key: "",
    is_api_key_valid: false,
    data_imported: false,
  },
  wanikani: {
    mode: "disabled",
    api_key: "",
    is_api_key_valid: false,
    data_imported: false,
  },
  anki: {
    mode: "disabled",
    api_key: "",
    is_api_key_valid: false,
    data_imported: false,
  },
}

const SettingsContext = createContext<SettingsContextType>()

// --- Provider Component ---

interface SettingsProviderProps {
  children: ReactNode;
  initialSettings?: ServiceCredentials;
}

export const SettingsProvider: Component<ParentProps & SettingsProviderProps> = (props) => {
  const [serviceSettings, setServiceSettings] = createSignal<ServiceCredentials>(props.initialSettings || defaultSettings);
  const [isInitialized, setIsInitialized] = createSignal(false);

  onMount(() => {
    // If initialSettings were provided, we assume the server already loaded the cookie.
    // Otherwise, load from client-side cookie.
    if (!props.initialSettings) {
      const savedSettings = getCookie(COOKIE_NAME);
      if (savedSettings) {
        try {
          const parsedSettings = JSON.parse(savedSettings);
          const mergedSettings = {
              ...defaultSettings,
              ...parsedSettings,
              jpdb: { ...defaultSettings.jpdb, ...(parsedSettings.jpdb || {}) },
              wanikani: { ...defaultSettings.wanikani, ...(parsedSettings.wanikani || {}) },
              anki: { ...defaultSettings.anki, ...(parsedSettings.anki || {}) },
          };
          setServiceSettings(mergedSettings);
        } catch (error) {
          console.error("Failed to parse settings cookie:", error);
          setServiceSettings(defaultSettings);
        }
      }
    }
    setIsInitialized(true);
  });

  const updateServiceSetting = (
    service: ServiceType,
    newSettings: Partial<ServiceSettings>,
  ) => {
    setServiceSettings((prevSettings) => {
      const updatedSettings = {
        ...prevSettings,
        [service]: {
          ...prevSettings[service],
          ...newSettings,
        },
      }
      setCookie(COOKIE_NAME, JSON.stringify(updatedSettings))
      return updatedSettings
    })
  }

  const value = {
    serviceSettings,
    updateServiceSetting,
    isInitialized,
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
