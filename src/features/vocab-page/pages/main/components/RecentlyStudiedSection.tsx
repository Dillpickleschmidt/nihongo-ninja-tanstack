import { For, Show } from "solid-js"
import { cn } from "@/utils"
import type { RecentlyStudiedDeck } from "../utils/recentlyStudiedAdapter"
import {
  formatLastPracticed,
  formatDuration,
} from "../utils/recentlyStudiedAdapter"
import type { UseQueryResult, DefaultError } from "@tanstack/solid-query"

interface RecentlyStudiedSectionProps {
  query: UseQueryResult<RecentlyStudiedDeck[], DefaultError>
  onSelectDeck: (deck: RecentlyStudiedDeck) => void
  class?: string
}

/**
 * Recently Studied section showing decks practiced recently
 * Displayed as horizontal scrollable cards
 */
export function RecentlyStudiedSection(props: RecentlyStudiedSectionProps) {
  return (
    <Show
      when={
        !props.query.isPending &&
        !props.query.isError &&
        props.query.data &&
        props.query.data.length > 0
      }
      fallback={
        <Show
          when={
            !props.query.isPending &&
            !props.query.isError &&
            props.query.data &&
            props.query.data.length === 0
          }
        >
          <div class="border-border/50 rounded-lg border border-dashed p-6 text-center">
            <p class="text-muted-foreground text-sm">
              No decks studied yet. Start practicing to see them here!
            </p>
          </div>
        </Show>
      }
    >
      <div class={props.class}>
        <h2 class="text-foreground mb-3 text-sm font-semibold">
          Recently Studied
        </h2>
        <div class="flex gap-3 overflow-x-auto pb-2">
          <For each={props.query.data}>
            {(deck) => (
              <button
                onClick={() => props.onSelectDeck(deck)}
                class={cn(
                  "group border-border/50 bg-card/50 hover:border-border hover:bg-card relative min-w-[250px] flex-shrink-0 rounded-lg border p-4 transition-all duration-200",
                )}
              >
                {/* Card content */}
                <div class="flex flex-col gap-2">
                  {/* Deck name */}
                  <h3 class="text-foreground group-hover:text-primary line-clamp-2 text-left text-base font-medium">
                    {deck.deck_name}
                  </h3>

                  {/* Description if available */}
                  <Show when={deck.deck_description}>
                    <p class="text-muted-foreground line-clamp-1 text-left text-xs">
                      {deck.deck_description}
                    </p>
                  </Show>

                  {/* Divider */}
                  <div class="bg-border/30 my-1 h-px" />

                  {/* Stats */}
                  <div class="text-muted-foreground flex items-center justify-between text-xs">
                    <span>{formatLastPracticed(deck.lastPracticed)}</span>
                    <span>{formatDuration(deck.durationSeconds)}</span>
                  </div>

                  {/* Questions if available */}
                  <Show when={deck.questionsAnswered > 0}>
                    <div class="text-muted-foreground text-left text-xs">
                      {deck.questionsAnswered} questions
                    </div>
                  </Show>
                </div>

                {/* Hover overlay indicator */}
                <div class="from-primary/0 to-primary/5 absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </button>
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}
