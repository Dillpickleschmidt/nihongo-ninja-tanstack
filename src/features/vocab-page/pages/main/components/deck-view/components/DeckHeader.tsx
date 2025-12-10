import { Show } from 'solid-js'

interface DeckHeaderProps {
  deckName: string
  deckDescription?: string
}

export function DeckHeader(props: DeckHeaderProps) {
  return (
    <div class="p-4 mx-auto max-w-3xl text-center">
      <div class="mb-2">
        <span class="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-medium tracking-wide uppercase text-orange-400">
          Deck
        </span>
      </div>
      <h1 class="text-2xl font-bold lg:text-3xl">{props.deckName}</h1>
      <Show when={props.deckDescription}>
        <p class="text-muted-foreground mt-2 text-sm">{props.deckDescription}</p>
      </Show>
    </div>
  )
}
