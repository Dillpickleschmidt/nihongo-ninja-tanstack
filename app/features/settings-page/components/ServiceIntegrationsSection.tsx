import { createSignal, onMount } from "solid-js"
import { AnkiServiceCard } from "./AnkiServiceCard"
import { WanikaniServiceCard } from "./WanikaniServiceCard"
import { JpdbServiceCard } from "./JpdbServiceCard"
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter"
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn"
import {
  connectService,
  getServiceAuthState,
} from "@/features/service-config/server/server-functions"
import {
  getAllServicePreferences,
  setServicePreference,
} from "@/features/service-config/client/preferenceManager"
import type {
  ServiceType,
  ServiceAuthData,
  ServicePreference,
  AllServicePreferences,
  AllServiceAuthData,
} from "@/features/service-config/types"

export const ServiceIntegrationsSection = () => {
  const [preferences, setPreferences] = createSignal<AllServicePreferences>({
    jpdb: { mode: "disabled", data_imported: false },
    wanikani: { mode: "disabled", data_imported: false },
    anki: { mode: "disabled", data_imported: false },
  })

  const [authData, setAuthData] = createSignal<AllServiceAuthData>({
    jpdb: { api_key: "", is_api_key_valid: false },
    wanikani: { api_key: "", is_api_key_valid: false },
    anki: { api_key: "", is_api_key_valid: false },
  })

  const [errors, setErrors] = createSignal<Record<ServiceType, string>>({
    jpdb: "",
    wanikani: "",
    anki: "",
  })
  const [isProcessing, setIsProcessing] = createSignal(false)

  onMount(() => {
    loadPreferences()
    loadAuthData()
  })

  const loadPreferences = () => {
    const clientPreferences = getAllServicePreferences()
    setPreferences(clientPreferences)
  }

  const loadAuthData = async () => {
    try {
      const result = await getServiceAuthState()
      if (result.success && result.data) {
        setAuthData(result.data)
      }
    } catch (error) {
      console.error("Failed to load auth data:", error)
    }
  }

  const updateServicePreference = (
    service: ServiceType,
    preference: Partial<ServicePreference>,
  ) => {
    setServicePreference(service, preference)
    loadPreferences() // Refresh local state
  }

  const updateServiceAuth = async (
    service: ServiceType,
    authUpdate: Partial<ServiceAuthData>,
  ) => {
    // Auth updates are handled by server functions during connect/disconnect
    // Just reload the auth data to get the latest state
    await loadAuthData()
  }

  const handleJpdbImport = async (apiKey: string, file: File) => {
    setIsProcessing(true)
    setErrors((prev) => ({ ...prev, jpdb: "" }))

    // 1. Validate API Key
    const validationResult = await connectService({
      data: { service: "jpdb", credentials: { api_key: apiKey } },
    })

    if (!validationResult.success) {
      setErrors((prev) => ({
        ...prev,
        jpdb: validationResult.error || "Invalid API Key",
      }))
      setIsProcessing(false)
      return
    }

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
        throw new Error(importResult.error || "File import failed.")
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setErrors((prev) => ({ ...prev, jpdb: `Import failed: ${errorMessage}` }))
    } finally {
      setIsProcessing(false)
    }
  }

  const createCommonProps = (serviceType: ServiceType) => ({
    authData: () => authData()[serviceType] || {},
    preference: () =>
      preferences()[serviceType] || { mode: "disabled", data_imported: false },
    updateServiceAuth: (authData: Partial<ServiceAuthData>) =>
      updateServiceAuth(serviceType, authData),
    updateServicePreference: (preference: Partial<ServicePreference>) =>
      updateServicePreference(serviceType, preference),
    error: () => errors()[serviceType],
    setError: (error: string) =>
      setErrors((prev) => ({ ...prev, [serviceType]: error })),
    isProcessing: isProcessing,
    setIsProcessing: setIsProcessing,
  })

  return (
    <div class="space-y-6">
      <h2 class="mb-6 text-2xl font-bold">Service Integrations</h2>
      <AnkiServiceCard {...createCommonProps("anki")} />
      <WanikaniServiceCard {...createCommonProps("wanikani")} />
      <JpdbServiceCard
        {...createCommonProps("jpdb")}
        onImport={handleJpdbImport}
      />
    </div>
  )
}
