import { Show, For } from 'solid-js'
import { Download } from 'lucide-solid'
import { useConvexQuery } from '@/lib/convex-query'
import { api } from 'convex/_generated/api'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { convertFuriganaToRubyHtml } from '@/data/utils/text/furigana'
import type { Id } from 'convex/_generated/dataModel'

interface DeckPreviewModalProps {
  deckId: Id<'userDecks'> | null
  onClose: () => void
  onImport: () => void
  isImporting: boolean
}

export function DeckPreviewModal(props: DeckPreviewModalProps) {
  const isOpen = () => !!props.deckId

  const vocabQuery = useConvexQuery(
    api.api.decks.getDeckVocabItems,
    () => ({ deckId: props.deckId! }),
    () => ({ enabled: isOpen() })
  )

  const vocab = () => vocabQuery.data() ?? []

  return (
    <Dialog open={isOpen()} onOpenChange={(open) => !open && props.onClose()}>
      <DialogContent class="border-card-foreground max-h-[80vh] sm:max-w-2xl [&]:animate-none [&]:duration-0">
        <DialogHeader>
          <DialogTitle>Deck Preview</DialogTitle>
        </DialogHeader>

        <div class="max-h-[50vh] overflow-y-auto">
          {/* Loading */}
          <Show when={vocabQuery.isLoading()}>
            <div class="flex justify-center py-8">
              <div class="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
            </div>
          </Show>

          {/* Empty */}
          <Show when={!vocabQuery.isLoading() && vocab().length === 0}>
            <div class="py-8 text-center">
              <p class="text-muted-foreground">This deck has no vocabulary items.</p>
            </div>
          </Show>

          {/* Vocab List */}
          <Show when={vocab().length > 0}>
            <div class="space-y-2">
              <p class="text-muted-foreground mb-4 text-sm">
                {vocab().length} vocabulary item{vocab().length !== 1 ? 's' : ''}
              </p>
              <For each={vocab()}>
                {(item, index) => (
                  <div
                    class={`rounded-lg border border-card-foreground/50 p-3 ${(index() + 1) % 2 === 0 ? 'bg-card/60' : 'bg-card/50'
                      }`}
                  >
                    <div class="flex items-baseline gap-3">
                      <span class="text-muted-foreground text-sm">
                        {index() + 1}.
                      </span>
                      <span
                        class="font-japanese text-lg font-bold"
                        innerHTML={convertFuriganaToRubyHtml(
                          item.furigana || item.word
                        )}
                      />
                      <span class="text-muted-foreground text-sm italic">
                        {item.english.join(', ')}
                      </span>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>

        <DialogFooter class="gap-3">
          <Button
            variant="outline"
            onClick={props.onClose}
            class="flex-1 hover:cursor-pointer"
          >
            Close
          </Button>
          <Button
            onClick={props.onImport}
            disabled={props.isImporting || vocab().length === 0}
            class="flex-1 hover:cursor-pointer"
          >
            <Show when={props.isImporting}>
              <div class="mr-2 h-4 w-4 animate-spin rounded-full border border-current border-t-transparent" />
            </Show>
            <Show when={!props.isImporting}>
              <Download class="mr-2 h-4 w-4" />
            </Show>
            Import Deck
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
