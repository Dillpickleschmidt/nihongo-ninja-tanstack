// features/settings-page/hooks/useServiceSwitcher.ts
import { createSignal } from "solid-js"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { updateUserSettingsMutation } from "@/query/query-mutations"
import { validateAnkiConnect } from "@/features/service-api-functions/anki/anki-connect-client"
import { ensureSingleLiveService } from "@/features/srs-services/utils"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"

/**
 * Custom hook for switching between SRS services with validation
 * Shared logic between settings page and review page
 */
export function useServiceSwitcher(userId: string | null) {
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  const [switchError, setSwitchError] = createSignal<string | null>(null)
  const [isSwitching, setIsSwitching] = createSignal(false)

  const clearError = () => setSwitchError(null)

  /**
   * Switch to a specific service with validation
   */
  const switchToService = async (
    service: "nihongo" | ServiceType,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsSwitching(true)
    clearError()

    try {
      const currentPreferences = settingsQuery.data!["service-preferences"]

      // Handle "nihongo" (local FSRS) - just disable all services
      if (service === "nihongo") {
        updateMutation.mutate({
          "service-preferences": {
            anki: { ...currentPreferences.anki, mode: "disabled" },
            wanikani: { ...currentPreferences.wanikani, mode: "disabled" },
            jpdb: { ...currentPreferences.jpdb, mode: "disabled" },
          },
        })
        setIsSwitching(false)
        return { success: true }
      }

      // Validate based on service type
      let validationError: string | null = null

      switch (service) {
        case "anki": {
          const result = await validateAnkiConnect()
          if (!result.success) {
            validationError =
              result.error ||
              "Cannot connect to Anki. Make sure Anki is running with AnkiConnect installed."
          }
          break
        }

        case "jpdb": {
          const pref = currentPreferences.jpdb
          if (!pref.is_api_key_valid) {
            validationError = "JPDB API key not configured or invalid"
          }
          break
        }

        case "wanikani": {
          const pref = currentPreferences.wanikani
          if (!pref.is_api_key_valid) {
            validationError = "WaniKani API key not configured or invalid"
          }
          break
        }
      }

      // If validation failed, set error and return
      if (validationError) {
        setSwitchError(validationError)
        setIsSwitching(false)
        return { success: false, error: validationError }
      }

      // Validation passed - switch to live mode and disable other services
      const updatedPreferences = ensureSingleLiveService(
        service,
        "live",
        currentPreferences,
      )

      updateMutation.mutate({
        "service-preferences": {
          ...updatedPreferences,
          [service]: {
            ...currentPreferences[service],
            mode: "live",
            is_api_key_valid: true,
          },
        },
      })

      setIsSwitching(false)
      return { success: true }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred"
      setSwitchError(errorMessage)
      setIsSwitching(false)
      return { success: false, error: errorMessage }
    }
  }

  return {
    switchToService,
    isSwitching,
    switchError,
    clearError,
  }
}
