import { Show, Suspense, createEffect, createSignal } from "solid-js"
import { ChevronDown } from "lucide-solid"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { TimelineList, TimelineItem } from "@/components/TimelineList"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import { buildDeckUrlPath } from "@/features/vocab-page/utils/navigation"
import { DeckVocabTable } from "./DeckVocabTable"
import type { Deck } from "@/features/vocab-page/context/VocabContext"
import type { VocabularyItem } from "convex/validators"

/**
 * Bump-shape mask using composited CSS mask layers.
 *
 * Shape: rect with 8px rounded bottom corners + 14px semicircle bump.
 *
 * Layers (bottom to top in the stack):
 *   6. vertical-strip  – full-width band from CORNER_TOP to RECT_BOTTOM (base)
 *   5. horiz-clip       – full-height band from 8px to calc(100%-8px), INTERSECT with 6
 *   4. left-corner      – 8px circle at (8px, CORNER_TOP), ADD
 *   3. right-corner     – 8px circle at (100%-8px, CORNER_TOP), ADD
 *   2. main-rect        – full-width rect from top to CORNER_TOP, ADD
 *   1. bump-circle      – 14px circle at (50%, 100%-18px), ADD
 *
 * Layers listed first in CSS are composited last (topmost), so order in the
 * shorthand is: 1,2,3,4,5,6.
 */
const CORNER_TOP = "calc(100% - 26px)"
const RECT_BOTTOM = "calc(100% - 18px)"

const BUMP_MASK_LAYERS = [
  // 1 (topmost) — bump circle
  `radial-gradient(circle 15px at 50% calc(100% - 19px), black 15px, transparent 15px)`,
  // 2 — main rect
  `linear-gradient(to bottom, black ${CORNER_TOP}, transparent ${CORNER_TOP})`,
  // 3 — right corner circle
  `radial-gradient(circle 8px at calc(100% - 8px) ${CORNER_TOP}, black 8px, transparent 8px)`,
  // 4 — left corner circle
  `radial-gradient(circle 8px at 8px ${CORNER_TOP}, black 8px, transparent 8px)`,
  // 5 — horizontal clip (full height, 8px inset on each side)
  `linear-gradient(to right, transparent 8px, black 8px, black calc(100% - 8px), transparent calc(100% - 8px))`,
  // 6 (bottom) — vertical strip (full width, CORNER_TOP to RECT_BOTTOM)
  `linear-gradient(to bottom, transparent ${CORNER_TOP}, black ${CORNER_TOP}, black ${RECT_BOTTOM}, transparent ${RECT_BOTTOM})`,
].join(", ")

// Composite values: one per layer, top to bottom. Bottom layer has no composite.
// Order matches BUMP_MASK_LAYERS: bump=add, rect=add, right=add, left=add, horiz=intersect, vert=(base)
const BUMP_COMPOSITE = "add, add, add, add, intersect"
const BUMP_COMPOSITE_WEBKIT = "source-over, source-over, source-over, source-over, source-in"

const BUMP_MASK_STYLE = {
  "-webkit-mask-image": BUMP_MASK_LAYERS,
  "mask-image": BUMP_MASK_LAYERS,
  "-webkit-mask-composite": BUMP_COMPOSITE_WEBKIT,
  "mask-composite": BUMP_COMPOSITE,
}

export function DeckTimelineList(props: {
  decks: Deck[]
  isActiveChapter: boolean
}) {
  const ctx = useVocab()

  return (
    <TimelineList each={props.decks}>
      {(deck) => (
        <DeckTimelineEntry
          deck={deck}
          linkTo={`/vocab/${buildDeckUrlPath(deck, ctx.folders())}`}
          defaultExpanded={props.isActiveChapter}
        />
      )}
    </TimelineList>
  )
}

function DeckTimelineEntry(props: {
  deck: Deck
  linkTo: string
  defaultExpanded: boolean
}) {
  const [expanded, setExpanded] = createSignal(props.defaultExpanded)
  const [vocab, setVocab] = createSignal<VocabularyItem[]>()

  return (
    <div>
      <div class="group/deck relative z-0 hover:z-10">
        <div
          class="pointer-events-none absolute inset-x-0 top-0 -bottom-4 rounded-lg bg-white/5 opacity-0 transition-opacity duration-150 group-hover/deck:opacity-100"
          style={BUMP_MASK_STYLE}
        />

        <TimelineItem
          title={props.deck.deckName}
          linkTo={props.linkTo}
          class="hover:bg-transparent"
        />

        <span
          class={`pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 text-[10px] whitespace-nowrap text-white/40 transition-opacity duration-150 ${
            expanded()
              ? "opacity-0"
              : "opacity-0 group-hover/deck:opacity-100"
          }`}
        >
          click arrow to expand
        </span>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          class={`group/chevron absolute -bottom-[12px] left-1/2 z-10 flex size-[30px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-150 hover:bg-white/10 ${
            expanded()
              ? "opacity-60"
              : "opacity-0 group-hover/deck:opacity-60 max-sm:opacity-20"
          }`}
        >
          <ChevronDown
            class={`size-4 translate-y-px transition-transform duration-200 group-hover/chevron:scale-110 ${
              expanded() ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <Show when={expanded()}>
        <div class="pl-6 pr-3 pb-2">
          <Suspense>
            <DeckVocabSubscription deck={props.deck} onData={setVocab} />
          </Suspense>
          <Show
            when={vocab()}
            fallback={
              <div class="text-muted-foreground animate-pulse py-2 text-xs">
                Loading...
              </div>
            }
          >
            {(v) => <DeckVocabTable vocab={v()} />}
          </Show>
        </div>
      </Show>
    </div>
  )
}

function DeckVocabSubscription(props: {
  deck: Deck
  onData: (data: VocabularyItem[]) => void
}) {
  const query = useConvexQuery(
    api.api.vocabulary.getDeckVocab,
    () => ({ deckId: props.deck.id }),
  )

  createEffect(() => {
    const data = query.data()
    if (data) props.onData(data)
  })

  return null
}
