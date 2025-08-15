// features/vocab-page/center-panel/BrowseDecksContent.tsx
import { For, Show, onMount } from "solid-js"
import { useBrowseDecks } from "./browse-decks/useBrowseDecks"
import { SharedDeckCard } from "./browse-decks/SharedDeckCard"
import { BrowseDecksControls } from "./browse-decks/BrowseDecksControls"
import type { User } from "@supabase/supabase-js"

interface BrowseDecksContentProps {
  user?: User | null
  onRefetch?: () => Promise<void>
  decks?: UserDeck[]
  onDeckPreview?: (deck: UserDeck) => void
}

export function BrowseDecksContent(props: BrowseDecksContentProps) {
  const browseDecks = useBrowseDecks(props)
  let sentinelRef: HTMLDivElement | undefined

  // Set up infinite scroll on mount
  onMount(() => {
    if (sentinelRef) {
      const cleanup = browseDecks.setupInfiniteScroll(sentinelRef)
      return cleanup
    }
  })

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      {/* Header */}
      <div class="mb-6 text-center">
        <h1 class="mb-2 text-3xl font-bold">Community Decks</h1>
        <p class="text-muted-foreground text-lg">
          Discover vocabulary decks created by other learners
        </p>
      </div>

      {/* Search and Sort Controls */}
      <BrowseDecksControls
        searchQuery={browseDecks.searchQuery()}
        onSearchChange={browseDecks.setSearchQuery}
        sortBy={browseDecks.sortBy()}
        onSortChange={browseDecks.handleSortChange}
        error={browseDecks.error()}
        onRetry={() => browseDecks.loadDecks(0)}
      />

      {/* Empty State */}
      <Show
        when={
          browseDecks.decks().length === 0 &&
          !browseDecks.isLoading() &&
          !browseDecks.error()
        }
      >
        <div class="py-12 text-center">
          <p class="text-muted-foreground">
            No shared decks found. Be the first to share a deck!
          </p>
        </div>
      </Show>

      {/* Deck Grid */}
      <div class="space-y-4">
        <For each={browseDecks.decks()}>
          {(deck, index) => (
            <SharedDeckCard
              deck={deck}
              index={index()}
              isOwnDeck={browseDecks.isOwnDeck(deck)}
              isAlreadyImported={browseDecks.isAlreadyImported(deck)}
              isImporting={browseDecks.importingDeckIds().has(deck.deck_id)}
              isUnsharing={browseDecks.unsharingDeckIds().has(deck.deck_id)}
              onPreview={browseDecks.handlePreview}
              onImport={browseDecks.handleImport}
              onUnshare={browseDecks.handleUnshare}
            />
          )}
        </For>
      </div>

      {/* Loading Indicator */}
      <Show when={browseDecks.isLoading()}>
        <div class="flex justify-center py-8">
          <div class="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent"></div>
        </div>
      </Show>

      {/* Intersection observer sentinel for infinite scroll */}
      <div ref={sentinelRef} class="h-4" />
    </div>
  )
}
