import { Show } from 'solid-js'
import { FolderBrowserGrid } from './FolderBrowserGrid'
import { useVocab } from '../../../context/VocabContext'

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
  const ctx = useVocab()

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
        />
      </Show>
    </div>
  )
}
