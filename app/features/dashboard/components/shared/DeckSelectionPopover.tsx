// features/dashboard/components/shared/DeckSelectionPopover.tsx
import { createSignal, For, Show } from "solid-js"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Deck, DeckSource } from "@/data/types"
import { cn } from "@/utils"

interface DeckSelectionPopoverProps {
  children: any // The trigger element
  currentDeck: Deck
  allSources: DeckSource[]
  onDeckChange: (source: DeckSource, deck: Deck) => void
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  popoverWidth?: string
  backgroundColor?: string
}

export function DeckSelectionPopover(props: DeckSelectionPopoverProps) {
  const findCurrentSource = () =>
    props.allSources.find((source) =>
      source.decks.some((d) => d.id === props.currentDeck.id),
    ) || props.allSources[0]

  const [selectedSource, setSelectedSource] = createSignal<
    DeckSource | undefined
  >(findCurrentSource())

  const handleDeckChange = (source: DeckSource, deck: Deck) => {
    props.onDeckChange(source, deck)
  }

  return (
    <Popover open={props.isOpen} onOpenChange={props.onOpenChange}>
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent
        class={cn(
          "border-card-foreground p-2 backdrop-blur-2xl",
          props.popoverWidth || "w-[520px]",
          props.backgroundColor || "bg-neutral-950/80",
        )}
      >
        <div class="grid grid-cols-[1fr_2fr]">
          <div class="border-primary/10 border-r p-1">
            <For each={props.allSources}>
              {(source) => (
                <button
                  onClick={() => setSelectedSource(source)}
                  class={cn(
                    "hover:bg-primary/15 w-full rounded-md p-2 text-left text-sm font-medium",
                    selectedSource()?.id === source.id && "bg-primary/10",
                  )}
                >
                  {source.name}
                </button>
              )}
            </For>
          </div>
          <div class="p-1">
            <Show when={selectedSource()} keyed>
              {(source) => (
                <For each={source.decks}>
                  {(deck) => (
                    <button
                      onClick={() => handleDeckChange(source, deck)}
                      disabled={deck.disabled}
                      class={cn(
                        "hover:bg-card-foreground/40 flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal",
                        props.currentDeck.id === deck.id &&
                          "bg-primary/10 hover:bg-primary/15 font-semibold",
                        deck.disabled &&
                          "cursor-not-allowed opacity-50 hover:bg-transparent",
                      )}
                    >
                      <span>{deck.title}</span>
                      <Show when={props.currentDeck.id === deck.id}>
                        <svg
                          class="size-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </Show>
                    </button>
                  )}
                </For>
              )}
            </Show>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
