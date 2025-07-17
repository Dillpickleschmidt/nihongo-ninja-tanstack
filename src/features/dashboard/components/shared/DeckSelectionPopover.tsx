// features/dashboard/components/shared/DeckSelectionPopover.tsx
import { createMemo, createSignal, For, Show } from "solid-js"
import { Lock } from "lucide-solid"
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
  // Pure UI state: which source the user is currently browsing in the popover
  const [userSelectedSource, setUserSelectedSource] =
    createSignal<DeckSource | null>(null)

  // Derived state: find which source contains the current deck
  const currentSource = createMemo(
    () =>
      props.allSources.find((source) =>
        source.decks.some((d) => d.id === props.currentDeck.id),
      ) || props.allSources[0],
  )

  // Derived state: which source to display (user browsing or current)
  const displayedSource = createMemo(
    () => userSelectedSource() || currentSource(),
  )

  const handleDeckChange = (source: DeckSource, deck: Deck) => {
    // Prevent navigation if source or deck is disabled
    if (source.disabled || deck.disabled) {
      return
    }
    props.onDeckChange(source, deck)
  }

  const handleSourceSelect = (source: DeckSource) => {
    // Allow selecting disabled sources to show their content
    setUserSelectedSource(source)
  }

  const handleOpenChange = (open: boolean) => {
    // Reset UI state when popover closes
    if (!open) {
      setUserSelectedSource(null)
    }
    props.onOpenChange(open)
  }

  return (
    <Popover open={props.isOpen} onOpenChange={handleOpenChange}>
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
                  onClick={() => handleSourceSelect(source)}
                  class={cn(
                    "flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium transition-colors",
                    displayedSource()?.id === source.id && "bg-primary/10",
                    source.disabled
                      ? "text-muted-foreground/50 hover:bg-primary/5"
                      : "hover:bg-primary/15",
                  )}
                >
                  <span>{source.name}</span>
                  <Show when={source.disabled}>
                    <Lock class="text-muted-foreground/50 h-3 w-3" />
                  </Show>
                </button>
              )}
            </For>
          </div>
          <div class="p-1">
            <Show when={displayedSource()} keyed>
              {(source) => (
                <Show
                  when={source.decks.length > 0}
                  fallback={
                    <div class="flex h-32 items-center justify-center">
                      <div class="text-muted-foreground/70 text-center">
                        <Lock class="mx-auto mb-2 h-6 w-6" />
                        <p class="text-sm">Service not configured</p>
                        <p class="text-xs">Enable in settings</p>
                      </div>
                    </div>
                  }
                >
                  <For each={source.decks}>
                    {(deck) => (
                      <button
                        onClick={() => handleDeckChange(source, deck)}
                        disabled={source.disabled || deck.disabled}
                        class={cn(
                          "flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-normal transition-colors",
                          props.currentDeck.id === deck.id &&
                            "bg-primary/10 hover:bg-primary/15 font-semibold",
                          source.disabled || deck.disabled
                            ? "text-muted-foreground/50 cursor-not-allowed hover:bg-transparent"
                            : "hover:bg-card-foreground/40",
                        )}
                      >
                        <div class="flex items-center gap-2">
                          <span>{deck.title}</span>
                          <Show when={deck.disabled && !source.disabled}>
                            <Lock class="text-muted-foreground/50 h-3 w-3" />
                          </Show>
                        </div>
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
                </Show>
              )}
            </Show>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
