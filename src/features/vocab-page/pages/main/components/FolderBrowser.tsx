import { For, Show, Suspense, createSignal, createMemo } from "solid-js"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSection,
} from "@/components/ui/select"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { Search } from "lucide-solid"
import { usePreferences } from "@/lib/preferences"
import { DeckCard } from "../../../shared/components/DeckCard"
import { getRootFolders, getRootOrphanDecks } from "../../../utils/hierarchy"
import { ChapterAccordion } from "./folder-browser/components/ChapterAccordion"
import { UserFolderContent } from "./folder-browser/components/UserFolderContent"
import { SearchIndexSubscription } from "./folder-browser/components/SearchIndexSubscription"
import {
  filterDecks,
  type FolderBrowserProps,
  type MenuItem,
  type MenuGroup,
} from "./folder-browser/utils"

export function FolderBrowser(props: FolderBrowserProps) {
  const { preferences } = usePreferences()

  const rootFolders = () => getRootFolders(props.folders())
  const orphanDecks = () => getRootOrphanDecks(props.decks())

  // Search state
  const [search, setSearch] = createSignal("")
  const [searchFocused, setSearchFocused] = createSignal(false)
  const [searchIndex, setSearchIndex] =
    createSignal<{ deckId: string; terms: string[] }[]>()

  const matchingDeckIds = createMemo((): Set<string> | null => {
    const q = search().trim().toLowerCase()
    if (!q) return null

    const matches = new Set<string>()

    for (const deck of props.decks()) {
      if (
        deck.deckName.toLowerCase().includes(q) ||
        deck.deckDescription?.toLowerCase().includes(q)
      ) {
        matches.add(deck.id)
      }
    }

    const index = searchIndex()
    if (index) {
      for (const entry of index) {
        if (entry.terms.some((term) => term.includes(q))) {
          matches.add(entry.deckId)
        }
      }
    }

    return matches
  })

  const menuGroups = createMemo((): MenuGroup[] => {
    const groups: MenuGroup[] = []
    const roots = rootFolders()

    const pathItems: MenuItem[] = []
    for (const f of roots) {
      if (f.source === "built-in") {
        pathItems.push({ id: f.id, label: f.folderName, type: "built-in" })
      } else if (f.source === "user" && f.learningPathId) {
        pathItems.push({
          id: f.id,
          label: f.folderName,
          type: "learning-path",
        })
      }
    }
    if (pathItems.length > 0) {
      groups.push({ label: "Learning Paths", options: pathItems })
    }

    const folderItems: MenuItem[] = []
    for (const f of roots) {
      if (f.source === "user" && !f.learningPathId) {
        folderItems.push({ id: f.id, label: f.folderName, type: "user" })
      }
    }
    if (orphanDecks().length > 0) {
      folderItems.push({ id: "unsorted", label: "Unsorted", type: "unsorted" })
    }
    if (folderItems.length > 0) {
      groups.push({ label: "My Folders", options: folderItems })
    }

    return groups
  })

  const allItems = createMemo(() => menuGroups().flatMap((g) => g.options))

  const defaultItem = () => {
    const items = allItems()
    const active = preferences().activeLearningPath
    return items.find((m) => m.id === active) ?? items[0] ?? null
  }

  const [selected, setSelected] = createSignal<MenuItem | null>(defaultItem())

  const selectedType = () => selected()?.type
  const selectedId = () => selected()?.id
  const isPathView = () =>
    selectedType() === "built-in" || selectedType() === "learning-path"

  return (
    <Suspense>
      <div class={props.class ?? ""}>
        <div class="mb-6 flex flex-wrap items-center justify-end gap-3 sm:justify-between">
          <h2 class="text-foreground hidden text-sm font-semibold sm:block">
            All Decks & Folders
          </h2>

          <div class="flex items-center gap-2">
            <Select<MenuItem, MenuGroup>
              options={menuGroups()}
              optionValue="id"
              optionTextValue="label"
              optionGroupChildren="options"
              value={selected()}
              onChange={(value) => {
                if (value) setSelected(value)
              }}
              itemComponent={(itemProps) => (
                <SelectItem item={itemProps.item}>
                  {itemProps.item.rawValue.label}
                </SelectItem>
              )}
              sectionComponent={(sectionProps) => (
                <SelectSection>
                  <div class="px-2 py-1.5 text-xs text-white/40">
                    {sectionProps.section.rawValue.label}
                  </div>
                </SelectSection>
              )}
            >
              <SelectTrigger class="w-auto min-w-48 border-0 bg-white/[0.04] font-excalifont text-white/70 hover:bg-white/[0.06]">
                <SelectValue<MenuItem>>
                  {(state) => state.selectedOption()?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent
                class="border border-dynamic-accent/20 backdrop-blur-2xl"
                style={{
                  "background-color":
                    "color-mix(in srgb, var(--dynamic-accent) 15%, rgb(10 10 10 / 0.7))",
                }}
              />
            </Select>

            <TextField class="w-48 sm:w-56">
              <div class="relative">
                <Search class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2" />
                <TextFieldInput
                  placeholder="Search decks..."
                  value={search()}
                  onInput={(e) => setSearch(e.currentTarget.value)}
                  onFocus={() => setSearchFocused(true)}
                  class="bg-card/40 border-card-foreground/20 pl-9 backdrop-blur-sm"
                />
              </div>
            </TextField>
          </div>
        </div>

        <Show when={isPathView() && selectedId()}>
          <ChapterAccordion
            folderId={selectedId()!}
            folders={props.folders()}
            decks={props.decks()}
            matchingDeckIds={matchingDeckIds()}
          />
        </Show>

        <Show when={selectedType() === "user" && selectedId()}>
          <UserFolderContent
            folderId={selectedId()!}
            folders={props.folders()}
            decks={props.decks()}
            matchingDeckIds={matchingDeckIds()}
          />
        </Show>

        <Show when={selectedType() === "unsorted"}>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <For each={filterDecks(orphanDecks(), matchingDeckIds())}>
              {(deck) => <DeckCard deck={deck} />}
            </For>
          </div>
        </Show>

        <Show
          when={matchingDeckIds() !== null && matchingDeckIds()!.size === 0}
        >
          <div class="py-12 text-center">
            <Search class="mx-auto mb-3 size-10 text-muted-foreground opacity-50" />
            <p class="text-muted-foreground">No results for "{search()}"</p>
          </div>
        </Show>

        <Suspense>
          <Show when={searchFocused() && selected()}>
            <SearchIndexSubscription
              scopeId={selected()!.id === "unsorted" ? "" : selected()!.id}
              onData={setSearchIndex}
            />
          </Show>
        </Suspense>
      </div>
    </Suspense>
  )
}
