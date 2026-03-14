import { For, createSignal, createEffect, on } from "solid-js"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { usePreferences } from "@/lib/preferences"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import {
  getFolderChildren,
  getDecksInFolder,
} from "@/features/vocab-page/utils/hierarchy"
import { filterDecks } from "../utils"
import { DeckVocabCollapsible } from "./DeckVocabCollapsible"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export function VocabListChapterAccordion(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
  matchingDeckIds: Set<string> | null
}) {
  const { preferences } = usePreferences()
  const chapters = () => getFolderChildren(props.folders, props.folderId)

  const activeChapterFolderId = () => {
    if (props.folderId !== preferences().activeLearningPath) return null
    const slug = preferences().activeChapter
    return slug ? `${props.folderId}/${slug}` : null
  }

  const getInitialExpanded = () => {
    const active = activeChapterFolderId()
    return active ? [active] : []
  }

  const [expandedIds, setExpandedIds] = createSignal<string[]>(getInitialExpanded())
  createEffect(
    on(
      () => props.folderId,
      () => setExpandedIds(getInitialExpanded()),
    ),
  )

  const visibleChapters = () => {
    const allChapters = chapters()
    if (!props.matchingDeckIds) return allChapters
    return allChapters.filter((chapter) => {
      const decks = getDecksInFolder(props.decks, chapter.id)
      return decks.some((d) => props.matchingDeckIds!.has(d.id))
    })
  }

  return (
    <div>
      <Accordion multiple value={expandedIds()} onChange={setExpandedIds}>
        <For each={visibleChapters()}>
          {(chapter) => {
            const allDecks = () => getDecksInFolder(props.decks, chapter.id)
            const decks = () => filterDecks(allDecks(), props.matchingDeckIds)
            const isActive = () => chapter.id === activeChapterFolderId()
            const slug = chapter.id.split("/").pop()!
            const displayNum =
              getChapterDisplayNumber(slug) ||
              chapter.folderName.match(/\d+/)?.[0] ||
              ""

            return (
              <AccordionItem value={chapter.id} class="border-0">
                <AccordionTrigger class="py-3 hover:no-underline">
                  <div class="flex items-center gap-2">
                    <div
                      class={`flex size-6 items-center justify-center rounded-md text-xs font-bold ${
                        isActive()
                          ? "bg-gradient-to-br from-sky-500/30 to-sky-400/30 text-sky-400"
                          : "bg-gradient-to-br from-white/10 to-white/5 text-white/50"
                      }`}
                    >
                      {displayNum}
                    </div>
                    <span
                      class={`text-sm font-semibold ${
                        isActive() ? "text-sky-400" : "text-white/70"
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
                  <div class="space-y-0.5">
                    <For each={decks()}>
                      {(deck) => <DeckVocabCollapsible deck={deck} />}
                    </For>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          }}
        </For>
      </Accordion>
    </div>
  )
}
