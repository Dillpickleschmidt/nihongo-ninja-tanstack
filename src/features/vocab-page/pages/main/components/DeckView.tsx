import type { Deck } from '../../../context/VocabContext'

interface DeckViewProps {
  deck: Deck
}

/**
 * View component for displaying a deck
 * Placeholder - full implementation will include practice functionality
 */
export function DeckView(props: DeckViewProps) {
  return (
    <div class="space-y-6">
      <h2 class="text-foreground text-2xl font-bold">{props.deck.deckName}</h2>
      <p class="text-muted-foreground">
        {props.deck.deckDescription || 'No description'}
      </p>
      <p class="text-muted-foreground text-sm">
        Deck practice view coming soon...
      </p>
    </div>
  )
}
