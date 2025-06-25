// routes/settings.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { jpdbAdapter } from "@/features/fsrs-import/jpdbAdapter"
import { importReviewsServerFn } from "@/features/fsrs-import/importReviewsServerFn"

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  const [isUploading, setIsUploading] = createSignal(false)
  const [uploadResult, setUploadResult] = createSignal<{
    success: boolean
    message: string
  } | null>(null)
  const [error, setError] = createSignal<string | null>(null)

  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (!file) return

    // Validate file type
    if (!file.name.endsWith(".json")) {
      setError("Please select a JSON file")
      return
    }

    setIsUploading(true)
    setError(null)
    setUploadResult(null)

    try {
      // Read and parse the file
      const fileText = await file.text()
      const rawData = JSON.parse(fileText)

      // Validate input using jpdb adapter
      if (!jpdbAdapter.validateInput(rawData)) {
        throw new Error(
          "Invalid JPDB JSON format. Please check your export file.",
        )
      }

      // Transform data using jpdb adapter
      const normalizedCards = jpdbAdapter.transformCards(rawData)

      if (normalizedCards.length === 0) {
        throw new Error("No valid cards found in the JPDB export.")
      }

      // Call the generic import server function
      const result = await importReviewsServerFn({
        data: {
          cards: normalizedCards,
          source: "jpdb",
        },
      })

      setUploadResult(result)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred"
      setError(`Import failed: ${errorMessage}`)
      console.error("JPDB import error:", err)
    } finally {
      setIsUploading(false)
      // Clear the file input
      target.value = ""
    }
  }

  return (
    <div class="mx-auto max-w-2xl p-6">
      <h1 class="mb-6 text-2xl font-bold">Settings</h1>

      <div class="bg-card rounded-lg p-6 shadow">
        <h2 class="mb-4 text-lg font-semibold">Import JPDB Reviews</h2>
        <p class="dark:text-muted-foreground mb-4 text-gray-600">
          Upload your JPDB JSON export file to import your review history into
          the spaced repetition system.
        </p>

        <div class="space-y-4">
          <div>
            <label
              for="jpdb-file"
              class="dark:text-primary mb-2 block text-sm font-medium text-gray-700"
            >
              Select JPDB JSON file
            </label>
            <input
              id="jpdb-file"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              disabled={isUploading()}
              class="dark:text-muted-foreground block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Show when={isUploading()}>
            <div class="flex items-center space-x-2 text-blue-600">
              <div class="h-4 w-4 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span class="text-sm">Processing your JPDB data...</span>
            </div>
          </Show>

          <Show when={uploadResult()}>
            <div
              class={`rounded-md p-4 ${
                uploadResult()?.success
                  ? "border border-green-200 bg-green-50 text-green-800"
                  : "border border-red-200 bg-red-50 text-red-800"
              }`}
            >
              <p class="text-sm font-medium">
                {uploadResult()?.success ? "✓ Success!" : "✗ Error"}
              </p>
              <p class="mt-1 text-sm">{uploadResult()?.message}</p>
            </div>
          </Show>

          <Show when={error()}>
            <div class="rounded-md border border-red-200 bg-red-50 p-4">
              <p class="text-sm font-medium text-red-800">✗ Upload Error</p>
              <p class="mt-1 text-sm text-red-700">{error()}</p>
            </div>
          </Show>
        </div>

        <div class="dark:bg-card-foreground mt-6 rounded-md bg-gray-50 p-4">
          <h3 class="dark:text-primary mb-2 text-sm font-medium text-gray-900">
            How to get your JPDB data:
          </h3>
          <ol class="dark:text-primary/70 list-inside list-decimal space-y-1 text-sm text-gray-700">
            <li>Go to your JPDB settings page</li>
            <li>Find the "Export data" section</li>
            <li>Download your review history as JSON</li>
            <li>Upload the downloaded file here</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
