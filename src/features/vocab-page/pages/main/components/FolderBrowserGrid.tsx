import { For, Show, createSignal, createMemo, createEffect, on } from "solid-js"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSection,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { TimelineList, TimelineItem } from "@/components/TimelineList"
import { usePreferences } from "@/lib/preferences"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { FolderCard } from "../../../shared/components/FolderCard"
import { DeckCard } from "../../../shared/components/DeckCard"
import {
  getRootFolders,
  getRootOrphanDecks,
  getFolderChildren,
  getDecksInFolder,
  getFolderLevelItems,
} from "../../../utils/hierarchy"
import { buildDeckUrlPath } from "../../../utils/navigation"
import { useVocab } from "../../../context/VocabContext"
import type { Folder, Deck } from "../../../context/VocabContext"

interface FolderBrowserGridProps {
  folders: Folder[]
  decks: Deck[]
  class?: string
}

type MenuItem = {
  id: string
  label: string
  type: "built-in" | "learning-path" | "user" | "unsorted"
}

type MenuGroup = {
  label: string
  options: MenuItem[]
}

export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const { preferences } = usePreferences()

  const rootFolders = () => getRootFolders(props.folders)
  const orphanDecks = () => getRootOrphanDecks(props.decks)

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
    <Show when={allItems().length > 0}>
      <div class={props.class}>
        <div class="mb-6 flex items-center justify-between">
          <h2 class="text-foreground text-sm font-semibold">
            All Decks & Folders
          </h2>

          <Select<MenuItem, MenuGroup>
            options={menuGroups()}
            optionValue="id"
            optionTextValue="label"
            optionGroupChildren="options"
            value={selected()}
            onChange={(value) => { if (value) setSelected(value) }}
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
            <SelectTrigger class="w-auto min-w-48 border-0 bg-white/[0.04] text-white/70 hover:bg-white/[0.06]">
              <SelectValue<MenuItem>>
                {(state) => state.selectedOption()?.label}
              </SelectValue>
            </SelectTrigger>
            <SelectContent
              class="border border-(--accent)/20 backdrop-blur-2xl"
              style={{
                "background-color":
                  "color-mix(in srgb, var(--accent) 15%, rgb(10 10 10 / 0.7))",
              }}
            />
          </Select>
        </div>

        <Show when={isPathView() && selectedId()}>
          <PathAccordion
            folderId={selectedId()!}
            folders={props.folders}
            decks={props.decks}
          />
        </Show>

        <Show when={selectedType() === "user" && selectedId()}>
          <UserFolderContent
            folderId={selectedId()!}
            folders={props.folders}
            decks={props.decks}
          />
        </Show>

        <Show when={selectedType() === "unsorted"}>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <For each={orphanDecks()}>{(deck) => <DeckCard deck={deck} />}</For>
          </div>
        </Show>
      </div>
    </Show>
  )
}

// ===== Learning path: chapter accordions =====

function PathAccordion(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
}) {
  const { preferences } = usePreferences()
  const chapters = () => getFolderChildren(props.folders, props.folderId)
  const chapterIds = () => chapters().map((c) => c.id)

  const [expandedIds, setExpandedIds] = createSignal<string[]>(chapterIds())
  createEffect(on(() => props.folderId, () => setExpandedIds(chapterIds())))

  const activeChapterFolderId = () => {
    if (props.folderId !== preferences().activeLearningPath) return null
    const slug = preferences().activeChapter
    return slug ? `${props.folderId}/${slug}` : null
  }

  return (
    <div class="mx-auto max-w-5xl">
      <Accordion multiple value={expandedIds()} onChange={setExpandedIds}>
        <For each={chapters()}>
          {(chapter) => {
            const decks = () => getDecksInFolder(props.decks, chapter.id)
            const isActive = () => chapter.id === activeChapterFolderId()
            const slug = chapter.id.split("/").pop()!
            const displayNum =
              getChapterDisplayNumber(slug) ||
              chapter.folderName.match(/\d+/)?.[0] ||
              ""

            return (
              <AccordionItem value={chapter.id} class="border-0">
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center gap-2">
                    <div
                      class={`flex size-6 items-center justify-center rounded-md text-xs font-bold ${
                        isActive()
                          ? "bg-gradient-to-br from-orange-500/30 to-amber-500/30 text-orange-400"
                          : "bg-gradient-to-br from-white/10 to-white/5 text-white/50"
                      }`}
                    >
                      {displayNum}
                    </div>
                    <span
                      class={`text-sm font-semibold ${
                        isActive()
                          ? "text-orange-400"
                          : "text-white/70"
                      }`}
                    >
                      {chapter.folderName}
                    </span>
                    <span class="text-muted-foreground/60 text-xs">
                      · {decks().length}{" "}
                      {decks().length === 1 ? "deck" : "decks"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <DeckTimelineList decks={decks()} />
                </AccordionContent>
              </AccordionItem>
            )
          }}
        </For>
      </Accordion>
    </div>
  )
}

function DeckTimelineList(props: { decks: Deck[] }) {
  const ctx = useVocab()

  return (
    <TimelineList each={props.decks}>
      {(deck) => (
        <TimelineItem
          title={deck.deckName}
          linkTo={`/vocab/${buildDeckUrlPath(deck, ctx.folders())}`}
        />
      )}
    </TimelineList>
  )
}

// ===== User folder: card grid =====

function UserFolderContent(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
}) {
  const items = () =>
    getFolderLevelItems(props.folders, props.decks, props.folderId)

  return (
    <Show
      when={items().length > 0}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">This folder is empty</p>
        </div>
      }
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={items()}>
          {(node) => {
            switch (node.type) {
              case "folder":
                return <FolderCard folder={node.data} />
              case "deck":
                return <DeckCard deck={node.data} />
              default:
                return null
            }
          }}
        </For>
      </div>
    </Show>
  )
}
