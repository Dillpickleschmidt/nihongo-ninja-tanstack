// features/settings-page/components/ServiceIntegrationsSection.tsx
import { createSignal } from "solid-js"
import { AnkiServiceCard } from "./AnkiServiceCard"
import { WanikaniServiceCard } from "./WanikaniServiceCard"
import { JpdbServiceCard } from "./JpdbServiceCard"
import { ImportReviewDialog } from "./ImportReviewDialog"
import { jpdbAdapter } from "@/features/fsrs-import/adapters/jpdb-import-adapter"
import { importReviewsServerFn } from "@/features/fsrs-import/server/importReviewsServerFn"
import { validateJpdbImportServerFn } from "@/features/fsrs-import/server/validateJpdbImportServerFn"
import { validateJpdbApiKey } from "@/features/service-api-functions/jpdb/validation"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  updateUserSettingsMutation,
} from "@/features/main-cookies/query/query-options"
import { Link, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"
import type {
  MatchedKanjiRadical,
  UnmatchedKanjiRadical,
  JpdbValidationResponse,
} from "@/features/fsrs-import/core/jpdb-validation-types"
import type { NormalizedCard } from "@/features/fsrs-import/core/schemas"

export const ServiceIntegrationsSection = () => {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  const { setError, clearError, setIsProcessing } = useServiceManagement()

  // Dialog state
  const [showReviewDialog, setShowReviewDialog] = createSignal(false)
  const [validationData, setValidationData] =
    createSignal<JpdbValidationResponse | null>(null)
  const [normalizedCards, setNormalizedCards] = createSignal<
    NormalizedCard[] | null
  >(null)

  const handleJpdbImport = async (apiKey: string, file: File) => {
    setIsProcessing(true)
    clearError("jpdb")

    // 1. Validate API Key
    const validationResult = await validateJpdbApiKey(apiKey)

    if (!validationResult.success) {
      setError("jpdb", validationResult.error || "Invalid API Key")
      const currentSettings = settingsQuery.data
      updateMutation.mutate({
        "service-preferences": {
          ...currentSettings["service-preferences"],
          jpdb: {
            ...currentSettings["service-preferences"].jpdb,
            is_api_key_valid: false,
          },
        },
      })
      setIsProcessing(false)
      return
    }

    // Update credentials in HttpOnly cookie (server-only)
    const currentCredentials = await getServiceCredentials()
    await updateServiceCredentials({
      data: {
        ...currentCredentials,
        jpdb: { ...currentCredentials.jpdb, api_key: apiKey },
      },
    })

    // Update settings with validated API key state
    const currentSettings = settingsQuery.data
    updateMutation.mutate({
      "service-preferences": {
        ...currentSettings["service-preferences"],
        jpdb: {
          ...currentSettings["service-preferences"].jpdb,
          is_api_key_valid: true,
        },
      },
    })

    // 2. Parse and transform JPDB file
    try {
      const fileText = await file.text()
      const rawData = JSON.parse(fileText)
      if (!jpdbAdapter.validateInput(rawData)) {
        throw new Error("Invalid JPDB JSON format.")
      }
      const cards = jpdbAdapter.transformCards(rawData)
      if (cards.length === 0) {
        throw new Error("No valid cards found in the JPDB export.")
      }

      // 3. Validate with server (WaniKani lookup for kanji/radicals)
      const validation = await validateJpdbImportServerFn({
        data: { cards },
      })

      // Store data for dialog
      setValidationData(validation)
      setNormalizedCards(cards)

      // Show review dialog
      setShowReviewDialog(true)
      setIsProcessing(false)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setError("jpdb", `Import failed: ${errorMessage}`)
      setIsProcessing(false)
    }
  }

  const handleConfirmImport = async () => {
    const cards = normalizedCards()
    if (!cards) return

    setShowReviewDialog(false)
    setIsProcessing(true)
    clearError("jpdb")

    try {
      // Import with original normalized cards
      const importResult = await importReviewsServerFn({
        data: { cards, source: "jpdb" },
      })

      if (importResult.success) {
        const currentSettings = settingsQuery.data
        updateMutation.mutate({
          "service-preferences": {
            ...currentSettings["service-preferences"],
            jpdb: {
              ...currentSettings["service-preferences"].jpdb,
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
      setValidationData(null)
      setNormalizedCards(null)
    }
  }

  const handleCancelImport = () => {
    setShowReviewDialog(false)
    setValidationData(null)
    setNormalizedCards(null)
    setIsProcessing(false)
  }

  const createServiceProps = (service: ServiceType) => ({
    preference: () =>
      settingsQuery.data["service-preferences"][service] || {
        mode: "disabled",
        data_imported: false,
        is_api_key_valid: false,
      },
    updateServicePreference: (preferenceUpdate: any) => {
      const currentServicePrefs = settingsQuery.data["service-preferences"]
      const currentServicePref = currentServicePrefs[service] || {
        mode: "disabled",
        data_imported: false,
        is_api_key_valid: false,
      }

      return updateMutation.mutate({
        "service-preferences": {
          ...currentServicePrefs,
          [service]: { ...currentServicePref, ...preferenceUpdate },
        },
      })
    },
  })

  return (
    <div class="space-y-6">
      <div class="flex items-center space-x-3">
        <h2 class="text-2xl font-bold">Service Integrations</h2>
        <p class="text-muted-foreground mt-1">
          Connect the spaced-repetition programs that you've been using!
        </p>
      </div>
      <ul class="text-muted-foreground ml-5 list-disc space-y-3">
        <li>
          <strong>Disabled</strong> - Not being used
        </li>
        <li>
          <strong>Live</strong> - Your changes sync straight to the service
          immediately, so you can continue from there as you like. See the{" "}
          <Link to="/guides/comparison" class="underline underline-offset-3">
            comparison chart
          </Link>{" "}
          for supported features.
        </li>
        <li>
          <strong>Import</strong> - One-time import of your existing review data
          for use in Nihongo Ninja. This won't affect your data on the other
          service.
        </li>
      </ul>
      <AnkiServiceCard {...createServiceProps("anki")} />
      <WanikaniServiceCard {...createServiceProps("wanikani")} />
      <JpdbServiceCard
        {...createServiceProps("jpdb")}
        onImport={handleJpdbImport}
      />

      {/* Import Review Dialog */}
      <ImportReviewDialog
        open={showReviewDialog()}
        matched={validationData()?.matched || []}
        unmatched={validationData()?.unmatched || []}
        vocabularyCount={validationData()?.vocabularyCount || 0}
        onConfirm={handleConfirmImport}
        onCancel={handleCancelImport}
      />
    </div>
  )
}
