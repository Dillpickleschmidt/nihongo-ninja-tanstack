import { For, Show } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { DeckCard } from "../../../right-panel/DeckCard"
import type { UseQueryResult, DefaultError } from "@tanstack/solid-query"
import type { UpcomingModule } from "@/query/query-options"

interface ComingUpSectionProps {
  upcomingModulesQuery: UseQueryResult<UpcomingModule[], DefaultError>
  class?: string
}

/**
 * Coming Up section showing next vocab-practice modules to study
 * Uses DeckCard with pre-computed linkTo for navigation
 */
export function ComingUpSection(props: ComingUpSectionProps) {
  const navigate = useNavigate()

  // Filter for vocab-practice modules only
  const vocabModules = () => {
    const data = props.upcomingModulesQuery.data
    if (!data) return []

    return data
      .filter((item) => item.sourceType === "vocab-practice")
      .slice(0, 10)
  }

  // Transform to UserDeck format with linkTo field
  const vocabDecks = () => {
    return vocabModules().map(
      (module) =>
        ({
          deck_id: module.moduleId,
          deck_name: module.title,
          deck_description: null,
          source: "learning_path",
          folder_id: null,
          original_deck_id: module.moduleId,
          user_id: "",
          created_at: new Date().toISOString(),
          allowed_practice_modes: ["meanings", "spellings"] as (
            | "meanings"
            | "spellings"
          )[],
          linkTo: module.linkTo,
        }) as UserDeck & { linkTo: string },
    )
  }

  // Navigate using pre-computed linkTo (no reverse lookup!)
  const handleSelectDeck = (deck: UserDeck & { linkTo?: string }) => {
    if (deck.linkTo) {
      navigate({ to: deck.linkTo })
    }
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
                  <DeckCard deck={deck} onSelect={handleSelectDeck} />
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </Show>
  )
}
