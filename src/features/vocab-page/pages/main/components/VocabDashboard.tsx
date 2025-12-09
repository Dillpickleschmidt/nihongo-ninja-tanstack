import { Show } from 'solid-js'
import { useNavigate } from '@tanstack/solid-router'
import { FolderBrowserGrid } from './FolderBrowserGrid'
import { FolderEditModal } from '../../../shared/components/FolderEditModal'
import { DeckCopyModal } from '../../../shared/components/DeckCopyModal'
import { useVocab, type Folder, type Deck } from '../../../context/VocabContext'
import { buildFolderUrlPath } from '../../../utils/folder-utils'

/**
 * Main vocab dashboard layout component
 * Shows:
 * - Folder/deck browser grid
 * - Modals for editing/copying
 *
 * Note: RecentlyStudiedSection and ComingUpSection are deferred features
 * requiring practice session infrastructure and FSRS scheduling
 */
export function VocabDashboard() {
  const navigate = useNavigate()
  const ctx = useVocab()

  const handleFolderClick = (folder: Folder) => {
    const path = buildFolderUrlPath(folder.id, ctx.folders())
    navigate({ to: `/vocab/${path}` })
  }

  const handleDeckClick = (deck: Deck) => {
    ctx.setSelectedDeckId(deck.id)
    // TODO: Navigate to deck view or show deck details panel
  }

  return (
    <div class="space-y-8">
      {/* Loading state */}
      <Show when={ctx.isLoading()}>
        <div class="flex items-center justify-center py-12">
          <div class="text-muted-foreground text-sm">Loading...</div>
        </div>
      </Show>

      {/* Main content */}
      <Show when={!ctx.isLoading()}>
        <FolderBrowserGrid
          folders={ctx.folders()}
          decks={ctx.decks()}
          onFolderClick={handleFolderClick}
          onDeckClick={handleDeckClick}
        />
      </Show>

      {/* Modals */}
      <FolderEditModal />
      <DeckCopyModal />
    </div>
  )
}
