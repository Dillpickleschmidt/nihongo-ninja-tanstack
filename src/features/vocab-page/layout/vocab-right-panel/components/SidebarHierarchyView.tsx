import { For, Show, createMemo } from 'solid-js'
import { Book, Folder } from 'lucide-solid'
import { useVocab, type Folder as FolderType, type Deck } from '../../../context/VocabContext'
import { DeckCard } from '../../../shared/components/DeckCard'
import { CollapsibleSection } from './CollapsibleSection'
import { CreateNewDropdown } from './CreateNewDropdown'
import {
  getRootFolders,
  getRootDecks,
  getFolderChildren,
  getDecksInFolder,
} from '../../../utils/hierarchy'

interface SidebarHierarchyViewProps {
  selectedDeckId: string | null
}

export function SidebarHierarchyView(props: SidebarHierarchyViewProps) {
  const ctx = useVocab()

  // Separate built-in vs user folders/decks
  const builtInFolders = createMemo(() =>
    ctx.folders().filter((f) => f.source === 'built-in')
  )
  const builtInDecks = createMemo(() =>
    ctx.decks().filter((d) => d.source === 'built-in')
  )
  const userFolders = createMemo(() =>
    ctx.folders().filter((f) => f.source === 'user')
  )
  const userDecks = createMemo(() =>
    ctx.decks().filter((d) => d.source === 'user')
  )

  // Root level items for each section
  const builtInRootFolders = createMemo(() => getRootFolders(builtInFolders()))
  const builtInRootDecks = createMemo(() => getRootDecks(builtInDecks()))
  const userRootFolders = createMemo(() => getRootFolders(userFolders()))
  const userRootDecks = createMemo(() => getRootDecks(userDecks()))

  return (
    <div class="flex h-full flex-col">
      {/* Header */}
      <div class="mb-4 space-y-1">
        <h3 class="text-base font-semibold">Your Decks</h3>
        <p class="text-muted-foreground text-xs">
          Organize and manage your vocabulary decks
        </p>
      </div>

      {/* Scrollable content */}
      <div class="flex-1 space-y-4 overflow-y-auto">
        {/* Learning Paths section */}
        <Show when={builtInRootFolders().length > 0 || builtInRootDecks().length > 0}>
          <div class="space-y-1">
            <h4 class="text-muted-foreground px-2 text-xs font-medium uppercase tracking-wide">
              Learning Paths
            </h4>
            <div class="space-y-1">
              <For each={builtInRootFolders()}>
                {(folder) => (
                  <FolderNode
                    folder={folder}
                    allFolders={builtInFolders()}
                    allDecks={builtInDecks()}
                    selectedDeckId={props.selectedDeckId}
                    depth={0}
                  />
                )}
              </For>
              <For each={builtInRootDecks()}>
                {(deck) => (
                  <DeckCard
                    deck={deck}
                    isSelected={props.selectedDeckId === deck.id}
                    class="mx-2"
                  />
                )}
              </For>
            </div>
          </div>
        </Show>

        {/* User Decks section */}
        <div class="space-y-1">
          <h4 class="text-muted-foreground px-2 text-xs font-medium uppercase tracking-wide">
            My Decks
          </h4>
          <Show
            when={userRootFolders().length > 0 || userRootDecks().length > 0}
            fallback={
              <p class="text-muted-foreground px-2 py-4 text-center text-xs">
                No decks yet. Create one to get started!
              </p>
            }
          >
            <div class="space-y-1">
              <For each={userRootFolders()}>
                {(folder) => (
                  <FolderNode
                    folder={folder}
                    allFolders={userFolders()}
                    allDecks={userDecks()}
                    selectedDeckId={props.selectedDeckId}
                    depth={0}
                  />
                )}
              </For>
              <For each={userRootDecks()}>
                {(deck) => (
                  <DeckCard
                    deck={deck}
                    isSelected={props.selectedDeckId === deck.id}
                    class="mx-2"
                  />
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>

      {/* Create New button */}
      <div class="pt-4">
        <CreateNewDropdown />
      </div>
    </div>
  )
}

interface FolderNodeProps {
  folder: FolderType
  allFolders: FolderType[]
  allDecks: Deck[]
  selectedDeckId: string | null
  depth: number
}

function FolderNode(props: FolderNodeProps) {
  const ctx = useVocab()

  const childFolders = () => getFolderChildren(props.allFolders, props.folder.id)
  const childDecks = () => getDecksInFolder(props.allDecks, props.folder.id)

  const isExpanded = () => ctx.expandedSections().has(props.folder.id)
  const handleToggle = () => ctx.toggleSection(props.folder.id)

  const Icon = props.folder.source === 'built-in' ? Book : Folder

  return (
    <CollapsibleSection
      id={props.folder.id}
      title={props.folder.folderName}
      icon={Icon}
      isExpanded={isExpanded()}
      onToggle={handleToggle}
      depth={props.depth}
    >
      <div class="space-y-1">
        <For each={childFolders()}>
          {(childFolder) => (
            <FolderNode
              folder={childFolder}
              allFolders={props.allFolders}
              allDecks={props.allDecks}
              selectedDeckId={props.selectedDeckId}
              depth={props.depth + 1}
            />
          )}
        </For>
        <For each={childDecks()}>
          {(deck) => (
            <DeckCard
              deck={deck}
              isSelected={props.selectedDeckId === deck.id}
            />
          )}
        </For>
      </div>
    </CollapsibleSection>
  )
}
