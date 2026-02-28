import { createFileRoute, useNavigate } from "@tanstack/solid-router"
import { createSignal, For, Show } from "solid-js"
import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"
import { queryKeys } from "@/query/query-keys"
import { ImportPageHeader } from "@/features/import/shared/ImportPageHeader"
import { FileDropZone } from "@/features/import/shared/FileDropZone"
import {
  prepareSaveData,
  processLearningPathFile,
} from "@/features/import/learning-path/operations"
import type { TextbookIDEnum } from "@/data/textbooks"
import type { ProcessedLearningPathData } from "@/features/import/learning-path/types"
import { usePreferences } from "@/lib/preferences"

export const Route = createFileRoute("/_home/import/custom")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 12,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: CustomImportPage,
})

function CustomImportPage() {
  const navigate = useNavigate()
  const createCustomLearningPath = useMutation(
    api.api.learning_paths.createCustomLearningPath,
  )
  const { setPreference } = usePreferences()

  const [textbookId, setTextbookId] = createSignal<TextbookIDEnum>("genki_1")
  const [pathName, setPathName] = createSignal("")
  const [showName, setShowName] = createSignal("")
  const [episodeName, setEpisodeName] = createSignal("")
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [processedData, setProcessedData] =
    createSignal<ProcessedLearningPathData | null>(null)
  const [error, setError] = createSignal<string | null>(null)

  const handleFileSelect = async (file: File) => {
    if (!file.name.endsWith(".srt")) {
      setError("Please upload a .srt subtitle file")
      return
    }

    setError(null)
    setIsProcessing(true)

    try {
      const data = await processLearningPathFile(file, textbookId())
      setProcessedData(data)
      if (!pathName().trim()) {
        setPathName(file.name.replace(/\.srt$/i, ""))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process subtitle file")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleSave = async () => {
    const data = processedData()
    if (!data) return
    if (!pathName().trim()) {
      setError("Path name is required")
      return
    }

    setError(null)
    setIsProcessing(true)

    try {
      const { selectedGrammarModules, selectedVocabDecks } = prepareSaveData(data)
      const result = await createCustomLearningPath.mutate({
        transcript: {
          name: pathName().trim(),
          showName: showName().trim() || undefined,
          episodeName: episodeName().trim() || undefined,
          transcriptData: data.transcript,
        },
        selectedGrammarModules,
        selectedVocabDecks,
      })

      setPreference("activeLearningPath", result.pathId)
      setPreference("activeChapter", result.firstChapterSlug)
      navigate({ to: "/dashboard" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save learning path")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div class="mx-auto max-w-4xl px-4 pt-24 pb-32 md:pb-16">
      <ImportPageHeader
        title="Custom Learning Path"
        subtitle="Upload subtitles and generate a custom path"
        backTo="/import"
        backLabel="Back"
      />

      <div class="space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
        <label class="block text-sm text-white/80">
          Path Name
          <input
            value={pathName()}
            onInput={(e) => setPathName(e.currentTarget.value)}
            class="mt-1 w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white"
          />
        </label>

        <div class="grid gap-4 sm:grid-cols-2">
          <label class="block text-sm text-white/80">
            Show Name (optional)
            <input
              value={showName()}
              onInput={(e) => setShowName(e.currentTarget.value)}
              class="mt-1 w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white"
            />
          </label>

          <label class="block text-sm text-white/80">
            Episode Name (optional)
            <input
              value={episodeName()}
              onInput={(e) => setEpisodeName(e.currentTarget.value)}
              class="mt-1 w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white"
            />
          </label>
        </div>

        <label class="block text-sm text-white/80">
          Base Textbook
          <select
            value={textbookId()}
            onChange={(e) => setTextbookId(e.currentTarget.value as TextbookIDEnum)}
            class="mt-1 w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white"
          >
            <option value="genki_1">Genki I</option>
            <option value="genki_2">Genki II</option>
          </select>
        </label>

        <FileDropZone
          accept=".srt"
          description="Upload a .srt subtitle file"
          onFile={handleFileSelect}
        />

        <Show when={isProcessing()}>
          <p class="text-sm text-white/60">Processing...</p>
        </Show>

        <Show when={error()}>
          <p class="text-sm text-red-300">{error()}</p>
        </Show>
      </div>

      <Show when={processedData()}>
        {(data) => (
          <div class="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div class="text-sm text-white/80">
              <p>Transcript lines: {data().transcript.length}</p>
              <p>Detected grammar patterns: {data().grammarPatterns.length}</p>
              <p>
                Generated modules: {" "}
                {data().modules.filter((m) => m.type === "grammar").length} grammar,
                {" "}
                {data().modules.filter((m) => m.type === "vocabulary").length} vocab
                decks
              </p>
            </div>

            <div>
              <h3 class="mb-2 text-sm font-semibold text-white">Grammar Modules</h3>
              <ul class="space-y-1 text-sm text-white/70">
                <For each={data().modules.filter((m) => m.type === "grammar")}>
                  {(module) => <li>{module.moduleId}</li>}
                </For>
              </ul>
            </div>

            <div>
              <h3 class="mb-2 text-sm font-semibold text-white">Vocabulary Decks</h3>
              <ul class="space-y-2 text-sm text-white/70">
                <For each={data().modules.filter((m) => m.type === "vocabulary")}>
                  {(deck) => (
                    <li>
                      <p>
                        {deck.isVerbDeck ? "Verbs" : "Non-verbs"} - {deck.words.length} items
                      </p>
                      <p class="text-white/40">
                        {deck.words
                          .slice(0, 8)
                          .map((word) => word.word)
                          .join(", ")}
                      </p>
                    </li>
                  )}
                </For>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleSave}
              disabled={isProcessing()}
              class="rounded-md bg-(--accent) px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              Save Custom Learning Path
            </button>
          </div>
        )}
      </Show>
    </div>
  )
}
