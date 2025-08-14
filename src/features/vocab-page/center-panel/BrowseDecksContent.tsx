import { createSignal, onMount, For, Show } from "solid-js"
import { Search, TrendingUp, Clock, Download, Users, Crown } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { getSharedDecksServerFn } from "@/features/supabase/db/deck-sharing-operations"
import type { User } from "@supabase/supabase-js"

type SharedDeck = {
  deck_id: number
  shared_at: string
  shared_by: string
  import_count: number
  user_decks: {
    deck_name: string
    deck_description: string | null
    source: string
    created_at: string
  }
}

type SortOption = "recent" | "popular"

interface BrowseDecksContentProps {
  user?: User | null
}

export function BrowseDecksContent(props: BrowseDecksContentProps) {
  const [decks, setDecks] = createSignal<SharedDeck[]>([])
  const [isLoading, setIsLoading] = createSignal(false)
  const [hasMore, setHasMore] = createSignal(true)
  const [error, setError] = createSignal<string | null>(null)
  const [searchQuery, setSearchQuery] = createSignal("")
  const [sortBy, setSortBy] = createSignal<SortOption>("recent")
  let sentinelRef: HTMLDivElement | undefined

  const isOwnDeck = (deck: SharedDeck) => {
    return props.user?.id === deck.shared_by
  }

  const loadDecks = async (offset = 0) => {
    if (isLoading() || (offset > 0 && !hasMore())) return

    setIsLoading(true)
    setError(null)

    try {
      const newDecks = await getSharedDecksServerFn({
        data: { offset, limit: 20 },
      })

      if (offset === 0) {
        setDecks(newDecks)
      } else {
        setDecks((prev) => [...prev, ...newDecks])
      }

      setHasMore(newDecks.length === 20)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load decks")
    } finally {
      setIsLoading(false)
    }
  }

  const loadMore = () => {
    loadDecks(decks().length)
  }

  onMount(() => {
    loadDecks(0)

    // Set up intersection observer for infinite scroll
    if (sentinelRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore() && !isLoading()) {
            loadMore()
          }
        },
        { threshold: 0.1 },
      )
      observer.observe(sentinelRef)

      return () => observer.disconnect()
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
      <div class="mb-6 space-y-4">
        {/* Search Bar */}
        <div class="relative mx-auto max-w-md">
          <Search class="text-muted-foreground absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2" />
          <TextField>
            <TextFieldInput
              type="text"
              placeholder="Search decks..."
              value={searchQuery()}
              onInput={(e) => setSearchQuery(e.currentTarget.value)}
              class="bg-background/40 border-card-foreground/70 pl-9 backdrop-blur-sm"
            />
          </TextField>
        </div>

        {/* Sort Buttons */}
        <div class="flex justify-center">
          <div class="bg-background/40 border-card-foreground/70 flex rounded-lg border p-1 backdrop-blur-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortBy("recent")}
              class={`flex items-center gap-2 rounded-md px-3 py-2 text-xs transition-all ${
                sortBy() === "recent"
                  ? "bg-background/70 text-foreground font-medium shadow backdrop-blur-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              <Clock class="h-3.5 w-3.5" />
              Recent
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortBy("popular")}
              class={`flex items-center gap-2 rounded-md px-3 py-2 text-xs transition-all ${
                sortBy() === "popular"
                  ? "bg-background/70 text-foreground font-medium shadow backdrop-blur-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              <TrendingUp class="h-3.5 w-3.5" />
              Popular
            </Button>
          </div>
        </div>
      </div>

      <Show when={error()}>
        <div class="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center">
          <p class="text-red-800">Error: {error()}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => loadDecks(0)}
            class="mt-2"
          >
            Retry
          </Button>
        </div>
      </Show>

      <Show when={decks().length === 0 && !isLoading() && !error()}>
        <div class="py-12 text-center">
          <p class="text-muted-foreground">
            No shared decks found. Be the first to share a deck!
          </p>
        </div>
      </Show>

      {/* Deck Grid */}
      <div class="space-y-4">
        <For each={decks()}>
          {(deck, index) => (
            <div
              class={`relative rounded-xl border shadow-md backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
                isOwnDeck(deck)
                  ? `border-amber-400/50 ring-1 ring-amber-400/20 ${(index() + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
                  : `border-card-foreground/70 ${(index() + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"}`
              }`}
            >
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <div class="flex-1 space-y-3">
                    {/* Deck Title */}
                    <div class="flex items-center gap-2">
                      <h3 class="text-xl leading-tight font-bold">
                        {deck.user_decks.deck_name}
                      </h3>
                      <Show when={isOwnDeck(deck)}>
                        <Crown class="h-4 w-4 flex-shrink-0 text-amber-400" />
                      </Show>
                    </div>

                    {/* Description */}
                    <Show when={deck.user_decks.deck_description}>
                      <p class="text-muted-foreground text-sm leading-relaxed">
                        {deck.user_decks.deck_description}
                      </p>
                    </Show>

                    {/* Metadata */}
                    <div class="flex flex-wrap items-center gap-4">
                      <div
                        class={`flex items-center gap-2 rounded-lg border px-3 py-1.5 backdrop-blur-sm ${
                          isOwnDeck(deck)
                            ? "border-amber-400/30 bg-amber-100/20"
                            : "bg-background/40 border-card-foreground/50"
                        }`}
                      >
                        <Users
                          class={`h-3.5 w-3.5 ${isOwnDeck(deck) ? "text-amber-400" : "text-sky-400"}`}
                        />
                        <span class="text-xs font-medium">
                          {isOwnDeck(deck) ? "You" : deck.shared_by}
                        </span>
                      </div>

                      <span class="text-muted-foreground text-xs">
                        {new Date(deck.shared_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Import/Manage Button */}
                  <div class="ml-6">
                    <Show
                      when={isOwnDeck(deck)}
                      fallback={
                        <Button
                          variant="default"
                          size="sm"
                          class="hover:bg-primary shadow-sm"
                          onClick={() => {
                            // TODO: Implement import functionality
                            alert("Import functionality coming soon!")
                          }}
                        >
                          <Download class="mr-2 h-4 w-4" />
                          Import
                        </Button>
                      }
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        class="shadow-sm"
                        onClick={() => {
                          // TODO: Implement manage functionality (unshare, edit, etc.)
                          alert("Manage functionality coming soon!")
                        }}
                      >
                        Manage
                      </Button>
                    </Show>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      <Show when={isLoading()}>
        <div class="flex justify-center py-8">
          <div class="border-primary h-6 w-6 animate-spin rounded-full border-b-2"></div>
        </div>
      </Show>

      {/* Intersection observer sentinel */}
      <div ref={sentinelRef} class="h-4" />
    </div>
  )
}
