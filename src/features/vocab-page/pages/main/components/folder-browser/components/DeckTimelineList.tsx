import { TimelineList, TimelineItem } from "@/components/TimelineList"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import { buildDeckUrlPath } from "@/features/vocab-page/utils/navigation"
import type { Deck } from "@/features/vocab-page/context/VocabContext"

export function DeckTimelineList(props: { decks: Deck[] }) {
  const ctx = useVocab()

  return (
    <TimelineList each={props.decks}>
      {(deck) => (
        <TimelineItem
          title={deck.deckName}
          linkTo={`/vocab/${buildDeckUrlPath(deck, ctx.folders())}`}
        />
      )}
    </TimelineList>
  )
}
