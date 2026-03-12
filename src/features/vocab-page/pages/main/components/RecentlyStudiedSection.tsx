import { For, Show } from "solid-js"
import { DeckCard } from "../../../shared/components/DeckCard"
import type { Deck } from "../../../context/VocabContext"

interface RecentlyStudiedSectionProps {
  recentCompletions: { moduleId: string; completedAt: number }[]
  decks: Deck[]
}

export function RecentlyStudiedSection(props: RecentlyStudiedSectionProps) {
  const recentDecks = () =>
    props.recentCompletions
      .slice(0, 4)
      .map((c) => props.decks.find((d) => d.id === c.moduleId))
      .filter((d): d is Deck => d != null)

  return (
    <Show when={recentDecks().length > 0}>
      <div>
        <h2 class="text-foreground mb-4 text-sm font-semibold">
          Recently Studied
        </h2>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <For each={recentDecks()}>{(deck) => <DeckCard deck={deck} />}</For>
        </div>
      </div>
    </Show>
  )
}
