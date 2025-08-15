// features/vocab-page/hooks/useBrowseDecks.ts
import { createSignal, onMount } from "solid-js"
import {
  getSharedDecksServerFn,
  importSharedDeckServerFn,
  removeDeckShareServerFn,
} from "@/features/supabase/db/deck-sharing-operations"
import type { User } from "@supabase/supabase-js"

export type SharedDeck = {
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

export type SortOption = "recent" | "popular"

interface UseBrowseDecksProps {
  user?: User | null
  onRefetch?: () => Promise<void>
  decks?: UserDeck[]
  onDeckPreview?: (deck: UserDeck) => void
}

export function useBrowseDecks(props: UseBrowseDecksProps) {
  // State management
  const [decks, setDecks] = createSignal<SharedDeck[]>([])
  const [isLoading, setIsLoading] = createSignal(false)
  const [hasMore, setHasMore] = createSignal(true)
  const [error, setError] = createSignal<string | null>(null)
  const [searchQuery, setSearchQuery] = createSignal("")
  const [sortBy, setSortBy] = createSignal<SortOption>("recent")
  const [importingDeckIds, setImportingDeckIds] = createSignal<Set<number>>(
    new Set(),
  )
  const [unsharingDeckIds, setUnsharingDeckIds] = createSignal<Set<number>>(
    new Set(),
  )

  // Helper functions
  const isOwnDeck = (deck: SharedDeck) => {
    return props.user?.id === deck.shared_by
  }

  const isAlreadyImported = (deck: SharedDeck) => {
    return (
      props.decks?.some(
        (userDeck) =>
          userDeck.source === "shared" &&
          userDeck.original_deck_id === deck.deck_id.toString(),
      ) ?? false
    )
  }

  // Business logic handlers
  const handleImport = async (deck: SharedDeck) => {
    if (!props.user) {
      alert("Please sign in to import decks")
      return
    }

    if (isOwnDeck(deck)) {
      alert("You cannot import your own shared deck")
      return
    }

    const isImporting = importingDeckIds().has(deck.deck_id)
    if (isImporting) return

    setImportingDeckIds((prev) => new Set([...prev, deck.deck_id]))

    try {
      await importSharedDeckServerFn({
        data: { deck_id: deck.deck_id },
      })

      // Trigger SWR refetch to update the user's deck list
      if (props.onRefetch) {
        await props.onRefetch()
      }

      alert("Deck imported successfully!")
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to import deck"
      alert(`Error: ${message}`)
    } finally {
      setImportingDeckIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(deck.deck_id)
        return newSet
      })
    }
  }

  const handleUnshare = async (deck: SharedDeck) => {
    if (!props.user) {
      alert("Please sign in to unshare decks")
      return
    }

    const isUnsharing = unsharingDeckIds().has(deck.deck_id)
    if (isUnsharing) return

    setUnsharingDeckIds((prev) => new Set([...prev, deck.deck_id]))

    try {
      await removeDeckShareServerFn({
        data: { deck_id: deck.deck_id },
      })

      // Trigger SWR refetch to update the user's deck list
      if (props.onRefetch) {
        await props.onRefetch()
      }

      // Refresh the shared decks list to remove the unshared deck
      await loadDecks(0)

      alert("Deck unshared successfully!")
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to unshare deck"
      alert(`Error: ${message}`)
    } finally {
      setUnsharingDeckIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(deck.deck_id)
        return newSet
      })
    }
  }

  const handlePreview = (deck: SharedDeck) => {
    // Create temporary UserDeck object for preview
    const previewDeck: UserDeck = {
      deck_id: deck.deck_id,
      deck_name: deck.user_decks.deck_name,
      deck_description: deck.user_decks.deck_description,
      source: "preview",
      original_deck_id: null,
      folder_id: null,
      user_id: "",
      created_at: new Date().toISOString(),
    }

    // Use existing deck selection handler
    if (props.onDeckPreview) {
      props.onDeckPreview(previewDeck)
    }
  }

  // Data loading
  const loadDecks = async (offset = 0) => {
    if (isLoading() || (offset > 0 && !hasMore())) return

    setIsLoading(true)
    setError(null)

    try {
      const newDecks = await getSharedDecksServerFn({
        data: { offset, limit: 20, sortBy: sortBy() },
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

  // Sort handlers
  const handleSortChange = (newSortBy: SortOption) => {
    setSortBy(newSortBy)
    loadDecks(0)
  }

  // Infinite scroll setup
  const setupInfiniteScroll = (sentinelRef: HTMLDivElement) => {
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

  // Initialize on mount
  onMount(() => {
    loadDecks(0)
  })

  return {
    // State
    decks,
    isLoading,
    hasMore,
    error,
    searchQuery,
    setSearchQuery,
    sortBy,
    importingDeckIds,
    unsharingDeckIds,

    // Helper functions
    isOwnDeck,
    isAlreadyImported,

    // Actions
    handleImport,
    handleUnshare,
    handlePreview,
    handleSortChange,
    loadDecks,
    setupInfiniteScroll,
  }
}
