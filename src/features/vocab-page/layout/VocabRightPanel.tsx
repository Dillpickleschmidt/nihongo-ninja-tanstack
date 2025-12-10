import { Show, For } from 'solid-js'
import { Link, useLocation } from '@tanstack/solid-router'
import { useVocab, type Deck } from '../context/VocabContext'
import { buildDeckUrlPath, resolveDeckFromPath } from '../utils/navigation'
import { cn } from '@/utils'

function DeckItem(props: {
  deck: Deck
  to: string
  isSelected: boolean
}) {
  return (
    <Link
      to={props.to}
      class={cn(
        'block w-full rounded-lg px-3 py-2 text-left transition-colors',
        props.isSelected
          ? 'bg-primary/20 text-primary'
          : 'hover:bg-neutral-800 text-neutral-300'
      )}
    >
      <div class="text-sm font-medium">{props.deck.deckName}</div>
      <Show when={props.deck.deckDescription}>
        <div class="text-xs text-neutral-500 truncate">
          {props.deck.deckDescription}
        </div>
      </Show>
    </Link>
  )
}

function DecksSkeleton() {
  return (
    <div class="space-y-2 mt-4">
      <For each={[1, 2, 3]}>
        {() => (
          <div class="animate-pulse">
            <div class="h-10 bg-neutral-800 rounded-lg" />
          </div>
        )}
      </For>
    </div>
  )
}

function EmptyDecksMessage() {
  return (
    <div class="mt-8 text-center">
      <p class="text-neutral-500 text-sm">No decks yet</p>
      <p class="text-neutral-600 text-xs mt-1">
        Create a deck to get started
      </p>
    </div>
  )
}

export function VocabRightPanel() {
  const { folders, decks, isLoading } = useVocab()
  const location = useLocation()

  // Derive selected deck from URL
  const selectedDeckId = () => {
    const path = location().pathname
    const segments = path.replace('/vocab/', '').split('/').filter(Boolean)
    const deck = resolveDeckFromPath(segments, decks())
    return deck?.id ?? null
  }

  // Group decks by folder
  const decksByFolder = () => {
    const folderMap = new Map<string | undefined, Deck[]>()

    // Initialize with root (undefined folderId)
    folderMap.set(undefined, [])

    // Initialize folder groups
    for (const folder of folders()) {
      folderMap.set(folder.id, [])
    }

    // Assign decks to folders
    for (const deck of decks()) {
      const folderId = deck.folderId
      const existing = folderMap.get(folderId) ?? []
      folderMap.set(folderId, [...existing, deck])
    }

    return folderMap
  }

  return (
    <div class="h-full overflow-y-auto p-4 pb-16">
      <h2 class="text-lg font-semibold text-neutral-300">Your Decks</h2>

      <Show when={!isLoading()} fallback={<DecksSkeleton />}>
        <Show when={decks().length > 0} fallback={<EmptyDecksMessage />}>
          <div class="mt-4 space-y-4">
            {/* Root level decks (no folder) */}
            <Show when={(decksByFolder().get(undefined) ?? []).length > 0}>
              <div class="space-y-1">
                <For each={decksByFolder().get(undefined)}>
                  {(deck) => (
                    <DeckItem
                      deck={deck}
                      to={`/vocab/${buildDeckUrlPath(deck, folders())}`}
                      isSelected={selectedDeckId() === deck.id}
                    />
                  )}
                </For>
              </div>
            </Show>

            {/* Folders with their decks */}
            <For each={folders()}>
              {(folder) => {
                const folderDecks = () => decksByFolder().get(folder.id) ?? []
                return (
                  <Show when={folderDecks().length > 0}>
                    <div>
                      <div class="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1 px-1">
                        {folder.folderName}
                      </div>
                      <div class="space-y-1">
                        <For each={folderDecks()}>
                          {(deck) => (
                            <DeckItem
                              deck={deck}
                              to={`/vocab/${buildDeckUrlPath(deck, folders())}`}
                              isSelected={selectedDeckId() === deck.id}
                            />
                          )}
                        </For>
                      </div>
                    </div>
                  </Show>
                )
              }}
            </For>
          </div>
        </Show>
      </Show>
    </div>
  )
}
