import { createSignal, For, Show } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useMutation } from "convex-solidjs"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { Button } from "@/components/ui/button"
import {
  Slider,
  SliderFill,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider"
import type { PracticeMode } from "convex/validators"

const DAYS_PRESETS = [1, 3, 7, 10, 14, 21, 30, 45, 60, 90] as const
const MAX_ITEMS_PRESETS = [15, 20, 25, 30, 50, 75, 100] as const

export function MissedWordsDeckBuilder() {
  const navigate = useNavigate()
  const [daysIdx, setDaysIdx] = createSignal(4)
  const [maxIdx, setMaxIdx] = createSignal(2)
  const [mode, setMode] = createSignal<PracticeMode>("meanings")
  const [isCreating, setIsCreating] = createSignal(false)

  const daysBack = () => DAYS_PRESETS[daysIdx()]
  const maxItems = () => MAX_ITEMS_PRESETS[maxIdx()]

  const missedQuery = useConvexQuery(
    api.api.missedWords.getMostMissedItems,
    () => ({ daysBack: daysBack(), maxItems: maxItems(), mode: mode() }),
  )

  const buildDeck = useMutation(api.api.missedWords.buildMissedWordsDeck)

  const missedItems = () => missedQuery.data() ?? []

  const handleCreateDeck = async () => {
    const items = missedItems()
    if (items.length === 0) return

    setIsCreating(true)
    try {
      const keys = items.map((item) => item.practiceItemKey)
      const now = new Date()
      const from = new Date(now.getTime() - daysBack() * 86_400_000)
      const fmt = (d: Date) =>
        `${d.getMonth() + 1}/${d.getDate()}/${String(d.getFullYear()).slice(2)}`
      const deckName = `Missed Words ${fmt(from)} - ${fmt(now)} (${mode()})`
      const deckId = await buildDeck.mutate({
        practiceItemKeys: keys,
        deckName,
      })
      navigate({ to: `/vocab/deck/${deckId}/edit` })
    } catch (error) {
      console.error("Failed to create missed words deck:", error)
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div class="mx-auto max-w-5xl space-y-6 p-2 pb-8 sm:px-4 lg:px-6">
      {/* Header */}
      <div class="rounded-lg bg-background/40 -mx-2 p-4 backdrop-blur-md border-card-foreground/70 border">
        <h1 class="text-2xl leading-tight font-semibold">
          Build from Missed Words
        </h1>
        <p class="text-muted-foreground text-sm">
          Auto-generate a deck from words you've been struggling with recently.
        </p>
      </div>

      {/* Controls */}
      <div class="space-y-5">
        {/* Practice mode */}
        <div class="space-y-2">
          <label class="text-sm font-medium text-white/50">Practice Mode</label>
          <div class="flex items-center gap-1 rounded-lg bg-white/[0.04] p-1 w-fit">
            <button
              class={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                mode() === "meanings"
                  ? "bg-white/10 text-white/90"
                  : "text-white/40 hover:text-white/60"
              }`}
              onClick={() => setMode("meanings")}
            >
              Meanings
            </button>
            <button
              class={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                mode() === "spellings"
                  ? "bg-white/10 text-white/90"
                  : "text-white/40 hover:text-white/60"
              }`}
              onClick={() => setMode("spellings")}
            >
              Spellings
            </button>
          </div>
        </div>

        {/* Sliders row */}
        <div class="flex flex-wrap gap-8">
          <div class="space-y-2">
            <label class="text-sm font-medium text-white/50">
              Time Range
              <span class="ml-2 text-white/70">{daysBack()} days</span>
            </label>
            <Slider
              value={[daysIdx()]}
              onChange={(values) => setDaysIdx(values[0])}
              minValue={0}
              maxValue={DAYS_PRESETS.length - 1}
              step={1}
              class="w-48"
            >
              <SliderTrack class="bg-white/[0.06] h-1.5">
                <SliderFill class="bg-white/20" />
                <SliderThumb class="border-white/40 bg-background size-4 -top-[5px]" />
              </SliderTrack>
            </Slider>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium text-white/50">
              Max Words
              <span class="ml-2 text-white/70">{maxItems()}</span>
            </label>
            <Slider
              value={[maxIdx()]}
              onChange={(values) => setMaxIdx(values[0])}
              minValue={0}
              maxValue={MAX_ITEMS_PRESETS.length - 1}
              step={1}
              class="w-48"
            >
              <SliderTrack class="bg-white/[0.06] h-1.5">
                <SliderFill class="bg-white/20" />
                <SliderThumb class="border-white/40 bg-background size-4 -top-[5px]" />
              </SliderTrack>
            </Slider>
          </div>
        </div>
      </div>

      {/* Results */}
      <Show
        when={missedQuery.data() !== undefined}
        fallback={
          <div class="rounded-lg border border-dashed border-white/10 p-8 text-center">
            <p class="text-sm text-white/30">Loading missed words...</p>
          </div>
        }
      >
        <Show
          when={missedItems().length > 0}
          fallback={
            <div class="rounded-lg border border-dashed border-white/10 p-8 text-center">
              <p class="text-sm text-white/30">
                No missed words found for the selected criteria.
              </p>
            </div>
          }
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-white/50">
                {missedItems().length} words found
              </span>
              <Button
                onClick={handleCreateDeck}
                disabled={isCreating()}
                class="bg-(--accent)/80 text-white hover:bg-(--accent) hover:scale-[1.02] transition-all rounded-lg"
              >
                {isCreating()
                  ? "Creating..."
                  : `Create Deck (${missedItems().length} words)`}
              </Button>
            </div>

            <div class="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 max-h-80 overflow-y-auto">
              <div class="flex flex-wrap gap-2">
                <For each={missedItems()}>
                  {(item) => (
                    <div class="flex items-baseline gap-1.5 rounded-md bg-white/[0.04] px-3 py-1.5">
                      <span class="font-japanese text-sm text-white/70">
                        {item.practiceItemKey}
                      </span>
                      <span class="text-xs text-white/25">
                        x{item.missCount}
                      </span>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
        </Show>
      </Show>
    </div>
  )
}
