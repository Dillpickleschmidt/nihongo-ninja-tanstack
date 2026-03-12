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
  const [daysIdx, setDaysIdx] = createSignal(4) // default: 14d
  const [maxIdx, setMaxIdx] = createSignal(2) // default: 25
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
    <div>
      <h2 class="text-foreground mb-4 text-sm font-semibold">
        Missed Words Deck Builder
      </h2>

      {/* Controls row */}
      <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
        {/* Mode toggle */}
        <div class="flex items-center gap-1 rounded-lg bg-white/[0.04] p-0.5">
          <button
            class={`px-2.5 py-1 rounded-md text-xs transition-colors ${
              mode() === "meanings"
                ? "bg-white/10 text-white/90"
                : "text-white/40 hover:text-white/60"
            }`}
            onClick={() => setMode("meanings")}
          >
            Meanings
          </button>
          <button
            class={`px-2.5 py-1 rounded-md text-xs transition-colors ${
              mode() === "spellings"
                ? "bg-white/10 text-white/90"
                : "text-white/40 hover:text-white/60"
            }`}
            onClick={() => setMode("spellings")}
          >
            Spellings
          </button>
        </div>

        {/* Days slider */}
        <div class="flex items-center gap-2 min-w-0">
          <span class="text-xs text-white/40 shrink-0">
            {daysBack()}d
          </span>
          <Slider
            value={[daysIdx()]}
            onChange={(values) => setDaysIdx(values[0])}
            minValue={0}
            maxValue={DAYS_PRESETS.length - 1}
            step={1}
            class="w-24"
          >
            <SliderTrack class="bg-white/[0.06] h-1">
              <SliderFill class="bg-white/20" />
              <SliderThumb class="border-white/40 bg-background size-3.5 -top-[5px]" />
            </SliderTrack>
          </Slider>
        </div>

        {/* Max items slider */}
        <div class="flex items-center gap-2 min-w-0">
          <span class="text-xs text-white/40 shrink-0">
            {maxItems()} max
          </span>
          <Slider
            value={[maxIdx()]}
            onChange={(values) => setMaxIdx(values[0])}
            minValue={0}
            maxValue={MAX_ITEMS_PRESETS.length - 1}
            step={1}
            class="w-24"
          >
            <SliderTrack class="bg-white/[0.06] h-1">
              <SliderFill class="bg-white/20" />
              <SliderThumb class="border-white/40 bg-background size-3.5 -top-[5px]" />
            </SliderTrack>
          </Slider>
        </div>

        {/* Count + create button */}
        <Show
          when={missedQuery.data() !== undefined}
          fallback={
            <span class="text-xs text-white/20">Loading...</span>
          }
        >
          <Show
            when={missedItems().length > 0}
            fallback={
              <span class="text-xs text-white/25">No missed words</span>
            }
          >
            <Button
              onClick={handleCreateDeck}
              disabled={isCreating()}
              size="sm"
              class="bg-(--accent)/80 text-white hover:bg-(--accent) hover:scale-[1.02] transition-all rounded-lg h-7 text-xs"
            >
              {isCreating()
                ? "Creating..."
                : `Create Deck (${missedItems().length} words)`}
            </Button>
          </Show>
        </Show>
      </div>

      {/* Word preview */}
      <Show when={missedItems().length > 0}>
        <div class="mt-3 text-sm text-white/50 leading-relaxed max-h-24 overflow-y-auto">
          <For each={missedItems()}>
            {(item, i) => (
              <>
                <span class="text-white/60 font-japanese">
                  {item.practiceItemKey}
                </span>
                <span class="text-white/25 text-xs ml-0.5">
                  ×{item.missCount}
                </span>
                <Show when={i() < missedItems().length - 1}>
                  <span class="text-white/15 mx-1.5">·</span>
                </Show>
              </>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
