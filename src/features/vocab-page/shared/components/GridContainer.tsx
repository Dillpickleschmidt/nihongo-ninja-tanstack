/**
 * Grid Container Component
 * Provides consistent grid layout with empty state for all collection views
 */

import { Show, type JSX, type Accessor } from "solid-js"

interface GridContainerProps<T> {
  items: Accessor<T[]>
  emptyMessage: string
  children: JSX.Element
}

/**
 * Grid layout with built-in empty state
 * Automatically shows empty state when items array is empty
 *
 * @example
 * ```tsx
 * <GridContainer
 *   items={() => decks}
 *   emptyMessage="No decks available"
 * >
 *   <For each={decks}>{(deck) => <DeckCard deck={deck} />}</For>
 * </GridContainer>
 * ```
 */
export function GridContainer<T>(props: GridContainerProps<T>) {
  const hasItems = () => props.items().length > 0

  return (
    <Show
      when={hasItems()}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">{props.emptyMessage}</p>
        </div>
      }
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {props.children}
      </div>
    </Show>
  )
}
