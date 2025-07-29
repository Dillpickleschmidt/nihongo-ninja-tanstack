// src/context/SettingsContext.tsx
import {
  createContext,
  useContext,
  createSignal,
  createResource,
  createEffect,
  Component,
  ParentProps,
} from "solid-js"
import type { UserPreferencesCookieData } from "@/features/user-settings/schemas/user-preferences"
import type { DeviceUISettingsCookieData } from "@/features/user-settings/schemas/device-ui-settings"
import { setDeviceUISettingsCookie } from "@/features/user-settings/server/server-functions"
import {
  revalidateUserPreferencesCookieServerFn,
  mutateUserPreferencesServerFn,
} from "@/features/user-settings/server/server-functions"
import { User } from "@supabase/supabase-js"

// --- Context Definition ---

interface SettingsContextType {
  // Cross-device user preferences (with SWR)
  userPreferences: () => UserPreferencesCookieData
  updateUserPreferences: (
    prefs: Partial<UserPreferencesCookieData>,
  ) => Promise<void>

  // Device UI settings (client-only)
  deviceUISettings: () => DeviceUISettingsCookieData
  updateDeviceUISettings: (
    settings: Partial<DeviceUISettingsCookieData>,
  ) => void

  // Status
  isInitialized: () => boolean
}

const SettingsContext = createContext<SettingsContextType>()

// --- Provider Component ---

interface SettingsProviderProps extends ParentProps {
  user: User | null
  initialUserPreferenceData: UserPreferencesCookieData
  userPreferencesDBPromise: Promise<UserPreferencesCookieData>
  deviceUISettings: DeviceUISettingsCookieData
}

export const SettingsProvider: Component<SettingsProviderProps> = (props) => {
  // Cross-device settings with SWR pattern (Hook 1: createSignal)
  const [displayedUserPreferences, setDisplayedUserPreferences] =
    createSignal<UserPreferencesCookieData>(props.initialUserPreferenceData)

  // Device UI settings (simple client state)
  const [deviceUISettings, setDeviceUISettings] =
    createSignal<DeviceUISettingsCookieData>(props.deviceUISettings)

  const [isInitialized, setIsInitialized] = createSignal(false)

  // SWR pattern (Hook 2: createResource)
  const [freshUserPreferencesResource] = createResource(
    () => props.userPreferencesDBPromise,
  )

  // SWR pattern (Hook 3: createEffect)
  createEffect(() => {
    const freshData = freshUserPreferencesResource()
    if (freshData) {
      const currentData = displayedUserPreferences()

      // Compare timestamps - only update if DB is strictly newer
      if (freshData.timestamp > currentData.timestamp) {
        setDisplayedUserPreferences(freshData)

        // Update HttpOnly cookie to match newer DB data
        if (props.user) {
          revalidateUserPreferencesCookieServerFn({
            data: {
              preferences: freshData,
            },
          }).catch(console.error) // Non-blocking error handling
        }
      }
      // If cookie timestamp >= DB timestamp, no change (prevents flash)
    }

    setIsInitialized(true)
  })

  // Update user preferences (user-initiated changes)
  const updateUserPreferences = async (
    prefs: Partial<UserPreferencesCookieData>,
  ) => {
    const currentPrefs = displayedUserPreferences()
    const newPrefs = { ...currentPrefs, ...prefs }

    try {
      // Optimistically update UI
      setDisplayedUserPreferences(newPrefs)

      // Persist to DB and cookie (only for authenticated users)
      if (props.user) {
        const result = await mutateUserPreferencesServerFn({
          data: {
            preferences: newPrefs,
          },
        })

        // Update with server response (includes new timestamp)
        setDisplayedUserPreferences(result.preferences)
      } else {
        // For unauthenticated users, just update timestamp locally
        setDisplayedUserPreferences({
          ...newPrefs,
          timestamp: Date.now(),
        })
      }
    } catch (error) {
      // Rollback on error
      setDisplayedUserPreferences(currentPrefs)
      throw error
    }
  }

  // Update device UI settings
  const updateDeviceUISettings = (
    settings: Partial<DeviceUISettingsCookieData>,
  ) => {
    const currentSettings = deviceUISettings()
    const newSettings = { ...currentSettings, ...settings }

    setDeviceUISettings(newSettings)
    setDeviceUISettingsCookie(newSettings)
  }

  const value = {
    userPreferences: displayedUserPreferences,
    updateUserPreferences,
    deviceUISettings,
    updateDeviceUISettings,
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
