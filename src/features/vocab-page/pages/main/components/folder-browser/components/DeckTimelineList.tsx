import { Show, Suspense, createEffect, createSignal } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import * as CollapsiblePrimitive from "@kobalte/core/collapsible"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { TimelineList } from "@/components/TimelineList"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import { buildDeckUrlPath } from "@/features/vocab-page/utils/navigation"
import { DeckVocabTable } from "./DeckVocabTable"
import type { Deck } from "@/features/vocab-page/context/VocabContext"
import type { VocabularyItem } from "convex/validators"

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
    <CollapsiblePrimitive.Root
      open={expanded()}
      onOpenChange={setExpanded}
    >
      <CollapsiblePrimitive.Trigger
        class="group relative flex w-full cursor-pointer items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 text-left text-white/70 transition-all duration-150 hover:bg-white/5 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none"
      >
        <div class="absolute left-[-7px] top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-card-foreground/20 bg-background transition-colors group-hover:border-white/50 group-hover:bg-white/50" />

        <div class="min-w-0 flex-1">
          <h3 class="flex items-center gap-1.5 text-sm font-medium leading-tight">
            {props.deck.deckName}
          </h3>
        </div>

        <Link
          to={props.linkTo}
          class="absolute right-9 rounded-md bg-orange-500/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-150 hover:bg-orange-500 hover:text-white group-hover:opacity-100"
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          Start
        </Link>

        <ChevronRight class="size-4 shrink-0 opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70 [[aria-expanded=true]_&]:rotate-90" />
      </CollapsiblePrimitive.Trigger>

      <CollapsiblePrimitive.Content>
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
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
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
