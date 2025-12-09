import {
  Play,
  Edit,
  Edit3,
  FileText,
  FolderPlus,
  Copy,
  Trash2,
  Folder,
  Home,
} from 'lucide-solid'
import { Button } from '@/components/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { cn } from '@/utils'
import { createSignal, Show } from 'solid-js'
import { TreeView } from '@/components/ui/tree-view'
import { useFolderTree } from '../../hooks/useFolderTree'
import { getFolderPath } from '../../utils/folder-utils'
import { useVocab, type Deck } from '../../context/VocabContext'
import { useNavigate } from '@tanstack/solid-router'

interface DeckCardProps {
  deck: Deck
  isSelected?: boolean
  onSelect?: (deck: Deck) => void
  class?: string
}

export function DeckCard(props: DeckCardProps) {
  const navigate = useNavigate()
  const ctx = useVocab()
  const [isHovered, setIsHovered] = createSignal(false)
  const [expandedFolderIds, setExpandedFolderIds] = createSignal<Set<string>>(
    new Set()
  )

  const { folderTreeNodes } = useFolderTree({
    folders: ctx.folders(),
    decks: [],
    item: props.deck,
  })

  const getCurrentFolderPath = () => {
    if (!props.deck.folderId) return []
    return getFolderPath(props.deck.folderId, ctx.folders())
  }

  const handleToggleFolder = (id: string) => {
    setExpandedFolderIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleMoveToFolder = async (folderId: string) => {
    const newFolderId = folderId === 'root' ? null : folderId
    await ctx.updateDeck(props.deck.id, { folderId: newFolderId })
  }

  const initializeExpandedState = () => {
    const path = getCurrentFolderPath()
    setExpandedFolderIds(new Set(['root', ...path.map((f) => f.id)]))
  }

  const handleRename = () => {
    const newName = window.prompt('Enter new deck name:', props.deck.deckName)
    if (newName && newName.trim() && newName.trim() !== props.deck.deckName) {
      ctx.updateDeck(props.deck.id, { deckName: newName.trim() })
    }
  }

  const handleDelete = () => {
    const message =
      props.deck.source === 'built-in'
        ? `You're about to remove "${props.deck.deckName}". You can always import it again. ( ˆ𐃷ˆ) .ᐟ.ᐟ`
        : `Are you sure you want to delete "${props.deck.deckName}"? This action cannot be undone.`

    if (window.confirm(message)) {
      ctx.deleteDeck(props.deck.id)
    }
  }

  const handleEditContents = () => {
    // Navigate to deck edit page
    navigate({ to: `/vocab/deck/${props.deck.id}/edit` })
  }

  const handlePracticeClick = (e: MouseEvent) => {
    e.stopPropagation()
    // TODO: Implement practice navigation when practice sessions are ready
    alert('Practice functionality coming soon!')
  }

  const canEdit = () => props.deck.source === 'user'

  return (
    <ContextMenu>
      <ContextMenuTrigger
        class={cn(
          'bg-card/60 hover:bg-card/70 border-card-foreground/70 relative cursor-pointer space-y-3 rounded-lg border p-4 shadow-sm backdrop-blur-sm hover:shadow-md',
          props.isSelected && 'outline-card-foreground outline-2',
          props.class
        )}
        onClick={() => props.onSelect?.(props.deck)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Edit button (only for user decks) */}
        <Show when={canEdit()}>
          <div
            class={cn(
              'absolute top-2 right-2 transition-opacity duration-200',
              isHovered() ? 'opacity-100' : 'opacity-0'
            )}
            title="Edit deck"
          >
            <Button
              size="sm"
              variant="ghost"
              class="h-6 w-6 p-0 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                handleEditContents()
              }}
            >
              <Edit class="h-3 w-3" />
            </Button>
          </div>
        </Show>

        {/* Deck info */}
        <div class="space-y-1">
          <h4
            class={cn(
              'pr-8 text-sm leading-tight font-medium',
              props.deck.source === 'built-in' &&
                'decoration-muted-foreground/70 underline underline-offset-4'
            )}
            title={
              props.deck.source === 'built-in' ? 'Built-in deck' : undefined
            }
          >
            {props.deck.deckName}
          </h4>
          <Show when={props.deck.source === 'built-in'}>
            <p class="text-muted-foreground text-xs">Built-in</p>
          </Show>
        </div>

        {/* Practice button */}
        <Button
          variant="default"
          size="sm"
          onClick={handlePracticeClick}
          class="bg-card hover:bg-card-foreground/10 dark:bg-card-foreground text-primary outline-card-foreground/70 relative w-full overflow-hidden text-xs outline backdrop-blur-xs transition-colors dark:outline-none hover:dark:bg-neutral-600"
        >
          <div class="flex items-center justify-center">
            <Play class="mr-1 max-h-3 max-w-3" />
            Practice
          </div>
        </Button>
      </ContextMenuTrigger>

      <ContextMenuContent class="bg-card border-card-foreground outline-none">
        {/* Edit contents (user decks only) */}
        <div
          title={
            !canEdit()
              ? 'Built-in deck editing is disabled. Select make a copy instead.'
              : undefined
          }
        >
          <ContextMenuItem
            disabled={!canEdit()}
            class="disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => canEdit() && handleEditContents()}
          >
            <Edit3 class="mr-2 h-3 w-3" />
            Edit contents
          </ContextMenuItem>
        </div>

        <ContextMenuSeparator class="border-card-foreground" />

        {/* Rename (user decks only) */}
        <ContextMenuItem
          disabled={!canEdit()}
          class="disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => canEdit() && handleRename()}
        >
          <FileText class="mr-2 h-3 w-3" />
          Rename
        </ContextMenuItem>

        {/* Move (user decks only) */}
        <Show when={canEdit()}>
          <ContextMenuSub
            onOpenChange={(open: boolean) => {
              if (open) {
                initializeExpandedState()
              }
            }}
          >
            <ContextMenuSubTrigger>
              <FolderPlus class="mr-2 h-3 w-3" />
              Move
            </ContextMenuSubTrigger>
            <ContextMenuPortal>
              <ContextMenuSubContent class="bg-card border-card-foreground max-h-80 w-64 overflow-y-auto p-2">
                <TreeView
                  nodes={[
                    {
                      id: 'root',
                      label: 'Root',
                      children: folderTreeNodes(),
                      data: null,
                    },
                  ]}
                  selectedId={props.deck.folderId || 'root'}
                  onSelect={(id) => handleMoveToFolder(id)}
                  expandedIds={expandedFolderIds()}
                  onToggle={handleToggleFolder}
                  renderIcon={(node) =>
                    node.id === 'root' ? (
                      <Home class="mr-2 h-4 w-4 flex-shrink-0" />
                    ) : (
                      <Folder class="mr-2 h-4 w-4 flex-shrink-0" />
                    )
                  }
                  renderLabel={(node, isSelected) => (
                    <span
                      class={`flex-1 truncate text-xs ${isSelected ? 'font-medium' : ''}`}
                    >
                      {node.label}
                    </span>
                  )}
                />
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </ContextMenuSub>
        </Show>

        {/* Copy (always available) */}
        <ContextMenuItem onClick={() => ctx.setCopyingDeck(props.deck)}>
          <Copy class="mr-2 h-3 w-3" />
          Make a copy
        </ContextMenuItem>

        <ContextMenuSeparator class="border-card-foreground" />

        {/* Delete */}
        <ContextMenuItem
          onClick={handleDelete}
          class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
        >
          <Trash2 class="mr-2 h-3 w-3" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
