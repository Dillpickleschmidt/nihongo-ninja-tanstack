import {
  createSignal,
  createEffect,
  For,
  Show,
  onMount,
  onCleanup,
} from "solid-js"
import { Clock, TrendingUp } from "lucide-solid"
import { useMutation } from "convex-solidjs"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { SharedDeckCard } from "./SharedDeckCard"
import { DeckPreviewModal } from "./DeckPreviewModal"
import type { SharedDeckInfo } from "convex/model/sharing"
import type { Id } from "convex/_generated/dataModel"

type SortBy = "recent" | "popular"

const PAGE_SIZE = 20

export function BrowsePage() {
  const user = getUser()
  const [sortBy, setSortBy] = createSignal<SortBy>("recent")
  const [offset, setOffset] = createSignal(0)
  const [allDecks, setAllDecks] = createSignal<SharedDeckInfo[]>([])
  const [hasMore, setHasMore] = createSignal(true)
  const [previewDeckId, setPreviewDeckId] =
    createSignal<Id<"userDecks"> | null>(null)

  const sharedDecksQuery = useConvexQuery(
    api.api.sharing.getSharedDecks,
    () => ({ sortBy: sortBy(), limit: PAGE_SIZE, offset: offset() }),
  )

  const importDeck = useMutation(api.api.sharing.importSharedDeck)
  const unshareDeck = useMutation(api.api.sharing.unshareDeck)

  // Track loading states for individual decks
  const [importingIds, setImportingIds] = createSignal<Set<string>>(new Set())
  const [unsharingIds, setUnsharingIds] = createSignal<Set<string>>(new Set())

  // Reactively update allDecks when query data changes.
  // Merges by deckId to preserve pagination while allowing updates.
  // Partially fixes edge case: User A loads page 1, User B shares a deck, User A
  // loads page 2 with 1 fewer new item than expected (duplicate filtered by merge).
  // I won't bother fixing it as it barely affects the experience.
  createEffect(() => {
    const data = sharedDecksQuery.data()
    if (data === undefined) return

    if (offset() === 0) {
      // First page - just set directly
      setAllDecks(data)
    } else {
      // Subsequent pages - merge: update existing items, append new ones
      setAllDecks((prev) => {
        const existingIds = new Set(prev.map((d) => d.deckId))
        const newItems = data.filter((d) => !existingIds.has(d.deckId))

        // Update existing items with fresh data from this page
        const updated = prev.map((existing) => {
          const fresh = data.find((d) => d.deckId === existing.deckId)
          return fresh ?? existing
        })

        return [...updated, ...newItems]
      })
    }
    setHasMore(data.length === PAGE_SIZE)
  })

  // Infinite scroll setup
  let sentinelRef: HTMLDivElement | undefined

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore() &&
          !sharedDecksQuery.isLoading()
        ) {
          setOffset((prev) => prev + PAGE_SIZE)
        }
      },
      { threshold: 0.1 },
    )

    if (sentinelRef) {
      observer.observe(sentinelRef)
    }

    onCleanup(() => {
      observer.disconnect()
    })
  })

  // Reset when sort changes
  const handleSortChange = (newSort: SortBy) => {
    if (newSort === sortBy()) return
    setSortBy(newSort)
    setOffset(0)
    setAllDecks([])
    setHasMore(true)
  }

  const handleImport = async (deckId: Id<"userDecks">) => {
    setImportingIds((prev) => new Set(prev).add(deckId))
    try {
      await importDeck.mutate({ deckId })
    } catch (error) {
      console.error("Failed to import deck:", error)
      alert("Failed to import deck. Please try again.")
    } finally {
      setImportingIds((prev) => {
        const next = new Set(prev)
        next.delete(deckId)
        return next
      })
    }
  }

  const handleUnshare = async (deckId: Id<"userDecks">) => {
    if (!confirm("Are you sure you want to unshare this deck?")) return

    setUnsharingIds((prev) => new Set(prev).add(deckId))
    try {
      await unshareDeck.mutate({ deckId })
      // Remove from local list
      setAllDecks((prev) => prev.filter((d) => d.deckId !== deckId))
    } catch (error) {
      console.error("Failed to unshare deck:", error)
      alert("Failed to unshare deck. Please try again.")
    } finally {
      setUnsharingIds((prev) => {
        const next = new Set(prev)
        next.delete(deckId)
        return next
      })
    }
  }

  const isOwnDeck = (deck: SharedDeckInfo) => {
    const u = user()
    return u?.id === deck.sharedBy
  }

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      {/* Header */}
      <div class="mb-6 text-center">
        <h1 class="mb-2 text-3xl font-bold">Community Decks</h1>
        <p class="text-muted-foreground text-lg">
          Discover vocabulary decks created by other learners
        </p>
      </div>

      {/* Sort Buttons */}
      <div class="mb-6 flex justify-center">
        <div class="bg-background/40 border-card-foreground/70 flex rounded-lg border p-1 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSortChange("recent")}
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
            onClick={() => handleSortChange("popular")}
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

      {/* Loading State (initial) */}
      <Show when={allDecks().length === 0 && sharedDecksQuery.isLoading()}>
        <div class="flex justify-center py-12">
          <div class="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
        </div>
      </Show>

      {/* Empty State */}
      <Show
        when={
          allDecks().length === 0 &&
          !sharedDecksQuery.isLoading() &&
          sharedDecksQuery.data() !== undefined
        }
      >
        <div class="py-12 text-center">
          <p class="text-muted-foreground">
            No shared decks found. Be the first to share a deck!
          </p>
        </div>
      </Show>

      {/* Deck List */}
      <div class="space-y-4">
        <For each={allDecks()}>
          {(deck, index) => (
            <SharedDeckCard
              deck={deck}
              index={index()}
              isOwnDeck={isOwnDeck(deck)}
              isImporting={importingIds().has(deck.deckId)}
              isUnsharing={unsharingIds().has(deck.deckId)}
              onPreview={() => setPreviewDeckId(deck.deckId)}
              onImport={() => handleImport(deck.deckId)}
              onUnshare={() => handleUnshare(deck.deckId)}
            />
          )}
        </For>
      </div>

      {/* Loading More */}
      <Show when={allDecks().length > 0 && sharedDecksQuery.isLoading()}>
        <div class="flex justify-center py-8">
          <div class="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
        </div>
      </Show>

      {/* Infinite scroll sentinel */}
      <div ref={sentinelRef} class="h-4" />

      {/* Preview Modal */}
      <DeckPreviewModal
        deckId={previewDeckId()}
        onClose={() => setPreviewDeckId(null)}
        onImport={() => {
          const id = previewDeckId()
          if (id) handleImport(id)
        }}
        isImporting={
          previewDeckId() ? importingIds().has(previewDeckId()!) : false
        }
      />
    </div>
  )
}
