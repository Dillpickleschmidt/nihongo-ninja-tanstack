import { Show, Suspense, createEffect, createSignal } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { DeckVocabTable } from "./DeckVocabTable"
import type { Deck } from "@/features/vocab-page/context/VocabContext"
import type { VocabularyItem } from "convex/validators"

export function DeckVocabCollapsible(props: {
  deck: Deck
  defaultOpen?: boolean
}) {
  const [vocab, setVocab] = createSignal<VocabularyItem[]>()

  return (
    <Collapsible defaultOpen={props.defaultOpen ?? true}>
      <CollapsibleTrigger chevronEnd class="py-1.5 pl-2 text-orange-400/80">
        {props.deck.deckName}
      </CollapsibleTrigger>
      <CollapsibleContent class="pl-8 pb-2">
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
      </CollapsibleContent>
    </Collapsible>
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
