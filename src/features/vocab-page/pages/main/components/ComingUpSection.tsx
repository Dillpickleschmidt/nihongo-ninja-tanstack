import { For, Show } from "solid-js"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { DeckCard } from "../../../right-panel/DeckCard"
import { transformModuleToDeckLike } from "../../../utils/learningPathToDeckAdapter"
import type { UseQueryResult, DefaultError } from "@tanstack/solid-query"
import type { ModuleWithCurrent } from "@/query/query-options"

const modules = { ...static_modules, ...dynamic_modules }

interface ComingUpSectionProps {
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>
  onSelectDeck?: (deck: UserDeck) => void
  class?: string
}

/**
 * Coming Up section showing next vocab-practice modules to study
 * Displayed as horizontal scrollable deck cards using DeckCard component
 */
export function ComingUpSection(props: ComingUpSectionProps) {
  // Filter for vocab-practice modules and transform to UserDeck format
  const vocabDecks = () => {
    const data = props.upcomingModulesQuery.data
    if (!data) return []

    return data
      .filter((item) => {
        const module = modules[item.id]
        return module && module.source_type === "vocab-practice"
      })
      .slice(0, 10) // Limit to 10
      .map((item) => transformModuleToDeckLike(item.id, modules[item.id]))
  }

  return (
    <Show
      when={
        !props.upcomingModulesQuery.isPending &&
        !props.upcomingModulesQuery.isError
      }
    >
      <div class={props.class}>
        <h2 class="text-foreground mb-3 text-sm font-semibold">
          Coming Up Next
        </h2>
        <Show
          when={vocabDecks().length > 0}
          fallback={
            <div class="border-border/50 rounded-lg border border-dashed p-6 text-center">
              <p class="text-muted-foreground text-sm">
                No upcoming vocab modules available
              </p>
            </div>
          }
        >
          <div class="flex gap-3 overflow-x-auto pb-2">
            <For each={vocabDecks()}>
              {(deck) => (
                <div class="min-w-[250px] flex-shrink-0">
                  <DeckCard deck={deck} onSelect={props.onSelectDeck} />
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </Show>
  )
}
