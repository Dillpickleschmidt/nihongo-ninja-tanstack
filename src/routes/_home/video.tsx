import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { createSignal, Show } from "solid-js"
import { parseSRT } from "@/features/learning-paths/parse-srt"
import { extractTranscriptData } from "@/features/learning-paths/extraction"
import { createLearningPath } from "@/features/learning-paths/generation"
import { uploadLearningPath } from "@/features/supabase/db/learning-paths"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/video")({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const [pathName, setPathName] = createSignal("")
  const [showName, setShowName] = createSignal("")
  const [episodeName, setEpisodeName] = createSignal("")
  const [textbookId, setTextbookId] = createSignal<TextbookIDEnum>("genki_1")
  const [loading, setLoading] = createSignal(false)
  const [result, setResult] = createSignal<string | null>(null)
  const [error, setError] = createSignal<string | null>(null)

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const user = context().user
      if (!user?.id) {
        throw new Error("User not authenticated")
      }

      // Get file from input
      const fileInput = (e.target as HTMLFormElement).querySelector(
        'input[type="file"]',
      ) as HTMLInputElement
      const file = fileInput.files?.[0]
      if (!file) {
        throw new Error("No file selected")
      }

      // Read file content
      const content = await file.text()

      // Parse SRT
      const subtitles = parseSRT(content)

      // Convert to transcript format
      const transcript = subtitles.map((sub) => ({
        text: sub.text,
        english: "",
        timestamp: `${sub.start_time.hours}:${sub.start_time.minutes}:${sub.start_time.seconds}`,
      }))

      // Extract grammar patterns and vocabulary
      const extractedData = await extractTranscriptData(transcript)

      // Generate learning path
      const preview = await createLearningPath(
        extractedData,
        textbookId(),
        undefined,
      )

      // Prepare data for upload - separate by type
      const selectedGrammarModules = preview.modules
        .filter((m) => m.type === "grammar")
        .map((m) => ({
          moduleId: m.moduleId,
          transcriptLineIds: m.transcriptLineIds,
          orderIndex: m.orderIndex,
        }))

      const selectedVocabDecks = preview.modules
        .filter((m) => m.type === "vocabulary")
        .map((d) => ({
          isVerbDeck: d.isVerbDeck,
          words: d.words,
          transcriptLineIds: d.transcriptLineIds,
          orderIndex: d.orderIndex,
        }))

      // Upload to database
      const pathId = await uploadLearningPath({
        userId: user.id,
        transcript: {
          name: pathName(),
          show_name: showName() || undefined,
          episode_name: episodeName() || undefined,
          transcript_data: extractedData.transcript,
        },
        selectedGrammarModules,
        selectedVocabDecks,
      })
      setResult(
        `Successfully created learning path! Path ID: ${pathId}\n` +
          `Total modules: ${preview.modules.length}\n` +
          `Grammar modules: ${selectedGrammarModules.length}\n` +
          `Vocabulary decks: ${selectedVocabDecks.length}`,
      )
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      console.error("[Error]", message)
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div class="min-h-screen pb-16">
      <div class="mx-auto max-w-2xl p-6">
        <h1 class="mt-6 text-center text-4xl font-bold">
          Generate Learning Path from Video
        </h1>

        <form onSubmit={handleSubmit} class="mt-10 space-y-6">
          {/* File Input */}
          <div>
            <label class="block text-lg font-semibold">SRT File</label>
            <input
              type="file"
              accept=".srt"
              required
              class="mt-2 block w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Path Name */}
          <div>
            <label class="block text-lg font-semibold">
              Learning Path Name
            </label>
            <input
              type="text"
              placeholder="e.g., Attack on Titan Episode 1"
              value={pathName()}
              onInput={(e) => setPathName(e.currentTarget.value)}
              required
              class="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Show Name */}
          <div>
            <label class="block text-lg font-semibold">
              Show Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., Attack on Titan"
              value={showName()}
              onInput={(e) => setShowName(e.currentTarget.value)}
              class="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Episode Name */}
          <div>
            <label class="block text-lg font-semibold">
              Episode Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., Episode 1"
              value={episodeName()}
              onInput={(e) => setEpisodeName(e.currentTarget.value)}
              class="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Textbook Selector */}
          <div>
            <label class="block text-lg font-semibold">Module Ordering</label>
            <select
              value={textbookId()}
              onChange={(e) =>
                setTextbookId(e.currentTarget.value as TextbookIDEnum)
              }
              class="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            >
              <option value="getting_started">
                Getting Started with Nihongo Ninja
              </option>
              <option value="genki_1">Genki I</option>
              <option value="genki_2">Genki II</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading()}
            class="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading() ? "Processing..." : "Generate Learning Path"}
          </button>
        </form>

        {/* Result */}
        <Show when={result()}>
          <div class="mt-8 rounded bg-green-100 p-4 text-green-800">
            <p class="font-mono text-sm whitespace-pre-wrap">{result()}</p>
          </div>
        </Show>

        {/* Error */}
        <Show when={error()}>
          <div class="mt-8 rounded bg-red-100 p-4 text-red-800">
            <p class="font-semibold">Error:</p>
            <p class="font-mono text-sm whitespace-pre-wrap">{error()}</p>
          </div>
        </Show>
      </div>
    </div>
  )
}
