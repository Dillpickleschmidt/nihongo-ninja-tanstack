import { Show, createSignal } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import { StackEditor } from "./overrides/StackEditor"
import type { Stack } from "@/features/resolvers/types"
import { useMutation, useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import { updateUserSettingsMutation } from "@/query/query-mutations"
import type { User } from "@supabase/supabase-js"
import { FileUploadDialog } from "@/components/FileUploadDialog"
import { Button } from "@/components/ui/button"

interface OverridesContentProps {
  user: User | null
}

export function OverridesContent(props: OverridesContentProps) {
  const queryClient = useQueryClient()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(props.user?.id || null),
  )
  const updateMutation = useMutation(() =>
    updateUserSettingsMutation(props.user?.id || null, queryClient),
  )

  // Upload dialog state
  const [isVocabularyUploadOpen, setIsVocabularyUploadOpen] =
    createSignal(false)
  const [isKanjiUploadOpen, setIsKanjiUploadOpen] = createSignal(false)

  // Schema visibility state
  const [showVocabSchema, setShowVocabSchema] = createSignal(false)
  const [showKanjiSchema, setShowKanjiSchema] = createSignal(false)
  const isDesktop = createMediaQuery("(min-width: 1024px)")

  const toggleVocabSchema = () => {
    const newState = !showVocabSchema()
    setShowVocabSchema(newState)
    if (isDesktop()) {
      setShowKanjiSchema(newState)
    }
  }

  const toggleKanjiSchema = () => {
    const newState = !showKanjiSchema()
    setShowKanjiSchema(newState)
    if (isDesktop()) {
      setShowVocabSchema(newState)
    }
  }

  const handleVocabularyStacksChange = async (newStacks: Stack[]) => {
    await updateMutation.mutateAsync({
      "override-settings": {
        ...settingsQuery.data["override-settings"],
        vocabularyOverrides: newStacks,
      },
    })
  }

  const handleKanjiStacksChange = async (newStacks: Stack[]) => {
    await updateMutation.mutateAsync({
      "override-settings": {
        ...settingsQuery.data["override-settings"],
        kanjiOverrides: newStacks,
      },
    })
  }

  // Generic upload handler factory
  const createUploadHandler = (
    stackType: "vocabulary" | "kanji",
    getCurrentStacks: () => Stack[],
    onChange: (stacks: Stack[]) => Promise<void>,
    logPrefix: string,
  ) => {
    return async (file: File) => {
      try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("stackType", stackType)

        // Send existing stacks so server can calculate correct priority
        const currentStacks = getCurrentStacks()
        formData.append("existingStacks", JSON.stringify(currentStacks))

        const response = await fetch("/api/upload-override", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || "Upload failed")
        }

        const newStack = (await response.json()) as Stack

        // Add the new stack to the existing stacks
        await onChange([...currentStacks, newStack])
      } catch (error) {
        console.error(`${logPrefix} upload failed:`, error)
        throw error // Re-throw so FileUploadDialog can show error
      }
    }
  }

  // Upload handlers
  const handleVocabularyUpload = createUploadHandler(
    "vocabulary",
    () => settingsQuery.data["override-settings"].vocabularyOverrides,
    handleVocabularyStacksChange,
    "Vocabulary",
  )

  const handleKanjiUpload = createUploadHandler(
    "kanji",
    () => settingsQuery.data["override-settings"].kanjiOverrides,
    handleKanjiStacksChange,
    "Kanji",
  )

  // Add New button handlers
  const handleAddVocabularyStack = () => setIsVocabularyUploadOpen(true)
  const handleAddKanjiStack = () => setIsKanjiUploadOpen(true)

  return (
    <div class="space-y-6 py-8">
      {/* Header (compact, left-aligned) */}
      <div class="space-y-3 text-center">
        <h1 class="text-2xl font-semibold">Override Settings</h1>
        <p class="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed">
          Layer multiple data sources with priority-based merging. Start with
          default datasets, then add your own definitions, mnemonics, and
          corrections. Especially useful if you're coming from WaniKani, Anki,
          or other systems—keep the same meanings and mnemonics you're used to.
        </p>
      </div>

      <Show
        when={props.user}
        fallback={
          <div class="border-card-foreground/70 bg-background/40 flex flex-col items-center justify-center rounded-lg border p-8 text-center backdrop-blur-sm">
            <h2 class="mb-2 text-xl font-medium">Sign in Required</h2>
            <p class="text-muted-foreground max-w-md text-sm leading-relaxed">
              Override settings are only available for signed-in users.
            </p>
          </div>
        }
      >
        {/* Stack Editors */}
        <div class="grid items-stretch gap-8 lg:grid-cols-2">
          <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
            <StackEditor
              title="Vocabulary Overrides"
              stacks={
                settingsQuery.data["override-settings"].vocabularyOverrides
              }
              onChange={handleVocabularyStacksChange}
              onAddNew={handleAddVocabularyStack}
            />
          </div>

          <div class="border-card-foreground/70 bg-background/40 flex flex-col rounded-lg border p-6 backdrop-blur-sm">
            <StackEditor
              title="Kanji Overrides"
              stacks={settingsQuery.data["override-settings"].kanjiOverrides}
              onChange={handleKanjiStacksChange}
              onAddNew={handleAddKanjiStack}
            />
          </div>
        </div>

        {/* How it Works */}
        <div class="border-card-foreground/70 bg-background/10 mx-auto max-w-3xl rounded-lg border p-4 backdrop-blur-sm">
          <h3 class="mb-3 text-center text-sm font-medium">
            How it works: Default datasets + your overrides = personalized
            content
          </h3>
          <div class="grid gap-3 text-xs md:grid-cols-2">
            <div class="flex items-center gap-2">
              <span class="bg-primary text-primary-foreground flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                1
              </span>
              <span class="text-muted-foreground">
                Higher priority sources override lower ones
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="bg-primary text-primary-foreground flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                3
              </span>
              <span class="text-muted-foreground">
                Drag to reorder, toggle to enable/disable
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="bg-primary text-primary-foreground flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                2
              </span>
              <span class="text-muted-foreground">
                Only specified properties get overridden
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="bg-primary text-primary-foreground flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium">
                4
              </span>
              <span class="text-muted-foreground">
                Locked items (🔒) cannot be moved
              </span>
            </div>
          </div>
        </div>

        {/* Schema Documentation */}
        <div class="mx-auto max-w-2xl pt-4 text-center">
          <h3 class="mb-2 text-base font-medium">Upload Custom Data</h3>
          <p class="text-muted-foreground text-sm">
            Upload JSON files with your own vocabulary or corrections. Only
            include properties you want to override (for advanced users or those
            who can use ChatGPT to figure it out).
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <div class="border-card-foreground/70 bg-background/20 rounded-lg border p-4 backdrop-blur-sm">
            <div class="text-muted-foreground space-y-3 text-xs">
              <div class="flex items-center justify-between">
                <p>
                  <strong>Vocabulary JSON Schema:</strong>
                </p>
                <Button variant="ghost" size="sm" onClick={toggleVocabSchema}>
                  {showVocabSchema() ? "Hide" : "Click to show"}
                </Button>
              </div>
              <Show when={showVocabSchema()}>
                <code class="bg-muted text-muted-foreground block overflow-x-auto rounded p-3 font-mono text-xs whitespace-pre">
                  {`[{
  付き合う: {
    word: "付き合う",
    furigana: "付[つ]き 合[あ]う",
    english: ["to date (someone)", "to keep company"],
    info: [
      "Structure: Aさんは/がBさんと付き合っている -> Aさん and Bさん are dating (refers to a committed relationship)",
      "デートする is used for individual dating events, whether or not the people involved are in a serious relationship",
    ],
    example_sentences: [
      {
        english: ["I am dating my classmate."],
        japanese: ["クラスメートと", { t: "付き合[つきあ]っ" }, "ています。"],
      }, // you can skip the { t: ... } part if you want to keep it simple (it's just for highlighting the word in the sentence)
    ],
    particles: [
      {
        label: "person", // give an optional label if there are multiple possible particles specifically used with this word (to help differentiate them during practice)
        particle: "と",
      },
      {
        label: "purpose",
        particle: "に",
      },
    ],
  }
}]`}
                </code>
                <p class="text-muted-foreground/80 text-xs leading-relaxed">
                  Most properties are optional - include only what you want to
                  override from lower priority sources.
                </p>
              </Show>
            </div>
          </div>

          <div class="border-card-foreground/70 bg-background/20 rounded-lg border p-4 backdrop-blur-sm">
            <div class="text-muted-foreground space-y-3 text-xs">
              <div class="flex items-center justify-between">
                <p>
                  <strong>Kanji/Radical JSON Schema:</strong>
                </p>
                <Button variant="ghost" size="sm" onClick={toggleKanjiSchema}>
                  {showKanjiSchema() ? "Hide" : "Click to show"}
                </Button>
              </div>
              <Show when={showKanjiSchema()}>
                <code class="bg-muted text-muted-foreground block overflow-x-auto rounded p-3 font-mono text-xs whitespace-pre">
                  {`[{
  "character": "水",
  "meanings": ["water", "liquid"],
  "meaning_mnemonic": "Looks like flowing water",
  "reading_mnemonic": "Water sounds like 'me-zoo'"
}]`}
                </code>
                <p class="text-muted-foreground/80 text-xs leading-relaxed">
                  All properties except "character" are optional - specify only
                  the fields you want to override.
                </p>
              </Show>
            </div>
          </div>
        </div>
      </Show>

      {/* Upload Dialogs */}
      <FileUploadDialog
        isOpen={isVocabularyUploadOpen()}
        onClose={() => setIsVocabularyUploadOpen(false)}
        onSelected={handleVocabularyUpload}
        title="Upload Vocabulary Override"
      />

      <FileUploadDialog
        isOpen={isKanjiUploadOpen()}
        onClose={() => setIsKanjiUploadOpen(false)}
        onSelected={handleKanjiUpload}
        title="Upload Kanji Override"
      />
    </div>
  )
}
