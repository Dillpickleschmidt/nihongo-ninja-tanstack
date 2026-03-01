import { createSignal, Index, createMemo } from "solid-js"
import {
  Slider,
  SliderTrack,
  SliderFill,
  SliderThumb,
} from "~/components/ui/slider"
import { MOCK_VOCAB, MOCK_GRAMMAR } from "~/features/discover/utils/mock-data"

interface LearnPreviewProps {
  mode: "full" | "vocab"
}

export function LearnPreview(props: LearnPreviewProps) {
  const [cutoff, setCutoff] = createSignal(1200)

  const filteredVocab = createMemo(() =>
    MOCK_VOCAB.filter((v) => v.freq <= cutoff()),
  )

  const filteredGrammar = createMemo(() =>
    props.mode === "full" ? MOCK_GRAMMAR.filter((g) => g.freq <= cutoff()) : [],
  )

  const totalItems = () => filteredVocab().length + filteredGrammar().length

  return (
    <div class="flex flex-col gap-4">
      {/* Cutoff slider */}
      <div class="flex flex-col gap-2 rounded-xl border border-white/6 bg-white/2 p-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-medium text-white/40">
            Frequency cutoff
          </span>
          <span class="tabular-nums text-xs font-semibold text-(--accent)">
            {cutoff()}+
          </span>
        </div>
        <Slider
          value={[cutoff()]}
          onChange={([v]) => setCutoff(v)}
          minValue={100}
          maxValue={1600}
          step={100}
        >
          <SliderTrack class="h-1.5 bg-white/8">
            <SliderFill class="bg-(--accent)" />
            <SliderThumb class="-top-1 size-3.5 border-2 border-white/15 bg-(--accent) shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform hover:scale-115" />
          </SliderTrack>
        </Slider>
        <div class="text-[0.6rem] text-white/20">
          Showing {totalItems()} items
        </div>
      </div>

      {/* Vocab list */}
      <div class="max-h-48 overflow-y-auto">
        <div class="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white/25">
          Vocabulary ({filteredVocab().length})
        </div>
        <div class="flex flex-col gap-0.5">
          <Index each={filteredVocab()}>
            {(item) => (
              <div class="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-white/3">
                <div class="flex items-center gap-2">
                  <span class="font-japanese text-sm text-white/80">
                    {item().word}
                  </span>
                  <span class="text-[0.65rem] text-white/30">
                    {item().reading}
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[0.65rem] text-white/25">
                    {item().meaning}
                  </span>
                  <span class="tabular-nums text-[0.6rem] text-white/15">
                    {item().freq}
                  </span>
                </div>
              </div>
            )}
          </Index>
        </div>

        {/* Grammar list (full mode only) */}
        {props.mode === "full" && filteredGrammar().length > 0 && (
          <div class="mt-3">
            <div class="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white/25">
              Grammar ({filteredGrammar().length})
            </div>
            <div class="flex flex-col gap-0.5">
              <Index each={filteredGrammar()}>
                {(item) => (
                  <div class="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-white/3">
                    <span class="font-japanese text-sm text-white/80">
                      {item().pattern}
                    </span>
                    <div class="flex items-center gap-2">
                      <span class="text-[0.65rem] text-white/25">
                        {item().meaning}
                      </span>
                      <span class="tabular-nums text-[0.6rem] text-white/15">
                        {item().freq}
                      </span>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        )}
      </div>

      {/* Start button */}
      <button
        type="button"
        class="mt-1 w-full cursor-pointer rounded-xl bg-(--accent)/80 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] hover:bg-(--accent)"
        style={{
          "box-shadow":
            "0 6px 12px -3px color-mix(in srgb, var(--accent) 25%, transparent)",
        }}
      >
        Start Learning
      </button>
    </div>
  )
}
