import { createSignal } from "solid-js"
import { AnkiServiceCard } from "./AnkiServiceCard"
import { WanikaniServiceCard } from "./WanikaniServiceCard"
import { JpdbServiceCard } from "./JpdbServiceCard"
import { useServiceState } from "../hooks/useServiceState"
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter"
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn"
import { updateServiceSettingsServerFn } from "@/features/service-auth/server-functions"
import type { ServiceType } from "../utils/serviceTypes"

export const ServiceIntegrationsSection = () => {
  const { servicesState, selectedModes, setSelectedModes, loadServiceState } =
    useServiceState()

  const [errors, setErrors] = createSignal<Record<ServiceType, string>>({
    jpdb: "",
    wanikani: "",
    anki: "",
  })

  const [isProcessing, setIsProcessing] = createSignal(false)

  // jpdb file upload handler
  const handleJpdbFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (!file) return

    if (!file.name.endsWith(".json")) {
      setErrors((prev) => ({ ...prev, jpdb: "Please select a JSON file" }))
      return
    }

    setIsProcessing(true)
    setErrors((prev) => ({ ...prev, jpdb: "" }))

    try {
      const fileText = await file.text()
      const rawData = JSON.parse(fileText)

      if (!jpdbAdapter.validateInput(rawData)) {
        throw new Error(
          "Invalid JPDB JSON format. Please check your export file.",
        )
      }

      const normalizedCards = jpdbAdapter.transformCards(rawData)

      if (normalizedCards.length === 0) {
        throw new Error("No valid cards found in the JPDB export.")
      }

      const result = await importReviewsServerFn({
        data: {
          cards: normalizedCards,
          source: "jpdb",
        },
      })

      if (result.success) {
        await updateServiceSettingsServerFn({
          data: {
            service: "jpdb",
            settings: { use_imported_data: true },
          },
        })
        await loadServiceState()
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setErrors((prev) => ({ ...prev, jpdb: `Import failed: ${errorMessage}` }))
    } finally {
      setIsProcessing(false)
      target.value = ""
    }
  }

  const createCommonProps = () => ({
    servicesState: servicesState(),
    selectedModes: selectedModes(),
    loadServiceState,
    setSelectedModes,
    setErrors,
    errors: errors(),
    isProcessing: isProcessing(),
    setIsProcessing,
  })

  return (
    <div class="space-y-6">
      <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>

      <AnkiServiceCard {...createCommonProps()} />
      <WanikaniServiceCard {...createCommonProps()} />
      <JpdbServiceCard
        {...createCommonProps()}
        onFileUpload={handleJpdbFileUpload}
      />
    </div>
  )
}
