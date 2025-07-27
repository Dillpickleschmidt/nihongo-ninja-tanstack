// features/settings-page/components/ServiceIntegrationsSection.tsx
import { AnkiServiceCard } from "./AnkiServiceCard"
import { WanikaniServiceCard } from "./WanikaniServiceCard"
import { JpdbServiceCard } from "./JpdbServiceCard"
import { jpdbAdapter } from "@/features/fsrs-import/adapters/jpdb-import-adapter"
import { importReviewsServerFn } from "@/features/fsrs-import/server/importReviewsServerFn"
import { validateJpdbApiKey } from "@/features/service-api-functions/jpdb/validation"
import { useSettings } from "@/context/SettingsContext"
import { useServiceManagement } from "../context/ServiceManagementContext"
import type { ServiceType } from "@/features/user-settings/schemas/user-preferences"

export const ServiceIntegrationsSection = () => {
  const { userPreferences, updateUserPreferences } = useSettings()
  const { setError, clearError, setIsProcessing } = useServiceManagement()

  const handleJpdbImport = async (apiKey: string, file: File) => {
    setIsProcessing(true)
    clearError("jpdb")

    // 1. Validate API Key
    const validationResult = await validateJpdbApiKey(apiKey)

    if (!validationResult.success) {
      setError("jpdb", validationResult.error || "Invalid API Key")
      const currentPrefs = userPreferences()
      updateUserPreferences({
        "service-preferences": {
          ...currentPrefs["service-preferences"],
          jpdb: {
            ...currentPrefs["service-preferences"].jpdb,
            is_api_key_valid: false,
          },
        },
      })
      setIsProcessing(false)
      return
    }

    // Update preferences with validated API key and success state
    const currentPrefs = userPreferences()
    updateUserPreferences({
      "service-credentials": {
        ...currentPrefs["service-credentials"],
        jpdb: { ...currentPrefs["service-credentials"].jpdb, api_key: apiKey },
      },
      "service-preferences": {
        ...currentPrefs["service-preferences"],
        jpdb: {
          ...currentPrefs["service-preferences"].jpdb,
          is_api_key_valid: true,
        },
      },
    })

    // 2. Process and Import File
    try {
      const fileText = await file.text()
      const rawData = JSON.parse(fileText)
      if (!jpdbAdapter.validateInput(rawData)) {
        throw new Error("Invalid JPDB JSON format.")
      }
      const normalizedCards = jpdbAdapter.transformCards(rawData)
      if (normalizedCards.length === 0) {
        throw new Error("No valid cards found in the JPDB export.")
      }
      const importResult = await importReviewsServerFn({
        data: { cards: normalizedCards, source: "jpdb" },
      })
      if (importResult.success) {
        const currentPrefs = userPreferences()
        updateUserPreferences({
          "service-preferences": {
            ...currentPrefs["service-preferences"],
            jpdb: {
              ...currentPrefs["service-preferences"].jpdb,
              data_imported: true,
            },
          },
        })
      } else {
        throw new Error(importResult.message || "File import failed.")
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setError("jpdb", `Import failed: ${errorMessage}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const createServiceProps = (service: ServiceType) => ({
    preference: () =>
      userPreferences()["service-preferences"][service] || {
        mode: "disabled",
        data_imported: false,
        is_api_key_valid: false,
      },
    updateServicePreference: (preferenceUpdate: any) => {
      const currentServicePrefs = userPreferences()["service-preferences"]
      const currentServicePref = currentServicePrefs[service] || {
        mode: "disabled",
        data_imported: false,
        is_api_key_valid: false,
      }

      return updateUserPreferences({
        "service-preferences": {
          ...currentServicePrefs,
          [service]: { ...currentServicePref, ...preferenceUpdate },
        },
      })
    },
  })

  return (
    <div class="space-y-6">
      <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>
      <AnkiServiceCard {...createServiceProps("anki")} />
      <WanikaniServiceCard {...createServiceProps("wanikani")} />
      <JpdbServiceCard
        {...createServiceProps("jpdb")}
        onImport={handleJpdbImport}
      />
    </div>
  )
}
