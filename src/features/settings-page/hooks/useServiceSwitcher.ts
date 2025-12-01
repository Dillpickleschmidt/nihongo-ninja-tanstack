// features/settings-page/hooks/useServiceSwitcher.ts
import { createSignal } from "solid-js"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { updateUserSettingsMutation } from "@/query/query-mutations"
import { validateAnkiConnect } from "@/features/service-api-functions/anki/anki-connect-client"
import type { SRSServiceType } from "@/features/main-cookies/schemas/user-settings"

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
    service: "nihongo" | SRSServiceType,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsSwitching(true)
    clearError()

    try {
      const currentPreferences = settingsQuery.data!["srs-service-preferences"]

      // Handle "nihongo" (local FSRS) - just disable anki
      if (service === "nihongo") {
        updateMutation.mutate({
          "srs-service-preferences": {
            anki: { ...currentPreferences.anki, mode: "disabled" },
          },
        })
        setIsSwitching(false)
        return { success: true }
      }

      // Validate anki connection
      const result = await validateAnkiConnect()
      if (!result.success) {
        const validationError =
          result.error ||
          "Cannot connect to Anki. Make sure Anki is running with AnkiConnect installed."
        setSwitchError(validationError)
        setIsSwitching(false)
        return { success: false, error: validationError }
      }

      // Validation passed - enable anki
      updateMutation.mutate({
        "srs-service-preferences": {
          anki: {
            ...currentPreferences.anki,
            mode: "enabled",
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
