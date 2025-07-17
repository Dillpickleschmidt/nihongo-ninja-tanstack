// features/settings-page/components/ServiceIntegrationsSection.tsx
import { Show } from "solid-js"
import { AnkiServiceCard } from "./AnkiServiceCard"
import { WanikaniServiceCard } from "./WanikaniServiceCard"
import { JpdbServiceCard } from "./JpdbServiceCard"
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter"
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn"
import { connectService } from "@/features/service-config/server/server-functions"
import { useSettings } from "@/context/SettingsContext"
import type { ServiceType } from "@/features/service-config/types"

export const ServiceIntegrationsSection = () => {
  const {
    preferences,
    updateServicePreference,
    setError,
    clearError,
    setIsProcessing,
  } = useSettings()

  const handleJpdbImport = async (apiKey: string, file: File) => {
    setIsProcessing(true)
    clearError("jpdb")

    // 1. Validate API Key
    const validationResult = await connectService({
      data: { service: "jpdb", credentials: { api_key: apiKey } },
    })

    if (!validationResult.success) {
      setError("jpdb", validationResult.error || "Invalid API Key")
      updateServicePreference("jpdb", { is_api_key_valid: false })
      setIsProcessing(false)
      return
    }

    // Update preference state after successful validation
    updateServicePreference("jpdb", { is_api_key_valid: true })

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
        updateServicePreference("jpdb", { data_imported: true })
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
      preferences()[service] || {
        mode: "disabled",
        data_imported: false,
        is_api_key_valid: false,
      },
    updateServicePreference: (preferenceUpdate: any) =>
      updateServicePreference(service, preferenceUpdate),
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
