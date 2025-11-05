// features/settings-page/components/ServiceIntegrationsSection.tsx
import { createSignal } from "solid-js"
import { ImportServiceCard } from "./ImportServiceCard"
import { LiveServiceSelector } from "./LiveServiceSelector"
import { ImportReviewDialog } from "./ImportReviewDialog"
import { jpdbAdapter } from "@/features/fsrs-import/adapters/jpdb-import-adapter"
import { importReviewsServerFn } from "@/features/fsrs-import/server/importReviewsServerFn"
import { validateJpdbImportServerFn } from "@/features/fsrs-import/server/validateJpdbImportServerFn"
import { validateJpdbApiKey } from "@/features/service-api-functions/jpdb/validation"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { updateUserSettingsMutation } from "@/query/query-mutations"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
import { useServiceSwitcher } from "../hooks/useServiceSwitcher"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"
import type { JpdbValidationResponse } from "@/features/fsrs-import/core/jpdb-validation-types"
import type { NormalizedCard } from "@/features/fsrs-import/core/schemas"

export const ServiceIntegrationsSection = () => {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() => userSettingsQueryOptions(userId))
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(userId, queryClient),
  )

  const { errors, setError, clearError, setIsProcessing, isProcessing } =
    useServiceManagement()

  const { switchToService } = useServiceSwitcher(userId)

  // JPDB import dialog state
  const [showReviewDialog, setShowReviewDialog] = createSignal(false)
  const [validationData, setValidationData] =
    createSignal<JpdbValidationResponse | null>(null)
  const [normalizedCards, setNormalizedCards] = createSignal<
    NormalizedCard[] | null
  >(null)

  // File input refs for imports
  let jpdbFileInput: HTMLInputElement | undefined

  const handleJpdbImport = () => {
    jpdbFileInput?.click()
  }

  const handleJpdbFileSelect = async (e: Event) => {
    const input = e.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file) return

    setIsProcessing(true)
    clearError("jpdb")

    // Need API key for JPDB
    const credentials = await getServiceCredentials()
    const apiKey = credentials.jpdb?.api_key

    if (!apiKey) {
      setError(
        "jpdb",
        "Please configure your JPDB API key in Live Service Connection first",
      )
      setIsProcessing(false)
      return
    }

    // Validate API key
    const validationResult = await validateJpdbApiKey(apiKey)
    if (!validationResult.success) {
      setError("jpdb", validationResult.error || "Invalid API Key")
      setIsProcessing(false)
      return
    }

    // Parse and validate file
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

      // Validate with server
      const validation = await validateJpdbImportServerFn({ data: { cards } })

      setValidationData(validation)
      setNormalizedCards(cards)
      setShowReviewDialog(true)
      setIsProcessing(false)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setError("jpdb", `Import failed: ${errorMessage}`)
      setIsProcessing(false)
    }

    // Reset file input
    input.value = ""
  }

  const handleConfirmImport = async () => {
    const cards = normalizedCards()
    if (!cards) return

    setShowReviewDialog(false)
    setIsProcessing(true)
    clearError("jpdb")

    try {
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

  const handleAnkiImport = () => {
    setError("anki", "Anki data import not yet implemented")
  }

  const handleWanikaniImport = () => {
    setError("wanikani", "WaniKani data import not yet implemented")
  }

  return (
    <div class="space-y-8">
      {/* Section 1: Nihongo Ninja (Built-in) */}
      <div class="space-y-4">
        <div>
          <h2 class="text-2xl font-bold">Nihongo Ninja (Built-in FSRS)</h2>
          <p class="text-muted-foreground mt-1 text-sm">
            Use Nihongo Ninja's built-in spaced repetition system. Optionally
            import your existing review data from other services.
          </p>
        </div>

        <div class="space-y-3">
          <ImportServiceCard
            service="anki"
            serviceName="Anki"
            description="Import review history from Anki"
            hasImported={
              settingsQuery.data["service-preferences"].anki.data_imported
            }
            isProcessing={isProcessing()}
            error={errors().anki ?? undefined}
            onImport={handleAnkiImport}
          />

          <ImportServiceCard
            service="wanikani"
            serviceName="WaniKani"
            description="Import review history from WaniKani"
            hasImported={
              settingsQuery.data["service-preferences"].wanikani.data_imported
            }
            isProcessing={isProcessing()}
            error={errors().wanikani ?? undefined}
            onImport={handleWanikaniImport}
          />

          <ImportServiceCard
            service="jpdb"
            serviceName="JPDB"
            description="Import review history from JPDB"
            hasImported={
              settingsQuery.data["service-preferences"].jpdb.data_imported
            }
            isProcessing={isProcessing()}
            error={errors().jpdb ?? undefined}
            onImport={handleJpdbImport}
          />

          {/* Hidden file input for JPDB */}
          <input
            ref={jpdbFileInput}
            type="file"
            accept=".json"
            class="hidden"
            onChange={handleJpdbFileSelect}
          />
        </div>
      </div>

      {/* Section 2: Live External Service */}
      <div class="space-y-4">
        <div>
          <h2 class="text-2xl font-bold">Live External Service Connection</h2>
          <p class="text-muted-foreground mt-1 text-sm">
            Connect to an external SRS service to sync your reviews in
            real-time. Only one service can be active at a time.
          </p>
        </div>

        <LiveServiceSelector
          preferences={settingsQuery.data["service-preferences"]}
          onServiceChange={switchToService}
          isProcessing={isProcessing()}
          errors={errors()}
          setError={setError}
          clearError={clearError}
        />
      </div>

      {/* JPDB Import Review Dialog */}
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
